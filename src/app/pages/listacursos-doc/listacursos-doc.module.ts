import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacursosDocPageRoutingModule } from './listacursos-doc-routing.module';

import { ListacursosDocPage } from './listacursos-doc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacursosDocPageRoutingModule
  ],
  declarations: [ListacursosDocPage]
})
export class ListacursosDocPageModule {}
