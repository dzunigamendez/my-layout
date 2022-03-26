import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductById(id: string): Observable<Product> {
    return of({ id, name: `Product ${id}` });
  }
}
