import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillingComponent } from './billing/billing.component';
import { LoginComponent } from './login/login.component';
import { TransformerComponent } from './transformer/transformer.component';



@NgModule({
  declarations: [
    LoginComponent,
    TransformerComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ViewsModule { }
