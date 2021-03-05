import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  key: string = "U4Yraj4JpYZcN5y1CFUl1qKT45daK8I49gjM4h57lyY";

  getImageList(query: string) {
    return this.http.get(
      `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${this.key}`
    );
  }
  getImage(id: string) {
    return this.http.get(
      `https://api.unsplash.com/photos/${id}?client_id=${this.key}`
    );
  }

}
