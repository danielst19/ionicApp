import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgForPage } from './ng-for.page';

const routes: Routes = [
  {
    path: '',
    component: NgForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgForPageRoutingModule {}
