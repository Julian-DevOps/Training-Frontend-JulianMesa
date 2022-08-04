import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrontendService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:8080/';

  getTecnologiasFrontAll(): Observable<any> {
    let direction = this.url + "frontend/get/all";
    return this.http.get<any>(direction);
  }
}
