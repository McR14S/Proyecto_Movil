import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilesPageRoutingModule } from './perfiles-routing.module';

import { PerfilesPage } from './perfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilesPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PerfilesPage]
})
export class PerfilesPageModule {}