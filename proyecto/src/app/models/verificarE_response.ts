import { perfil_e } from "./perfil_e";


export class verificarE_response {
    recordsets: perfil_e[][];
    recordset: perfil_e[];
    output: string;
    rowsAffected: number[];
  
    constructor(recordsets: perfil_e[][], recordset: perfil_e[],output: string, rowsAffected: number[]) {
      this.recordsets = recordsets;
      this.recordset = recordset;
      this.output = output;
      this.rowsAffected = rowsAffected;
    }
}