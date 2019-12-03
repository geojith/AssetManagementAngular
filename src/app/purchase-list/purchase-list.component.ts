import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { Purchase } from '../purchase';
import { AssetType } from '../asset-type';
import { AssetDef } from '../asset-def';
import { Vendor } from '../vendor';
import { AssetDefService } from '../asset-def.service';
import { VendordefService } from '../vendordef.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  public popoverTitle: string = 'Cancel Order???';
  public popoverMessage: string = 'If sure, click Confirm...';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  purchases: Observable<Purchase[]>;
  assettype: Observable<AssetType[]>;
  assetdef: Observable<AssetDef[]>;
  vendor: Observable<Vendor[]>;


  constructor(private vendorService: VendordefService, private assetService: AssetDefService, private authService: AuthService, private toastr: ToastrService, private router: Router, private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.purchases = this.purchaseService.getPurchaseList();
    this.assettype = this.assetService.getAssetTypes();
    this.assetdef = this.assetService.getAssetList();
    this.vendor = this.vendorService.getVendorList();
    /*this.purchases.forEach(x=>{
      x.forEach(element=>{
        console.log(element["pd_ad_name"]);
      })
    })*/
  }

  Logout() {
    this.authService.logout();
    this.router.navigateByUrl('logout');

  }
  cancelOrder(id: number) {
    this.purchaseService.cancelPurchase(id).subscribe(res => {
      this.toastr.success('Order Cancelled');
      this.reloadData();
    })

  }

}
