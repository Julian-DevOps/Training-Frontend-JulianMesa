import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:8080/';

  getTecnologiasBackAll(): Observable<any> {
    let direction = this.url + "backend/get/all";
    return this.http.get<any>(direction);
  }
}
