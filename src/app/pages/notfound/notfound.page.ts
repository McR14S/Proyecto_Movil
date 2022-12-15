import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: "Cargando",
      duration: 2000
    });
    return await loading.present();
  }


}
