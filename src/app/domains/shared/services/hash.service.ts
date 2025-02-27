import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  private http = inject(HttpClient)

  private publicKey = environment.marvelPublicKey;
  private privateKey = environment.marvelPrivateKey;   
  private urlBase  = environment.marvelUrlBase;
  // private urlBase  = environment.marvelUrlBase + 'characters';

  constructor() { }

  /**
   * Genera el hash MD5 necesario para la autenticación en la API de Marvel.
   * El hash se genera con: timestamp + privateKey + publicKey.
   */

    private generateHash(ts: string): string {
      return CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();
    }

      /**
   * Obtiene la lista de personajes de Marvel desde la API.
   * @returns Observable con los datos de los personajes.
   * page: number, limit: number = 20 - Variables para la pagination 
   */
    getCharacters(page: number, limit: number = 20): Observable<any> {
      const ts = new Date().getTime().toString();
      const hash = this.generateHash(ts);
      // Calcula desde qué índice empezar
      const offset = (page - 1)* limit; 

      // Construimos la URL con los parámetros de autenticación
      const url = `${this.urlBase}/characters?ts=${ts}&apikey=${this.publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;     
      
      // Realizamos la petición HTTP GET
      return this.http.get(url)
    }

    getCharactersByID(id: string): Observable<any> {
      const ts = new Date().getTime().toString();
      const hash = this.generateHash(ts);    
      // Construimos la URL con los parámetros de autenticación
      const url = `${this.urlBase}/characters/${id}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
      
      // Realizamos la petición HTTP GET
      return this.http.get(url)
    }

    getComics(): Observable<any> {
      const ts = new Date().getTime().toString();
      const hash = this.generateHash(ts);
      const url = `${this.urlBase}/comics?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;      
      // const url = `${this.urlBase}/events?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;                        
      return this.http.get(url);
    }

    getComicss(page: number, limit: number = 20): Observable<any> {
      const ts = new Date().getTime().toString();
      const hash = this.generateHash(ts);
      const offset = (page - 1)* limit; 
      // const url = `${this.urlBase}/characters?ts=${ts}&apikey=${this.publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
      const url = `${this.urlBase}/comics?ts=${ts}&apikey=${this.publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;      
      // const url = `${this.urlBase}/events?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;                        
      return this.http.get(url);
    }

    getCharacterComics(characterId: string, limit: number = 10): Observable<any> {
      const ts = new Date().getTime().toString();
      const hash = this.generateHash(ts); 
      // const url = `${this.urlBase}/characters/${id}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
      const url = `${this.urlBase}/characters/${characterId}/comics?ts=${ts}&apikey=${this.publicKey}&hash=${hash}&limit=${limit}`;
      return this.http.get(url);
    }

}
/**
 * Dependencia Instalada
 * npm install crypto-js
 * npm i --save-dev @types/crypto-js

 */