import { Routes } from '@angular/router';
import { InicioComponent } from '../features/componentes/inicio/inicio.component';
import { FestivoComponent } from '../features/componentes/festivo/festivo.component';
import { PaisComponent } from '../features/componentes/pais/pais.component';
import { TipoComponent } from '../features/componentes/tipo/tipo.component';

export const routes: Routes = [
    { path: "inicio", component: InicioComponent },
    { path: "festivo", component: FestivoComponent },
    { path: "pais", component: PaisComponent},
    { path: "tipo", component: TipoComponent }
];