import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TransformerComponent } from './transformer/transformer.component';
import { BillingComponent } from './billing/billing.component';



@NgModule({
  declarations: [
    LoginComponent,
    TransformerComponent,
    BillingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
