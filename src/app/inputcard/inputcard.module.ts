import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InputcardComponent } from './inputcard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  exports: [InputcardComponent, HttpClientModule],
  declarations: [InputcardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class InputCardModule {}
