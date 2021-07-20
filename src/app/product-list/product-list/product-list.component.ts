import { Component, OnInit } from '@angular/core';
import * as products from "../../../server/products/index.get.json";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any = products

  constructor() {
    console.log(this.products,'products')
   }

  ngOnInit(): void {
  }

}
