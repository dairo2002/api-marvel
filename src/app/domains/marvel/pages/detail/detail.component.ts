import { Component } from '@angular/core';
import { DetailCharacterComponent } from "../../components/detail-character/detail-character.component";
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-detail',
  imports: [DetailCharacterComponent, HeaderComponent],
  templateUrl: './detail.component.html',
  styles: ``
})
export class DetailComponent {

}
