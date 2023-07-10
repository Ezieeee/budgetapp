import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ItemCardModule } from '../itemcard/itemcard.module';
import { ForintModule } from '../pipes/forint.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ItemCardModule,
    ForintModule,
  ],
  declarations: [Tab1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1PageModule {}
