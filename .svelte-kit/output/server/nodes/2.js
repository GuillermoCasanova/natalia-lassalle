import * as server from '../entries/pages/_lang_lang_/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.4Sko9b7r.js","_app/immutable/chunks/BN1vU3J0.js","_app/immutable/chunks/B15YwO2F.js","_app/immutable/chunks/9yTcnqk5.js","_app/immutable/chunks/LjZgujQv.js","_app/immutable/chunks/BVM9uSdO.js","_app/immutable/chunks/B95QQN7t.js"];
export const stylesheets = ["_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/2.B-F_AOcI.css"];
export const fonts = [];
