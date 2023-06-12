import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import {Location} from '@angular/common'
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent {
  products!: IProduct[]
  constructor(private productService: ProductService,private router:Router,private location:Location) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      console.log(data);
      
    })
  }
}
