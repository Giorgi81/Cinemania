import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';





const material = [
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatGridListModule,
  MatToolbarModule,
  MatCardModule



]


@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
