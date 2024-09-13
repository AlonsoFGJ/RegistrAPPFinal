import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidarcontPage } from './olvidarcont.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidarcontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidarcontPageRoutingModule {}
