import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearQRPageRoutingModule } from './crear-qr-routing.module';

import { CrearQRPage } from './crear-qr.page';
import { QrCodeModule } from 'ng-qrcode';


@NgModule({
  imports: [
    CommonModule,
    QrCodeModule,
    FormsModule,
    IonicModule,
    CrearQRPageRoutingModule
  ],
  declarations: [CrearQRPage]
})
export class CrearQRPageModule {}
