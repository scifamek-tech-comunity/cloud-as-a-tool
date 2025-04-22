import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransformerComponent } from './views/transformer/transformer.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  {
    path: '',
    component: TransformerComponent,
  },
  {
    path: 'transformer',
    component: TransformerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
