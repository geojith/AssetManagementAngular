import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-master-order-list',
  templateUrl: './master-order-list.component.html',
  styleUrls: ['./master-order-list.component.scss']
})
export class MasterOrderListComponent implements OnInit {
  purchases: Observable<Purchase[]>;
  
  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private masterOrderService: MasterService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.purchases=this.masterOrderService.getAssetOrders();
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}
