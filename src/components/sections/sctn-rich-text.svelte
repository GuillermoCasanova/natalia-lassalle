
<script>
	import PortableText from '@portabletext/svelte';
	import internalLink from '../custom-marks/internal-link.svelte';
	import externalLink from '../custom-marks/external-link.svelte';
	import mailtoLink from '../custom-marks/mailto-link.svelte';

	export let section;
</script>

<div>
    <PortableText
blocks="{section.text}"
serializers="{{
    marks: {
        internalLink: internalLink,
        externalLink: externalLink,
        mailtoLink: mailtoLink
    }
}}"
/>
</div>