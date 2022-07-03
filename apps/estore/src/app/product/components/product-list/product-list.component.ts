/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, ProductType } from '@lorem/api-interfaces';

@Component({
  selector: 'lorem-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [
    {
      id: '1',
      brandName: 'LG',
      description: 'Computer',
      price: 100,
      productType: ProductType.Computer,
      isInStock: true,
      image: '',
    },
    {
      id: '2',
      brandName: 'LG',
      description: 'Computer',
      price: 100,
      productType: ProductType.Computer,
      isInStock: true,
      image: '',
    },
    {
      id: '3',
      brandName: 'LG',
      description: 'Computer',
      price: 100,
      productType: ProductType.Computer,
      isInStock: true,
      image: '',
    },
    {
      id: '4',
      brandName: 'LG',
      description: 'Computer',
      price: 100,
      productType: ProductType.Computer,
      isInStock: true,
      image: '',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  loadProductDetail(product: IProduct): void {
    this.router.navigate(['/products', product.id]);
  }
}
