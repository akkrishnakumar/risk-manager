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

  @Output() rowIndex = new EventEmitter<number>()
  @Output() entPrc = new EventEmitter<number>()
  @Output() stplos = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {}

  sendDelete(){
    this.rowIndex.emit(this.index)
  }

  updateEntryPrice(event){
    this.entPrc.emit(parseInt(event.target.value))
  }

  updateStopLoss(event){
    this.stplos.emit(parseInt(event.target.value))
  }

}
