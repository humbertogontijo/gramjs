export const isDeno = typeof globalThis !== "undefined" && "Deno" in globalThis;
export const isBrowser = !isDeno && typeof self !== "undefined";
export const isNode = !isBrowser;
