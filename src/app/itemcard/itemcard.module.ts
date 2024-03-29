import { ItemCardComponent } from './itemcard.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ForintModule } from '../pipes/forint.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ForintModule],
  exports: [ItemCardComponent],
  declarations: [ItemCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemCardModule {}
