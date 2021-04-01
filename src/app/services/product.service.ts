import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { product } from '../models/product';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  apiUrl = 'https://localhost:44371/api/';

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<product>> {
    let newPath = this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<product>>(newPath)     
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<product>> {
    let newPath = this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<product>>(newPath)     
  }

  add(product:product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product);
  }
}
