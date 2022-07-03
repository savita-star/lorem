import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct, ProductType } from '@lorem/api-interfaces';

@Component({
  selector: 'lorem-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: IProduct;
  proudctType = ProductType;
}
