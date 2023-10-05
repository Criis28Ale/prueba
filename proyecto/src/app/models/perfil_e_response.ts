import { perfil_e } from "./perfil_e";


export class perfil_e_response {
    recordsets: perfil_e[][];
    output: string;
    rowsAffected: number[];
  
    constructor(recordsets: perfil_e[][], output: string, rowsAffected: number[]) {
      this.recordsets = recordsets;
      this.output = output;
      this.rowsAffected = rowsAffected;
    }
}