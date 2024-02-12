<script>
	export let form;
	import { enhance } from '$app/forms';
	let username = 'user';
	let password = 'password';
	let fail = false;

	export let data;
	let lang = data.lang;
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
		<form use:enhance method="POST" action="?/login">
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
					name="username"
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
					name="password"
					bind:value={password}
					class="mb-4 rounded-md border-[1px] border-white bg-[#1D1D1D] p-2 text-[#E5E5E5]"
				/>
			</div>

			{#if form}
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
			>
				{#if lang === 'en'}
					Sign in
				{:else}
					Inloggen
				{/if}
			</button>
		</form>
	</div>
</div>
