import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgForm,NgModel,FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HttpClientModule,HttpClient} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:"",component:HomeComponent}
      ]
    )
  ],
  providers: [
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
