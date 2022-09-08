import { environment } from "src/environments/environment";


export class Results {
    page: number = 0;
    results: MovieResults[] = new Array<MovieResults>();
    total_results?: number;
    total_pages?: number;

    constructor(other?: any) {

        if (other != null) {
            this.page = other.page;
            let resultsFilter: Array<MovieResults> = new Array<MovieResults>();
            for (const iterator of other.results) {
                resultsFilter.push(new MovieResults(iterator));
            }
            this.results = resultsFilter;
            this.total_results =  other.total_results;
            this.total_pages = other.total_pages;
        }

    }
}



export class MovieResults {
   private api_img = environment.api_img_poster;
   private  api_img_bg = environment.api_img_bg;
    poster_path?: string;
    poster_path_bg?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: Array<number>;
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string;
    backdrop_path_bg?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;


    constructor(other?: any) {

        if (other != null) {

            this.poster_path = (this.api_img + other.poster_path);
            this.poster_path_bg = (this.api_img_bg + other.poster_path);
            this.adult = other.adult;
            this.overview = other.overview;
            this.release_date = other.release_date;
            this.genre_ids = other.genre_ids;
            this.id = other.id;
            this.original_title = other.original_title;
            this.original_language = other.original_language;
            this.title = other.title;
            this.backdrop_path =  (this.api_img + other.backdrop_path);
            this.backdrop_path_bg =  (this.api_img_bg + other.backdrop_path);
            this.popularity = other.popularity;
            this.vote_count = other.vote_count;
            this.video = other.video;
            this.vote_average = other.vote_average;
            
        }

    }
}