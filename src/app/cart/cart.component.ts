import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalCartds=['']
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
