import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetMaster } from './asset-master';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private baseUrl= 'http://localhost:62618/api';

  constructor(private http: HttpClient) { }

  getAssetOrders(): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetMasterOrderView');
  }

  getAssetOrder(id:string): Observable<any>{
    console.log(id);
    return this.http.get(this.baseUrl+'/AssetMasterOrderView?ordno='+id);
  }

  postAsset(asset: AssetMaster){
    return this.http.post(this.baseUrl+'/AssetMaster',asset);
  }

  updatePurchase(id:number, purchase: Purchase): Observable<any>{
    return this.http.put(this.baseUrl+'/AssetMaster/'+ id, purchase);
  }

  getMasterList(): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetMaster');
  }
  
}

