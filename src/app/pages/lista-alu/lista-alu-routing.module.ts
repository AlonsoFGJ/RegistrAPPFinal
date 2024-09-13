import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAluPage } from './lista-alu.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAluPageRoutingModule {}
