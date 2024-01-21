<script>
	import { onMount } from 'svelte';
	import '../app.pcss';
	onMount(() => {
		document.cookie = 'hint=kijk naar localStorage; path=/';
		console.log(
			`%cSTOP!`,
			'color: red; font-size: 3rem; font-weight: bold; text-shadow: 0 0 10px red;'
		);
		console.log(
			`%cHet is tijdens deze CTF niet de bedoeling de source code te bekijken of aan te passen!`,
			'color: #e5e5e5; font-size: 1.5rem; font-weight: bold;'
		);
		console.log(
			`%cEr is wel iets in devtools wat je kan helpen.`,
			'color: #e5e5e5; font-size: 1.5rem; font-weight: bold;'
		);
		console.log('%chttps://daanschenkel.nl', 'color: #e5e5e5; font-size: 1rem; font-weight: bold;');
	});
</script>

<slot />
