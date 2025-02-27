import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HashService } from '../../../shared/services/hash.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail-character',
  standalone: true,
  imports: [RouterLink, LoadingComponent],
  templateUrl: './detail-character.component.html',
})
export class DetailCharacterComponent implements OnInit {
  characterId: string = '';
  character: any = null;
  comics: any[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private marvelService: HashService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterId = params['id'];
      this.loadCharacterDetails();
    });
  }

  loadCharacterDetails(): void {
    this.loading = true;
    // Cargar detalles del personaje
    this.marvelService.getCharactersByID(this.characterId).subscribe(
      (data: any) => {
        if (data.data.results.length > 0) {
          this.character = data.data.results[0];
          this.loadCharacterComics();
        } else {
          this.character = null;
          this.loading = false;
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error cargando detalles del personaje:', error);
        this.loading = false;
      }
    );
  }

  loadCharacterComics(): void {
    this.marvelService.getCharacterComics(this.characterId).subscribe(
      (data: any) => {
        this.comics = data.data.results;
        this.loading = false;
      },
      error => {
        console.error('Error cargando cómics del personaje:', error);
        this.loading = false;
      }
    );
  }
}