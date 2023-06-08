<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let condition = false;
	export let tag: string | ComponentType;
</script>

{#if condition && tag}
	{#if typeof tag === 'string'}
		<svelte:element this={tag} {...$$restProps}><slot /></svelte:element>
	{:else}
		<svelte:component this={tag} ...$$restProps><slot /></svelte:component>
	{/if}
{:else}
	<slot />
{/if}
