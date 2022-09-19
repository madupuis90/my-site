<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;
</script>

<nav class="navbar">
	{#each data.navItems as navItem}
		<a class="link" class:active={navItem.path === data.routeId} href={navItem.path}
			>{navItem.name.toUpperCase()}
		</a>
	{/each}
</nav>
<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
	.navbar {
		font-family: 'Montserrat', sans-serif;
		background-color: #333;
	}
	.link {
		font-size: 2em;
		margin: 1em;
	}
	.link.active {
		text-shadow: 0 0 0.5em azure, 0 0 0.5em aqua, 0 0 0.5em dodgerblue, 0 0 0.5em blue;
		filter: saturate(60%);
	}
</style>
