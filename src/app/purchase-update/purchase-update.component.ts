import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase-update',
  templateUrl: './purchase-update.component.html',
  styleUrls: ['./purchase-update.component.scss']
})
export class PurchaseUpdateComponent implements OnInit {

  purchase: Purchase= new Purchase();
  purchaseForm: FormGroup;
  id:number;

  constructor(private service: PurchaseService, private router:Router, private authService:AuthService, private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];

    this.purchaseForm=this.formBuilder.group({
      pd_date: ['',Validators.compose([Validators.required])],
      pd_ddate: ['',Validators.compose([Validators.required])]
    });
    this.service.getPurchase(this.id).subscribe(x=>{
      this.purchase=x;
      console.log(x["pd_dateStr"]);
    })
  }

  get formControls(){
    return this.purchaseForm.controls;
  }


  updatePurchase(){
    this.purchase.pd_id=this.id;
    this.purchase.pd_date=this.purchaseForm.controls.pd_date.value;
    this.purchase.pd_ddate=this.purchaseForm.controls.pd_ddate.value;
    this.purchase.pd_status='Consignment Received';
   
      this.service.updatePurchase(this.id, this.purchase).subscribe(res=>{
        this.toastr.success('Purchase Updated');
        this.router.navigateByUrl("orderhistory");
      });
    
  

  }

  cancelOrder(value: number)
  {


  }

}

