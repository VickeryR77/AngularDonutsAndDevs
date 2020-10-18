import { Component, OnInit, Input } from '@angular/core';
import { GCDonutsService } from '../gcdonuts.service';
import { Donuts } from '../interfaces/i-donut';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {


  @Input() dData: Donuts

  constructor(private donutService:GCDonutsService) { }

  ngOnInit(): void {

    this.donutService.getResult().subscribe(

      (data: Donuts) =>
        this.dData = data
    );



  }

  

}
