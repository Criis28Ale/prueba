import { login_datos } from "./login_datos";

export class login_datos_response {
    recordsets: login_datos[][];
    output: string;
    rowsAffected: number[];
  
    constructor(recordsets: login_datos[][], output: string, rowsAffected: number[]) {
      this.recordsets = recordsets;
      this.output = output;
      this.rowsAffected = rowsAffected;
    }
}