import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacursosAluPage } from './listacursos-alu.page';

const routes: Routes = [
  {
    path: '',
    component: ListacursosAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacursosAluPageRoutingModule {}
