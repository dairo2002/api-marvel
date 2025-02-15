import { Component } from '@angular/core';
import { HashService } from '../../../shared/services/hash.service';

@Component({
  selector: 'app-list-comic',
  imports: [],
  templateUrl: './list-comic.component.html',
  styleUrl: './list-comic.component.css'
})
export class ListComicComponent {

  comics: any[] = [];

  constructor(private comicService: HashService) { }

  ngOnInit(): void {
    this.loadComics();
  }


  loadComics(): void {
    this.comicService.getComics().subscribe(
      (res: any) => {
        this.comics = res.data.results
      },
      (error) => {
        console.log('Error al obtener los Comics: ', error);
      }
    )
  }

}
