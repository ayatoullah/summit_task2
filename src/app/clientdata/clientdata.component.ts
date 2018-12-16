import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-clientdata',
  templateUrl: './clientdata.component.html',
  styleUrls: ['./clientdata.component.css']
})
export class ClientdataComponent implements OnInit {

  name:string="Smith"
  RoomNo:string="421"
  temp:number=23
  public today:number=Date.now();
 
  
  
  

  constructor() {
      setInterval(() => {
        this.today= Date.now();
      }, 1);
     
  }
  ngOnInit() {
  }

}
