import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(
      'https://rickandmortyapi.com/api/character/1,2,11,37,72,119,191,203,270,321,400,432,521,589,647,657,680,691,755,793'
    );
  }

  getImageById(id: String): Observable<Image> {
    return this.http.get<Image>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
}
