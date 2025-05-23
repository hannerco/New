import {Pais} from "./pais"
import {Tipo} from "./tipo"
export interface Festivo {
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    pais: Pais;
    tipo: Tipo;
}