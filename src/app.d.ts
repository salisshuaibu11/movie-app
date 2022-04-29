/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

type Media = {
	genres: [Genre];
};

type MediaPlatform = 'movie' | 'tv';
type MediaType = 'movie' | 'tv' | 'person';

type Genre = {
	id: number;
	name: string;
};

type Network = {
	display_priority: number;
	logo_path: string;
	provider_name: string;
	provider_id: number;
}

type Genres = {
	[Key in MediaPlatform]: Genre[];
};

type PersonType = {
	id: ?number;
	profile_path: ?string;
	character: ?string;
	name: ?string;
	known_for_department: ?string;
	gender: ?(1 | 2);
	birthday: ?string;
	place_of_birth: ?string;
	also_known_as: ?Array<string>;
	biography: ?string;
	popularity: ?number;
	adult: ?boolean;
	imdb_id: ?string;
	homepage: ?(null | string);
};

type MovieType = {
	adult: ?boolean;
	backdrop_path: ?(string | null);
	belongs_to_collection: ?(null | Array<string>);
	budget: ?number;
	genres: ?Array<Genre>;
	homepage: ?(string | null);
	id: ?number;
	imdb_id: ?(string | null);
	original_language: ?string;
	original_title: ?string;
	overview: ?(string | null);
	popularity: ?number;
	poster_path: ?(string | null);
	production_companies: ?ProductionCompanies[];
	production_countries: ?ProductionCountries[];
	release_date: ?string;
	revenue: ?number;
	runtime: ?(number | null);
	spoken_languages: ?SpokenLanguages[];
	status: ?('Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled');
	tagline: ?(string | null);
	title: ?string;
	video: ?boolean;
	vote_average: ?number;
	vote_count: ?number;
};

type TvType = {
	backdrop_path: ?(string | null);
	created_by: ?CreatedBy[];
	episode_run_time: ?Array<number>;
	first_air_date: ?string;
	genres: ?Array<Genre>;
	homepage: ?string;
	id: ?number;
	in_production: ?boolean;
	languages: ?Array<string>;
	last_air_date: ?string;
	last_episode_to_air: ?LastAiredEpisode[];
	name: ?string;
	next_episode_to_air: ?null;
	networks: ?Networks[];
	origin_country: ?string;
	number_of_episodes: ?number;
	number_of_seasons: ?number;
	origin_country: ?Array<string>;
	original_language: ?string;
	original_name: ?string;
	overview: ?string;
	popularity: ?number;
	poster_path: ?(string | null);
	production_companies: ?ProductionCompanies[];
	production_countries: ?ProductionCountries[];
	seasons: ?Seasons[];
	spoken_languages: ?SpokenLanguages[];
	status: ?string;
	tagline: ?string;
	type: ?string;
	vote_average: ?number;
	vote_count: ?number;
};

type Data = {
	cast: PersonType[];
};
type ProductionCompanies = {
	name: ?string;
	id: ?number;
	logo_path: ?(string | null);
	origin_country: ?string;
};

type ProductionCountries = {
	iso_3166_1: ?string;
	name: ?string;
};

type SpokenLanguages = {
	iso_639_1: ?string;
	name: ?string;
};
type CreatedBy = {
	id: ?number;
	credit_id: ?string;
	name: ?string;
	gender: ?number;
	profile_path: ?(string | null);
};

type LastAiredEpisode = {
	air_date: ?string;
	episode_number: ?number;
	id: ?number;
	name: ?string;
	overview: ?string;
	production_code: ?string;
	season_number: ?number;
	still_path: ?(string | null);
	vote_average: ?number;
	vote_count: ?number;
};

type Networks = {
	name: ?string;
	id: ?number;
	logo_path: ?(string | null);
};

type Seasons_type = {
	air_date: ?string;
	episode_count: ?number;
	id: ?number;
	name: ?string;
	overview: ?string;
	poster_path: ?string;
	season_number: ?number;
};

type Season_type = {
	_id: ?string;
	air_date: ?string;
	episodes: ?Episodes[];
	name: ?string;
	overview: ?string;
	id: ?number;
	poster_path: string | null;
	season_number: number;
};

type Episodes = {
	air_date: ?string;
	episode_number: ?number;
	crew: Crew[];
	guest_stars: Guest_stars[];
	id: ?number;
	name: ?string;
	overview: ?string;
	production_code: ?string;
	season_number: ?number;
	still_path: ?string;
	vote_average: ?number;
	vote_count: ?number;
};

type CrewType = {
	department: ?string;
	job: ?string;
	credit_id: ?string;
	adult: boolean | null;
	gender: 0 | 1;
	id: ?number;
	known_for_department: ?string;
	name: ?string;
	original_name: ?string;
	popularity: ?number;
	profile_path: string | null;
};

type GuestType = {
	credit_id: ?string;
	order: ?number;
	character: ?string;
	adult: boolean;
	gender: 0 | 1 | null;
	id: number;
	known_for_department: ?string;
	name: ?string;
	original_name: ?string;
	popularity: ?number;
	profile_path: ?(string | null);
};

type Trailer_type = {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

type CastType = {
	credit_id: string;
	original_name: string;
	id: number;
	genre_ids: Array<number>;
	character: string;
	name: string;
	poster_path: string | null;
	vote_count: number;
	vote_average: number;
	popularity: number;
	episode_count: number;
	original_language: string;
	first_air_date: string;
	backdrop_path: string | null;
	overview: string;
	origin_country: Array<string>;
}
type KnownForType = {
	credit_id: string;
	original_name: string;
	id: number;
	genre_ids: Array<number>;
	character: string;
	name: string;
	poster_path: string | null;
	vote_count: number;
	vote_average: number;
	popularity: number;
	episode_count: number;
	original_language: string;
	first_air_date: string;
	backdrop_path: string | null;
	overview: string;
	origin_country: Array<string>;
}
