import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const tv_genres: Writable<Genre[]> = writable([]);
export const movie_genres: Writable<Genre[]> = writable([]);
