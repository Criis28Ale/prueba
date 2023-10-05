import { login_datos } from "./login_datos";

export class verfiicar_response {
    recordsets: login_datos[][];
    recordset: login_datos[];
    output: string;
    rowsAffected: number[];
  
    constructor(recordsets: login_datos[][], recordset: login_datos[],output: string, rowsAffected: number[]) {
      this.recordsets = recordsets;
      this.recordset = recordset;
      this.output = output;
      this.rowsAffected = rowsAffected;
    }
}