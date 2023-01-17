import { Component, Output, EventEmitter } from '@angular/core';
import * as productData from '../user.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products = productData;
  @Output() productDetail: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log(this.products.users);
  }

  passData(product: any) {
    this.productDetail.emit(product);
  }
}
