import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DevopsService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:5005/tecnologiasDevops';

  getTecologiasDevAll(): Observable<any> {
    let direction = this.url;
    return this.http.get<any>(direction);
  }
}
