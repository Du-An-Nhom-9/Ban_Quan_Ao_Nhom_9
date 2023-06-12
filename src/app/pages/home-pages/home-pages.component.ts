import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
})
export class HomePagesComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      console.log(data);
      
    })
  }
}
