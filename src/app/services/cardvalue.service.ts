import { Injectable } from '@angular/core';
import { Card, Item, Summary } from '../interface/item.interface';

@Injectable({
  providedIn: 'root',
})
export class CardValueService {
  public item: Item = {
    card: [],
  };

  public totalValue: number = 0;

  constructor() {}

  public getCards(): Item {
    return this.item;
  }

  public addCard(card: Card): void {
    this.item.card.push(card);
  }

  public summaryValues(): number {
    for (let i = 0; i < this.item.card.length; i++) {
      for (let j = 0; j < this.item.card[i].records.length; j++) {
        this.totalValue += this.item.card[i].records[i].recordValue;
      }
    }

    console.log(typeof this.totalValue);
    return this.totalValue;
  }

  public get totalValueNew() {
    let value: number = 0;
    for (let i = 0; i < this.item.card.length; i++) {
      for (let j = 0; j < this.item.card[i].records.length; j++) {
        value += this.item.card[i].records[j].recordValue;
      }
    }

    return value;
  }

  public generateUUID() {
    var d = new Date().getTime();
    var d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
}
