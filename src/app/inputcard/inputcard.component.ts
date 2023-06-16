import { Component, OnInit } from '@angular/core';
import { Item, Card } from '../interface/item.interface';
import { CardValueService } from '../services/cardvalue.service';

@Component({
  selector: 'app-inputcard',
  templateUrl: './inputcard.component.html',
  styleUrls: ['./inputcard.component.scss'],
})
export class InputcardComponent implements OnInit {
  public invoice: Item;

  constructor(public cardValueService: CardValueService) {
    this.invoice = cardValueService.getCards();
  }

  ngOnInit() {}

  public newGroup() {
    let card: Card = {
      id: this.cardValueService.generateUUID(),
      cardName: 'Kártya név',
      isIncame: false,
      records: [
        {
          id: this.cardValueService.generateUUID(),
          recordName: 'Tétel neve',
          recordValue: 0,
        },
      ],
    };
    this.cardValueService.addCard(card);
    console.log(this.cardValueService.generateUUID());
  }

  public valami() {
    this.cardValueService.summaryValues();
    console.log(this.cardValueService.totalValue);
  }

  public deleteCard(id: string) {
    let objID = this.invoice.card.findIndex((objID) => objID.id === id);
    console.log(objID);
    this.invoice.card.splice(objID, 1);
  }

  public addRecord(id: string) {
    let objID = this.invoice.card.findIndex((objID) => objID.id === id);

    this.invoice.card[objID].records.push({
      id: this.cardValueService.generateUUID(),
      recordName: 'Tétel neve',
      recordValue: 0,
    });
  }

  public deleteRecord(cardId: string, recordID: string) {
    let objID = this.invoice.card.findIndex((objID) => objID.id === cardId);
    let recordIndex = this.invoice.card[objID].records.findIndex(
      (record) => record.id === recordID
    );
    if (recordIndex === 0) {
      this.invoice.card.splice(objID, 1);
    } else {
      this.invoice.card[objID].records.splice(recordIndex, 1);
    }

    console.log(cardId, recordID, recordIndex);
  }
}
