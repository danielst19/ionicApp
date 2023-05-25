import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgForPageRoutingModule } from './ng-for-routing.module';

import { NgForPage } from './ng-for.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgForPageRoutingModule
  ],
  declarations: [NgForPage]
})
export class NgForPageModule {}
