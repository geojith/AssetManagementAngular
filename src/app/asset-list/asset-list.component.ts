import { Component, OnInit } from '@angular/core';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AssetDef } from '../asset-def';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  assets: Observable<AssetDef[]>

  constructor(private assetService: AssetDefService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  AssetList(){

  }

  reloadData(){
    this.assets=this.assetService.getAssetList();

  }

  deleteasset(id:number){
    this.assetService.deleteAsset(id).subscribe(data=>{
      console.log(data);
      this.reloadData();
    })
  }

}
