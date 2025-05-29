import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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

}
