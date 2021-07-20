import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  filters:Array<String> =['Fruits & Vegetables','Bakery Cakes and Dairy','Beverage','Beauty and Hygine','Baby Care']
  constructor() { }

  ngOnInit(): void {
  }

}
