<script>
	import { goto } from '$app/navigation';
	let item = localStorage.getItem('identity');
	let identity;
	if (item) identity = JSON.parse(atob(item));
	else goto('/login');

	let allowed = false;
	if (identity.role !== 'admin') allowed = false;
	else allowed = true;
	let name = identity.identity;

	let lang = localStorage.getItem('lang') || 'en';
</script>

<div class="min-h-screen bg-[#1D1D1D]">
	<div
		class="mx-auto flex w-[450px] flex-col items-center justify-center bg-[#282828] pb-10 pl-6 pr-6 text-[#E5E5E5]"
	>
		<img src="/overheid.png" alt="Overheid" class="h-20" />

		{#if !allowed}
			<h1 class="mb-4 mt-4 text-xl font-bold">
				{#if lang === 'en'}
					Access denied
				{:else}
					Geen toegang
				{/if}
			</h1>
			<p class="mb-4 text-center text-xl">
				{#if lang === 'en'}
					This page is only available for administrators
				{:else}
					Deze pagina is alleen beschikbaar voor administrators
				{/if}
			</p>
			<button
				class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					goto('/dashboard');
				}}
			>
				{#if lang === 'en'}
					Go back
				{:else}
					Terug
				{/if}
			</button>
		{:else}
			<h1 class="mb-4 mt-4 text-xl font-bold">
				{#if lang === 'en'}
					Welcome back, {name}!
				{:else}
					Welkom terug, {name}!
				{/if}
			</h1>
			<p class="mb-4 text-xl font-bold text-red-500">
				{#if lang === 'en'}
					be careful that no one is watching
				{:else}
					zorg ervoor dat niemand meekijkt
				{/if}
			</p>

			<button
				class="rounded-mdp-2 mt-4 w-full bg-red-500 p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					//add emergency override to localstorage
					localStorage.setItem('emergency', 'true');
					if (lang === 'en') alert('Emergency override is enabled');
					else alert('Emergency override is ingeschakeld');
				}}
			>
				EMERGENCY OVERRIDE
			</button>

			<button
				class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					goto('/dashboard');
				}}
			>
				{#if lang === 'en'}
					Go back
				{:else}
					Terug
				{/if}
			</button>

			<button
				class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					localStorage.removeItem('identity');
					goto('/login');
				}}
			>
				{#if lang === 'en'}
					Log out
				{:else}
					Uitloggen
				{/if}
			</button>
		{/if}
	</div>
</div>
