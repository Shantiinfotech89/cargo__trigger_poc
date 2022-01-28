import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

declare var $: any; 
import { LitegraphComponent } from './litegraph/litegraph.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'litegraph', component: LitegraphComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    LitegraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 

} 
