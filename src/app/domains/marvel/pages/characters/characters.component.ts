import { Component } from '@angular/core';
import { ListCharactersComponent } from "../../components/list-characters/list-characters.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  imports: [ListCharactersComponent, HeaderComponent,],
  templateUrl: './characters.component.html',
  styles: ``
})
export class CharactersComponent {

}
