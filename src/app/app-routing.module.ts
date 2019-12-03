import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { LoginComponent } from './login/login.component';
import { VendorDefComponent } from './vendor-def/vendor-def.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { PurchaseUpdateComponent } from './purchase-update/purchase-update.component';
import { AssetMasterListComponent } from './asset-master-list/asset-master-list.component';
import { MasterOrderListComponent } from './master-order-list/master-order-list.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create', component: AssetDefComponent },
  { path: 'edit/:id', component: AssetEditComponent },
  { path: 'assets', component: AssetListComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent },
  { path: 'Vendor', component: VendorDefComponent},
  { path: 'Vendors', component: VendorListComponent },
  { path: 'vendoredit/:id', component: VendorEditComponent},
  { path: 'purchase', component: PurchaseOrderComponent },
  { path: 'orderhistory', component: PurchaseListComponent},
  { path: 'assetmaster', component: AssetMasterComponent },
  { path: 'assetmasterlist', component: AssetMasterListComponent},
  { path: 'masterorderlist', component: MasterOrderListComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'editpurchase/:id', component: PurchaseUpdateComponent },
  {path:'assetmaster/:id',component:AssetMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

