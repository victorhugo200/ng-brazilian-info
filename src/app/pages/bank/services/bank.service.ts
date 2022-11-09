import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bank } from '../model/bank.model';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private baseURL = `${environment.api}/banks/v1`;

  constructor(private http: HttpClient) {}

  getAllBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.baseURL);
  }

  getBank(ispb: string): Observable<Bank> {
    return this.http.get<Bank>(this.baseURL + ispb);
  }
}
