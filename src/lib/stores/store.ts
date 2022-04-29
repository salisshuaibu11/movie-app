import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const current_page: Writable<number> = writable(1);

export const media_type: Writable<MediaType> = writable('movie');

export const selected: Writable<number | null> = writable(null);
export const tv_genres: Writable<Genre[]> = writable([]);
export const show_name: Writable<string> = writable('');
export const movie_genres: Writable<Genre[]> = writable([]);
export const data = writable([]);