import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crear-qr',
  templateUrl: './crear-qr.page.html',
  styleUrls: ['./crear-qr.page.scss'],
})
export class CrearQRPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  valorQR={
    codigocurso:'0001',codigoprofesor:'0005'
  }
}
