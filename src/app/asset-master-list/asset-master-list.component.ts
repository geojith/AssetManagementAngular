import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AssetMaster } from '../asset-master';
import { Observable } from 'rxjs';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-asset-master-list',
  templateUrl: './asset-master-list.component.html',
  styleUrls: ['./asset-master-list.component.scss']
})
export class AssetMasterListComponent implements OnInit {

  masters: Observable<AssetMaster[]>;

  constructor(private authService: AuthService, private router: Router, private masterService: MasterService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData(){
    this.masters=this.masterService.getMasterList();
    
    this.masters.forEach(x=>{
    console.log(x);
    })
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}










