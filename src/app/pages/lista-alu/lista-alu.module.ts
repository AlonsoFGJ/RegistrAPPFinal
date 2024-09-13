import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAluPageRoutingModule } from './lista-alu-routing.module';

import { ListaAluPage } from './lista-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAluPageRoutingModule
  ],
  declarations: [ListaAluPage]
})
export class ListaAluPageModule {}
