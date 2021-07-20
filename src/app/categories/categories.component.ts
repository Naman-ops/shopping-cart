import { Component, OnInit } from '@angular/core';
import * as categories from "../../server/categories/index.get.json";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any = categories

  constructor() {
    console.log(typeof this.categories,'users')
    // this.categories = [...this.categories]
    console.log( this.categories,'users')

   }

  ngOnInit(): void {
  }

}
