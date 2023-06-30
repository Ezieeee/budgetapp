import { Injectable } from '@angular/core';
import { Months } from '../interface/item.interface';

@Injectable({
  providedIn: 'root',
})
export class CardValueService {
  public months: Months = {};

  public currentYear: number;
  public currentMonth: number;
  public totalValue: number = 0;
  public monthId: string = '';

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth() + 1;
  }

  getCurrentMonthName(): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[this.currentMonth - 1];
  }

  prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 1) {
      this.currentMonth = 12;
      this.currentYear--;
    }
    this.monthId = this.currentYear.toString() + this.currentMonth.toString();
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 12) {
      this.currentMonth = 1;
      this.currentYear++;
    }
    this.monthId = this.currentYear.toString() + this.currentMonth.toString();
  }

  public get totalValueNew() {
    let value: number = 0;
    let month = this.months[this.monthId];

    if (!month || Object.keys(month).length === 0) {
      return 0;
    }

    for (let card of month) {
      if (card.isIncame === true)
        for (let i = 0; i < card.records.length; i++) {
          value += card.records[i].recordValue;
        }
    }

    return value;
  }

  public get expenditure() {
    let value: number = 0;
    let month = this.months[this.monthId];

    if (!month || Object.keys(month).length === 0) {
      return 0;
    }

    for (let card of month) {
      if (card.isIncame === false)
        for (let i = 0; i < card.records.length; i++) {
          value += card.records[i].recordValue;
        }
    }

    return value;
  }

  public getCards(): Months {
    return this.months;
  }
  /*
  public summaryCosts() {
    let sumCard = 0;

    for (let i = 0; i < this.item.card.length; i++) {
      sumCard = 0;
      for (let j = 0; j < this.item.card[i].records.length; j++) {
        sumCard += this.item.card[i].records[j].recordValue;
      }
      this.item.card[i].sum = sumCard;
    }
  }

  

  public get expenditure() {
    let value: number = 0;
    for (let i = 0; i < this.item.card.length; i++) {
      if (this.item.card[i].isIncame === false) {
        for (let j = 0; j < this.item.card[i].records.length; j++) {
          value += this.item.card[i].records[j].recordValue;
        }
      }
    }
    return value;
  }
*/
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
