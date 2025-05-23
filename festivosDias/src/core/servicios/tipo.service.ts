import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tipo } from '../../shared/entidades/tipo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}festivos/`;
  }

  public buscar(dato: string): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(`${this.url}buscar/${dato}`);
  }
  
  public agregar(tipo: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(`${this.url}agregar`, tipo);
  }

  public modificar(tipo: Tipo): Observable<Tipo> {
    return this.http.put<Tipo>(`${this.url}modificar`, tipo);
  }

  public eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}eliminar/${id}`);
  }

}
