"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var http_2 = require("@angular/http");
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        console.log('CartService Initialized...');
    }
    CartService.prototype.getProducts = function () {
        return this.http.get('/api/products')
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.getCategories = function () {
        return this.http.get('/api/categories')
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.getCart = function () {
        return this.http.get('/api/cart')
            .map(function (res) { return res.json(); });
    };
    CartService.prototype.addNewCartEntry = function (newEntry) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/cart', JSON.stringify(newEntry), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CartService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map