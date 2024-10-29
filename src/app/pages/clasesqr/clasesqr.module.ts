import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesqrPageRoutingModule } from './clasesqr-routing.module';

import { ClasesqrPage } from './clasesqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesqrPageRoutingModule
  ],
  declarations: [ClasesqrPage]
})
export class ClasesqrPageModule {}
