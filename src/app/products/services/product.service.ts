import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
   return this.http.get<any>('https://localhost:7254/Product') 
  } 
  addProduct(Nombre:any,Descripcion:any,Precio:any){
    return this.http.post<any>('https://localhost:7254/Product',  {Nombre:Nombre,Descripcion:Descripcion,Precio:Precio})
  }
  deleteProduct(Id:number){
    return this.http.delete<any>('https://localhost:7254/Product/'+Id) 
  }
}
