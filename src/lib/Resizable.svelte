<script lang="ts">
	// import { classNames } from '$lib/string';

	export let horizontal: boolean = false;
	export let vertical: boolean = false;

	const { class: className, ...restProps } = $$props;

	export let resizeEl: HTMLElement;

	resizeEl?.setAttribute('style', 'position: relative;');

	// The current position of mouse
	let x = 0;
	let y = 0;

	// The dimension of the element
	let w = 0;
	let h = 0;

	// Handle the mousedown event
	// that's triggered when user drags the resizer
	const mouseDownHandler = function (e: MouseEvent) {
		// Get the current mouse position
		x = e.clientX;
		y = e.clientY;

		// Calculate the dimension of element
		const styles = window.getComputedStyle(resizeEl);
		w = parseInt(styles.width, 10);
		h = parseInt(styles.height, 10);

		// Attach the listeners to `document`
		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mouseup', mouseUpHandler);
	};

	const mouseMoveHandler = function (e: MouseEvent) {
		// How far the mouse has been moved
		const dx = e.clientX - x;
		const dy = e.clientY - y;

		// Adjust the dimension of element
		if (horizontal) {
			console.log(w + dx);
			resizeEl.style.width = `${w + dx}px`;
		}

		if (vertical) {
			console.log(w + dy);
			resizeEl.style.height = `${h + dy}px`;
		}
	};

	const mouseUpHandler = function () {
		// Remove the handlers of `mousemove` and `mouseup`
		document.removeEventListener('mousemove', mouseMoveHandler);
		document.removeEventListener('mouseup', mouseUpHandler);
	};
</script>

{#if horizontal}
	<div class="material-icons resizer resize-r" on:mousedown={mouseDownHandler}>drag_indicator</div>
{/if}
{#if vertical}
	<div class="resizer resize-b" on:mousedown={mouseDownHandler}>drag_handle</div>
{/if}

<style>
	.resizer {
		position: absolute;
		font-size: small;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: var(--color-); */
		user-select: none;
	}

	.resizer:hover:not(.icon) {
		color: var(--color-highlight);
	}

	/* Placed at the right side */
	.resize-r {
		bottom: 0;
		right: 0;
		width: fit-content;
		height: 100%;
		cursor: col-resize;
	}

	/* Placed at the bottom side */
	.resize-b {
		bottom: 0;
		cursor: row-resize;
		height: fit-content;
		left: 0;
		width: 100%;
	}
</style>
