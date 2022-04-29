<script lang="ts">
	import { onMount } from 'svelte';
	import MovieList from './MovieList.svelte';

	import { current_page, media_type, data } from '$lib/stores/store';
	import { get } from 'svelte/store';
	import Genre from '$lib/components/Genre.svelte';
	//export let total_pages = 1;
	export let genres: any = undefined;
	//export let searching: any = undefined;

	async function moreData() {
		let res: Response;

		res = await fetch('/api/postData', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				api_ref: 'show_genres',
				media: get(media_type),
				page: get(current_page),
				genre: genres
			})
		});

		const datas = await res.json();
		const res_results = datas.res.results;

		$data = [...$data, ...res_results];
	}

	onMount(() => moreData());
</script>

<section id="main" class="h-full">
	<MovieList />
</section>
