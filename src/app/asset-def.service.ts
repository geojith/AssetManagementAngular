import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDef } from './asset-def';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {

  private baseUrl= 'http://localhost:62618/api';

  constructor(private http: HttpClient) { }

  getAssetList(): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_def');
  }


  deleteAsset(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/Asset_def/'+id);
  }

  addAsset(asset: AssetDef){
    return this.http.post(this.baseUrl+'/Asset_def',asset);
  }
  
  getAsset_def(name: string): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_def?na='+name);
  }

  putAsset_def(id:number, asset: AssetDef): Observable<any>{
    return this.http.put(this.baseUrl+'/Asset_def/'+ id, asset);
  }

  getAssetType(id: number): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type/'+id);
  }

  getAssetTypes(): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type');
  }

}
