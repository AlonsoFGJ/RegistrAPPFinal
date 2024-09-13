import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidarcontPageRoutingModule } from './olvidarcont-routing.module';

import { OlvidarcontPage } from './olvidarcont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidarcontPageRoutingModule
  ],
  declarations: [OlvidarcontPage]
})
export class OlvidarcontPageModule {}
