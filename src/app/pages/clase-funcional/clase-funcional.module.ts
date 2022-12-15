import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseFuncionalPageRoutingModule } from './clase-funcional-routing.module';

import { ClaseFuncionalPage } from './clase-funcional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseFuncionalPageRoutingModule
  ],
  declarations: [ClaseFuncionalPage]
})
export class ClaseFuncionalPageModule {}
