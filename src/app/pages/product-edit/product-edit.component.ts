import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';

import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    img: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute,
    private route:Router
  ) {
    this.router.paramMap.subscribe((params => {
      const id = String(params.get('id'));
      this.productService.getProduct(id).subscribe(data => {
        this.product = data;
        console.log(data);
        
        this.productForm.patchValue({
          name: data.name,
          img:data.img,
          description:data.description,
          price: data.price
        })
      }, error => console.log(error.message))
    }))
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        img:this.productForm.value.img || "",
        description: this.productForm.value.description || "",
        price: this.productForm.value.price || 0
      }

      this.productService.updateProduct(product).subscribe((product) => {
        console.log('product', product);
        this.route.navigateByUrl("admin/dashboard")
      })
    }
  }
}
