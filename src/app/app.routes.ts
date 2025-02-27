import { Routes } from '@angular/router';
import { CharactersComponent } from './domains/marvel/pages/characters/characters.component';
import { ComicComponent } from './domains/marvel/pages/comic/comic.component';
import { HomeComponent } from './domains/marvel/pages/home/home.component';
import { DetailComponent } from './domains/marvel/pages/detail/detail.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'characters', component: CharactersComponent,            
    },
    {
         path: 'characters/:id', component: DetailComponent
    },
    {
        path: 'comics', component: ComicComponent
    },
];
