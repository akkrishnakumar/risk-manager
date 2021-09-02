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
  fix: boolean = false;

  capital: number = 10000;
  riskType: boolean = false; // when false -> percent, when true -> fixed amt
  riskAmt: number = 2;

  constructor() {}

  ngOnInit(): void {
    this.addRow();
  }

  public calculate() {
    // this.rows.map((ele, i, arr) => {
    //   // ele.stoploss = this.stoploss.value
    //   // ele
    //   ele.exit = (ele.entryprice - ele.stoploss)*2 + ele.entryprice
    //   if(this.fix){
    //     ele.risk = this.ps.value
    //   }else{
    //     ele.risk = ele.capital * (this.ps.value/100)
    //   }
    //   ele.shares = ele.risk / (ele.entryprice-ele.stoploss)
    //   ele.total = ele.entryprice * ele.shares
    // })
  }

  addRow() {
    this.rows.push(
      new PositionSizing('A', 0, 0, 0, 0, 2, 0, this.capital, 0, 0)
    );
    this.reCalculate()
  }

  toggleRiskType(event) {
    this.riskType = event.checked;
    this.updateRiskAmt(0);
  }

  deleteRow(sendIndex: number) {
    this.rows.splice(sendIndex, 1);
    console.log(this.rows);
  }

  updateRiskAmt(amount: number) {
    this.riskAmt = amount;
    this.reCalculate();
  }

  updateCapital(event) {
    this.capital = parseInt(event.target.value);
    console.log(this.capital, event.target.value);
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

      if (ele.entryprice != 0) {
        ele.shares = ele.risk / (ele.entryprice - ele.stoploss);
        ele.total = ele.shares * ele.entryprice;
      }
    });
  }
}
