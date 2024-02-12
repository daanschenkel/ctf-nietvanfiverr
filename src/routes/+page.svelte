<script>
	import { onMount } from 'svelte';

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
				CTF: It's fine, right?
			{:else}
				CTF: Prima, toch?
			{/if}
		</h1>
		<button
			class="rounded-mdp-2 mb-3 mt-4 w-full bg-[#154273] p-2 text-center font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
			on:click={() => {
				if (lang === 'en') {
					document.cookie = 'lang=nl';
					lang = 'nl';
				} else {
					document.cookie = 'lang=en';
					lang = 'en';
				}
				location.reload();
			}}
		>
			{#if lang === 'en'}
				Verander naar Nederlands
			{:else}
				Change to English
			{/if}
		</button>
		<p class="text-center">
			{#if lang === 'en'}
				Welcome to this CTF. Lets start with some context:
				<br /><br />
				- The government has done a redesign of their website, but they might not have hired the best
				developers.
				<br /><br />
				- You are (fill in a random world leader here) and you want to log in to the government's admin
				panel to see what they are up to.
				<br />
				You can log in with the following credentials:
				<code>
					<br />
					Username: user
					<br />
					Password: password
				</code>
			{:else}
				Welkom bij deze CTF. Eerst even wat context:
				<br /><br />
				- De overheid heeft een redesign gedaan van hun website. Ze hebben misschien niet de beste developers
				ingehuurd.
				<br /><br />
				- Jij bent (vul hier een willekeurige wereldleider in) en je wilt inloggen op het beheerderspaneel
				van de overheid om te kijken waar ze nou allemaal mee bezig zijn.

				<br />
				Je kan inloggen met de volgende gegevens:
				<code>
					<br />
					Gebruikersnaam: user
					<br />
					Wachtwoord: password
				</code>
			{/if}
		</p>
		<a
			href="/login"
			class="rounded-mdp-2 mt-4 w-full bg-[#154273] p-2 text-center font-bold text-[#E5E5E5] transition-all duration-200 hover:bg-[#1D1D1D]"
		>
			{#if lang === 'en'}
				Login
			{:else}
				Inloggen
			{/if}
		</a>
	</div>
</div>
