import { Component, OnInit } from '@angular/core';
import { AssetDef } from '../asset-def';
import { AssetType } from '../asset-type';
import { AssetDefService } from '../asset-def.service';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  assetForm: FormGroup;
  assettypes: Observable<AssetType[]>;
  assets: Observable<AssetDef[]>;
  asset: AssetDef;

  constructor(private assetService: AssetDefService,
    private router: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  id: number;
  pdt: any;

  ngOnInit() {

   this.id = this.router.snapshot.params["id"];
    this.assetForm = this.formBuilder.group({
      ad_name: ['', Validators.compose([Validators.required])],
      ad_type_id: ['', Validators.compose([Validators.required])],
      ad_class: ['', Validators.compose([Validators.required])]
    });
    this.assetService.GetAsset(this.id).subscribe(x => {
      this.asset = x;
    });

    this.assettypes = this.assetService.getAssetTypes();

  }


  get formControls() {
    return this.assetForm.controls;
  }

  updateAsset() {
    this.asset.ad_id=this.id;
    this.asset.ad_name = this.assetForm.controls.ad_name.value;
    this.asset.ad_type_id = this.assetForm.controls.ad_type_id.value;
    this.asset.ad_class = this.assetForm.controls.ad_class.value;

    this.assetService.putAsset_def(this.id,this.asset).subscribe(res => {
      this.toastr.success("Asset updated")
    });
  }

}




