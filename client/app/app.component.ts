import { Component } from '@angular/core';
import {CartService} from './services/cart.service';


@Component({
  selector: 'my-app',
  template: '<cart> </cart>',
  providers:[CartService]
})

export class AppComponent { }


