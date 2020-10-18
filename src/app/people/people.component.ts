import { Component, OnInit, Input } from '@angular/core';
import { GCHallOfFameService } from '../gchall-of-fame.service';
import { People } from '../interfaces/i-person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input() pData: People

  constructor(private fameService:GCHallOfFameService) { }

  ngOnInit(): void {

    this.fameService.getResult().subscribe(

      (data: People) =>
        this.pData = data
    );
  }

}
