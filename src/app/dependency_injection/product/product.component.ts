import { Component, Inject } from '@angular/core';
import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  template: `<ul>
    <li *ngFor="let product of productsList">
      {{product.name}} - {{product.quantity}}
    </li>
  </ul>
  `
  ,
  providers: [ProductService]
})
export class ProductComponent {
              //ProductService'in injectionu
  /*constructor(private productService: ProductService){
    //Inject edilen ProductService'in Component içinde kullanımı
    console.log(productService.getProducts());
  }*/

    constructor(@Inject("productService") private productService:ProductService){
      console.log(productService.getProducts());
      
    }

  /*Aynı şekilde inject edilen Service içindeki fonksiyonun
  Component içinde kullanımı.*/
  productsList: Product[] = this.productService.getProducts();
}
