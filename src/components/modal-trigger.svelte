<script>
	import { trapFocus } from '$lib/trapFocus';
	export let label;
	export let buttonText;
	export let modalId;
	export let classes;

	console.log(classes);

	$: modalIsOpen = false;
	$: modalId;

	function openModal(event) {
		modalIsOpen = !modalIsOpen;

		let id = event.target.dataset.targetId;
		let modal = document.querySelector('#' + id);

		if (typeof modal.showModal === 'function') {
			modal.showModal();
		} else {
			modal.style.display = 'block';
		}

		document.dispatchEvent(new CustomEvent('modal open', { detail: { name: modalId } }));

		trapFocus(modal);
	}
</script>

<button
	on:click|preventDefault="{openModal}"
	aria-label="Open {label}"
	aria-expanded="{modalIsOpen}"
	class="{classes}"
	data-target-id="{modalId}"
>
	{buttonText}
</button>
