import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { lastValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit  {
  show: boolean = false;
  products:any[] = [];
  form!: FormGroup;
  constructor(private p:ProductService, private fb:FormBuilder) { }

  async ngOnInit() {
   this.products =  await lastValueFrom(this.p.getProducts());
   this.form = this.fb.group({
      name: [null,Validators.required],
      description: [null],
      price: [null,Validators.required]
    });
    this.show = true;
  } 
  addProduct(){
    console.log("Adding")
  }
}
