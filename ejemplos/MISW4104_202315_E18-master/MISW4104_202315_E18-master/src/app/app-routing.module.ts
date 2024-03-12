import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { DirectorDetailComponent } from './director/directorDetail/directorDetail.component';
import { MovieDetailComponent } from './movie/movieDetail/movieDetail.component';
import { GeneroListComponent } from './genero/genero-list/genero-list.component';
import { InicioComponent } from './inicio/inicio.component';
import { YoutubeTrailersListComponent } from './youtubeTrailers/youtubeTrailers-list/youtubeTrailers-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'actor', component: ActorComponent },
  { path: 'director', component: DirectorDetailComponent },
  { path: 'movie', component: MovieDetailComponent },
  { path: 'genero', component: GeneroListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'trailer', component: YoutubeTrailersListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
