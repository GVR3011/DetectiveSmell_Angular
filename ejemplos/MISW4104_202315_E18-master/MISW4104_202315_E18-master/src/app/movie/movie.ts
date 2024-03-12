import { Genre } from "../genero/genero";
import { Actor } from "../actor/actor";
import { Director } from "../director/director";
import { YoutubeTrailers } from "../youtubeTrailers/youtubeTrailers";

export class Movie {
    id: string
    title: string;
    poster: string;
    duration: number;
    country: string;
    releaseDate: Date;
    popularity: number;
    genre: Genre;
    actors:Array<Actor>;
    director:Director;
    youtubeTrailer:YoutubeTrailers;

    public constructor(id: string, title: string, poster: string,
         duration: number, country: string, releaseDate: Date, 
         popularity: number, genero: Genre,actors:Array<Actor>,
         director:Director, youtubeTrailer:YoutubeTrailers) {
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.duration = duration;
        this.country = country;
        this.releaseDate = releaseDate;
        this.popularity = popularity;
        this.genre = genero;
        this.actors=actors;
        this.director=director;
        this.youtubeTrailer=youtubeTrailer;
    }

}
