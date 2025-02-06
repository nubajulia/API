import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';

@Component({
    selector: 'app-product-detail',
    imports: [CommonModule],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  loading: boolean = true;
  public product?: IProduct;
  character: any;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getCharacter(params['id']).subscribe((data: any) => {
        this.character = data;
      });
    }
    )
  }

}

