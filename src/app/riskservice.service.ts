import { PositionSizing } from './models/risk-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RiskserviceService {
  holdings: PositionSizing[] = [];

  constructor() {}

  add(holding: PositionSizing) {
    this.holdings.push(holding);
  }

  getHoldings(): PositionSizing[] {
    return this.holdings;
  }
}
