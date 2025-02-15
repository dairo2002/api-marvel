import { Component, inject } from '@angular/core';
import { HashService } from '../../../shared/services/hash.service';

@Component({
  selector: 'app-list-characters',
  imports: [],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

  characters: any[] = [];
  currentPage = 1;
  totalPages = 0;
  limit = 20;


  // private charactersService = inject();
  constructor(private charactersService: HashService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  // Se llama el servicio y se alamacena en la variables characters
  loadCharacters(): void {
    this.charactersService.getCharacters(this.currentPage, this.limit).subscribe(
      (res: any) => {
        this.characters = res.data.results;    
        // Calcula el total de paginas 
        this.totalPages = Math.ceil(res.data.total / this.limit)
      },
      (error) => {
        console.log('Error al obtener los personajes:', error);        
      }    
    );
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }


}
