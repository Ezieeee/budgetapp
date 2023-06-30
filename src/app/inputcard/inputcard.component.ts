import { Component, OnInit } from '@angular/core';
import { Card, radio, Months } from '../interface/item.interface';
import { CardValueService } from '../services/cardvalue.service';

import { DatawriterService } from '../services/datawriter.service';

@Component({
  selector: 'app-inputcard',
  templateUrl: './inputcard.component.html',
  styleUrls: ['./inputcard.component.scss'],
})
export class InputcardComponent implements OnInit {
  public invoice: Months;

  isModalOpen = false;

  public selectedCard!: Card;

  public radio!: radio;

  constructor(
    public datawriterservice: DatawriterService,
    public cardValueService: CardValueService
  ) {
    this.invoice = cardValueService.getCards();
  }

  ngOnInit() {}

  public newCard(monthId: string) {
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

    if (this.cardValueService.months.hasOwnProperty(monthId)) {
      this.cardValueService.months[monthId].push(card);
    } else {
      this.cardValueService.months[monthId] = [card];
    }
  }

  public newRecord(cardId: string, monthId: string, recordId: string) {
    const month = this.cardValueService.months[monthId];

    if (month) {
      const cardIndex = month.findIndex((card) => card.id === cardId);

      if (cardIndex !== -1) {
        const card = month[cardIndex];
        const recordIndex = card.records.findIndex(
          (recordIndex) => recordIndex.id === recordId
        );

        if (recordIndex !== -1) {
          this.cardValueService.months[monthId][cardIndex].records.push({
            id: this.cardValueService.generateUUID(),
            recordName: 'Tétel neve',
            recordValue: 0,
          });
        }
      }
    }
  }

  public deleteRecord(cardId: string, monthId: string, recordId: string) {
    const month = this.cardValueService.months[monthId];

    if (month) {
      const cardIndex = month.findIndex((card) => card.id === cardId);

      if (cardIndex !== -1) {
        const card = month[cardIndex];
        const recordIndex = card.records.findIndex(
          (recordIndex) => recordIndex.id === recordId
        );

        if (recordIndex !== -1) {
          this.cardValueService.months[monthId][cardIndex].records.splice(
            recordIndex,
            1
          );

          if (
            this.cardValueService.months[monthId][cardIndex].records.length ===
            0
          ) {
            this.cardValueService.months[monthId].splice(cardIndex, 1);
          }
        }
      }
    }
  }

  public deleteCard(cardId: string, monthId: string) {
    const month = this.cardValueService.months[monthId];
    if (month) {
      const cardIndex = month.findIndex((card) => card.id === cardId);

      if (cardIndex !== -1) {
        this.cardValueService.months[monthId].splice(cardIndex, 1);
      }
    }
  }

  public saveData() {
    this.datawriterservice.saveLocalData(this.cardValueService.months);
    console.log('Sikeres mentés');
  }

  setOpen(isOpen: boolean, card?: Card) {
    if (card) {
      this.selectedCard = card;
    }
    this.isModalOpen = isOpen;
  }

  confirm(isOpen: boolean, monthId: string) {
    for (const card of this.cardValueService.months[monthId]) {
      if (card.id === this.selectedCard.id) {
        card.cardName = this.selectedCard.cardName;
        this.isModalOpen = isOpen;
      }
    }
  }
}
