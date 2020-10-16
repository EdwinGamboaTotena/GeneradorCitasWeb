import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number;

  constructor() { }

  ngOnInit() {
    this.anio = new Date().getFullYear();
  }

  fixearPosicion() {
    const historico = document.getElementById('contenido');
    const height = historico.offsetHeight;
    if (height < (screen.height * 0.7)) {
      return true;
    }
    return false;
  }

}
