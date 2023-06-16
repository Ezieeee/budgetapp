import { Component } from '@angular/core';
import { CardValueService } from '../services/cardvalue.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public cardValueService: CardValueService) {}
}
