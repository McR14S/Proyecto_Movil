import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConversorApiService } from 'src/app/services/conversor-api.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  total: any;
  formCalcular: FormGroup;
  valor: any;
  
  constructor(
    private conversor: ConversorApiService
  ) {
    this.formCalcular = new FormGroup({
      valor: new FormControl()
    })
   }

  ngOnInit() {

  }



  getPrecioUF(){
    let numero = this.formCalcular.get('valor')?.value;
    var total = numero / 34931.13;
    return Math.round(total);
  }

  getPrecioDolar(){
    let numero = this.formCalcular.get('valor')?.value;
    var total = numero / 878.11;
    return Math.round(total);
  }

  getPrecioEuro(){
    let numero = this.formCalcular.get('valor')?.value;
    var total = (numero / 933.32);
    return Math.round(total);
  }

  /*
  getPrecio(value){
    var fecha: Date = new Date();
    var fechaActual = fecha.getDay() + '-' + fecha.getMonth() + '-' + fecha.getFullYear();
    
    this.total = this.conversor.getPrecio(value, fechaActual).then(respuesta => {
      this.total = respuesta;
      console.log(this.total);
    },
    (err) =>{
      console.error(err);
    }
  )}
*/
}
