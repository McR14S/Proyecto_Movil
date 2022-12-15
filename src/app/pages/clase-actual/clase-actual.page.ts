import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-clase-actual',
  templateUrl: './clase-actual.page.html',
  styleUrls: ['./clase-actual.page.scss'],
})
export class ClaseActualPage implements OnInit {

  formKey: FormGroup;
  key: string = '...';



  constructor(
    private router:Router
  ) {
    this.formKey = new FormGroup({
      userKey: new FormControl(),
    })
   }

  ngOnInit() {
    
  }

  makeString(): string{
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < 12; i++){
      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    }
    return this.key=outString;
  }

  viewString(){
    let result: string = this.makeString();
    return console.log(result);
  }

  validateString(){
    let keyInput = this.formKey.get('userKey')?.value;
    if( keyInput == this.key){
      console.log('Felicidades');
      this.router.navigate(['clase-funcional'])
    }else{
      return console.log('porfavor, funciona');
    }
    
  }
  

  
}
