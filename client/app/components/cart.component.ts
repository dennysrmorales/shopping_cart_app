import { Component } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
	moduleId: module.id,
  	selector: 'cart',
  	templateUrl: 'cart.component.html',
  	providers: [CartService]
})

export class CartComponent  { 
	products: Products[];
	categories: Categories[];
	food_prods: FoodProducts[];
	furn_prods: FurnProducts[];
	cart: Cart[];
	prod: string;
	units: string;
	cart_id: string;
	added_products = [];
	amounts = [];
	temp_obj = {};
	total: number;
	

	constructor(private cartService: CartService){

		this.cartService.getProducts().subscribe(products => {
			this.food_prods = products.products.filter((i) => i.category === "Foods")
			this.furn_prods = products.products.filter((i) => i.category === "Furniture")
			this.products = products.products
		});


		this.cartService.getCategories().subscribe(categories => {
			this.categories = categories.categories
		});

		this.cartService.getCart().subscribe(cart => {
			this.cart = cart.carts
		});

		this.total = 0;


  	}

  	addToCart(product, amounts, index){
  		this.amounts.push(1)
  		this.added_products.push(product)
  		this.addSubTotals(product, amounts, index);

	}

	clear(){
		this.added_products = []
	}
	
	getProd(){
		return Object.keys(this.temp_obj).join(",")
	}

	getTotal(price){
		return this.total + price
	}

	getUnits(){
		return Object.values(this.temp_obj).join(",")
	}

	addSubTotals(product, amounts, index){
		this.temp_obj[product.id] = amounts[index]
		this.total = this.getTotal(parseFloat(product.price));

	}

  	addNewCartEntry(event){
  		event.preventDefault();
        var newEntry = {
            "products": this.getProd(),
            "units": this.getUnits()
        }

		this.cartService.addNewCartEntry(newEntry)
            .subscribe(entry => {
            	this.cart_id = entry
                this.cart.push(entry);
                window.alert('PRODUCTS SUCCESSFULLY POSTED TO CART API, ID: ' + this.cart_id);
            });
	}
}


interface Cart{
	products: object;
	id: string;
	total_price:string;
}

interface Products {
	category: string;
	id: string;
	thumbnail: string;
	keywords: object;
	price: string;
	name: string;

}

interface FoodProducts {
	category: string;
	id: string;
	thumbnail: string;
	keywords: object;
	price: string;
	name: string;

}

interface FurnProducts {
	category: string;
	id: string;
	thumbnail: string;
	keywords: object;
	price: string;
	name: string;

}

interface AddedProducts {
	category: string;
	id: string;
	thumbnail: string;
	keywords: object;
	price: string;
	name: string;

}

interface Categories {
	name: string;
	id: string;
}