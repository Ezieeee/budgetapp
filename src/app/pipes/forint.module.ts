import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ForintPipe } from './forint.pipe';

@NgModule({
  exports: [ForintPipe],
  declarations: [ForintPipe],
})
export class ForintModule {}
