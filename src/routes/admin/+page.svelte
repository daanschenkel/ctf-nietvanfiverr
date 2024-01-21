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
</script>

<div class="min-h-screen bg-[#1D1D1D]">
	<div
		class="mx-auto flex w-[450px] flex-col items-center justify-center bg-[#282828] pb-10 pl-6 pr-6 text-[#E5E5E5]"
	>
		<img src="/overheid.png" alt="Overheid" class="h-20" />

		{#if !allowed}
			<h1 class="mb-4 mt-4 text-xl font-bold">Geen toegang</h1>
			<p class="mb-4 text-center text-xl">Deze pagina is alleen beschikbaar voor administrators</p>
			<button
				class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					goto('/dashboard');
				}}>Terug</button
			>
		{:else}
			<h1 class="mb-4 mt-4 text-xl font-bold">
				Welkom terug, {name}!
			</h1>
			<p class="mb-4 text-xl font-bold text-red-500">zorg ervoor dat niemand meekijkt</p>

			<button
				class="rounded-mdp-2 mt-4 w-full bg-red-500 p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					//add emergency override to localstorage
					localStorage.setItem('emergency', 'true');
					alert('Emergency override is ingeschakeld');
				}}
			>
				EMERGENCY OVERRIDE
			</button>

			<button
				class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					localStorage.removeItem('identity');
					goto('/login');
				}}>Uitloggen</button
			>
		{/if}
	</div>
</div>
