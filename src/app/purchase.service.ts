import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from './purchase';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'http://localhost:62618/api';

  constructor(private http: HttpClient) { }

  getAssettypes(na: string): Observable<any> {
    return this.http.get(this.baseUrl + '/Asset_type?na=' + na);
  }

  getAllAssettypes(): Observable<any> {
    return this.http.get(this.baseUrl + '/Asset_type');
  }

  getVendors(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/purchase_det/' + id);
  }

  getAsset(na: string): Observable<any> {
    return this.http.get(this.baseUrl + '/purchase_det?name=' + na);
  }

  postPurchase(po: Purchase) {
    return this.http.post(this.baseUrl + '/purchase_det', po);
  }

  getPurchaseList(): Observable<any> {
    return this.http.get(this.baseUrl + '/purchase_det');
  }

  getPurchase(id: number): Observable<any>{
    return this.http.get(this.baseUrl+'/PurchaseEdit/'+ id);
  }

  updatePurchase(id:number, purchase: Purchase): Observable<any>{
    return this.http.put(this.baseUrl+'/PurchaseEdit/'+ id, purchase);
  }

  cancelPurchase(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/purchase_det/'+ id);
  }

}



