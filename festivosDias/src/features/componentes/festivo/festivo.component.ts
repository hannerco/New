import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../shared/entidades/festivo';
import { FestivoService } from '../../../core/servicios/festivo.service';

@Component({
  selector: 'app-festivo',
  imports: [
    ReferenciasMaterialModule,
    NgxDatatableModule,
  ],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css'
})
export class FestivoComponent {
  public columnas = [
    { name: "Nombre del festivo", prop: "nombre" },
    { name: "Dia del festivo", prop: "dia" },
    { name: "Mes del festivo", prop: "mes" },
    { name: "Pais del festivo", prop: "pais" },
    { name: "Tipo del festivo", prop: "tipo" }
  ];

    public festivo: Festivo[] = [];

    constructor(private servicioFestivo: FestivoService) {
    }

}

