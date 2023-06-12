import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/Product';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent {
  products!: IProduct[]
  constructor(private productService: ProductService,private router:Router,private location:Location) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      console.log(data);
      
    })
  }

 

  removeItem(id: any) {
    if(confirm('Are you sure you want to remove')){
      this.productService.deleteProduct(id).subscribe(() => {
    })
    }
  }
}
