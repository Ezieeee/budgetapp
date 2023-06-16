import { Component, OnInit } from '@angular/core';
import { Item, Card } from '../interface/item.interface';
import { CardValueService } from '../services/cardvalue.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss'],
})
export class ItemCardComponent implements OnInit {
  public invoice: Item;

  constructor(cardValueService: CardValueService) {
    this.invoice = cardValueService.getCards();
  }

  ngOnInit() {}
}
