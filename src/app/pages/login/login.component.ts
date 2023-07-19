import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  voltar(){
    this.navCtrl.navigateRoot('/start');
  }

  entrar(){
    this.navCtrl.navigateRoot('/home');
  }

}
