<script>
	import { Menu } from "$lib/index.js";

	export let data;
	let { search, currentPath } = data;
</script>

<Menu {search} {currentPath} />

<slot />
