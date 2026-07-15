
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"preconnect\" href=\"https://cdn.shopify.com\" crossorigin>\n\n    <!--\n      ██████╗  █████╗ ███╗   ██╗ ██████╗ █████╗ ██████╗ ████████╗ █████╗\n      ██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗\n      ██████╔╝███████║██╔██╗ ██║██║     ███████║██████╔╝   ██║   ███████║\n      ██╔═══╝ ██╔══██║██║╚██╗██║██║     ██╔══██║██╔══██╗   ██║   ██╔══██║\n      ██║     ██║  ██║██║ ╚████║╚██████╗██║  ██║██║  ██║   ██║   ██║  ██║\n      ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝\n\n      Developped by MIRAMIPANCARTA www.guillermo-casanova.com\n    -->\n    " + head + "\n  </head>\n\n  <body>\n    <div>" + body + "</div>\n  </body>\n\n  <script async>\n    WebFontConfig = {\n      typekit: { id: 'hlv0kmc' },\n      classes: true,\n      events: false,\n    };\n\n    (function (d) {\n      var wf = d.createElement('script'),\n        s = d.scripts[0];\n      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';\n      wf.async = true;\n      s.parentNode.insertBefore(wf, s);\n    })(document);\n  </script>\n</html>\n",
		error
	},
	version_hash: "1wce9lf"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	({ handle, handleFetch, handleError, handleValidationError, init } = await import("../../../src/hooks.server.js"));

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
