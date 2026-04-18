import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //
import { FormsModule } from '@angular/forms'; //
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {

  constructor() {}
    resultado ='';
    altura='';
    aplicativo='';
    linguagemEscolhida='';
    km='';
    vMotorista='';
    vAplicativo='';
    alertButtons = ['OK'];

  verificar(){

  this.resultado = (parseFloat(this.aplicativo)/(parseFloat(this.altura)*parseFloat(this.altura))).toFixed(0);


  if(this.aplicativo=='normal'){
    this.resultado = (5 + (2.5 * parseFloat(this.km))).toFixed(2);
    }
  else if(this.aplicativo=='superior'){
   this.resultado = (7.50 + (3.5 * parseFloat(this.km))).toFixed(2);
    }
  else{
    this.resultado = (10 + (5.5 * parseFloat(this.km))).toFixed(2);
  }
      if (this.resultado <= '150'){
      this.vAplicativo = (parseFloat(this.resultado) * 0.20).toFixed(2);
      this.vMotorista = (parseFloat(this.resultado) * 0.80).toFixed(2);
    }else{
      this.vAplicativo = (parseFloat(this.resultado) * 0.25).toFixed(2);
      this.vMotorista = (parseFloat(this.resultado) * 0.75).toFixed(2);
    }
}
}
