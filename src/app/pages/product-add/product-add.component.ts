import { Component } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms'
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formbuilder.group({
    name:['',[Validators.required]],
    price: [0],
    img:['',[Validators.required]],
    description:['',[Validators.required]],
  })
  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductService
  ){}
  onHandleSubmit(){
    this.productService.product(this.productForm.value).subscribe((product:any)=>{
      console.log("Product",product);
      
    })
  }
}
