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
var cart_service_1 = require("../services/cart.service");
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.added_products = [];
        this.amounts = [];
        this.temp_obj = {};
        this.cartService.getProducts().subscribe(function (products) {
            _this.food_prods = products.products.filter(function (i) { return i.category === "Foods"; });
            _this.furn_prods = products.products.filter(function (i) { return i.category === "Furniture"; });
            _this.products = products.products;
        });
        this.cartService.getCategories().subscribe(function (categories) {
            _this.categories = categories.categories;
        });
        this.cartService.getCart().subscribe(function (cart) {
            _this.cart = cart.carts;
        });
        this.total = 0;
    }
    CartComponent.prototype.addToCart = function (product, amounts, index) {
        this.amounts.push(1);
        this.added_products.push(product);
        this.addSubTotals(product, amounts, index);
    };
    CartComponent.prototype.clear = function () {
        this.added_products = [];
    };
    CartComponent.prototype.getProd = function () {
        return Object.keys(this.temp_obj).join(",");
    };
    CartComponent.prototype.getTotal = function (price) {
        return this.total + price;
    };
    CartComponent.prototype.getUnits = function () {
        return Object.values(this.temp_obj).join(",");
    };
    CartComponent.prototype.addSubTotals = function (product, amounts, index) {
        this.temp_obj[product.id] = amounts[index];
        this.total = this.getTotal(parseFloat(product.price));
    };
    CartComponent.prototype.addNewCartEntry = function (event) {
        var _this = this;
        event.preventDefault();
        var newEntry = {
            "products": this.getProd(),
            "units": this.getUnits()
        };
        this.cartService.addNewCartEntry(newEntry)
            .subscribe(function (entry) {
            _this.cart_id = entry;
            _this.cart.push(entry);
            window.alert('PRODUCTS SUCCESSFULLY POSTED TO CART API, ID: ' + _this.cart_id);
        });
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cart',
            templateUrl: 'cart.component.html',
            providers: [cart_service_1.CartService]
        }),
        __metadata("design:paramtypes", [cart_service_1.CartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map