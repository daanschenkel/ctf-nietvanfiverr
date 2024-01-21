<script>
	import { goto } from '$app/navigation';
	let loaded = false;
	let item = localStorage.getItem('identity');
	let identity;
	if (item) identity = JSON.parse(atob(item));
	else goto('/login');
	if (identity.role !== 'admin') goto('/dashboard');
	if (!localStorage.getItem('emergency')) goto('/dashboard');

	if (identity.role === 'admin' && localStorage.getItem('emergency')) {
		//reset
		localStorage.removeItem('identity');
		localStorage.removeItem('emergency');
		loaded = true;
	}

	let lang = localStorage.getItem('lang') || 'en';
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
		{#if loaded}
			{#if lang === 'en'}
				CTF{'{'}maybe_n0t_th3_0ne_fr0m_f1v3rr{'}'}
			{:else}
				CTF{'{'}m1ssch13n_n13t_d13_v4n_f1v3rr{'}'}
			{/if}
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
