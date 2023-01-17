import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';
  // count: number = 0;
  // childHide: boolean = true;
  products = [
    {
      title: 'Product 1',
      id: 1,
      description: 'product 1 detail',
    },
    {
      title: 'Product 2',
      id: 2,
      description: 'product 2 detail',
    },
    {
      title: 'Product 3',
      id: 3,
      description: 'product 3 detail',
    },
  ];
  productdetail: any = null;

  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   this.count--;
  // }

  // toggleChild() {
  //   this.childHide = !this.childHide;
  // }

  assignData(event: any) {
    //console.log(event);
    this.productdetail = event;
  }
}
