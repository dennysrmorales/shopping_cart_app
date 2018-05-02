import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class CartService {
    constructor(private http: Http){
        console.log('CartService Initialized...');
    }

    getProducts(){
        return this.http.get('/api/products')
            .map(res => res.json());
    }

    getCategories(){
        return this.http.get('/api/categories')
            .map(res => res.json());
    }


    getCart(){
        return this.http.get('/api/cart')
            .map(res => res.json());
    }

    addNewCartEntry(newEntry){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/cart', JSON.stringify(newEntry), {headers: headers})
            .map(res => res.json());
    }

}

