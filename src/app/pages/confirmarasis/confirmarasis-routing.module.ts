import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarasisPage } from './confirmarasis.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarasisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarasisPageRoutingModule {}
