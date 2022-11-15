import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rate } from '../models/rates.model';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  private baseURL = `${environment.api}/taxas/v1`;
  constructor(private http: HttpClient) {}

  getRates() {
    return this.http.get<Rate[]>(this.baseURL);
  }
}
