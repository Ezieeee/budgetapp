import { Component, OnInit } from '@angular/core';
import { Item, Card, radio } from '../interface/item.interface';
import { CardValueService } from '../services/cardvalue.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-inputcard',
  templateUrl: './inputcard.component.html',
  styleUrls: ['./inputcard.component.scss'],
})
export class InputcardComponent implements OnInit {
  public invoice: Item;

  isModalOpen = false;

  public selectedCard!: Card;

  public radio!: radio;

  constructor(public cardValueService: CardValueService) {
    this.invoice = cardValueService.getCards();
  }

  ngOnInit() {}

  public newGroup() {
    let card: Card = {
      id: this.cardValueService.generateUUID(),
      cardName: 'Kártya név',
      isIncame: true,
      sum: 0,
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

  setOpen(isOpen: boolean, cards?: Card) {
    if (cards) {
      this.selectedCard = cards;
    }

    this.isModalOpen = isOpen;
  }

  confirm(isOpen: boolean) {
    for (let i = 0; i < this.invoice.card.length; i++) {
      if (this.invoice.card[i].id === this.selectedCard.id) {
        this.invoice.card[i].cardName = this.selectedCard.cardName;
        this.invoice.card[i].isIncame = this.selectedCard.isIncame;
        this.isModalOpen = isOpen;

        console.log(
          this.invoice.card[i].id,
          this.selectedCard.id,
          this.selectedCard.cardName,
          this.invoice.card[i].cardName,
          this.selectedCard.isIncame,
          this.invoice.card[i].isIncame
        );
      }
    }
  }
}
