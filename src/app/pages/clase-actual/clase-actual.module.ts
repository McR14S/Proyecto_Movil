import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseActualPageRoutingModule } from './clase-actual-routing.module';

import { ClaseActualPage } from './clase-actual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseActualPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClaseActualPage]
})
export class ClaseActualPageModule {}
