import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private userService: UserService,
    private router: Router,
    private LoadingCtrl:LoadingController
  ) {}

  ngOnInit(){
    this.presentLoading();
  }

  onClick(){
    this.userService.logout()
    .then(() =>{
      this.router.navigate(['registro'])
    })
    .catch(error => console.log(error));
  }

  //carga animacion
  async presentLoading(){
    const loading = await this.LoadingCtrl.create({
      message: "Cargando",
      duration: 2000
    });
    return await loading.present();
  }

}
