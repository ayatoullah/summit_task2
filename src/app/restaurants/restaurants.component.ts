import { Component, OnInit } from '@angular/core';
import { RestaurantdbService } from '../restaurantdb.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private ser:RestaurantdbService) { }
  public restaurantlist=[]
  ngOnInit() {
    this.ser.getAll().subscribe(data=>this.restaurantlist=data)
  }

}
