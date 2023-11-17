<script>
	import PortableText from '@portabletext/svelte';
	import internalLink from '../custom-marks/internal-link.svelte';
	import externalLink from '../custom-marks/external-link.svelte';
	import mailtoLink from '../custom-marks/mailto-link.svelte';

	export let section;
    console.log(section);

</script>

<section class="experience-list">
	<div class="experience-list__inner">
			<h1 class="experience-list__headline">{section.title}</h1>
		{#if section.elements.length > 0}
			<ul>
				{#each section.elements as experience}
					<li class="job-posting">
                        <span>
                            {experience.year}
                        </span>
                        <span>
                            {experience.name}
                        </span>
					</li>
				{/each}
			</ul>
		{:else}
			<h1 class="experience-list__headline">Nothing here yet</h1>
		{/if}
	</div>
</section>



<style>
	.experience-list {
		border-bottom: 2px solid black;
		margin-bottom: var(--level7);
	}

	.experience-list__headline {
		font-size: var(--h5);
		text-transform: uppercase;
	}
</style>