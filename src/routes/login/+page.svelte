<script>
	import { goto } from '$app/navigation';
	let username = 'user';
	let password = 'password';
	let fail = false;
	let item = localStorage.getItem('identity');
	if (item) goto('/dashboard');
	let lang = localStorage.getItem('lang') || 'en';
</script>

<div class="min-h-screen bg-[#1D1D1D]">
	<div
		class="mx-auto flex w-[450px] flex-col items-center justify-center bg-[#282828] pb-10 pl-6 pr-6 text-[#E5E5E5]"
	>
		<img src="/overheid.png" alt="Overheid" class="h-20" />

		<h1 class="mb-4 mt-4 text-xl font-bold">
			{#if lang === 'en'}
				Enter your username and password below
			{:else}
				Vul hieronder uw gebruikersnaam en wachtwoord in
			{/if}
		</h1>

		<div class="flex w-full flex-col">
			<label for="username" class="mb-2">
				{#if lang === 'en'}
					Username
				{:else}
					Gebruikersnaam
				{/if}
			</label>
			<input
				type="text"
				id="username"
				bind:value={username}
				class="white mb-4 rounded-md border-[1px] bg-[#1D1D1D] p-2 text-[#E5E5E5]"
			/>
		</div>
		<div class="flex w-full flex-col">
			<label for="password" class="mb-2">
				{#if lang === 'en'}
					Password
				{:else}
					Wachtwoord
				{/if}
			</label>
			<input
				type="password"
				id="password"
				bind:value={password}
				class="mb-4 rounded-md border-[1px] border-white bg-[#1D1D1D] p-2 text-[#E5E5E5]"
			/>
		</div>

		{#if fail}
			<p class="text-red-500">
				{#if lang === 'en'}
					Username or password is incorrect
				{:else}
					Gebruikersnaam of wachtwoord is onjuist
				{/if}
			</p>
		{/if}

		<button
			class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]
        "
			on:click={async () => {
				if (username === 'user' && password === 'password') {
					const identity = await fetch(
						'https://story-shack-cdn-v2.glitch.me/generators/dutch-name-generator'
					)
						.then((res) => res.json())
						.then((res) => `${res.data.male} ${res.data.lastName}`);

					const data = {
						role: 'user',
						identity
					};

					const encoded = btoa(JSON.stringify(data));

					localStorage.setItem('identity', encoded);
					goto('/dashboard');
				} else {
					fail = true;
					setTimeout(() => {
						fail = false;
					}, 2000);
				}
			}}
		>
			{#if lang === 'en'}
				Sign in
			{:else}
				Inloggen
			{/if}
		</button>
	</div>
</div>
