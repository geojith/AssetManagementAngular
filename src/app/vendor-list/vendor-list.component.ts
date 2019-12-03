import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VendordefService } from '../vendordef.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { AssetType } from '../asset-type';
import { AssetDefService } from '../asset-def.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete this record';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  assettype: Observable<[AssetType[]]>
  vendors: Observable<Vendor[]>

  constructor(private vendorService: VendordefService,
    private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService,private assetService:AssetDefService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.assettype = this.assetService.getAssetTypes();
    this.vendors = this.vendorService.getVendorList();

  }

  deletevendor(id: number) {
    this.vendorService.deleteVendor(id).subscribe(data => {
      console.log(data);
      this.toastr.error('oh no! :)', 'Deleted successfully');

      this.reloadData();
    })
  }

}