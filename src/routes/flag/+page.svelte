<script>
	export let data;
	let lang = data.lang;
</script>

<div
	class="flex h-screen w-screen flex-col items-center justify-center
    bg-[#1D1D1D]
"
>
	<h1 class="rip">
		{#if lang === 'en'}
			You have taken over the world!
		{:else}
			Je hebt de wereld overgenomen!
		{/if}
	</h1>
	<code class="flag">
		{#if lang === 'en'}
			CTF{'{'}maybe_n0t_th3_0ne_fr0m_f1v3rr{'}'}
		{:else}
			CTF{'{'}m1ssch13n_n13t_d13_v4n_f1v3rr{'}'}
		{/if}
	</code>
</div>

<style>
	.rip {
		font-size: 3rem;
		color: #e5e5e5;
	}
	.flag {
		font-size: 2rem;
		color: #e5e5e5;
	}
</style>
