import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  entrar(){
    this.navCtrl.navigateRoot('/login');
  }

  cadastro(){
    this.navCtrl.navigateRoot('/cadastro');
  }

}
