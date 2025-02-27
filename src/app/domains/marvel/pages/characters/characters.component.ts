import { Component } from '@angular/core';
import { ListCharactersComponent } from "../../components/list-characters/list-characters.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [ListCharactersComponent, HeaderComponent, ],
  templateUrl: './characters.component.html',
  styles: ``
})
export class CharactersComponent {

}
