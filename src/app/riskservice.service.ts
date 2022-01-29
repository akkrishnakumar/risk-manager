import { PositionSizing } from './models/risk-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RiskserviceService {
  private holdings: Array<PositionSizing> = [];
  private rows: Array<PositionSizing> = [];

  constructor() {}

  add(holding: PositionSizing) {
    this.holdings.push(holding);
  }

  getHoldings(): PositionSizing[] {
    return this.holdings;
  }

  getPositionSizings(): PositionSizing[] {
    return this.rows
  }

  addNewPositionSizing(capital: number) {
    this.rows.push(
      new PositionSizing('A', 0, 0, 0, 0, 2, 0, capital, 0, 0)
    )
  }

  updatePositionSizing(positionSizing: PositionSizing[]) {
    this.rows = positionSizing
  }

  clear(){
    this.holdings = []
  }
}
