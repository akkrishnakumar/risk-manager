import { PositionSizing } from './../models/risk-data';
import { Component, OnInit } from '@angular/core';
import { RiskserviceService } from '../riskservice.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css'],
})
export class HoldingsComponent implements OnInit {
  constructor(private riskService: RiskserviceService) {}

  holds: PositionSizing[] = [];

  ngOnInit(): void {
    this.getHoldings;
  }

  getHoldings() {
    this.holds = this.riskService.getHoldings();
    console.log(this.holds);
  }

  clear() {
    this.holds = [];
  }
}
