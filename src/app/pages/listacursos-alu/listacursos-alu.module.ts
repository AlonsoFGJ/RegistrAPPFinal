import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacursosAluPageRoutingModule } from './listacursos-alu-routing.module';

import { ListacursosAluPage } from './listacursos-alu.page';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacursosAluPageRoutingModule,
    MatProgressBarModule
  ],
  declarations: [ListacursosAluPage]
})
export class ListacursosAluPageModule {}
