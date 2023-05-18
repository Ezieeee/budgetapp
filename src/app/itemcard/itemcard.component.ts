import { Component, OnInit } from '@angular/core';
import { Item } from '../interface/item.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss'],
})
export class ItemCardComponent implements OnInit {
  public invoice: Item;

  constructor() {
    this.invoice = {
      card: [
        {
          cardName: 'Számlák',
          isIncame: false,
          records: [
            {
              recordName: 'villany',
              recordValue: 50,
            },
            {
              recordName: 'Gáz',
              recordValue: 100,
            },
          ],
        },

        {
          cardName: 'Számlák',
          isIncame: false,
          records: [
            {
              recordName: 'villany',
              recordValue: 50,
            },
            {
              recordName: 'Gáz',
              recordValue: 100,
            },
          ],
        },
      ],
    };
  }

  ngOnInit() {}
}
