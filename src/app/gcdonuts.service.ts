import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Donuts } from './interfaces/i-donut'
import { IDonut } from './interfaces/i-donut'

@Injectable({
  providedIn: 'root'
})
export class GCDonutsService {

  constructor(private http:HttpClient) { }

getResult(){
  return this.http.get<Donuts>('https://grandcircusco.github.io/demo-apis/donuts.json');
}

}
