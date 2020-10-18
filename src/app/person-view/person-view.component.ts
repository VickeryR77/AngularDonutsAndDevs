import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../interfaces/i-person';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() person:IPerson;

  constructor() { }

  ngOnInit(): void {
  }

}
