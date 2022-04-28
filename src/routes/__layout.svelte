<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */

	import { movie_genres, tv_genres } from '$lib/stores/store';

	export async function load({ fetch }: any) {
		try {
			const resTv = await (await fetch('/api/getTvGenres')).json();
			tv_genres.set(resTv.tv_genres);

			const resMovie = await (await fetch('/api/getMovieGenres')).json();
			movie_genres.set(resMovie.movie_genres);
			return {};
		} catch (e) {
			console.log('error', e);
		}
	}
</script>

<script lang="ts">
	import { theme } from '../lib/stores/theme-store';

	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	theme.init();
</script>

<svelte:head>
	<link rel="preload" href="https://fonts.gstatic.com" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap"
	/>
	<title>TMDB on Sveltekit</title>
	<meta name="description" content="TMDB movie & tv database" />
	<meta name="keywords" content="HTML, CSS, JavaScript, svelte" />
	<meta name="author" content="Salisu Shuaibu" />
</svelte:head>

<main class:$theme class="">
	<div class="w-full -z-50 fixed top-0 bg-gradient-to-r from-skin-bg to-skin-border min-h-screen" />
	<Header />
	<section class="mt-[52px] max-w-7xl mx-auto">
		<slot />
	</section>
</main>
