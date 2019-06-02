import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personName: string;
  toast: any;

  constructor(private toastCtrl: ToastController) {}

  showGreeting(name: string) {
    this.toast = this.toastCtrl.create({
      message: `Hello ${name}`,
      duration: 3000
    }).then((data) => {
      console.log(data);
      data.present();
    });
  }



}
