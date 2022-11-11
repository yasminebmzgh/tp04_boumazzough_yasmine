import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Models/product.model';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private httpClient : HttpClient) { }

  public getCatalogue () : Observable<Product[]> {
    return this.httpClient.get<Product[]> (environment.catalogue);
  }
}
