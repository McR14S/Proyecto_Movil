import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ConversorApiService {


  urlEndPoint: String = 'https://mindicador.cl/api/';

  constructor(private http: HttpClient) { }
/*
  getPrecio(codigo, fecha): Promise<any>{
      return new Promise((resolve,reject)=>{
        this.http.get(this.urlEndPoint + '/' + codigo + '/' + fecha).subscribe(respuesta =>{
        resolve(respuesta);
      },
        (err) =>{
          reject(err);
      } ); 
    });
  }
  */
}
