import { Component, OnInit } from '@angular/core';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AssetDef } from '../asset-def';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete this record';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  assets: Observable<AssetDef[]>


  constructor(private assetService: AssetDefService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  AssetList() {

  }

  reloadData() {
    this.assets = this.assetService.getAssetList();

  }

  deleteasset(id: number) {
    this.assetService.deleteAsset(id).subscribe(data => {
      console.log(data);
      this.toastr.error('oh no! :)', 'Deleted successfully');

      this.reloadData();
    })
  }
search(ad_name:string)
{
  this.assets=this.assetService.searchAsset(ad_name);
if(ad_name="")
{
this.assets=this.assetService.getAssetList();
}
}
}
