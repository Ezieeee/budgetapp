import { Component, OnInit } from '@angular/core';
import { CardValueService } from '../services/cardvalue.service';
import { Months } from '../interface/item.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss'],
})
export class ItemCardComponent implements OnInit {
  public invoice: Months;

  constructor(public cardValueService: CardValueService) {
    this.invoice = cardValueService.getCards();
  }

  ngOnInit() {}
}
