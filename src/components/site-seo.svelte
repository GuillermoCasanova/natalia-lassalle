<script context="module">
	import { client, imageBuilder } from '$lib/sanity';

	export async function load({ params, fetch }) {
		const request = `*[_type == 'site-settings'][0] {
                title,
                description,
                analytics
            }
        `;

		const siteHead = await client.fetch(request, params);

		return {
			props: { siteHead }
		};
	}
</script>

<script>
</script>
