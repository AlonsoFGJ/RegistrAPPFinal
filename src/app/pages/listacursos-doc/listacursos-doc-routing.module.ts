import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacursosDocPage } from './listacursos-doc.page';

const routes: Routes = [
  {
    path: '',
    component: ListacursosDocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacursosDocPageRoutingModule {}
