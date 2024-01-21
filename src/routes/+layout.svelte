<script>
	import { onMount } from 'svelte';
	import '../app.pcss';
	let lang = localStorage.getItem('lang') || 'en';
	let langCache = lang;
	onMount(() => {
		function prep() {
			if (lang === 'nl') {
				console.clear();
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
				console.log(
					'%chttps://daanschenkel.nl',
					'color: #e5e5e5; font-size: 1rem; font-weight: bold;'
				);
			}
			if (lang === 'en') {
				document.cookie = 'hint=look at localStorage; path=/';
				console.log(
					`%cSTOP!`,
					'color: red; font-size: 3rem; font-weight: bold; text-shadow: 0 0 10px red;'
				);
				console.log(
					`%cDuring this CTF you are not allowed to view or edit the source code!`,
					'color: #e5e5e5; font-size: 1.5rem; font-weight: bold;'
				);
				console.log(
					`%cThere is something in devtools that can help you.`,
					'color: #e5e5e5; font-size: 1.5rem; font-weight: bold;'
				);
				console.log(
					'%chttps://daanschenkel.nl',
					'color: #e5e5e5; font-size: 1rem; font-weight: bold;'
				);
			}
		}
		prep();
	});
</script>

<slot />
