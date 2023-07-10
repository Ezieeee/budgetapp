import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, AppRoutingModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class navHeader {}
