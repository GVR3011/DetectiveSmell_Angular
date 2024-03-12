
import { Movie } from "../movie/movie";
export class ActorDetail {
    name: string;
    photo: string;
    nationality: String;
    birthDate: Date;
    biography: String;
    id : string;
    movies:Array<Movie>
   
    public constructor(name: string, photo: string, nationality: String,
       birthDate: Date, biography: String, id: string, movies:Array<Movie>) {
      this.name = name;
      this.photo = photo;
      this.nationality = nationality;
      this.birthDate=birthDate;
      this.biography=biography;
      this.id=id;
      this.movies=movies;

    }
   }