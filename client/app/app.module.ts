import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { CartComponent }  from './components/cart.component';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, CartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }