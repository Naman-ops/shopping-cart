import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  @Output() productClicked = new EventEmitter();
  // @Input('totalCarts')  ;
  @Input() totalCarts:any;
  
    // totalCartds=['','','','']
  // totalCartds=['','','','']

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.totalCarts,'naman')

  }

}
