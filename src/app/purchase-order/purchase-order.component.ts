import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PurchaseService } from '../purchase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';
import { Vendor } from '../vendor';
import { Purchase } from '../purchase';
import { element } from 'protractor';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  purchaseForm: FormGroup;
  assettypes: Observable<AssetType[]>;
  vendors: Observable<Vendor[]>;
  assetId: number;

  purchaseorder: Purchase = new Purchase();

  constructor(private purchaseService: PurchaseService,
    private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit() {
    this.purchaseForm = this.formBuilder.group({
      pd_order_no: ['ORD' + Math.floor((Math.random() * 10000) + 1), Validators.compose([Validators.required])],
      pd_type_id: ['', Validators.compose([Validators.required])],
      pd_qty: ['', Validators.compose([Validators.required])],
      pd_vendor_id: ['', Validators.compose([Validators.required])]

    });
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('logout');

  }

  onOptionsSelected(value: number) {
    this.vendors = this.purchaseService.getVendors(value);
    this.vendors.subscribe(data => {

    })
  }

  searchAssetType(na: string) {
    this.assettypes = this.purchaseService.getAssettypes(na);
    this.purchaseService.getAsset(na).subscribe(element => {
      console.log(element["ad_id"]);
      this.assetId = element["ad_id"];
    });



  }

  addOrder() {
    console.log(this.assetId);

    this.purchaseorder.pd_order_no = this.purchaseForm.controls.pd_order_no.value;
    this.purchaseorder.pd_ad_id = this.assetId;
    this.purchaseorder.pd_qty = this.purchaseForm.controls.pd_qty.value;
    this.purchaseorder.pd_type_id = this.purchaseForm.controls.pd_type_id.value;
    this.purchaseorder.pd_vendor_id = this.purchaseForm.controls.pd_vendor_id.value;
    this.purchaseorder.pd_status = 'PO-Raised with Supplier';

    this.purchaseService.postPurchase(this.purchaseorder).subscribe(res => {
      this.toastr.success('Order Placed');
    })

  }

}







