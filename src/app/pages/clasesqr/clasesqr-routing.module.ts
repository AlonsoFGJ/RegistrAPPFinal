import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesqrPage } from './clasesqr.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesqrPageRoutingModule {}
