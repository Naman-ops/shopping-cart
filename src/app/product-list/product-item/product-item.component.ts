import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:any;

  showDesc=false
  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.product,'naman')

  }

}
