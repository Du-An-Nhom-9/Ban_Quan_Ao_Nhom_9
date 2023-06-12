import { Component } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    img: ['',[Validators.required]],
    description:['',[Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router:Router,) {

  }
  onHandleSubmit() {
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      img: this.productForm.value.img || "",
      description:this.productForm.value.description || ""
    }

    this.productService.addProduct(product).subscribe((product) => {
      console.log('product', product);
      this.router.navigate(['admin/dashboard']);
  })
}
}