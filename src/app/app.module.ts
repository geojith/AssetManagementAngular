import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { VendorDefComponent } from './vendor-def/vendor-def.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseUpdateComponent } from './purchase-update/purchase-update.component';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { AssetMasterListComponent } from './asset-master-list/asset-master-list.component';
import { MasterOrderListComponent } from './master-order-list/master-order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetDefComponent,
    AssetListComponent,
    AssetEditComponent,
    AdminComponent,
    LoginComponent,
    VendorDefComponent,
    VendorEditComponent,
    VendorListComponent,
    PurchaseOrderComponent,
    PurchaseListComponent,
    PurchaseUpdateComponent,
    AssetMasterComponent,
    AssetMasterListComponent,
    MasterOrderListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

