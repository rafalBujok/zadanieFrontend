import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private _key: string = environment.clientId;
  private _page: number = 1;
  private _per_page: number = 20;

  getImageList(query: string) {
    return this.http.get(
      `https://api.unsplash.com/search/photos/?page=${this._page}&per_page=${this._per_page}&query=${query}&client_id=${this._key}`
    );
  }
  getImage(id: string) {
    return this.http.get(
      `https://api.unsplash.com/photos/${id}?client_id=${this._key}`
    );
  }

}
