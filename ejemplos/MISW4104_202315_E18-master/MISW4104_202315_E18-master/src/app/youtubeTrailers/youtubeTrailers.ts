import { Movie } from "../movie/movie";

export class YoutubeTrailers {
    id: string;
    name: string;
    url: string;
    duration:number;
    channel:string;
    movie: Array<Movie>;


    public constructor(id: string,
        name: string,
        url: string,
        duration:number,
        channel:string,
        movie: Array<Movie>,) {

        this.id = id;
        this.name = name;
        this.movie = movie;
        this.url=url;
        this.duration=duration;
        this.channel=channel;

    }

}


