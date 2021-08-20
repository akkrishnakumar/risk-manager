import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-riskm',
  templateUrl: './riskm.component.html',
  styleUrls: ['./riskm.component.css']
})
export class RiskmComponent implements OnInit {

  tickers = "A"
  capital = 0
  entryprice = 0
  stoploss = 0
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
    this.exit = (this.entryprice - this.stoploss) + this.entryprice
    
    this.risk = this.capital * 0.01
  
    this.shares = this.risk - (this.entryprice-this.stoploss)

    this.total = this.entryprice * this.shares

    this.newcapital = this.capital - this.total
  } 
}
