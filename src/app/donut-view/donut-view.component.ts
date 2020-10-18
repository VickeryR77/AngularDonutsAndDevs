import { Component, OnInit, Input } from '@angular/core';
import { IDonut } from "../interfaces/i-donut";

@Component({
  selector: 'app-donut-view',
  templateUrl: './donut-view.component.html',
  styleUrls: ['./donut-view.component.css']
})
export class DonutViewComponent implements OnInit {

  pic:string;

  @Input() donut:IDonut;

  constructor() { }

  ngOnInit(): void {
  }

}
