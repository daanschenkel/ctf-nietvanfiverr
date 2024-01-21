<script>
	import { goto } from '$app/navigation';
	let item = localStorage.getItem('identity');
	let identity;
	if (item) identity = JSON.parse(atob(item));
	else goto('/login');
	let name = identity.identity;

	let lang = localStorage.getItem('lang') || 'en';
</script>

<div class="min-h-screen bg-[#1D1D1D]">
	<div
		class="mx-auto flex w-[450px] flex-col items-center justify-center bg-[#282828] pb-10 pl-6 pr-6 text-[#E5E5E5]"
	>
		<img src="/overheid.png" alt="Overheid" class="h-20" />

		<h1 class="mb-4 mt-4 text-xl font-bold">
			{#if lang === 'en'}
				Welcome back, {@html name}!
			{:else}
				Welkom terug, {@html name}!
			{/if}
		</h1>

		<p class="mb-4 text-xl font-bold">
			{#if lang === 'en'}
				Edit your name
			{:else}
				Naam aanpassen
			{/if}
		</p>
		<input
			type="text"
			id="username"
			class="rounded-md border-[1px] bg-[#1D1D1D] p-2 text-[#E5E5E5]"
			bind:value={name}
			on:input={(e) => {
				const identity = {
					...JSON.parse(atob(localStorage.getItem('identity'))),
					identity: e.target.value
				};
				const encoded = btoa(JSON.stringify(identity));
				localStorage.setItem('identity', encoded);
			}}
		/>

		{#if localStorage.getItem('emergency')}
			<button
				class="rounded-mdp-2 mt-4 w-full bg-red-500 p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
				on:click={() => {
					goto('/kaboem');
				}}
			>
				{#if lang === 'en'}
					Take over the world //TODO: this should be removed in production!
				{:else}
					neem de wereld over //TODO: dit moet weg in production!
				{/if}
			</button>
		{/if}

		<button
			class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]
        "
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
	</div>
</div>
