import { Routes } from '@angular/router';
import { CharactersComponent } from './domains/marvel/pages/characters/characters.component';
import { ComicComponent } from './domains/marvel/pages/comic/comic.component';

export const routes: Routes = [
    {
        path: '', component: CharactersComponent
    },
    {
        path: 'comic', component: ComicComponent
    },
];
