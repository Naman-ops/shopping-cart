import { Component, OnInit } from '@angular/core';
import * as offers from "../../server/banners/index.get.json";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers:any = offers

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.offers)
  }

}
