import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/observable';
import {IRestaurant} from './restaurants';
import { HttpClient } from '@angular/Common/Http';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';


@Injectable({
  providedIn: 'root'
})
export class RestaurantdbService {
  private _url:string='/assets/data/restaurantsdata.json'
  constructor(private http:HttpClient) { }
  getAll():Observable<IRestaurant[]>{
    return this.http.get<IRestaurant[]>(this._url);
  }
}
