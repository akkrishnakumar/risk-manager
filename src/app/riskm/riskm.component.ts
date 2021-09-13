import { element } from 'protractor';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  constructor() {}

  ngOnInit(): void {
    this.addRow();
  }

  addRow() {
    this.rows.push(
      new PositionSizing('A', 0, 0, 0, 0, 2, 0, this.capital, 0, 0)
    );
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

  reCalculate() {
    this.rows.map((ele, i, arr) => {
      if (i === 0) ele.capital = this.capital;
      else {
        const prevEle = arr[i - 1];
        ele.capital = prevEle.capital - prevEle.total;
      }

      this.riskType == true
        ? (ele.risk = this.riskAmt)
        : (ele.risk = this.capital * (this.riskAmt / 100));

      if (ele.entryprice != 0 && ele.stoploss != 0) {
        ele.shares = ele.risk / (ele.entryprice - ele.stoploss);
        ele.total = ele.shares * ele.entryprice;

        const diff = ele.entryprice - ele.stoploss;
        ele.exit = diff * 2 + ele.entryprice;
      }
    });
  }
}
