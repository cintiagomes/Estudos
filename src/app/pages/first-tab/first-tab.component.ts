import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss'],
})
export class FirstTabComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { 
    setTimeout(() => {
      this.navCtrl.navigateRoot('start');   
    }, 3000);
  }

  ngOnInit() {}

}
