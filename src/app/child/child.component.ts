import { Component, Input, OnInit } from '@angular/core';
import { CarsEnum } from './enums/carEnum';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  carsEnum = CarsEnum;

  @Input() car : string = ""
  ngOnInit(): void {
  }

}
