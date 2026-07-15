// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** */
export function load() {
	throw redirect(301, '/en');
}

export const prerender = true;
