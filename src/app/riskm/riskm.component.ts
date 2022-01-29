import { RiskserviceService } from './../riskservice.service';
import { Component, OnInit } from '@angular/core';
import { PositionSizing } from '../models/risk-data';

@Component({
  selector: 'app-riskm',
  templateUrl: './riskm.component.html',
  styleUrls: ['./riskm.component.css'],
})
export class RiskmComponent implements OnInit {
  rows: Array<PositionSizing> = [];
  capital: number = 100000;
  riskType: boolean = false; // when false -> percent, when true -> fixed amt
  riskAmt: number = 2;

  constructor(private riskService: RiskserviceService) {}

  ngOnInit(): void {
    this.rows = this.riskService.getPositionSizings();
  }

  addRow() {
    this.riskService.addNewPositionSizing(this.capital);
    this.reCalculate();
  }

  deleteRow(sendIndex: number) {
    this.rows.splice(sendIndex, 1);
    this.reCalculate();
  }

  toggleRiskType(event) {
    this.riskType = event.checked;
    this.updateRiskAmt(0);
  }

  updateRiskAmt(amount: number) {
    this.riskAmt = amount;
    this.reCalculate();
  }

  updateCapital(event) {
    this.capital = parseInt(event.target.value);
    this.reCalculate();
  }

  entryPriceUpdated(event, i: number) {
    const entrow = this.rows.find((_, index) => index === i);
    entrow.entryprice = event;
    this.rows.splice(i, 1, entrow);
    this.reCalculate();
  }

  stopLossUpdated(event, i: number) {
    const stoprow = this.rows.find((_, index) => index === i);
    stoprow.stoploss = event;
    this.rows.splice(i, 1, stoprow);
    this.reCalculate();
  }

  holdings(hol: number) {
    const holrow = this.rows.find((_, index) => index === hol);
    this.riskService.add(holrow);
    this.rows.splice(hol, 1);
    this.reCalculate();
  }

  reCalculate() {
    const updatedRows = this.rows.map((row, i, arr) => {
      if (i === 0) row.capital = this.capital;
      else {
        const prevRow = arr[i - 1];
        row.capital = prevRow.capital - prevRow.total;
      }

      this.riskType == true
        ? (row.risk = this.riskAmt)
        : (row.risk = this.capital * (this.riskAmt / 100));

      if (row.entryprice != 0 && row.stoploss != 0) {
        row.shares = row.risk / (row.entryprice - row.stoploss);
        row.total = row.shares * row.entryprice;

        const diff = row.entryprice - row.stoploss;
        row.exit = diff * 2 + row.entryprice;

        return row;
      }
    });
    this.riskService.updatePositionSizing(updatedRows);
  }
}
