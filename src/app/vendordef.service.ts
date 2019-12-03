import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';


@Injectable({
  providedIn: 'root'
})
export class VendordefService {

  private baseUrl = 'http://localhost:62618/api';

  constructor(private http: HttpClient) { }


  getVendorList(): Observable<any> {
    return this.http.get(this.baseUrl + '/vendor_det');
  }


  deleteVendor(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/vendor_det/' + id);
  }

  addVendor(vendor: Vendor) {
    return this.http.post(this.baseUrl + '/vendor_det', vendor);
  }

  getAssetTypes(): Observable<any> {
    return this.http.get(this.baseUrl + '/Asset_type');
  }

  getVendor(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/vendor_det/' + id);
  }
  putVendor(id: number, vendor: Vendor): Observable<any> {
    return this.http.put(this.baseUrl + '/vendor_det/' + id, vendor);
  }
  updateVendor(id: number, vendor: Vendor) {
    return this.http.put(this.baseUrl + '/vendor_det/' + id, vendor);
  }

}




