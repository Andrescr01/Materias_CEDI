import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PappsPage } from '../papps/papps';
import { CienciasPage } from '../ciencias/ciencias';
import { PyePage } from '../pye/pye';
import { MiPage } from '../mi/mi';
import { ComPage } from '../com/com';
import { RobPage } from '../rob/rob';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
historia = HistoriaPage;
dibujo = DibujoPage;
papps = PappsPage;
ciencias = CienciasPage;
pye = PyePage;
mi = MiPage;
com = ComPage;
rob = RobPage;
  constructor(public navCtrl: NavController) {

  }

  clickHistoria(){
    this.navCtrl.push(this.historia);
    
  }
  clickDibujo(){
    this.navCtrl.push(this.dibujo);
  }
  clickPapps(){
    this.navCtrl.push(this.papps);
  }
  clickCiencias(){
    this.navCtrl.push(this.ciencias);
  }
  clickPye(){
    this.navCtrl.push(this.pye);
  }
  clickMi(){
    this.navCtrl.push(this.mi);
  }
  clickCom(){
    this.navCtrl.push(this.com);
  }
  clickRob(){
    this.navCtrl.push(this.rob);
  }


}

