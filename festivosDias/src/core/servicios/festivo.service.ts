import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Festivo } from '../../shared/entidades/festivo';
import { FestivoDTO } from '../../shared/entidades/DTO/festivoDTO';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}festivos/`;
  }

  public listar(idPais: number, año:number): Observable<FestivoDTO[]> {
    return this.http.get<FestivoDTO[]>(`${this.url}listar/${idPais}/${año}`);
  }

  public verificar(idPais:number, año: number, mes: number, dia: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}verificar/${idPais}/${año}/${mes}/${dia}`);
  }

  public buscar(dato: string): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}buscar/${dato}`);
  }

  public agregar(festivo: Festivo): Observable<Festivo> {
    return this.http.post<Festivo>(`${this.url}agregar`, festivo);
  }

  public modificar(festivo: Festivo): Observable<Festivo> {
    return this.http.put<Festivo>(`${this.url}modificar`, festivo);
  }

  public eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}eliminar/${id}`);
  }
  
}

