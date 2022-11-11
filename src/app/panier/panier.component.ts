import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  products$ : Observable<Product[]>;
  products:  Product[];
  constructor(private store:Store) {
    this.products$ = new Observable();
    this.products = [];
   }

  ngOnInit(): void {

  }


}
