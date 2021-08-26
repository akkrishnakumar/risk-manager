import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PositionSizing } from '../models/risk-data';

@Component({
  selector: 'app-riskm',
  templateUrl: './riskm.component.html',
  styleUrls: ['./riskm.component.css']
})
export class RiskmComponent implements OnInit {

  rows : Array<PositionSizing> = []

  capital = new FormControl(0)
  entryprice = new FormControl(0)
  stoploss = new FormControl(0)
  
  tickers = "A"
  exit = 0
  risk = 0
  shares = 0
  total = 0

  riskreward = 2    
  newcapital = 0

  constructor() { }

  ngOnInit(): void {
  }

  public calculate(){
    this.exit = (this.entryprice.value - this.stoploss.value)*2 + this.entryprice.value
    
    this.risk = this.capital.value * 0.01
  
    this.shares = this.risk / (this.entryprice.value-this.stoploss.value)

    this.total = this.entryprice.value * this.shares

    this.newcapital = this.capital.value - this.total
  }

  addRow(){
    this.rows.push(
      new PositionSizing("A",0,0,0,0,0,0,0,0,0)
    )
  }
}
