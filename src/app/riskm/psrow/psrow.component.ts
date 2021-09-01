import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PositionSizing } from 'src/app/models/risk-data';

@Component({
  selector: 'app-psrow',
  templateUrl: './psrow.component.html',
  styleUrls: ['./psrow.component.css'],
})
export class PsrowComponent implements OnInit {
  @Input() ps: PositionSizing
  @Input() index : number

  @Output() sendIndex = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {}

  sendDelete(){
    this.sendIndex.emit(this.index)
    console.log(this.index)
  }
}
