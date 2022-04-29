// eslint-disable-next-line @typescript-eslint/no-unused-vars
const base = "https://api.themoviedb.org/3/"
const urls = {
    cast: '${data["media"]}/${data["id"]}/credits?api_key=${api}&language=en-US',
    episode: 'tv/${data["id"]}/season/${data["season_number"]}/episode/${data["episode_number"]}?api_key=${api}&language=en-US',
    known_for: 'person/${data["person"]}/combined_credits?api_key=${api}&language=en-US',
    show_detail: '${data["media"]}/${data["id"]}?api_key=${api}&language=en-US',
    person: '${data["media"]}/${data["id"]}?api_key=${api}&language=en-US',
    search: 'search/${data["media"]}?api_key=${api}&language=en-US&page=${data["page"]}&include_adult=false&query=${data["query"]}',
    season: 'tv/${data["id"]}/season/${data["season_number"]}?api_key=${api}&language=en-US',
    show: 'trending/${data["media"]}/week?api_key=${api}&language=en-GB&page=${data["page"]}',
    show_genres: 'discover/${data["media"]}?api_key=${api}&with_genres=${data["genre"]}&page=${data["page"]}',
    trailer: '${data["media"]}/${data["id"]}/videos?api_key=${api}&language=en-US'
}

export async function post(event: any): Promise<any> {
    try {
        let api = import.meta.env.VITE_API_KEY;
        const data = await event.request.json();
        
        const fetch_url = base + [eval('`' + urls[data["api_ref"]] + '`')]
        const res = await (await fetch(fetch_url)).json();

        return {
            body: JSON.stringify({res})
        }
    } catch(error) {
        console.log('error', error);
    }
}
