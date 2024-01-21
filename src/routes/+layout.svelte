<script>
	import { onMount } from 'svelte';
	import '../app.pcss';
	onMount(() => {
		document.cookie = 'hint=kijk naar localStorage; path=/';
	});
</script>

<slot />
