import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/models/company.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompany(cnpj: string): Observable<Company> {
    return this.http.get<Company>(`${environment.api}/cnpj/v1/${cnpj}`);
  }
}
