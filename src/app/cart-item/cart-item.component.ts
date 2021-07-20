import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
