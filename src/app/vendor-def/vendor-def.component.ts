import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendordefService } from '../vendordef.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';

@Component({
  selector: 'app-vendor-def',
  templateUrl: './vendor-def.component.html',
  styleUrls: ['./vendor-def.component.scss']
})
export class VendorDefComponent implements OnInit {

  vendorForm: FormGroup;
  assettypes: Observable<AssetType[]>;
  vendor: Vendor = new Vendor();

  constructor(private vendorService: VendordefService,
    private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {

    this.vendorForm = this.formBuilder.group({
      vd_name: ['', Validators.compose([Validators.required])],
      vd_type: 'Supplier',
      vd_atype_id: ['', Validators.compose([Validators.required])],
      vd_from: ['', Validators.compose([Validators.required])],
      vd_to: ['', Validators.compose([Validators.required])],
      vd_addr: ['', Validators.compose([Validators.required])]
    });

    this.assettypes = this.vendorService.getAssetTypes();

  }

  addVendor() {
    this.vendor.vd_name = this.vendorForm.controls.vd_name.value;
    this.vendor.vd_type = this.vendorForm.controls.vd_type.value;
    this.vendor.vd_atype_id = this.vendorForm.controls.vd_atype_id.value;
    this.vendor.vd_from = this.vendorForm.controls.vd_from.value;
    this.vendor.vd_to = this.vendorForm.controls.vd_to.value;
    this.vendor.vd_addr = this.vendorForm.controls.vd_addr.value;

    this.vendorService.addVendor(this.vendor).subscribe(res => {
      if (res == 1){
        this.toastr.success("Vendor added successfully");
      }
     

      else{
        this.toastr.error("Vendor already exists");
      }
        

    });

  }
}





