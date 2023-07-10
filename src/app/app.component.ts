import { Component } from '@angular/core';
import { Card, Months } from './interface/item.interface';
import { CardValueService } from './services/cardvalue.service';
import { DatawriterService } from './services/datawriter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public months: Months | null = null;

  constructor(
    public cardvalueservice: CardValueService,
    public datawriterservice: DatawriterService
  ) {
    this.datawriterservice.getLocalData();
    this.months = this.datawriterservice.getLocalData(); // Betöltjük az adatokat a months objektumba
    console.log(this.months);
    if (this.months !== null) {
      this.cardvalueservice.months = this.months;
    }
  }
}
