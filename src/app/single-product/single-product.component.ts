import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent {
  @Input() productDetail: any;
  @Output() removeValue: EventEmitter<null> = new EventEmitter<null>();

  removeProduct() {
    this.removeValue.emit(null);
  }
}
