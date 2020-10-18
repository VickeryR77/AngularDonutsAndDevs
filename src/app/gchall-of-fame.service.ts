import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from './interfaces/i-person'

@Injectable({
  providedIn: 'root'
})
export class GCHallOfFameService {

  constructor(private http:HttpClient) { }

  getResult(){
    return this.http.get<People>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json');
  }

}
