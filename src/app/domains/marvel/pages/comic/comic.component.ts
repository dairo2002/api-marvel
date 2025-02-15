import { Component } from '@angular/core';
import { ListComicComponent } from "../../components/list-comic/list-comic.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-comic',
  imports: [ListComicComponent, HeaderComponent],
  templateUrl: './comic.component.html',
  styles: ``
})
export class ComicComponent {

}
