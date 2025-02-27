import { Component, inject, signal } from '@angular/core';
import { HashService } from '../../../shared/services/hash.service';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-list-characters',
  standalone: true,
  imports: [CommonModule, LoadingComponent, RouterLink, RouterOutlet, TruncatePipe],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

  characters: any[] = [];
  loading = signal<boolean>(true);
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
    this.loading.set(true);
    this.charactersService.getCharacters(this.currentPage, this.limit).subscribe(
      (res: any) => {
        this.characters = res.data.results;
        // Calcula el total de paginas 
        this.totalPages = Math.ceil(res.data.total / this.limit);
        this.loading.set(false);
      },
      (error) => {
        console.log('Error al obtener los personajes:', error);
        this.loading.set(false);
      }
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loading.set(true);
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loading.set(true);
      this.currentPage--;
      this.loadCharacters();
    }
  }


}
