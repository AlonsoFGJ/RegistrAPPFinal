import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarasisPageRoutingModule } from './confirmarasis-routing.module';

import { ConfirmarasisPage } from './confirmarasis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarasisPageRoutingModule
  ],
  declarations: [ConfirmarasisPage]
})
export class ConfirmarasisPageModule {}
