import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InputcardComponent } from './inputcard.component';
@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [InputcardComponent],
  declarations: [InputcardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class inputCards {}
