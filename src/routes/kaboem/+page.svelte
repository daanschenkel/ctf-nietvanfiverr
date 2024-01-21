<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			goto('/flag');
		}, 2000);
	});
</script>

<video autoplay class="h-screen w-screen object-cover">
	<source src="/onee.mp4" type="video/mp4" />
	Your browser does not support the video tag.
</video>
