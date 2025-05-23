import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../../shared/entidades/pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}festivos/`;
  }

  public buscar(dato: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}buscar/${dato}`);
  }

  public agregar(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(`${this.url}agregar`, pais);
  }

  public modificar(pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.url}modificar`, pais);
  }

  public eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}eliminar/${id}`);
  }
}
