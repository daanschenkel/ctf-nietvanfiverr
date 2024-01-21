<script>
	import { goto } from '$app/navigation';
	let username = 'user';
	let password = 'password';
	let fail = false;
	let item = localStorage.getItem('identity');
	let identity;
	if (item) goto('/dashboard');
</script>

<div class="min-h-screen bg-[#1D1D1D]">
	<div
		class="mx-auto flex w-[450px] flex-col items-center justify-center bg-[#282828] pb-10 pl-6 pr-6 text-[#E5E5E5]"
	>
		<img src="/overheid.png" alt="Overheid" class="h-20" />

		<h1 class="mb-4 mt-4 text-xl font-bold">Vul hieronder uw gebruikersnaam en wachtwoord in</h1>

		<div class="flex w-full flex-col">
			<label for="username" class="mb-2">Gebruikersnaam</label>
			<input
				type="text"
				id="username"
				bind:value={username}
				class="white mb-4 rounded-md border-[1px] bg-[#1D1D1D] p-2 text-[#E5E5E5]"
			/>
		</div>
		<div class="flex w-full flex-col">
			<label for="password" class="mb-2">Wachtwoord</label>
			<input
				type="password"
				id="password"
				bind:value={password}
				class="mb-4 rounded-md border-[1px] border-white bg-[#1D1D1D] p-2 text-[#E5E5E5]"
			/>
		</div>

		{#if fail}
			<p class="text-red-500">Gebruikersnaam of wachtwoord is onjuist</p>
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
			Inloggen
		</button>
	</div>
</div>
