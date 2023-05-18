import { ItemCardComponent } from './itemcard.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [ItemCardComponent],
  declarations: [ItemCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemCardModule {}
