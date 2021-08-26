import { Component, OnInit, Input } from '@angular/core';
import { PositionSizing } from 'src/app/models/risk-data';

@Component({
  selector: 'app-psrow',
  templateUrl: './psrow.component.html',
  styleUrls: ['./psrow.component.css']
})
export class PsrowComponent implements OnInit {

  @Input() ps : PositionSizing 

  constructor() { }

  ngOnInit(): void {
  }

}
