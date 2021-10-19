//https://www.youtube.com/watch?v=5LtVN_j3tmI
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'Indicados amigos'},
    { icon: 'phone-portrait-outline', text:'recarga de celular' },
    { icon: 'wallet-outline', text: 'Depositar' },
    { icon: 'oprions-outline', text: 'Ajustar limite' },
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'barcode-outline', text: 'Pagar' },
    { icon: 'lock-apen-outline', text: 'Bloquear cartao' },
    { icon: 'card-aoutline', text: 'Cartao virtual' }
  ]

  constructor() {}

}
