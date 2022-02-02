import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
import { LitegraphComponent } from './litegraph/litegraph.component';
import { AppComponent } from './app.component';
const appRoutes1: Routes = [
  { path: '',  component: AppComponent},
  { path: 'litegraph',  component: LitegraphComponent},
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
