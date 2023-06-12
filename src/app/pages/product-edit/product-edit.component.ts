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
  
}
