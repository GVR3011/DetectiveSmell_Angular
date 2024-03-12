
import { Movie } from "../movie/movie";
export class Actor {
    name: string;
    photo: string;
    id : string;
    movies!:Array<Movie>;
   
   
    public constructor(name: string, photo: string,id: string, movies:Array<Movie>) {
      this.name = name;
      this.photo = photo;
      this.id=id;
      this.movies=movies;
    }
   }