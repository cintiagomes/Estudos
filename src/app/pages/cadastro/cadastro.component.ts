import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  voltar(){
    this.navCtrl.navigateRoot('/start');
  }

}
