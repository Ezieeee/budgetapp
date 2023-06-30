import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Months } from '../interface/item.interface';
import { Observable } from 'rxjs';
import { CardValueService } from './cardvalue.service';

@Injectable({
  providedIn: 'root',
})
export class DatawriterService {
  public dataUrl = 'assets/data.json';
  constructor(public http: HttpClient) {}

  public getLocalData(): Months | null {
    let getDataItem: string | null = localStorage.getItem('months');

    if (getDataItem === null) {
      return null;
    } else {
      return JSON.parse(getDataItem);
    }
  }

  public saveLocalData(months: Months) {
    localStorage.setItem('months', JSON.stringify(months));
  }

  public getData(): Observable<Months> {
    return this.http.get<Months>(this.dataUrl);
  }

  public saveData(data: Months): Observable<void> {
    return this.http.put<void>(this.dataUrl, data);
  }
}
