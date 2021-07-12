function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./src/app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./src/app/components/product/product.component.ts");
    /* harmony import */


    var _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/thankyou/thankyou.component */
    "./src/app/components/thankyou/thankyou.component.ts");
    /* harmony import */


    var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/orders/orders.component */
    "./src/app/components/orders/orders.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'product/:id',
      component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]
    }, {
      path: 'cart',
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    }, {
      path: 'checkout',
      component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]
    }, {
      path: 'thankyou',
      component: _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__["ThankyouComponent"]
    }, {
      path: 'orders',
      component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bluemodafront';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["mg-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mg-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mg-footer");
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./src/app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./src/app/components/product/product.component.ts");
    /* harmony import */


    var _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/thankyou/thankyou.component */
    "./src/app/components/thankyou/thankyou.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-useful-swiper */
    "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
    /* harmony import */


    var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/orders/orders.component */
    "./src/app/components/orders/orders.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(), ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_18__["NgxUsefulSwiperModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__["ThankyouComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_18__["NgxUsefulSwiperModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__["ThankyouComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(), ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_18__["NgxUsefulSwiperModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CartComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your bag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your cart is currently empty. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Continue Shopping ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_ng_container_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_div_5_Template_i_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var i_r39 = ctx.index;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r40.cartService.DeleteProductFromCart(i_r39);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_div_5_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var i_r39 = ctx.index;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r42.ChangeQuantity(i_r39, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_div_5_Template_div_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var i_r39 = ctx.index;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r43.ChangeQuantity(i_r39, false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", c_r38.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", c_r38.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", c_r38.product.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 6, c_r38.product.price, "BRL"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r38.numInCart)("max", c_r38.product.quantity);
      }
    }

    function CartComponent_ng_container_2_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Exclude item ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_div_18_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var i_r45 = ctx.index;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.cartService.DeleteProductFromCart(i_r45);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_div_18_Template_div_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var i_r45 = ctx.index;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r48.ChangeQuantity(i_r45, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_div_18_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var i_r45 = ctx.index;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.ChangeQuantity(i_r45, false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TOTAL: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Checkout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Continue Shopping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r44 = ctx.$implicit;
        var i_r45 = ctx.index;

        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", c_r44.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", c_r44.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Product: ", c_r44.product.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, c_r44.product.price, "BRL"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r44.numInCart)("max", c_r44.product.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 11, ctx_r37.cartService.CalculateSubTotal(i_r45), "BRL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 14, ctx_r37.cartTotal, "BRL"));
      }
    }

    function CartComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_ng_container_2_div_5_Template, 20, 9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TOTAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Checkout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartComponent_ng_container_2_div_18_Template, 33, 17, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r35.cartData.data);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 3, ctx_r35.cartTotal, "BRL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r35.cartData.data);
      }
    }

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(cartService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.cartService.cartDataObs$.subscribe(function (data) {
            return _this.cartData = data;
          });
          this.cartService.cartTotal$.subscribe(function (total) {
            return _this.cartTotal = total;
          });
        }
      }, {
        key: "ChangeQuantity",
        value: function ChangeQuantity(id, increaseQuantity) {
          this.cartService.UpdateCartData(id, increaseQuantity);
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["cart"]],
      decls: 3,
      vars: 2,
      consts: [["id", "dropdown-cart", 1, "container"], ["class", "text-center my-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "my-5"], [1, "cart-title"], [1, "no-items"], [1, "cart_empty"], [1, "text-continue"], ["routerLink", "/", 1, "btn", "btn-continue"], [1, "row", "d-none", "d-lg-block", "cart-float"], [1, "col", "mb-4", "mt-0", "px-3"], [1, "table", "cart-content"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "p-0", "m-0"], [1, "d-flex", "justify-content-between", "align-items-center", "my-2"], [1, "main-total"], [1, "d-flex", "w-100", "justify-content-between", "align-items-center", "flex-sm-column", "flex-md-row"], ["routerLink", "/", 1, "btn", "btn-outline", "small", "dark", "m-0", "d-flex", "align-items-center", "justify-content-center"], ["routerLink", "/checkout", 1, "btn", "btn-default", "small", "dark", "m-0", "d-flex", "align-items-center", "justify-content-center"], ["class", "d-block d-lg-none", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "delete"], [2, "cursor", "pointer"], [1, "icon-recycle", 3, "click"], [1, "image-controller", "d-flex", "justify-content-center", "align-items-center"], ["height", "60", 1, "order-1", 3, "src", "alt"], [1, "quantity-controller"], [1, "d-flex", "justify-content-end", "align-items-center", "my-2"], [1, "d-flex", "flex-column"], ["id", "increase", 1, "value-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-up"], ["id", "decrease", 1, "value-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["type", "number", "id", "number", "readonly", "", 3, "value", "max"], [1, "d-block", "d-lg-none"], [1, "order-1", "img-fluid", 3, "src", "alt"], [1, "text-center"], [1, "text-danger", "exclude", 2, "cursor", "pointer"], [1, "product-title"], [1, "d-flex"], ["hidden", "", 1, "hidden"], [1, "text-center", "mt-3"], [1, "main-price"], [1, "col-md-12", "d-flex", "mb-5"], [1, "d-flex", "w-100", "justify-content-between", "flex-sm-column", "flex-md-row"], ["routerLink", "/checkout", 1, "btn", "btn-outline", "small", "dark"], ["routerLink", "/", 1, "btn", "btn-outline", "small", "dark"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 10, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_ng_container_2_Template, 19, 6, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.data[0].numInCart === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.data[0].numInCart !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: [".btn-continue[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cart-float[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow-y: auto;\n}\n\n.cart-float[_ngcontent-%COMP%]   .quantity-controller[_ngcontent-%COMP%] {\n  width: 175px;\n}\n\n.cart-float[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid;\n  font-weight: bold;\n  color: crimson !important;\n}\n\n.cart-float[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n\n.cart-float[_ngcontent-%COMP%]   .cart-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  border: 0;\n  text-align: right;\n}\n\n.cart-float[_ngcontent-%COMP%]   .cart-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 130px;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: pixelated;\n}\n\n.main-total[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L0M6XFxVc2Vyc1xcUGljaGF1XFxCbHVlbW9kYXNfZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDRFI7O0FERVE7RUFDSSw0QkFBQTtBQ0FaOztBREtRO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0haOztBREtRO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtFQUFBLDBCQUFBO0FDSFo7O0FEUUE7RUFDSSxpQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNvbnRpbnVlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0LWZsb2F0IHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAucXVhbnRpdHktY29udHJvbGxlciB7XHJcbiAgICAgICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxldGUge1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAvL2JhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtY29udGVudCB7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFpbi10b3RhbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiLmJ0bi1jb250aW51ZSB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJ0LWZsb2F0IHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY2FydC1mbG9hdCAucXVhbnRpdHktY29udHJvbGxlciB7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5jYXJ0LWZsb2F0IC5kZWxldGUge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogY3JpbXNvbiAhaW1wb3J0YW50O1xufVxuLmNhcnQtZmxvYXQgLmRlbGV0ZSBpIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cbi5jYXJ0LWZsb2F0IC5jYXJ0LWNvbnRlbnQgaW5wdXQge1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jYXJ0LWZsb2F0IC5jYXJ0LWNvbnRlbnQgaW1nIHtcbiAgbWF4LWhlaWdodDogMTMwcHg7XG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xufVxuXG4ubWFpbi10b3RhbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/checkout/checkout.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/checkout/checkout.component.ts ***!
    \***********************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppComponentsCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CheckoutComponent_div_3_div_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", c_r53.numInCart, "x ", c_r53.product.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, c_r53.product.price * c_r53.numInCart, "BRL"));
      }
    }

    function CheckoutComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Billing address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Create Account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Shiping address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Ship to a diffrent address? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Your Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "PRODUCT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "SubTotal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CheckoutComponent_div_3_div_75_Template, 6, 6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Shipping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "FREE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "TOTAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Direct Bank Transfer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Cheque Payment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Paypal System ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " I've read and accept the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "terms & conditions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_3_Template_button_click_122_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.onCheckout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Place order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r50.cartData.data);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](89, 3, ctx_r50.cartTotal, "BRL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r50.cartTotal <= 0);
      }
    }

    function CheckoutComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Cart Is Empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GO TO SHOP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CheckoutComponent =
    /*#__PURE__*/
    function () {
      function CheckoutComponent(cartService, orderService, router, spinner, fb) {
        _classCallCheck(this, CheckoutComponent);

        this.cartService = cartService;
        this.orderService = orderService;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.checkoutForm = this.fb.group({
          firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.cartService.cartDataObs$.subscribe(function (data) {
            return _this2.cartData = data;
          });
          this.cartService.cartTotal$.subscribe(function (total) {
            return _this2.cartTotal = total;
          });
        }
      }, {
        key: "onCheckout",
        value: function onCheckout() {
          var _this3 = this;

          this.spinner.show().then(function (p) {
            _this3.cartService.CheckoutFromCart(1);
          });
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["mg-checkout"]],
      decls: 5,
      vars: 2,
      consts: [["bdColor", "rgba(151,149,149,0.4)", "size", "large", "color", "orange", "type", "ball-clip-rotate-pulse", "fullScreen", "true"], [2, "font-size", "20px", "color", "black"], ["class", "section", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], [1, "section"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "billing-details"], [1, "section-title"], [1, "title"], [1, "form-group"], ["type", "text", "name", "first-name", "placeholder", "First Name", 1, "input"], ["type", "text", "name", "last-name", "placeholder", "Last Name", 1, "input"], ["type", "email", "name", "email", "placeholder", "Email", 1, "input"], ["type", "text", "name", "address", "placeholder", "Address", 1, "input"], ["type", "text", "name", "city", "placeholder", "City", 1, "input"], ["type", "text", "name", "country", "placeholder", "Country", 1, "input"], ["type", "text", "name", "zip-code", "placeholder", "ZIP Code", 1, "input"], ["type", "tel", "name", "tel", "placeholder", "Telephone", 1, "input"], [1, "input-checkbox"], ["type", "checkbox", "id", "create-account"], ["for", "create-account"], [1, "caption"], ["type", "password", "name", "password", "placeholder", "Enter Your Password", 1, "input"], [1, "shiping-details"], ["type", "checkbox", "id", "shiping-address"], ["for", "shiping-address"], [1, "order-notes"], ["placeholder", "Order Notes", 1, "input"], [1, "col-md-5", "order-details"], [1, "section-title", "text-center"], [1, "order-summary"], [1, "order-col"], [1, "order-products"], ["class", "order-col", 4, "ngFor", "ngForOf"], [1, "order-col", "dropdown-divider"], [1, "order-total"], [1, "payment-method"], [1, "input-radio"], ["type", "radio", "name", "payment", "id", "payment-1"], ["for", "payment-1"], ["type", "radio", "name", "payment", "id", "payment-2"], ["for", "payment-2"], ["type", "radio", "name", "payment", "id", "payment-3"], ["for", "payment-3"], ["type", "checkbox", "id", "terms"], ["for", "terms"], ["href", "#"], ["type", "submit", 1, "btn", "btn-outline", "small", "dark", "w-100", "mt-3", 3, "disabled", "click"], [1, "text-center", "my-5"], ["routerLink", "/", 1, "btn", "btn-outline", "small", "dark"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking Order...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 124, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 5, 0, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.total > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.total <= 0);
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
      styles: [".banner[_ngcontent-%COMP%] {\n  padding: 1.5em 0;\n  background: 0 0;\n  background-size: cover;\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: block;\n  vertical-align: middle;\n}\n\n.order-summary-toggle[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-top: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n  padding: 1.25em 0;\n  flex-shrink: 0;\n  text-align: left;\n  width: 100%;\n}\n\n.anyflexbox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .anyflexbox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%], .anyflexbox[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%], .anyflexbox[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.layout-flex--loose-horizontal[_ngcontent-%COMP%]   .layout-flex__item[_ngcontent-%COMP%] {\n  padding-left: 0.5714285714rem;\n  padding-right: 0.5714285714rem;\n}\n\np[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\n\n.link[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #2d2d2d;\n  transition: color 0.2s ease-in-out;\n}\n\n.section[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n\n.animate-floating-labels[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-out;\n}\n\n.section__content[_ngcontent-%COMP%] {\n  zoom: 1;\n}\n\n.main[_ngcontent-%COMP%]   .input-checkbox[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .input-radio[_ngcontent-%COMP%] {\n  border-color: #d9d9d9;\n  background-color: #fff;\n}\n\n.animate-floating-labels[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-out;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding-top: 3em;\n}\n\n.main[_ngcontent-%COMP%]   .heading-2[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9DOlxcVXNlcnNcXFBpY2hhdVxcQmx1ZW1vZGFzX2Zyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGVja291dFxcY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFHQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFJSSxhQUFBO0VBS0Esc0JBQUE7RUFJQSxjQUFBO0FDSUo7O0FERkE7RUFJSSxhQUFBO0VBR0EsZUFBQTtBQ0tKOztBREhBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLGtDQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0FDU0o7O0FEUEE7RUFFSSw2QkFBQTtBQ1VKOztBRFJBO0VBQ0ksT0FBQTtBQ1dKOztBRFRBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQ1lKOztBRFZBO0VBRUksNkJBQUE7QUNhSjs7QURYQTtFQUNJLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSxXQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjVlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5vcmRlci1zdW1tYXJ5LXRvZ2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDEuMjVlbSAwO1xyXG4gICAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcclxuICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFueWZsZXhib3ggLmNvbnRlbnQsIC5hbnlmbGV4Ym94IC5jb250ZW50IC53cmFwLCAuYW55ZmxleGJveCAubWFpbiwgLmFueWZsZXhib3ggYm9keSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXg6IDEgMCBhdXRvO1xyXG4gICAgLW1zLWZsZXg6IDEgMCBhdXRvO1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuLmJyZWFkY3J1bWIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmxheW91dC1mbGV4LS1sb29zZS1ob3Jpem9udGFsIC5sYXlvdXQtZmxleF9faXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41NzE0Mjg1NzE0cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjU3MTQyODU3MTRyZW07XHJcbn1cclxucCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbn1cclxuLmxpbmssIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uc2VjdGlvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4uYW5pbWF0ZS1mbG9hdGluZy1sYWJlbHMgLmZpZWxkX19pbnB1dCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5zZWN0aW9uX19jb250ZW50IHtcclxuICAgIHpvb206IDE7XHJcbn1cclxuLm1haW4gLmlucHV0LWNoZWNrYm94LCAubWFpbiAuaW5wdXQtcmFkaW8ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uYW5pbWF0ZS1mbG9hdGluZy1sYWJlbHMgLmZpZWxkX19pbnB1dCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbn1cclxuLm1haW4gLmhlYWRpbmctMiwgLm1haW4gaDIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuIiwiLmJhbm5lciB7XG4gIHBhZGRpbmc6IDEuNWVtIDA7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm9yZGVyLXN1bW1hcnktdG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xuICBwYWRkaW5nOiAxLjI1ZW0gMDtcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcbiAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFueWZsZXhib3ggLmNvbnRlbnQsIC5hbnlmbGV4Ym94IC5jb250ZW50IC53cmFwLCAuYW55ZmxleGJveCAubWFpbiwgLmFueWZsZXhib3ggYm9keSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4OiAxIDAgYXV0bztcbiAgLW1zLWZsZXg6IDEgMCBhdXRvO1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuLmJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmxheW91dC1mbGV4LS1sb29zZS1ob3Jpem9udGFsIC5sYXlvdXQtZmxleF9faXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMC41NzE0Mjg1NzE0cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjU3MTQyODU3MTRyZW07XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5saW5rLCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJkMmQyZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2VjdGlvbjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYW5pbWF0ZS1mbG9hdGluZy1sYWJlbHMgLmZpZWxkX19pbnB1dCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VjdGlvbl9fY29udGVudCB7XG4gIHpvb206IDE7XG59XG5cbi5tYWluIC5pbnB1dC1jaGVja2JveCwgLm1haW4gLmlucHV0LXJhZGlvIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYW5pbWF0ZS1mbG9hdGluZy1sYWJlbHMgLmZpZWxkX19pbnB1dCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAzZW07XG59XG5cbi5tYWluIC5oZWFkaW5nLTIsIC5tYWluIGgyIHtcbiAgY29sb3I6ICMzMzM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-checkout',
          templateUrl: './checkout.component.html',
          styleUrls: ['./checkout.component.scss']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["mg-footer"]],
      decls: 162,
      vars: 0,
      consts: [["role", "contentinfo", 1, "site-footer", "footer-default", "is-load"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-12", "col-md-12", "col-lg-6", "col-xl-7", "footer-col-left"], [1, "col-footer", "col-12", "col-md-4"], [1, "foot-title", "dropdow-mb"], ["href", "/", "title", "New In", 1, "foot-link"], ["href", "/", "title", "Women", 1, "foot-link"], ["href", "/", "title", "Men", 1, "foot-link"], ["href", "/", "title", "Shoes", 1, "foot-link"], ["href", "/", "title", "Bags & Accessories", 1, "foot-link"], ["href", "/pages/brands", "title", "Top Brands", 1, "foot-link"], ["href", "/", "title", "Sale & Special Offers", 1, "foot-link"], ["href", "/pages/lookbook", "title", " Lookbook", 1, "foot-link"], ["href", "/pages/about-us", "title", "About", 1, "foot-link"], ["href", "/", "title", "Customer Service", 1, "foot-link"], ["href", "/", "title", "Reward Program", 1, "foot-link"], ["href", "/", "title", "Shipping & Returns", 1, "foot-link"], ["href", "/", "title", "Privacy Policy", 1, "foot-link"], ["href", "/search", "title", "Search Terms", 1, "foot-link"], ["href", "/", "title", "Advanced Search", 1, "foot-link"], ["href", "/", "title", "Orders and Returns", 1, "foot-link"], ["href", "/pages/contact-us", "title", "Contact Us", 1, "foot-link"], ["href", "/pages/faqs", "title", "Theme FAQs", 1, "foot-link"], ["href", "/", "title", "Consultant", 1, "foot-link"], ["href", "/", "title", "Store Locations", 1, "foot-link"], [1, "col-12", "col-md-12", "col-lg-6", "col-xl-5", "footer-col-right"], [1, "footer-social"], [1, "social-title", "foot-title"], [1, "groups-block"], [1, "social-icons"], [1, "facebook"], ["href", "https://www.facebook.com", "title", "Facebook", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-facebook", "fa-lg"], [1, "twitter"], ["href", "http://twitter.com", "title", "Twitter", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "fa-lg"], [1, "google_plus"], ["href", "http://plus.google.com", "title", "Google+", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-google-plus", "fa-lg"], [1, "instagram"], ["href", "http://instagram.com", "title", "Instagram", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-lg"], [1, "snapchat"], ["href", "https://www.snapchat.com", "title", "Snapchat", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-snapchat-ghost", "fa-lg"], [1, "youtube"], ["href", "https://www.youtube.com", "title", "YouTube", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-youtube", "fa-lg"], [1, "footer-newsletter"], [1, "newsletter-title", "foot-title"], [1, "newsletter"], [1, "block-content"], ["method", "post", "action", "/contact", "id", "contact_form", "accept-charset", "UTF-8", 1, "input-group"], ["type", "hidden", "name", "form_type", "value", "customer"], ["type", "hidden", "name", "utf8", "value", "?"], ["type", "hidden", "name", "contact[tags]", "value", "newsletter"], ["type", "email", "name", "contact[email]", "aria-label", "Email Address", "placeholder", "enter your email address", "required", "required", 1, "input-group-field"], ["type", "submit", "value", "Submit", 1, "btn"], [1, "footer-bottom"], ["aria-hidden", "true", 1, "fa", "fa-heart-o"], ["href", "https://luscaswolf.github.io/", "target", "_blank"], [1, "payment-methods"], ["data-src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Visa_Inverted_x32.png?v=1541586136", "alt", "visa", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "40px", "src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Visa_Inverted_x32.png?v=1541586136", 1, "lazyautosizes", "lazyloaded"], ["data-src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/MasterCard_x32.png?v=1541586157", "alt", "master", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "59px", "src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/MasterCard_x32.png?v=1541586157", 1, "lazyautosizes", "lazyloaded"], ["data-src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/American-Express_x32.png?v=1541586174", "alt", "american_express", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "129px", "src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/American-Express_x32.png?v=1541586174", 1, "lazyautosizes", "lazyloaded"], ["data-src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Cirrus_Inverted_x32.png?v=1541586249", "alt", "cirrus", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "49px", "src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Cirrus_Inverted_x32.png?v=1541586249", 1, "lazyautosizes", "lazyloaded"], ["data-src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Discover_x32.png?v=1541586268", "alt", "discover", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "67px", "src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Discover_x32.png?v=1541586268", 1, "lazyautosizes", "lazyloaded"], ["data-src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/PayPal_x32.png?v=1541586200", "alt", "paypal", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "58px", "src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/PayPal_x32.png?v=1541586200", 1, "lazyautosizes", "lazyloaded"], ["data-src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Western_Union_x32.png?v=1541586300", "alt", "litecoin", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "59px", "src", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/Western_Union_x32.png?v=1541586300", 1, "lazyautosizes", "lazyloaded"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " New In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Women");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Men");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Bags & Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Top Brands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sale & Special Offers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Lookbook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Customer Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Reward Program");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Shipping & Returns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Customer Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Search Terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Advanced Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Orders and Returns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Theme FAQs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Consultant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Store Locations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Stay Connected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Sign up for our Newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "section", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "form", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Copyright \xA9 2021 All rights reserved | This template is made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Lucas Silva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: [".site-footer[_ngcontent-%COMP%] {\n  background: #232323;\n}\n\n.site-footer[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .input-group-field[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #717171;\n  border-color: #3b3b3b;\n}\n\n.site-footer[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #717171;\n}\n\n.site-footer[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: #717171;\n}\n\n.site-footer[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #717171;\n}\n\n.site-footer[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  color: #717171;\n}\n\n.site-footer[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #3b3b3b;\n  border-color: #3b3b3b;\n  color: #ffffff;\n}\n\n.site-footer[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  border-color: #3b3b3b;\n  color: #3b3b3b;\n}\n\n.site-footer[_ngcontent-%COMP%], .foot-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header-vertical-tpl[_ngcontent-%COMP%]   .footer-default[_ngcontent-%COMP%]   .newsletter-des[_ngcontent-%COMP%] {\n  color: #969696;\n}\n\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.site-footer[_ngcontent-%COMP%]   .foot-link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  background-color: #ffffff;\n}\n\n.footer-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #141414;\n  background-color: #ffffff;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  background-color: #232323;\n  border-top: 1px solid #3b3b3b;\n}\n\n.footer-bottom[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   address[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #969696;\n}\n\n.footer-bottom[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #969696;\n}\n\n@media (max-width: 767px) {\n  .footer-top[_ngcontent-%COMP%]   .col-footer[_ngcontent-%COMP%]   .dropdow-mb[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #3b3b3b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxQaWNoYXVcXEJsdWVtb2Rhc19mcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVFLG1CQUFBO0FDREo7O0FET0E7RUFDSSxrQ0FBQTtFQUNGLGNBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0kseUJBQUE7RUFDRixxQkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNJLHlCQUFBO0VBQ0YscUJBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7O0VBRUUsY0FBQTtBQ0pGOztBRFNBOztFQUVFLGNBQUE7QUNORjs7QURTQTtFQUNFLGNBQUE7QUNORjs7QURTQTtFQUNJLHlCQUFBO0FDTko7O0FEU0E7RUFDSSxjQUFBO0VBQ0YseUJBQUE7QUNORjs7QURTQTtFQUNJLHlCQUFBO0VBRUYsNkJBQUE7QUNQRjs7QURXQTs7O0VBR0ksY0FBQTtBQ1JKOztBRFdBO0VBQ0ksY0FBQTtBQ1JKOztBRFdBO0VBQ0U7SUFDRSxnQ0FBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuc2l0ZS1mb290ZXIge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gIFxyXG4gIFxyXG4gICAgICBcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5uZXdzbGV0dGVyIC5pbnB1dC1ncm91cC1maWVsZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gIGNvbG9yOiAjNzE3MTcxO1xyXG4gIGJvcmRlci1jb2xvcjogIzNiM2IzYjtcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5uZXdzbGV0dGVyIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM3MTcxNzE7XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciAubmV3c2xldHRlciA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjNzE3MTcxO1xyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgLm5ld3NsZXR0ZXIgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM3MTcxNzE7XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciAubmV3c2xldHRlciA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM3MTcxNzE7XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciAubmV3c2xldHRlciAuYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2IzYjNiO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgLm5ld3NsZXR0ZXIgLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzNiM2IzYjtcclxuICBjb2xvcjogIzNiM2IzYjtcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyLFxyXG4uZm9vdC10aXRsZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7IFxyXG59XHJcblxyXG5cclxuXHJcbi5zaXRlLWZvb3RlciBhLFxyXG4uaGVhZGVyLXZlcnRpY2FsLXRwbCAuZm9vdGVyLWRlZmF1bHQgLm5ld3NsZXR0ZXItZGVzIHtcclxuICBjb2xvcjogIzk2OTY5NjtcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyBcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5mb290LWxpbms+c3BhbjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXHJcbn1cclxuXHJcbi5mb290ZXItc29jaWFsIGxpIGEge1xyXG4gICAgY29sb3I6ICMxNDE0MTQ7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7IFxyXG4gICAgXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYjNiM2I7XHJcbiAgIFxyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbSxcclxuLmZvb3Rlci1ib3R0b20gYWRkcmVzcyxcclxuLmZvb3Rlci1ib3R0b20gYWRkcmVzcyBhIHtcclxuICAgIGNvbG9yOiAjOTY5Njk2OyBcclxufSAgICBcclxuXHJcbi5mb290ZXItYm90dG9tIGFkZHJlc3MgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzk2OTY5NjsgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb290ZXItdG9wIC5jb2wtZm9vdGVyIC5kcm9wZG93LW1iIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2IzYjNiOyBcclxuICB9XHJcbn1cclxuIiwiLnNpdGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcbn1cblxuLnNpdGUtZm9vdGVyIC5uZXdzbGV0dGVyIC5pbnB1dC1ncm91cC1maWVsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGNvbG9yOiAjNzE3MTcxO1xuICBib3JkZXItY29sb3I6ICMzYjNiM2I7XG59XG5cbi5zaXRlLWZvb3RlciAubmV3c2xldHRlciA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcxNzE3MTtcbn1cblxuLnNpdGUtZm9vdGVyIC5uZXdzbGV0dGVyIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzE3MTcxO1xufVxuXG4uc2l0ZS1mb290ZXIgLm5ld3NsZXR0ZXIgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzE3MTcxO1xufVxuXG4uc2l0ZS1mb290ZXIgLm5ld3NsZXR0ZXIgOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcxNzE3MTtcbn1cblxuLnNpdGUtZm9vdGVyIC5uZXdzbGV0dGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xuICBib3JkZXItY29sb3I6ICMzYjNiM2I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2l0ZS1mb290ZXIgLm5ld3NsZXR0ZXIgLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzNiM2IzYjtcbiAgY29sb3I6ICMzYjNiM2I7XG59XG5cbi5zaXRlLWZvb3Rlcixcbi5mb290LXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zaXRlLWZvb3RlciBhLFxuLmhlYWRlci12ZXJ0aWNhbC10cGwgLmZvb3Rlci1kZWZhdWx0IC5uZXdzbGV0dGVyLWRlcyB7XG4gIGNvbG9yOiAjOTY5Njk2O1xufVxuXG4uc2l0ZS1mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2l0ZS1mb290ZXIgLmZvb3QtbGluayA+IHNwYW46YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvb3Rlci1zb2NpYWwgbGkgYSB7XG4gIGNvbG9yOiAjMTQxNDE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9vdGVyLWJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2IzYjNiO1xufVxuXG4uZm9vdGVyLWJvdHRvbSxcbi5mb290ZXItYm90dG9tIGFkZHJlc3MsXG4uZm9vdGVyLWJvdHRvbSBhZGRyZXNzIGEge1xuICBjb2xvcjogIzk2OTY5Njtcbn1cblxuLmZvb3Rlci1ib3R0b20gYWRkcmVzcyBhOmhvdmVyIHtcbiAgY29sb3I6ICM5Njk2OTY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9vdGVyLXRvcCAuY29sLWZvb3RlciAuZHJvcGRvdy1tYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYjNiM2I7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(cartService) {
        _classCallCheck(this, HeaderComponent);

        this.cartService = cartService;
        this.headScroll = false;
        this.toggle = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.cartService.cartTotal$.subscribe(function (total) {
            _this4.cartTotal = total;
          });
          this.cartService.cartDataObs$.subscribe(function (data) {
            return _this4.cartData = data;
          });
        }
      }, {
        key: "scrollThis",
        value: function scrollThis() {
          if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            this.headScroll = true;
          } else {
            this.headScroll = false;
            this.toggle = false;
          }
        }
      }, {
        key: "clickEvent",
        value: function clickEvent(event) {
          this.toggle = !this.toggle;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["mg-header"]],
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
            return ctx.scrollThis();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      decls: 884,
      vars: 0,
      consts: [["role", "banner", 1, "site-header", "header-default", "header-default-cart"], [1, "header-top", 2, "opacity", "1"], [1, "container"], [1, "top-message"], ["href", "#"], [1, "header-bottom"], [1, "wrapper-header-bt"], [1, "header-mb"], [1, "header-mb-left", "header-mb-items"], [1, "hamburger-icon", "svg-mb"], ["href", "#", "title", "Menu Mobile Icon", "data-menu-mb-toogle", "", 1, "icon-nav"], [1, "icon-line"], [1, "header-mb-middle", "header-mb-items"], [1, "header-logo"], ["href", "/", "title", "Logo", 1, "logo-img"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 73 63", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 73 63"], ["type", "text/css"], ["id", "Combined-Shape", "d", "M72.9,56.2l-0.5,0.4c-0.5,0.4-1.1,0.8-1.6,1.2l-0.4,0.3L70,57.9c-0.3-0.2-0.7-0.3-1.2-0.3 c-1.6,0-3.9,1.2-6,2.3c-2.4,1.2-4.9,2.5-7.1,2.6c-1,0-1.5-0.4-1.8-0.7c-0.9-1.2,0.3-3.4,1.7-6c1.3-2.5,3-5.6,1.8-6.6 C57.3,49,57.1,49,56.8,49c-1.5,0-4.6,2-8,5.1c-1.1,1-2.2,2-3.2,3c-3,2.9-5.4,5.3-7.5,5.3c-0.5,0-1-0.2-1.2-0.5 C35.1,59.5,40.4,50,41,48.9c0.9-1.7,1.9-3.3,2.8-5c2.4-4.1,4.6-7.9,3.8-9.3c-0.1-0.2-0.2-0.3-0.5-0.3c-2.1,0-7.8,4.4-13,10.9 c-2.6,3.1-5,6.5-7.1,9.5c-3.5,5.1-5.3,7.5-6.9,7.5c-0.3,0-0.5,0-0.6-0.1c-0.2-0.1-0.3-0.2-0.4-0.3c-1.7-2.2,2.1-14.6,7.4-24.2 c2.5-5.1,5.6-9.8,8.3-14c3.4-5.4,7.1-11.6,5.2-11.3c-1.5,0.2-4.1,1.3-7.8,4.3c-5.1,4-11,10.6-15.6,17.5c-5.5,8-9.4,16.5-11.2,20.8 c-0.5,1.3-1,2.4-1.4,3.4c-1.6,3.7-2,4.6-2.9,4.6c-0.8,0-1-0.8-1.1-1.2c0-1,0.9-7.7,4.4-15.9C8,36.9,14.1,27.3,20.8,20 c6.7-7.5,14.9-13.9,22.1-17.1c3.5-1.6,6.9-2.6,9.3-2.6c1.2,0,2,0.2,2.5,0.7c0.3,0.3,0.4,0.6,0.4,1c0,2.4-3.2,6.3-7.6,11.7 c-3,3.7-6.4,7.9-9.4,12.3c-4.3,5.9-7.1,11.4-8.4,14.2c-2.1,4.4-2.7,6.8-2.7,7.5c1-0.3,3.6-3.1,5.6-5.3c2.3-2.5,4.9-5.3,7.8-7.8 c5.1-4.8,10.8-8.2,13.7-8.2c1.1,0,1.9,0.5,2.1,1.4c0.6,2.2-1.8,5.6-4.9,10c-1.1,1.5-2.2,3.1-3.3,4.8c-3.7,5.4-5.9,10.5-5.3,11.9 c0.1,0.2,0.2,0.2,0.2,0.2c0.1,0,0.2,0,0.3,0c1.4,0,3.8-2,6.2-3.9c0.9-0.7,1.8-1.5,2.7-2.2c2.4-1.9,5.8-4.2,8.1-4.2 c0.9,0,1.6,0.3,1.9,1c1.4,1.8-0.4,4.9-2.1,7.8c-1.2,2-2.5,4.4-2,5.3c0.1,0.1,0.2,0.3,0.6,0.4c0.2,0,0.3,0,0.5,0 c1.7,0,3.7-0.9,5.6-1.8c2-0.9,3.9-1.7,5.5-1.7c0.8,0,1.6,0.2,2.2,0.6L72.9,56.2z M18.2,43.5c-1.2,0-2.1-1-2.1-2.1 c0-1.2,0.9-2.1,2.1-2.1s2.1,1,2.1,2.1C20.3,42.6,19.3,43.5,18.2,43.5z", 1, "st0"], [1, "header-mb-right", "header-mb-items"], [1, "acc-mb", "svg-mb"], ["href", "#", "title", "User Icon", "data-user-mobile-toggle", "", 1, "icon-user"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "id", "lnr-user", "viewBox", "0 0 1024 1024", "width", "100%", "height", "100%"], ["d", "M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z", 1, "path1"], ["d", "M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z", 1, "path2"], [1, "cart-icon", "svg-mb"], ["href", "#", "title", "Cart Icon", "data-cart-toggle", ""], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 30 30", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "enable-background", "new 0 0 30 30"], ["d", "M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z"], [1, "header-pc"], [1, "header-panel-top"], [1, "cus-ser-text"], [1, "nav-search"], ["data-ajax-search", "", 1, "search-form"], [1, "header-search"], [1, "header-search__form"], ["href", "javascript:void(0)", "title", "close", 1, "close", "close-search"], ["aria-hidden", "true", "data-prefix", "fal", "data-icon", "times", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 320 512", 1, "svg-inline--fa", "fa-times", "fa-w-10", "fa-2x"], ["fill", "currentColor", "d", "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z", 1, ""], ["action", "/search", "method", "get", "role", "search", 1, "search-bar"], ["type", "hidden", "name", "type", "value", "product"], ["type", "search", "name", "q", "placeholder", "Search", "aria-label", "Search Site", "autocomplete", "off", 1, "input-group-field", "header-search__input"], ["type", "submit", 1, "btn"], ["data-icon", "search", "viewBox", "0 0 512 512", "width", "100%", "height", "100%"], ["d", "M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5 S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9 C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"], [1, "header-panel-bt"], [1, "left-groups", "header-items"], ["itemscope", "", "itemtype", "http://schema.org/Organization", 1, "header-logo"], ["itemprop", "url", "content", "https://new-ella.myshopify.com"], [1, "right-groups", "header-items"], [1, "free-shipping-text"], [1, "wrapper-top-cart"], ["href", "javascript:void(0)", "title", "Cart", "data-cart-toggle", "", 1, "cart-icon"], ["d", "M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3 h2V8h6v3h2V8h4V28z"], [1, "cart-text"], [1, "header-links"], [1, "customer-links"], ["data-dropdown-user", "", "id", "customer_login_link", "href", "/account/login", 1, "acc-links", "text-hover", "acc-sign-in"], [1, "or-text"], ["id", "customer_register_link", "href", "/account/register", 1, "acc-links", "text-hover", "acc-regis"], ["id", "dropdown-customer", 1, "ct_login"], [1, "customer-title"], ["href", "javascript:void(0)", "title", "Close", 1, "close-customer", "close"], [1, "customer-content"], [1, "customer-inner", "login-customer"], ["accept-charset", "UTF-8", "action", "/account/login", "method", "post"], ["name", "form_type", "type", "hidden", "value", "customer_login"], ["name", "utf8", "type", "hidden", "value", "?"], [1, "ct-login"], [1, "form-group"], ["for", "customer_email"], ["type", "email", "value", "", "name", "customer[email]", "placeholder", "Email Address", 1, "form-control"], ["for", "customer_password"], ["type", "password", "value", "", "placeholder", "Password", "name", "customer[password]", 1, "form-control"], [1, "action-btn"], ["type", "submit", "value", "Login", 1, "btn", "btn-login"], ["href", "/account/login#recover", 1, "text-hover", "forgot-password"], [1, "ct-register"], ["href", "/account/register", 1, "btn", "btn-register"], ["id", "sticky-wrapper", 1, "sticky-wrapper", 2, "height", "45px"], ["data-sticky-pc", "", 1, "wrapper-navigation"], [1, "header-logo", "logo-fixed"], [1, "main-menu", "jas-mb-style"], [1, "row"], [1, "col-12"], [1, "mb-area"], ["role", "navigation", 1, "nav-bar"], [1, "site-nav"], [1, "menu-lv-1", "item", "dropdown", "mega-menu"], ["href", "/collections/new-in", 1, "menu__moblie"], ["data-toggle-menu-mb", "", 1, "icon-dropdown"], [1, "sub-menu-mobile", "menu-mb-translate", "style_2"], [1, "menu-mb-title"], [1, "icon-dropdown"], [1, "site-nav-dropdown", "style_2"], [1, "col-12", "col-xl-7"], [1, "hide_pc", "row"], [1, "menu-lv-2", "col-12", "hide_pc"], ["href", "/collections/new-in"], ["data-masonry", "{\"itemSelector\": \"[data-gridItem]\", \"columnWidth\": \".grid-sizer\"}", 1, "row", 2, "position", "relative", "height", "426px"], [1, "grid-sizer"], ["data-griditem", "", 1, "menu-lv-2", "inner", "dropdown", "col-12", "col-xl-4", 2, "position", "absolute", "left", "0px", "top", "0px"], ["href", "/collections/blazero", 1, "menu__moblie"], [1, "sub-menu-mobile", "menu-mb-translate"], [1, "site-nav-dropdown"], [1, "menu-lv-3", "hide_pc"], ["href", "/collections/blazero"], [1, "menu-lv-3"], ["href", "/"], ["data-griditem", "", 1, "menu-lv-2", "inner", "dropdown", "col-12", "col-xl-4", 2, "position", "absolute", "left", "233.328px", "top", "0px"], ["href", "/collections/congue", 1, "menu__moblie"], ["href", "/collections/congue"], ["data-griditem", "", 1, "menu-lv-2", "inner", "dropdown", "col-12", "col-xl-4", 2, "position", "absolute", "left", "466.656px", "top", "0px"], ["href", "/collections/cosmopolis", 1, "menu__moblie"], ["href", "/collections/cosmopolis"], ["data-griditem", "", 1, "menu-lv-2", "inner", "dropdown", "col-12", "col-xl-4", 2, "position", "absolute", "left", "0px", "top", "198px"], ["href", "/collections/glamos", 1, "menu__moblie"], ["href", "/collections/glamos"], ["data-griditem", "", 1, "menu-lv-2", "inner", "dropdown", "col-12", "col-xl-4", 2, "position", "absolute", "left", "233.328px", "top", "198px"], ["href", "/collections/metropolis", 1, "menu__moblie"], ["href", "/collections/metropolis"], ["data-griditem", "", 1, "menu-lv-2", "inner", "dropdown", "col-12", "col-xl-4", 2, "position", "absolute", "left", "466.656px", "top", "228px"], ["href", "/collections/suito", 1, "menu__moblie"], ["href", "/collections/suito"], [1, "col-12", "col-xl-5"], [1, "mega-banner"], [1, "mega-col", "col-left"], ["href", "/collections/cosmopolis", "title", "", 1, "animate-scale"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-2-1-compressor_210x.jpg?v=1542772874", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "470px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-2-1-compressor_210x.jpg?v=1542772874", 1, "lazyautosizes", "lazyloaded"], ["href", "/collections/all", "title", "", 1, "animate-scale"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-2-2-compressor_210x.jpg?v=1542772889", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "470px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-2-2-compressor_210x.jpg?v=1542772889", 1, "lazyautosizes", "lazyloaded"], [1, "mega-col", "col-right"], ["href", "/collections/suito", "title", "", 1, "animate-scale"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-2-3-compressor_455x.jpg?v=1542772903", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "470px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-2-3-compressor_455x.jpg?v=1542772903", 1, "lazyautosizes", "lazyloaded"], ["href", "/collections/valkyrio", 1, "menu__moblie"], [1, "sub-menu-mobile", "menu-mb-translate", "style_1"], [1, "site-nav-dropdown", "style_1"], ["href", "/collections/valkyrio"], ["href", "/", 1, "menu__moblie"], [1, "title"], ["data-product-id", "product-1799173111906", "data-json-product", "{\"id\": 1799173111906,\"handle\": \"dinterdum-pretium-condimento-1\",\"media\": [{\"alt\":null,\"id\":4333941194850,\"position\":1,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-2_d3f9d637-64ee-4e71-a363-b12255ab3c33.jpg?v=1570324613\"},\"aspect_ratio\":0.75,\"height\":712,\"media_type\":\"image\",\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-2_d3f9d637-64ee-4e71-a363-b12255ab3c33.jpg?v=1570324613\",\"width\":534},{\"alt\":null,\"id\":4333942603874,\"position\":2,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-1.jpg?v=1570324614\"},\"aspect_ratio\":0.75,\"height\":712,\"media_type\":\"image\",\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-1.jpg?v=1570324614\",\"width\":534},{\"alt\":null,\"id\":4333944668258,\"position\":3,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-4_45cb3f98-3f6b-4fcb-96b6-6e4d26b7abaa.jpg?v=1570324614\"},\"aspect_ratio\":0.75,\"height\":712,\"media_type\":\"image\",\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-4_45cb3f98-3f6b-4fcb-96b6-6e4d26b7abaa.jpg?v=1570324614\",\"width\":534},{\"alt\":null,\"id\":4333945913442,\"position\":4,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-5.jpg?v=1570324614\"},\"aspect_ratio\":0.75,\"height\":712,\"media_type\":\"image\",\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-5.jpg?v=1570324614\",\"width\":534},{\"alt\":null,\"id\":4333947715682,\"position\":5,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-6.jpg?v=1570324614\"},\"aspect_ratio\":0.75,\"height\":712,\"media_type\":\"image\",\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-6.jpg?v=1570324614\",\"width\":534},{\"alt\":null,\"id\":4333949485154,\"position\":6,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-7_fd19567d-d7ed-4a83-99c0-0089b474e755.jpg?v=1570324615\"},\"aspect_ratio\":0.75,\"height\":712,\"media_type\":\"image\",\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-7_fd19567d-d7ed-4a83-99c0-0089b474e755.jpg?v=1570324615\",\"width\":534}],\"variants\": [{\"id\":16870770671714,\"title\":\"Red \\/ S\",\"option1\":\"Red\",\"option2\":\"S\",\"option3\":null,\"sku\":\"W0690042\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":{\"id\":5858015445090,\"product_id\":1799173111906,\"position\":1,\"created_at\":\"2018-10-31T17:01:17-12:00\",\"updated_at\":\"2018-10-31T17:11:28-12:00\",\"alt\":null,\"width\":534,\"height\":712,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-2_d3f9d637-64ee-4e71-a363-b12255ab3c33.jpg?v=1541049088\",\"variant_ids\":[16870770671714]},\"available\":true,\"name\":\"Dinterdum pretium condimento - Red \\/ S\",\"public_title\":\"Red \\/ S\",\"options\":[\"Red\",\"S\"],\"price\":6999,\"weight\":0,\"compare_at_price\":8600,\"inventory_management\":\"shopify\",\"barcode\":\"\",\"featured_media\":{\"alt\":null,\"id\":4333941194850,\"position\":1,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-2_d3f9d637-64ee-4e71-a363-b12255ab3c33.jpg?v=1570324613\"}}},{\"id\":16870770704482,\"title\":\"Red \\/ M\",\"option1\":\"Red\",\"option2\":\"M\",\"option3\":null,\"sku\":\"W0690043\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Red \\/ M\",\"public_title\":\"Red \\/ M\",\"options\":[\"Red\",\"M\"],\"price\":6999,\"weight\":0,\"compare_at_price\":8600,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870770770018,\"title\":\"Red \\/ L\",\"option1\":\"Red\",\"option2\":\"L\",\"option3\":null,\"sku\":\"W0690044\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Red \\/ L\",\"public_title\":\"Red \\/ L\",\"options\":[\"Red\",\"L\"],\"price\":6999,\"weight\":0,\"compare_at_price\":8600,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870770802786,\"title\":\"Red \\/ XL\",\"option1\":\"Red\",\"option2\":\"XL\",\"option3\":null,\"sku\":\"W0690045\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Red \\/ XL\",\"public_title\":\"Red \\/ XL\",\"options\":[\"Red\",\"XL\"],\"price\":6999,\"weight\":0,\"compare_at_price\":8600,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870770868322,\"title\":\"Red \\/ 2X\",\"option1\":\"Red\",\"option2\":\"2X\",\"option3\":null,\"sku\":\"W0690046\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Red \\/ 2X\",\"public_title\":\"Red \\/ 2X\",\"options\":[\"Red\",\"2X\"],\"price\":6999,\"weight\":0,\"compare_at_price\":8600,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870770901090,\"title\":\"Red \\/ 3X\",\"option1\":\"Red\",\"option2\":\"3X\",\"option3\":null,\"sku\":\"W0690047\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Red \\/ 3X\",\"public_title\":\"Red \\/ 3X\",\"options\":[\"Red\",\"3X\"],\"price\":6999,\"weight\":0,\"compare_at_price\":8600,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870770999394,\"title\":\"Yellow \\/ S\",\"option1\":\"Yellow\",\"option2\":\"S\",\"option3\":null,\"sku\":\"W0690049\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":{\"id\":5858024357986,\"product_id\":1799173111906,\"position\":2,\"created_at\":\"2018-10-31T17:01:32-12:00\",\"updated_at\":\"2018-10-31T17:11:28-12:00\",\"alt\":null,\"width\":534,\"height\":712,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-1.jpg?v=1541049088\",\"variant_ids\":[16870770999394]},\"available\":true,\"name\":\"Dinterdum pretium condimento - Yellow \\/ S\",\"public_title\":\"Yellow \\/ S\",\"options\":[\"Yellow\",\"S\"],\"price\":9900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\",\"featured_media\":{\"alt\":null,\"id\":4333942603874,\"position\":2,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-1.jpg?v=1570324614\"}}},{\"id\":16870771032162,\"title\":\"Yellow \\/ M\",\"option1\":\"Yellow\",\"option2\":\"M\",\"option3\":null,\"sku\":\"W0690050\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Yellow \\/ M\",\"public_title\":\"Yellow \\/ M\",\"options\":[\"Yellow\",\"M\"],\"price\":18900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771064930,\"title\":\"Yellow \\/ L\",\"option1\":\"Yellow\",\"option2\":\"L\",\"option3\":null,\"sku\":\"W0690051\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Yellow \\/ L\",\"public_title\":\"Yellow \\/ L\",\"options\":[\"Yellow\",\"L\"],\"price\":28600,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771097698,\"title\":\"Yellow \\/ XL\",\"option1\":\"Yellow\",\"option2\":\"XL\",\"option3\":null,\"sku\":\"W0690052\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":false,\"name\":\"Dinterdum pretium condimento - Yellow \\/ XL\",\"public_title\":\"Yellow \\/ XL\",\"options\":[\"Yellow\",\"XL\"],\"price\":28999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771163234,\"title\":\"Yellow \\/ 2X\",\"option1\":\"Yellow\",\"option2\":\"2X\",\"option3\":null,\"sku\":\"W0690053\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Yellow \\/ 2X\",\"public_title\":\"Yellow \\/ 2X\",\"options\":[\"Yellow\",\"2X\"],\"price\":41400,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771196002,\"title\":\"Yellow \\/ 3X\",\"option1\":\"Yellow\",\"option2\":\"3X\",\"option3\":null,\"sku\":\"W0690054\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Yellow \\/ 3X\",\"public_title\":\"Yellow \\/ 3X\",\"options\":[\"Yellow\",\"3X\"],\"price\":41999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771294306,\"title\":\"Pink \\/ S\",\"option1\":\"Pink\",\"option2\":\"S\",\"option3\":null,\"sku\":\"W0690056\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":{\"id\":5858029305954,\"product_id\":1799173111906,\"position\":3,\"created_at\":\"2018-10-31T17:01:44-12:00\",\"updated_at\":\"2018-10-31T17:11:28-12:00\",\"alt\":null,\"width\":534,\"height\":712,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-4_45cb3f98-3f6b-4fcb-96b6-6e4d26b7abaa.jpg?v=1541049088\",\"variant_ids\":[16870771294306]},\"available\":true,\"name\":\"Dinterdum pretium condimento - Pink \\/ S\",\"public_title\":\"Pink \\/ S\",\"options\":[\"Pink\",\"S\"],\"price\":9900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\",\"featured_media\":{\"alt\":null,\"id\":4333944668258,\"position\":3,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-4_45cb3f98-3f6b-4fcb-96b6-6e4d26b7abaa.jpg?v=1570324614\"}}},{\"id\":16870771359842,\"title\":\"Pink \\/ M\",\"option1\":\"Pink\",\"option2\":\"M\",\"option3\":null,\"sku\":\"W0690057\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Pink \\/ M\",\"public_title\":\"Pink \\/ M\",\"options\":[\"Pink\",\"M\"],\"price\":8600,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771392610,\"title\":\"Pink \\/ L\",\"option1\":\"Pink\",\"option2\":\"L\",\"option3\":null,\"sku\":\"W0690058\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":false,\"name\":\"Dinterdum pretium condimento - Pink \\/ L\",\"public_title\":\"Pink \\/ L\",\"options\":[\"Pink\",\"L\"],\"price\":28600,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771425378,\"title\":\"Pink \\/ XL\",\"option1\":\"Pink\",\"option2\":\"XL\",\"option3\":null,\"sku\":\"W0690059\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Pink \\/ XL\",\"public_title\":\"Pink \\/ XL\",\"options\":[\"Pink\",\"XL\"],\"price\":28999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771490914,\"title\":\"Pink \\/ 2X\",\"option1\":\"Pink\",\"option2\":\"2X\",\"option3\":null,\"sku\":\"W0690060\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Pink \\/ 2X\",\"public_title\":\"Pink \\/ 2X\",\"options\":[\"Pink\",\"2X\"],\"price\":41400,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771523682,\"title\":\"Pink \\/ 3X\",\"option1\":\"Pink\",\"option2\":\"3X\",\"option3\":null,\"sku\":\"W0690061\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Pink \\/ 3X\",\"public_title\":\"Pink \\/ 3X\",\"options\":[\"Pink\",\"3X\"],\"price\":41999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771589218,\"title\":\"Blue \\/ S\",\"option1\":\"Blue\",\"option2\":\"S\",\"option3\":null,\"sku\":\"W0690063\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":{\"id\":5858034647138,\"product_id\":1799173111906,\"position\":4,\"created_at\":\"2018-10-31T17:01:53-12:00\",\"updated_at\":\"2018-10-31T17:11:28-12:00\",\"alt\":null,\"width\":534,\"height\":712,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-5.jpg?v=1541049088\",\"variant_ids\":[16870771589218]},\"available\":true,\"name\":\"Dinterdum pretium condimento - Blue \\/ S\",\"public_title\":\"Blue \\/ S\",\"options\":[\"Blue\",\"S\"],\"price\":9900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\",\"featured_media\":{\"alt\":null,\"id\":4333945913442,\"position\":4,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-5.jpg?v=1570324614\"}}},{\"id\":16870771654754,\"title\":\"Blue \\/ M\",\"option1\":\"Blue\",\"option2\":\"M\",\"option3\":null,\"sku\":\"W0690064\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":false,\"name\":\"Dinterdum pretium condimento - Blue \\/ M\",\"public_title\":\"Blue \\/ M\",\"options\":[\"Blue\",\"M\"],\"price\":18900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771687522,\"title\":\"Blue \\/ L\",\"option1\":\"Blue\",\"option2\":\"L\",\"option3\":null,\"sku\":\"W0690065\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Blue \\/ L\",\"public_title\":\"Blue \\/ L\",\"options\":[\"Blue\",\"L\"],\"price\":28600,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771720290,\"title\":\"Blue \\/ XL\",\"option1\":\"Blue\",\"option2\":\"XL\",\"option3\":null,\"sku\":\"W0690066\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Blue \\/ XL\",\"public_title\":\"Blue \\/ XL\",\"options\":[\"Blue\",\"XL\"],\"price\":28999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771785826,\"title\":\"Blue \\/ 2X\",\"option1\":\"Blue\",\"option2\":\"2X\",\"option3\":null,\"sku\":\"W0690067\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Blue \\/ 2X\",\"public_title\":\"Blue \\/ 2X\",\"options\":[\"Blue\",\"2X\"],\"price\":41400,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771818594,\"title\":\"Blue \\/ 3X\",\"option1\":\"Blue\",\"option2\":\"3X\",\"option3\":null,\"sku\":\"W0690068\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Blue \\/ 3X\",\"public_title\":\"Blue \\/ 3X\",\"options\":[\"Blue\",\"3X\"],\"price\":41999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771916898,\"title\":\"Gray \\/ S\",\"option1\":\"Gray\",\"option2\":\"S\",\"option3\":null,\"sku\":\"W0690070\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":{\"id\":5858040578146,\"product_id\":1799173111906,\"position\":5,\"created_at\":\"2018-10-31T17:02:04-12:00\",\"updated_at\":\"2018-10-31T17:11:28-12:00\",\"alt\":null,\"width\":534,\"height\":712,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-6.jpg?v=1541049088\",\"variant_ids\":[16870771916898]},\"available\":true,\"name\":\"Dinterdum pretium condimento - Gray \\/ S\",\"public_title\":\"Gray \\/ S\",\"options\":[\"Gray\",\"S\"],\"price\":9900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\",\"featured_media\":{\"alt\":null,\"id\":4333947715682,\"position\":5,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-6.jpg?v=1570324614\"}}},{\"id\":16870771949666,\"title\":\"Gray \\/ M\",\"option1\":\"Gray\",\"option2\":\"M\",\"option3\":null,\"sku\":\"W0690071\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Gray \\/ M\",\"public_title\":\"Gray \\/ M\",\"options\":[\"Gray\",\"M\"],\"price\":18900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870771982434,\"title\":\"Gray \\/ L\",\"option1\":\"Gray\",\"option2\":\"L\",\"option3\":null,\"sku\":\"W0690072\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Gray \\/ L\",\"public_title\":\"Gray \\/ L\",\"options\":[\"Gray\",\"L\"],\"price\":28600,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772015202,\"title\":\"Gray \\/ XL\",\"option1\":\"Gray\",\"option2\":\"XL\",\"option3\":null,\"sku\":\"W0690073\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":false,\"name\":\"Dinterdum pretium condimento - Gray \\/ XL\",\"public_title\":\"Gray \\/ XL\",\"options\":[\"Gray\",\"XL\"],\"price\":28999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772080738,\"title\":\"Gray \\/ 2X\",\"option1\":\"Gray\",\"option2\":\"2X\",\"option3\":null,\"sku\":\"W0690074\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Gray \\/ 2X\",\"public_title\":\"Gray \\/ 2X\",\"options\":[\"Gray\",\"2X\"],\"price\":41400,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772113506,\"title\":\"Gray \\/ 3X\",\"option1\":\"Gray\",\"option2\":\"3X\",\"option3\":null,\"sku\":\"W0690075\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Gray \\/ 3X\",\"public_title\":\"Gray \\/ 3X\",\"options\":[\"Gray\",\"3X\"],\"price\":41999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772179042,\"title\":\"Green \\/ S\",\"option1\":\"Green\",\"option2\":\"S\",\"option3\":null,\"sku\":\"W0690077\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":{\"id\":5858046312546,\"product_id\":1799173111906,\"position\":6,\"created_at\":\"2018-10-31T17:02:13-12:00\",\"updated_at\":\"2018-10-31T17:11:28-12:00\",\"alt\":null,\"width\":534,\"height\":712,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-7_fd19567d-d7ed-4a83-99c0-0089b474e755.jpg?v=1541049088\",\"variant_ids\":[16870772179042]},\"available\":true,\"name\":\"Dinterdum pretium condimento - Green \\/ S\",\"public_title\":\"Green \\/ S\",\"options\":[\"Green\",\"S\"],\"price\":9900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\",\"featured_media\":{\"alt\":null,\"id\":4333949485154,\"position\":6,\"preview_image\":{\"aspect_ratio\":0.75,\"height\":712,\"width\":534,\"src\":\"https:\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/0071\\/4755\\/2866\\/products\\/1-7_fd19567d-d7ed-4a83-99c0-0089b474e755.jpg?v=1570324615\"}}},{\"id\":16870772244578,\"title\":\"Green \\/ M\",\"option1\":\"Green\",\"option2\":\"M\",\"option3\":null,\"sku\":\"W0690078\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":false,\"name\":\"Dinterdum pretium condimento - Green \\/ M\",\"public_title\":\"Green \\/ M\",\"options\":[\"Green\",\"M\"],\"price\":18900,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772277346,\"title\":\"Green \\/ L\",\"option1\":\"Green\",\"option2\":\"L\",\"option3\":null,\"sku\":\"W0690079\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Green \\/ L\",\"public_title\":\"Green \\/ L\",\"options\":[\"Green\",\"L\"],\"price\":28600,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772310114,\"title\":\"Green \\/ XL\",\"option1\":\"Green\",\"option2\":\"XL\",\"option3\":null,\"sku\":\"W0690080\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Green \\/ XL\",\"public_title\":\"Green \\/ XL\",\"options\":[\"Green\",\"XL\"],\"price\":28999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772342882,\"title\":\"Green \\/ 2X\",\"option1\":\"Green\",\"option2\":\"2X\",\"option3\":null,\"sku\":\"W0690081\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Dinterdum pretium condimento - Green \\/ 2X\",\"public_title\":\"Green \\/ 2X\",\"options\":[\"Green\",\"2X\"],\"price\":41400,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"},{\"id\":16870772408418,\"title\":\"Green \\/ 3X\",\"option1\":\"Green\",\"option2\":\"3X\",\"option3\":null,\"sku\":\"W0690082\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":false,\"name\":\"Dinterdum pretium condimento - Green \\/ 3X\",\"public_title\":\"Green \\/ 3X\",\"options\":[\"Green\",\"3X\"],\"price\":41999,\"weight\":0,\"compare_at_price\":null,\"inventory_management\":\"shopify\",\"barcode\":\"\"}]}", 1, "inner", "product-item", "on-sale"], [1, "inner-top"], [1, "product-top"], [1, "product-image"], ["href", "/products/dinterdum-pretium-condimento-1", "data-collections-related", "/collections/?view=related", 1, "product-grid-image"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/products/1-2_d3f9d637-64ee-4e71-a363-b12255ab3c33_large.jpg?v=1541049088", "alt", "Dinterdum pretium condimento", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "120px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/products/1-2_d3f9d637-64ee-4e71-a363-b12255ab3c33_large.jpg?v=1541049088", 1, "lazyautosizes", "ls-is-cached", "lazyloaded"], [1, "product-bottom"], [1, "product-vendor"], ["href", "/collections/vendors?q=French%20Connection", "title", "French Connection"], ["href", "/products/dinterdum-pretium-condimento-1", 1, "product-title"], ["id", "spr_badge_1799173111906", "data-rating", "4.5", 1, "spr-badge"], [1, "spr-starrating", "spr-badge-starrating"], [1, "spr-icon", "spr-icon-star"], [1, "spr-icon", "spr-icon-star-half-alt"], [1, "spr-badge-caption"], [1, "price-box"], [1, "price-sale"], [1, "old-price"], [1, "money"], [1, "special-price"], [1, "action"], ["action", "/cart/add", "method", "post", "id", "menu-product-form-1799173111906-", "data-id", "product-actions-1799173111906", "enctype", "multipart/form-data", 1, "variants"], ["href", "/products/dinterdum-pretium-condimento-1", "title", "Dinterdum pretium condimento", 1, "btn"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-1-compressor_235x.jpg?v=1542705547", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "470px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-1-compressor_235x.jpg?v=1542705547", 1, "lazyautosizes", "lazyloaded"], ["href", "/collections", 1, "menu__moblie"], [1, "icon-label", "icon_sale"], [1, "sub-menu-mobile", "menu-mb-translate", "style_3"], [1, "site-nav-dropdown", "style_3"], [1, "hide_pc"], ["href", "/collections"], [1, "menu-lv-2", "col-12", "col-md-3", "inner", "dropdown"], ["href", "/collections/lorem-de-dorus", 1, "menu__moblie"], ["href", "#", "title", "", 1, "menu__moblie", "current"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-1-compressor_210x.jpg?v=1612344070", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "210px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-1-compressor_210x.jpg?v=1612344070", 1, "lazyautosizes", "ls-is-cached", "lazyloaded"], ["href", "/collections/lorem-de-dorus"], ["href", "/collections/milancelos-a-lanos", 1, "menu__moblie"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-2-compressor_210x.jpg?v=1612344076", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "210px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-2-compressor_210x.jpg?v=1612344076", 1, "lazyautosizes", "lazyloaded"], ["href", "/collections/milancelos-a-lanos"], ["href", "/collections/lynn-cosmopolis", 1, "menu__moblie"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-3-compressor_210x.jpg?v=1612344090", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "210px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-3-compressor_210x.jpg?v=1612344090", 1, "lazyautosizes", "lazyloaded"], ["href", "/collections/lynn-cosmopolis"], ["href", "/collections/nor-loremirus", 1, "menu__moblie"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-4-compressor_210x.jpg?v=1612344097", "alt", "", "data-widths", "[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]", "data-sizes", "auto", "data-img", "", "sizes", "210px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/mega-style-3-4-compressor_210x.jpg?v=1612344097", 1, "lazyautosizes", "ls-is-cached", "lazyloaded"], ["href", "/collections/nor-loremirus"], [1, "menu-lv-1", "item", "dropdown", "no-mega-menu"], [1, "menu-lv-2", "hide_pc"], [1, "menu-lv-2"], ["href", "https://new-ella.myshopify.com/pages/lookbook?fts=0&preview_theme_id=44261015650"], ["href", "https://new-ella-demo-02.myshopify.com/pages/lookbook-custom"], [1, "fixed-right-menu"], [1, "search-fixed"], ["href", "#", "title", "Search Icon", "data-search-mobile-toggle", ""], [1, "cart-fixed", "cart-icon"], ["href", "javascript:void(0)", "title", "Cart Icon"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mid-Season Sale Up to 70% OFF. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "style", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " .st0{fill:#231F20;} ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Customer Service +018 900 6690");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "form", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "meta", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "style", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " .st0{fill:#231F20;} ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Free shipping on All Orders. No Minimum Purchase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "svg", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Shopping Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Create an account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Customer Login:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "form", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Email Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Forgot your password? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Create An Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "style", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " .st0{fill:#231F20;} ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "nav", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "ul", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " New In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " New In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "All New In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Lorem Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Lorem Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "All Lorem Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Loremous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Comodianos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Gravidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Montemous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Milancelos Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Milancelos Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "All Milancelos Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Nectellus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Solutmades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Loremous Comodous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Namdos Hempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "All Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Bibendumetos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Pellentes Habitanto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Senectus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Consequatod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Scelerisque Yurnas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Loremouticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Cosmo Milano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " Cosmo Milano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "All Cosmo Milano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Bibendumetos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " Pellentes Habitanto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Senectus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " Consequatod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " Scelerisque Yurnas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " Loremouticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "All Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " Loremous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " Comodianos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, " Gravidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " Montemous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " Acc\uFFFDssorius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Acc\uFFFDssorius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "All Acc\uFFFDssorius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " Nectellus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " Solutmades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, " Loremous Comodous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " Namdos Hempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "a", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "img", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "a", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "img", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "a", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "a", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " Trend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " Trend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "ul", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "a", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "All Trend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, " Lorem Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " Lorem Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "All Lorem Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " Loremous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, " Comodianos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, " Gravidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " Montemous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " Milancelos Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " Milancelos Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "All Milancelos Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " Nectellus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, " Solutmades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, " Loremous Comodous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " Namdos Hempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, " Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, " Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "All Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, " Bibendumetos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, " Pellentes Habitanto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " Senectus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, " Consequatod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, " Scelerisque Yurnas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, " Loremouticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, " Cosmo Milano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](522, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, " Cosmo Milano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "All Cosmo Milano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, " Bibendumetos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " Pellentes Habitanto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, " Senectus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, " Consequatod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, " Scelerisque Yurnas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " Loremouticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, " Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](561, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, " Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "All Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " Loremous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, " Comodianos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, " Gravidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, " Montemous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, " Acc\uFFFDssorius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](596, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](599, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, " Acc\uFFFDssorius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "All Acc\uFFFDssorius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, " Nectellus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, " Solutmades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, " Loremous Comodous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " Namdos Hempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "h3", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, " Featured Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "a", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](638, "img", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "a", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "French Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "a", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, " Dinterdum pretium condimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "span", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](648, "i", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](649, "i", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](650, "i", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](651, "i", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](652, "i", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "span", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "2 reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "div", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "span", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "$86.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "span", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "span", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "$69.99");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "div", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "form", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "a", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, " Select options ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "a", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](671, "img", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "a", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, " Collections");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](676, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "label", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, " Sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "div", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](682, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, " Collections");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "ul", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "li", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "a", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "All Collections");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "a", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, " Lorem De Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](697, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "a", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "img", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](702, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, " Lorem De Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "a", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "All Lorem De Dorus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, " Loremous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, " Comodianos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, " Gravidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, " Montemous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "a", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, " Milancelos A Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](734, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "a", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](736, "img", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](739, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, " Milancelos A Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "a", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "All Milancelos A Lanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, " Bibendumetos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, " Pellentes Habitanto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, " Senectus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, " Consequatod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, " Scelerisque Yurnas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, " Loremouticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "a", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, " Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](775, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "a", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](777, "img", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](780, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, " Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "a", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "All Lynn Cosmopolis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, " Dincidunteros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, " Nectellus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, " Solutmades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, " Loremous Comodous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, " Namdos Hempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "a", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, " Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](812, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "a", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](814, "img", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](817, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, " Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "a", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "All Nor Loremirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, " Bibendumetos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, " Pellentes Habitanto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, " Senectus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, " Consequatod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, " Scelerisque Yurnas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, " Loremouticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "li", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, " LookBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](853, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "div", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](856, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, " LookBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "ul", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "li", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "All LookBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "li", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "a", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, " Lookbook Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "li", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "a", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, " Lookbook Custom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "div", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "div", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "a", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "svg", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](876, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "div", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "a", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "svg", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](882, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](883, "cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]],
      styles: ["@charset \"UTF-8\";\n.header-top[_ngcontent-%COMP%] {\n  background-color: #ffe8e8;\n  color: #b05d5d;\n}\n.header-top[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b05d5d;\n}\n.header-top[_ngcontent-%COMP%]   .top-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0);\n}\n.wrapper_header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  padding: 2px 0;\n  min-height: 40px;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-location[_ngcontent-%COMP%]   .item-location[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  line-height: 1;\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-location[_ngcontent-%COMP%]   .icon-globe[_ngcontent-%COMP%] {\n  padding: 1px;\n  stroke: unset;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-location[_ngcontent-%COMP%]   .icon-sort-down[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  left: -4px;\n  stroke: unset;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: none;\n  letter-spacing: 0.05em;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-message[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  color: #cad3f1;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .cus-ser-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-location[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 40px;\n  background-color: #fff;\n  margin-left: 0;\n  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n.header[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-label[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.header[_ngcontent-%COMP%]   .free-shipping-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 6px 45px 2px 45px;\n  color: #ba7a2d;\n  font-size: 14px;\n  font-weight: 900;\n}\n.header[_ngcontent-%COMP%]   .free-shipping-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ba7a2d;\n}\n.header[_ngcontent-%COMP%]   .free-shipping-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n}\n.header[_ngcontent-%COMP%]   .customer-links[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .customer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.header[_ngcontent-%COMP%]   .customer-links[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: none;\n  width: 24px;\n  height: 24px;\n  margin-left: 7px;\n}\n.is-sticky[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .header-panel-bt[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%] {\n  width: auto;\n  padding-right: 20px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%] {\n  color: #000;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  align-items: center;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  position: relative;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%]:before, .navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .wrapper-top-cart[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  width: 1px;\n  height: 24px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%]    + .wrapper-top-cart[_ngcontent-%COMP%]:before {\n  content: none;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  position: relative;\n  top: 1px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .wrapper-top-cart[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 13px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .wrapper-top-cart[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  padding: 0;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-search[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  stroke: unset;\n}\n.navigation[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 29px;\n  height: 29px;\n}\n.navigation[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]   .cartCount[_ngcontent-%COMP%] {\n  top: 17px;\n  right: 8px;\n  min-width: 13px;\n  line-height: 15px;\n  min-height: 15px;\n  text-align: center;\n  border-radius: 2px;\n  font-size: 12px;\n}\n.navigation[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .menu-lv-1[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%] {\n  padding: 28px 10px 15px;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .header-search__trending[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  margin: 0 -7px;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 0 7px;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  border-bottom: 0;\n  margin-bottom: 8px;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n  color: #505050;\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 4px;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #202020;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  margin-right: 0;\n  color: #ba7a2d;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .header-search__product[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.customer-title[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.customer-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  padding-bottom: 6px;\n  border-bottom: 0;\n}\n.customer-title[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.customer-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.customer-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .img-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-label[_ngcontent-%COMP%]   .img-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 3px 19px 8px;\n}\n.wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .img-icon[_ngcontent-%COMP%] {\n  width: 16px;\n}\n.wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 5px;\n  padding-top: 12px;\n}\n.site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-weight: 900;\n  text-transform: capitalize;\n}\n.site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a.menu__moblie[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.header[_ngcontent-%COMP%]   .header-mb[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]   .cartCount[_ngcontent-%COMP%] {\n  top: 25px;\n  right: 17px;\n  min-width: 12px;\n  line-height: 15px;\n  min-height: 15px;\n  text-align: center;\n  border-radius: 2px;\n  font-size: 12px;\n}\n.header[_ngcontent-%COMP%]   .header-mb[_ngcontent-%COMP%]   .icon-user[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  stroke: none;\n}\n.navigation[_ngcontent-%COMP%]   .close-menu-mb.menu-open[_ngcontent-%COMP%] {\n  position: inherit;\n  background: 0 0;\n}\n.navigation[_ngcontent-%COMP%]   .close-menu-mb.menu-open[_ngcontent-%COMP%]   .icon-line[_ngcontent-%COMP%]:after, .navigation[_ngcontent-%COMP%]   .close-menu-mb.menu-open[_ngcontent-%COMP%]   .icon-line[_ngcontent-%COMP%]:before {\n  background-color: #202020;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-left[_ngcontent-%COMP%]   .cus-ser-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-left[_ngcontent-%COMP%]   .cus-ser-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.top-text-close[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]   .icon-line[_ngcontent-%COMP%]:after, .top-text-close[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]   .icon-line[_ngcontent-%COMP%]:before {\n  width: 20px;\n}\n.top-text-close[_ngcontent-%COMP%]   .close-menu-mb.menu-open[_ngcontent-%COMP%]   .icon-line[_ngcontent-%COMP%]:after, .top-text-close[_ngcontent-%COMP%]   .close-menu-mb.menu-open[_ngcontent-%COMP%]   .icon-line[_ngcontent-%COMP%]:before {\n  left: 0;\n}\n.navigation[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .menu-lv-1[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.navigation[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .menu-mb-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.navigation[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-left[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.navigation[_ngcontent-%COMP%]   .header-pc[_ngcontent-%COMP%]   .right-groups[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 20px 0;\n}\n.navigation[_ngcontent-%COMP%]   .free-shipping-text[_ngcontent-%COMP%] {\n  padding: 6px 45px 2px 45px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 900;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.navigation[_ngcontent-%COMP%]   .free-shipping-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n}\n.navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   .customer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 20px;\n  margin-bottom: 7px;\n}\n.navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   .customer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: none;\n  position: relative;\n  top: -1px;\n  margin-right: 6px;\n  width: 22px;\n  height: 22px;\n}\n.navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%]   .wishlist[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%]   .wishlist[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .currency-block[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .lang-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  align-items: center;\n  padding: 6px 20px;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  position: initial;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .img-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 34px;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  z-index: 2;\n  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);\n  letter-spacing: -0.31em;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: none;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  letter-spacing: 0;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .dropdown-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n  line-height: 22px;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .dropdown-label[_ngcontent-%COMP%]:after {\n  content: \"\uF0DD\";\n  font: normal normal normal 14px/1 FontAwesome;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  background: 0 0;\n  border: none;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  vertical-align: middle;\n  line-height: 18px;\n  text-align: center;\n  color: #6b6b6b;\n  position: relative;\n  top: -4px;\n  right: 0;\n  font-weight: 500;\n}\n.navigation[_ngcontent-%COMP%]   .item-location[_ngcontent-%COMP%]   .wrapper-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n.navigation[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1200px) {\n  .header[_ngcontent-%COMP%]   .header-panel-bt[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n\n  .wrapper_header[_ngcontent-%COMP%] {\n    z-index: 5;\n  }\n\n  .wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .is-sticky[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   .cart-fixed[_ngcontent-%COMP%], .wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .is-sticky[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   .search-fixed[_ngcontent-%COMP%] {\n    height: 60px;\n    border-left: 1px solid #ebebeb;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .menu-lv-2.no-sub[_ngcontent-%COMP%] {\n    margin-bottom: 2px;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]:hover    > .sub-menu-mobile[_ngcontent-%COMP%] {\n    border-top: 1px solid #e6e6e6;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-1[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 19px 0 17px;\n  }\n\n  #dropdown-customer[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100vh;\n    z-index: 999;\n    overflow: auto;\n    transition: transform 0.5s ease;\n    padding-bottom: 100px;\n    width: 400px;\n    max-width: -ms-calc(100vw - 40px);\n    max-width: calc(100vw - 40px);\n    transform: translateX(100%);\n  }\n\n  .customer-show[_ngcontent-%COMP%]   #dropdown-customer[_ngcontent-%COMP%] {\n    transform: none;\n  }\n\n  .cart-show[_ngcontent-%COMP%]   .wrapper-overlay[_ngcontent-%COMP%], .customer-show[_ngcontent-%COMP%]   .wrapper-overlay[_ngcontent-%COMP%] {\n    z-index: 5;\n  }\n\n  .header-search[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 50px;\n    min-width: 50px;\n  }\n\n  body[_ngcontent-%COMP%]    > #dropdown-customer[_ngcontent-%COMP%] {\n    display: inherit;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .header-panel-bt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .header-bottom-left[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: calc(100% - 260px);\n  }\n\n  .navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    width: 260px;\n  }\n\n  .is-sticky[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .header-bottom-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .is-sticky[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%] {\n    padding: 20px 0 20px;\n  }\n\n  .wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    right: auto;\n    left: 0;\n    border: 0;\n    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.15);\n  }\n\n  .wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n    content: \"\uF0DD\";\n    top: -2px;\n  }\n\n  .header[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .currency-block[_ngcontent-%COMP%]   .dropdown-label[_ngcontent-%COMP%] {\n    position: relative;\n    padding-left: 20px;\n    padding-right: 15px;\n  }\n\n  .header[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .currency-block[_ngcontent-%COMP%]   .dropdown-label[_ngcontent-%COMP%]:before {\n    position: absolute;\n    content: \"\";\n    width: 1px;\n    height: 16px;\n    background-color: #e6e6e6;\n    top: 6px;\n    left: 0;\n  }\n\n  .header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.15);\n  }\n\n  .header.header-default[_ngcontent-%COMP%]   .header-panel-bt[_ngcontent-%COMP%]   .right-groups[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .header[_ngcontent-%COMP%]   .header-panel-bt[_ngcontent-%COMP%]   .text-hover[_ngcontent-%COMP%]:before {\n    bottom: 4px;\n  }\n\n  .header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   .nav-wishlist[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .is-sticky[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    border-top: 0;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .wrapper-top-cart[_ngcontent-%COMP%]   #dropdown-cart[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    right: 10px;\n    z-index: 999;\n    border-radius: 1px;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n  }\n\n  .navigation[_ngcontent-%COMP%]   .wrapper-top-cart[_ngcontent-%COMP%]   .cart-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navigation[_ngcontent-%COMP%]   #dropdown-cart[_ngcontent-%COMP%] {\n    max-width: 298px;\n    width: 100vw;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n    -moz-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 3;\n    height: 120px;\n    background-color: #eaeaea;\n    visibility: hidden;\n    opacity: 0;\n    transition: all 0.4s ease;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n  }\n\n  .wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .is-sticky[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   .cart-fixed[_ngcontent-%COMP%]   .cartCount[_ngcontent-%COMP%] {\n    top: 33px;\n    right: 19px;\n  }\n\n  .search-open[_ngcontent-%COMP%]   .wrapper-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .search-open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%], .search-open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .header-bottom-right[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%] {\n    position: relative;\n    top: 3px;\n  }\n\n  .search-open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n    visibility: visible;\n    opacity: 1;\n    display: block;\n  }\n\n  .wrapper-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n    height: 120px;\n    position: relative;\n    margin: 0 auto;\n    width: 100%;\n    display: -moz-flex;\n    display: flex;\n    -moz-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    border: none !important;\n    max-width: 553px;\n  }\n\n  .wrapper-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-top: 12px;\n    padding-bottom: 10px;\n    background-color: transparent;\n    min-width: initial;\n    border: none;\n    width: 50px;\n    justify-content: center;\n  }\n\n  .search-open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    background: #eaeaea;\n  }\n\n  .search-open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    width: 100%;\n    z-index: 4;\n    visibility: visible;\n    cursor: pointer;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .input-group-field[_ngcontent-%COMP%] {\n    border: none;\n    background-color: rgba(255, 255, 255, 0);\n    padding-top: 10px;\n    padding-bottom: 8px;\n    width: -ms-calc(100% - 50px);\n    width: calc(100% - 50px);\n  }\n\n  .wrapper-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 32px !important;\n    height: 32px !important;\n    color: #ba7a2d;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .header-search__form[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .input-group-field[_ngcontent-%COMP%] {\n    font-size: 34px;\n    width: -ms-calc(100% - 52px);\n    width: calc(100% - 52px);\n    text-align: left;\n    padding-left: 5px;\n    line-height: 23px;\n    color: #bcbcbc;\n    padding: 10px 12px 8px;\n  }\n\n  .search-open[_ngcontent-%COMP%]   .wrapper-header[_ngcontent-%COMP%]   .input-group-field[_ngcontent-%COMP%] {\n    width: -ms-calc(100% - 52px);\n    width: calc(100% - 52px);\n  }\n\n  .search-open[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .header-search[_ngcontent-%COMP%] {\n    top: 0;\n    max-width: initial;\n    width: 100%;\n    position: static;\n  }\n\n  .search-open[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n}\n@media (max-width: 1199px) {\n  .header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-location[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .header-bottom-left[_ngcontent-%COMP%]   .top-text-close[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 20px 5px;\n    position: relative;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a.menu__moblie[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n  }\n\n  .header[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n\n  .header[_ngcontent-%COMP%]   .quickSearchResultsWrap[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n    display: -webkit-box;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .header-links[_ngcontent-%COMP%]   .customer-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navigation[_ngcontent-%COMP%]   .header-pc[_ngcontent-%COMP%]   .right-groups[_ngcontent-%COMP%] {\n    padding: 12px 0 20px 0;\n  }\n}\n@media (max-width: 551px) {\n  .header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-message[_ngcontent-%COMP%] {\n    padding: 6px 20px;\n  }\n\n  .wrapper_header.header-lang-style2[_ngcontent-%COMP%]   .lang-currency-groups[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .img-icon[_ngcontent-%COMP%] {\n    position: relative;\n    top: -1px;\n  }\n}\n@media (max-width: 320px) {\n  .header[_ngcontent-%COMP%]   .wrapper-header-top[_ngcontent-%COMP%]   .top-message[_ngcontent-%COMP%] {\n    padding: 8px 0;\n  }\n}\n.nav-vertical[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n@media (min-width: 1200px) {\n  .navigation-vertical-menu[_ngcontent-%COMP%], .wrapper-navigation[_ngcontent-%COMP%], .main-menu[_ngcontent-%COMP%], .vertical-menu[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%] {\n    background-color: #232323;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .sub-menu-mobile[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .sub-menu-mobile[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n  }\n\n  .wrapper-navigation[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  \n  .has_sticky[_ngcontent-%COMP%]   .wrapper_header_default[_ngcontent-%COMP%]   .wrapper-top-cart[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .wrapper-navigation[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .wrapper-navigation[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .menu-lv-1[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .wrapper_header_supermarket[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .menu-lv-1.dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n    color: #ffffff;\n  }\n\n  .is-sticky[_ngcontent-%COMP%]   .wrapper-navigation[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   .search-fixed[_ngcontent-%COMP%], .is-sticky[_ngcontent-%COMP%]   .wrapper-navigation[_ngcontent-%COMP%]   .fixed-right-menu[_ngcontent-%COMP%]   .cart-fixed[_ngcontent-%COMP%] {\n    border-left-color: rgba(255, 255, 255, 0.15);\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-1[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #ffffff;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-1[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    background-color: #ffffff;\n  }\n\n  \n  .site-nav[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    color: #232323;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-bottom-color: rgba(35, 35, 35, 0.7);\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #232323;\n  }\n\n  .navigation-08[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .no-mega-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, .navigation-08[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%]   .no-mega-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    background-color: #0688e2;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-3[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .no-mega-menu[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #3c3c3c;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-3[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .site-nav[_ngcontent-%COMP%]   .no-mega-menu[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #0688e2;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-3[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    background-color: #0688e2;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .icon_sale[_ngcontent-%COMP%]:before {\n    border-top-color: #ef6454;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .icon_new[_ngcontent-%COMP%]:before {\n    border-top-color: #06bfe2;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .icon_hot[_ngcontent-%COMP%]:before {\n    border-top-color: #ffbb49;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-1[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .menu-mb-title[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .menu-lv-3[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .no-mega-menu[_ngcontent-%COMP%]   .menu-lv-2[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.site-nav[_ngcontent-%COMP%]   .icon_sale[_ngcontent-%COMP%] {\n  background-color: #ef6454;\n  color: #ffffff;\n}\n.site-nav[_ngcontent-%COMP%]   .icon_new[_ngcontent-%COMP%] {\n  background-color: #06bfe2;\n  color: #ffffff;\n}\n.site-nav[_ngcontent-%COMP%]   .icon_hot[_ngcontent-%COMP%] {\n  background-color: #ffbb49;\n  color: #ffffff;\n}\n.site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .skin-2[_ngcontent-%COMP%]   .azbrandstable[_ngcontent-%COMP%]   .vendor-letter-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner.skin-2[_ngcontent-%COMP%]   .col-right[_ngcontent-%COMP%]   .link-brands[_ngcontent-%COMP%] {\n  color: #232323;\n}\n@media (max-width: 1199px) {\n  .site-nav[_ngcontent-%COMP%]   .icon_sale[_ngcontent-%COMP%]:before {\n    border-right-color: #ef6454;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .icon_new[_ngcontent-%COMP%]:before {\n    border-right-color: #06bfe2;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .icon_hot[_ngcontent-%COMP%]:before {\n    border-right-color: #ffbb49;\n  }\n}\n@media (min-width: 1200px) {\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner[_ngcontent-%COMP%] {\n    background-color: #eaeaea;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner[_ngcontent-%COMP%]   .col-left[_ngcontent-%COMP%]:before {\n    background-color: #eaeaea;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner.skin-2[_ngcontent-%COMP%]:before {\n    background-color: #eaeaea;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner.skin-3.skin-3-product[_ngcontent-%COMP%], .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner.skin-3.skin-3-product[_ngcontent-%COMP%]:before, .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner.skin-3.skin-3-product[_ngcontent-%COMP%]:after {\n    background-color: #eaeaea !important;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner.skin-3[_ngcontent-%COMP%]   .col-product[_ngcontent-%COMP%]   .slick-arrow[_ngcontent-%COMP%] {\n    background: #8c8c8c;\n    border: #8c8c8c;\n  }\n\n  .site-nav[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .style_5[_ngcontent-%COMP%]   .mega-banner.skin-3[_ngcontent-%COMP%]   .col-product[_ngcontent-%COMP%]   .slick-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXFBpY2hhdVxcQmx1ZW1vZGFzX2Zyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QURFSjtBQ0RJO0VBQ0ksY0FBQTtBREdSO0FDRVk7RUFDSSwrQ0FBQTtBREFoQjtBQ01BO0VBQ0ksa0JBQUE7QURISjtBQ01BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FESEo7QUNNQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBREhKO0FDTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURISjtBQ01BO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREhKO0FDTUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBREhKO0FDTUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBREhKO0FDTUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FESEo7QUNNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURISjtBQ01BO0VBQ0ksZ0JBQUE7QURISjtBQ01BO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtBREhKO0FDTUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FESEo7QUNNQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FESEo7QUNNQTtFQUNJLGNBQUE7QURISjtBQ01BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FESEo7QUNNQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBREhKO0FDTUE7RUFDSSxpQkFBQTtBREhKO0FDTUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBREhKO0FDTUE7RUFDSSxVQUFBO0FESEo7QUNNQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBREhKO0FDTUE7RUFDSSxXQUFBO0FESEo7QUNNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FESEo7QUNNQTtFQUNJLGlCQUFBO0FESEo7QUNNQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QURISjtBQ01BOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBREhKO0FDTUE7RUFDSSxhQUFBO0FESEo7QUNNQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QURISjtBQ01BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBREhKO0FDTUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBREhKO0FDTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBREhKO0FDTUE7RUFDSSxpQkFBQTtBREhKO0FDTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURISjtBQ01BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURISjtBQ01BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBS0Esa0JBQUE7RUFDQSxlQUFBO0FESEo7QUNNQTtFQUNJLDBCQUFBO0FESEo7QUNNQTtFQUNJLHVCQUFBO0FESEo7QUNNQTtFQUNJLG1CQUFBO0FESEo7QUNNQTtFQUNJLGNBQUE7QURISjtBQ01BO0VBQ0ksY0FBQTtBREhKO0FDTUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESEo7QUNNQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESEo7QUNNQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0FESEo7QUNNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURISjtBQ01BO0VBQ0ksZUFBQTtBREhKO0FDTUE7RUFDSSxrQkFBQTtBREhKO0FDTUE7RUFDSSxtQkFBQTtBREhKO0FDTUE7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ01BO0VBQ0ksa0JBQUE7QURISjtBQ01BO0VBQ0ksZ0JBQUE7QURISjtBQ01BO0VBQ0ksbUJBQUE7QURISjtBQ01BOztFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FESEo7QUNNQTtFQUNJLHFCQUFBO0FESEo7QUNNQTtFQUNJLFdBQUE7QURISjtBQ01BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURISjtBQ01BO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtBREhKO0FDTUE7RUFDSSx5QkFBQTtBREhKO0FDTUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURISjtBQ01BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FESEo7QUNNQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBREhKO0FDTUE7O0VBRUkseUJBQUE7QURISjtBQ01BO0VBQ0ksZUFBQTtBREhKO0FDTUE7RUFDSSxnQkFBQTtBREhKO0FDTUE7O0VBRUksV0FBQTtBREhKO0FDTUE7O0VBRUksT0FBQTtBREhKO0FDTUE7RUFDSSxlQUFBO0FESEo7QUNNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FESEo7QUNNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FESEo7QUNNQTtFQUNJLGdCQUFBO0FESEo7QUNNQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBREhKO0FDTUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FESEo7QUNNQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBREhKO0FDTUE7RUFDSSxtQkFBQTtBREhKO0FDTUE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FESEo7QUNNQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ01BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FESEo7QUNNQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FESEo7QUNNQTtFQUNJLG9CQUFBO0FESEo7QUNNQTtFQUNJLHFCQUFBO0FESEo7QUNNQTtFQUNJLFVBQUE7QURISjtBQ01BOztFQUVJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREhKO0FDTUE7RUFDSSxpQkFBQTtBREhKO0FDTUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FESEo7QUNNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FESEo7QUNNQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7QURISjtBQ01BO0VBQ0ksYUFBQTtBREhKO0FDTUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FESEo7QUNNQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBREhKO0FDTUE7RUFDSSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FESEo7QUNNQTtFQUNJLGFBQUE7QURISjtBQ01BO0VBQ0ksYUFBQTtBREhKO0FDTUE7RUFDSSxhQUFBO0FESEo7QUNNQTtFQUNJO0lBQ0ksaUJBQUE7RURITjs7RUNNRTtJQUNJLFVBQUE7RURITjs7RUNNRTs7SUFFSSxZQUFBO0lBQ0EsOEJBQUE7RURITjs7RUNNRTtJQUNJLGtCQUFBO0VESE47O0VDTUU7SUFDSSw2QkFBQTtFREhOOztFQ01FO0lBQ0ksb0JBQUE7RURITjs7RUNNRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFLQSwrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUdBLGlDQUFBO0lBQ0EsNkJBQUE7SUFLQSwyQkFBQTtFREhOOztFQ01FO0lBS0ksZUFBQTtFREhOOztFQ01FOztJQUVJLFVBQUE7RURITjs7RUNNRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VESE47O0VDTUU7SUFDSSxnQkFBQTtFREhOOztFQ01FO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VESE47O0VDTUU7SUFDSSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VESE47O0VDTUU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7RURITjs7RUNNRTtJQUNJLFdBQUE7RURITjs7RUNNRTtJQUNJLGFBQUE7RURITjs7RUNNRTtJQUNJLG9CQUFBO0VESE47O0VDTUU7SUFDSSxXQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSx5Q0FBQTtFREhOOztFQ01FO0lBQ0ksWUFBQTtJQUNBLFNBQUE7RURITjs7RUNNRTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFREhOOztFQ01FO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0VESE47O0VDTUU7SUFDSSx5Q0FBQTtFREhOOztFQ01FO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0VESE47O0VDTUU7SUFDSSxXQUFBO0VESE47O0VDTUU7SUFDSSxhQUFBO0VESE47O0VDTUU7SUFDSSxhQUFBO0VESE47O0VDTUU7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUtBLGtCQUFBO0lBR0EseUVBQUE7RURITjs7RUNNRTtJQUNJLGFBQUE7RURITjs7RUNNRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtFREhOOztFQ01FO0lBRUksd0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSx5QkFBQTtFREhOOztFQ01FO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VESE47O0VDTUU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFREhOOztFQ01FO0lBQ0ksY0FBQTtFREhOOztFQ01FOztJQUVJLGFBQUE7RURITjs7RUNNRTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtFREhOOztFQ01FO0lBQ0ksbUJBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFREhOOztFQ01FO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFHQSxrQkFBQTtJQUVBLGFBQUE7SUFFQSx3QkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VESE47O0VDTUU7SUFDSSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUtBLHVCQUFBO0VESE47O0VDTUU7SUFDSSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFREhOOztFQ01FO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFREhOOztFQ01FO0lBQ0ksWUFBQTtJQUNBLHdDQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUdBLDRCQUFBO0lBQ0Esd0JBQUE7RURITjs7RUNNRTtJQUNJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0VESE47O0VDTUU7SUFDSSxrQkFBQTtFREhOOztFQ01FO0lBQ0ksZUFBQTtJQUdBLDRCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7RURITjs7RUNNRTtJQUdJLDRCQUFBO0lBQ0Esd0JBQUE7RURITjs7RUNNRTtJQUNJLE1BQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFREhOOztFQ01FO0lBQ0ksY0FBQTtFREhOO0FBQ0Y7QUNNQTtFQUNJO0lBQ0ksdUJBQUE7RURKTjs7RUNPRTtJQUNJLGFBQUE7RURKTjs7RUNPRTtJQUNJLGFBQUE7RURKTjs7RUNPRTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFREpOOztFQ09FO0lBQ0ksMEJBQUE7RURKTjs7RUNPRTtJQUNJLGVBQUE7RURKTjs7RUNPRTtJQUNJLG9CQUFBO0VESk47O0VDT0U7SUFDSSxhQUFBO0VESk47O0VDT0U7SUFDSSxzQkFBQTtFREpOO0FBQ0Y7QUNPQTtFQUNJO0lBQ0ksaUJBQUE7RURMTjs7RUNRRTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtFRExOO0FBQ0Y7QUNRQTtFQUNJO0lBQ0ksY0FBQTtFRE5OO0FBQ0Y7QUNTQTtFQUNJLGNBQUE7QURQSjtBQ1NBO0VBQ0k7Ozs7SUFJSSx5QkFBQTtFRE5OOztFQ1FFOztJQUVJLHlCQUFBO0VETE47O0VDT0U7SUFDSSxnQkFBQTtFREpOOztFQ0tJLGNBQUE7RUFDRjs7OztJQUlJLGNBQUE7RURGTjs7RUNJRTs7SUFFSSw0Q0FBQTtFREROOztFQ0dFO0lBQ0ksY0FBQTtFREFOOztFQ0VFO0lBQ0kseUJBQUE7RURDTjs7RUNBSSxjQUFBO0VBQ0Y7OztJQUdJLGNBQUE7RURHTjs7RUNERTtJQUNJLDBDQUFBO0VESU47O0VDRkU7SUFDSSxjQUFBO0VES047O0VDSEU7O0lBRUkseUJBQUE7RURNTjs7RUNKRTs7SUFFSSxjQUFBO0VET047O0VDTEU7O0lBRUksY0FBQTtFRFFOOztFQ05FO0lBQ0kseUJBQUE7RURTTjs7RUNQRTtJQUNJLHlCQUFBO0VEVU47O0VDUkU7SUFDSSx5QkFBQTtFRFdOOztFQ1RFO0lBQ0kseUJBQUE7RURZTjs7RUNWRTs7SUFFSSxlQUFBO0VEYU47O0VDWEU7OztJQUdJLGVBQUE7RURjTjs7RUNaRTtJQUNJLGVBQUE7RURlTjs7RUNiRTtJQUNJLGVBQUE7RURnQk47QUFDRjtBQ2RBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FEZ0JKO0FDZEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QURpQko7QUNmQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBRGtCSjtBQ2hCQTs7RUFFSSxjQUFBO0FEbUJKO0FDakJBO0VBQ0k7SUFDSSwyQkFBQTtFRG9CTjs7RUNsQkU7SUFDSSwyQkFBQTtFRHFCTjs7RUNuQkU7SUFDSSwyQkFBQTtFRHNCTjtBQUNGO0FDbkJBO0VBQ0k7SUFDSSx5QkFBQTtFRHFCTjs7RUNuQkU7SUFDSSx5QkFBQTtFRHNCTjs7RUNwQkU7SUFDSSx5QkFBQTtFRHVCTjs7RUNyQkU7OztJQUdJLG9DQUFBO0VEd0JOOztFQ3RCRTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFRHlCTjs7RUN2QkU7SUFDSSxjQUFBO0VEMEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVhZGVyLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZTg7XG4gIGNvbG9yOiAjYjA1ZDVkO1xufVxuLmhlYWRlci10b3AgYSB7XG4gIGNvbG9yOiAjYjA1ZDVkO1xufVxuLmhlYWRlci10b3AgLnRvcC1tZXNzYWdlIHAgYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4ud3JhcHBlcl9oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXIgLmhlYWRlci10b3Age1xuICBwYWRkaW5nOiAycHggMDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLnRvcC1sb2NhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIgLndyYXBwZXItaGVhZGVyLXRvcCAudG9wLWxvY2F0aW9uIC5pdGVtLWxvY2F0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLnRvcC1sb2NhdGlvbiAuaWNvbi1nbG9iZSB7XG4gIHBhZGRpbmc6IDFweDtcbiAgc3Ryb2tlOiB1bnNldDtcbn1cblxuLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC50b3AtbG9jYXRpb24gLmljb24tc29ydC1kb3duIHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtNHB4O1xuICBzdHJva2U6IHVuc2V0O1xufVxuXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLnRvcC1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC50b3AtbWVzc2FnZSBiIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2NhZDNmMTtcbn1cblxuLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC5jdXMtc2VyLXRleHQgYSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5oZWFkZXIgLndyYXBwZXItaGVhZGVyLXRvcCAudG9wLWxvY2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYm94LXNoYWRvdzogMCA1cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmhlYWRlciAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmRyb3Bkb3duLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVhZGVyIC5mcmVlLXNoaXBwaW5nLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCA0NXB4IDJweCA0NXB4O1xuICBjb2xvcjogI2JhN2EyZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uaGVhZGVyIC5mcmVlLXNoaXBwaW5nLXRleHQgYSBzcGFuIHtcbiAgY29sb3I6ICNiYTdhMmQ7XG59XG5cbi5oZWFkZXIgLmZyZWUtc2hpcHBpbmctdGV4dCBiIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5oZWFkZXIgLmN1c3RvbWVyLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyIC5jdXN0b21lci1saW5rcyBhIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5oZWFkZXIgLmN1c3RvbWVyLWxpbmtzIHN2ZyB7XG4gIHN0cm9rZTogbm9uZTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuLmlzLXN0aWNreSAubmF2aWdhdGlvbiAuaGVhZGVyLXBhbmVsLWJ0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLm5hdi1zZWFyY2gge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLm5hdi1zZWFyY2ggLmljb24tc2VhcmNoIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtc2VhcmNoIC5jbG9zZS1zZWFyY2gge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtc2VhcmNoIC5jbG9zZS1zZWFyY2ggc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXdpc2hsaXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtd2lzaGxpc3Q6YmVmb3JlLFxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLndyYXBwZXItdG9wLWNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtd2lzaGxpc3QgKyAud3JhcHBlci10b3AtY2FydDpiZWZvcmUge1xuICBjb250ZW50OiBub25lO1xufVxuXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXdpc2hsaXN0IGEge1xuICBjb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLndyYXBwZXItdG9wLWNhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLndyYXBwZXItdG9wLWNhcnQgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXNlYXJjaCBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXNlYXJjaCAuaWNvbi1zZWFyY2ggc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXdpc2hsaXN0IHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHN0cm9rZTogdW5zZXQ7XG59XG5cbi5uYXZpZ2F0aW9uIC5jYXJ0LWljb24gc3ZnIHtcbiAgd2lkdGg6IDI5cHg7XG4gIGhlaWdodDogMjlweDtcbn1cblxuLm5hdmlnYXRpb24gLmNhcnQtaWNvbiAuY2FydENvdW50IHtcbiAgdG9wOiAxN3B4O1xuICByaWdodDogOHB4O1xuICBtaW4td2lkdGg6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBtaW4taGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5hdmlnYXRpb24gLnNpdGUtbmF2IC5tZW51LWx2LTEgPiBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIHtcbiAgcGFkZGluZzogMjhweCAxMHB4IDE1cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5oZWFkZXItc2VhcmNoX190cmVuZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5saXN0LWl0ZW0ge1xuICBtYXJnaW46IDAgLTdweDtcbn1cblxuLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAgLmxpc3QtaXRlbSAuaXRlbSB7XG4gIHBhZGRpbmc6IDAgN3B4O1xufVxuXG4ubmF2aWdhdGlvbiAucXVpY2tTZWFyY2hSZXN1bHRzV3JhcCAuYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5saXN0LWl0ZW0gLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIGNvbG9yOiAjNTA1MDUwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAgLmxpc3QtaXRlbSAuaGlnaGxpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyMDIwMjA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5saXN0LWl0ZW0gLmhpZ2hsaWdodCAuZmEge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGNvbG9yOiAjYmE3YTJkO1xufVxuXG4ubmF2aWdhdGlvbiAucXVpY2tTZWFyY2hSZXN1bHRzV3JhcCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAgLmhlYWRlci1zZWFyY2hfX3Byb2R1Y3QgLmJveC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmN1c3RvbWVyLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmN1c3RvbWVyLXRpdGxlIGg1IHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5jdXN0b21lci10aXRsZSAuY2xvc2Uge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jdXN0b21lci1jb250ZW50IC5hY3Rpb24tYnRuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmN1c3RvbWVyLWNvbnRlbnQgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuYnRuLWdyb3VwIC5pbWctaWNvbiBpbWcsXG4ud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuZHJvcGRvd24tbGFiZWwgLmltZy1pY29uIGltZyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IHtcbiAgcGFkZGluZzogM3B4IDE5cHggOHB4O1xufVxuXG4ud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuYnRuLWdyb3VwIC5pbWctaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4ud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuZHJvcGRvd24tbWVudSBoMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLm1lbnUtbHYtMiA+IGEge1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLm1lbnUtbHYtMiA+IGEubWVudV9fbW9ibGllIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRlciAuaGVhZGVyLW1iIC5jYXJ0LWljb24gLmNhcnRDb3VudCB7XG4gIHRvcDogMjVweDtcbiAgcmlnaHQ6IDE3cHg7XG4gIG1pbi13aWR0aDogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oZWFkZXIgLmhlYWRlci1tYiAuaWNvbi11c2VyIHN2ZyB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHN0cm9rZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24gLmNsb3NlLW1lbnUtbWIubWVudS1vcGVuIHtcbiAgcG9zaXRpb246IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IDAgMDtcbn1cblxuLm5hdmlnYXRpb24gLmNsb3NlLW1lbnUtbWIubWVudS1vcGVuIC5pY29uLWxpbmU6YWZ0ZXIsXG4ubmF2aWdhdGlvbiAuY2xvc2UtbWVudS1tYi5tZW51LW9wZW4gLmljb24tbGluZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1sZWZ0IC5jdXMtc2VyLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLWxlZnQgLmN1cy1zZXItdGV4dCBzcGFuIGEge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG9wLXRleHQtY2xvc2UgLmljb24tbmF2IC5pY29uLWxpbmU6YWZ0ZXIsXG4udG9wLXRleHQtY2xvc2UgLmljb24tbmF2IC5pY29uLWxpbmU6YmVmb3JlIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi50b3AtdGV4dC1jbG9zZSAuY2xvc2UtbWVudS1tYi5tZW51LW9wZW4gLmljb24tbGluZTphZnRlcixcbi50b3AtdGV4dC1jbG9zZSAuY2xvc2UtbWVudS1tYi5tZW51LW9wZW4gLmljb24tbGluZTpiZWZvcmUge1xuICBsZWZ0OiAwO1xufVxuXG4ubmF2aWdhdGlvbiAuc2l0ZS1uYXYgLm1lbnUtbHYtMSA+IGEge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5zaXRlLW5hdiAubWVudS1tYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5uYXZpZ2F0aW9uIC5zaXRlLW5hdiAubWVnYS1tZW51IC5tZW51LWx2LTIgPiBhIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLWxlZnQgLm5hdi1iYXIgLnNpdGUtbmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1wYyAucmlnaHQtZ3JvdXBzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4ubmF2aWdhdGlvbiAuZnJlZS1zaGlwcGluZy10ZXh0IHtcbiAgcGFkZGluZzogNnB4IDQ1cHggMnB4IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmF2aWdhdGlvbiAuZnJlZS1zaGlwcGluZy10ZXh0IGIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItbGlua3MgLmN1c3RvbWVyLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyAuY3VzdG9tZXItbGlua3MgYSB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyAubmF2LXdpc2hsaXN0IGEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItbGlua3Mgc3ZnIHtcbiAgc3Ryb2tlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5oZWFkZXItbGlua3MgLm5hdi13aXNobGlzdCAud2lzaGxpc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyAubmF2LXdpc2hsaXN0IC53aXNobGlzdCBzdmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uYXZpZ2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYXZpZ2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuY3VycmVuY3ktYmxvY2ssXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmxhbmctYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuYnRuLWdyb3VwIHtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbi5uYXZpZ2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuYnRuLWdyb3VwIC5pbWctaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5uYXZpZ2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAubGFiZWwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiAwIDVweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzFlbTtcbn1cblxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IGgyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5idG4tZ3JvdXAgLmRyb3Bkb3duLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmJ0bi1ncm91cCAuZHJvcGRvd24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmJ0bi1ncm91cCAuZHJvcGRvd24tbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+DnVwiO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXZpZ2F0aW9uIC5pdGVtLWxvY2F0aW9uIC53cmFwcGVyLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlciAuaGVhZGVyLXBhbmVsLWJ0IC5oZWFkZXItbG9nbyB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICAud3JhcHBlcl9oZWFkZXIge1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5pcy1zdGlja3kgLmZpeGVkLXJpZ2h0LW1lbnUgLmNhcnQtZml4ZWQsXG4ud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5pcy1zdGlja3kgLmZpeGVkLXJpZ2h0LW1lbnUgLnNlYXJjaC1maXhlZCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ViZWJlYjtcbiAgfVxuXG4gIC5zaXRlLW5hdiAubWVnYS1tZW51IC5tZW51LWx2LTIubm8tc3ViIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cblxuICAuc2l0ZS1uYXYgLm1lZ2EtbWVudTpob3ZlciA+IC5zdWItbWVudS1tb2JpbGUge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZW51LWx2LTEgPiBhIHtcbiAgICBwYWRkaW5nOiAxOXB4IDAgMTdweDtcbiAgfVxuXG4gICNkcm9wZG93bi1jdXN0b21lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuICAgIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1heC13aWR0aDogLW1vei1jYWxjKDEwMHZ3IC0gNDBweCk7XG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSA0MHB4KTtcbiAgICBtYXgtd2lkdGg6IC1tcy1jYWxjKDEwMHZ3IC0gNDBweCk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG5cbiAgLmN1c3RvbWVyLXNob3cgI2Ryb3Bkb3duLWN1c3RvbWVyIHtcbiAgICAtbW96LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtby10cmFuc2Zvcm06IG5vbmU7XG4gICAgLW1zLXRyYW5zZm9ybTogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAuY2FydC1zaG93IC53cmFwcGVyLW92ZXJsYXksXG4uY3VzdG9tZXItc2hvdyAud3JhcHBlci1vdmVybGF5IHtcbiAgICB6LWluZGV4OiA1O1xuICB9XG5cbiAgLmhlYWRlci1zZWFyY2ggLmJ0biB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICB9XG5cbiAgYm9keSA+ICNkcm9wZG93bi1jdXN0b21lciB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIC5oZWFkZXItcGFuZWwtYnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCk7XG4gIH1cblxuICAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG5cbiAgLmlzLXN0aWNreSAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pcy1zdGlja3kgLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaGVhZGVyIC5oZWFkZXItYm90dG9tIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbiAgfVxuXG4gIC53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgfVxuXG4gIC53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwi74OdXCI7XG4gICAgdG9wOiAtMnB4O1xuICB9XG5cbiAgLmhlYWRlciAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmN1cnJlbmN5LWJsb2NrIC5kcm9wZG93bi1sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgLmhlYWRlciAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmN1cnJlbmN5LWJsb2NrIC5kcm9wZG93bi1sYWJlbDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuZHJvcGRvd24tbWVudSB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cblxuICAuaGVhZGVyLmhlYWRlci1kZWZhdWx0IC5oZWFkZXItcGFuZWwtYnQgLnJpZ2h0LWdyb3VwcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmhlYWRlciAuaGVhZGVyLXBhbmVsLWJ0IC50ZXh0LWhvdmVyOmJlZm9yZSB7XG4gICAgYm90dG9tOiA0cHg7XG4gIH1cblxuICAuaGVhZGVyIC5oZWFkZXItYm90dG9tIC5oZWFkZXItbGlua3MgLm5hdi13aXNobGlzdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pcy1zdGlja3kgLm5hdmlnYXRpb24ge1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAubmF2aWdhdGlvbiAud3JhcHBlci10b3AtY2FydCAjZHJvcGRvd24tY2FydCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIC53cmFwcGVyLXRvcC1jYXJ0IC5jYXJ0LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdmlnYXRpb24gI2Ryb3Bkb3duLWNhcnQge1xuICAgIG1heC13aWR0aDogMjk4cHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLm5hdmlnYXRpb24gLnNlYXJjaC1mb3JtIHtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB9XG5cbiAgLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5pcy1zdGlja3kgLmZpeGVkLXJpZ2h0LW1lbnUgLmNhcnQtZml4ZWQgLmNhcnRDb3VudCB7XG4gICAgdG9wOiAzM3B4O1xuICAgIHJpZ2h0OiAxOXB4O1xuICB9XG5cbiAgLnNlYXJjaC1vcGVuIC53cmFwcGVyLW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNlYXJjaC1vcGVuIC5uYXZpZ2F0aW9uIC5maXhlZC1yaWdodC1tZW51IC5pY29uLXNlYXJjaCxcbi5zZWFyY2gtb3BlbiAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAuaWNvbi1zZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2VhcmNoLW9wZW4gLm5hdmlnYXRpb24gLmZpeGVkLXJpZ2h0LW1lbnUgLmNsb3NlLXNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICB9XG5cbiAgLnNlYXJjaC1vcGVuIC5uYXZpZ2F0aW9uIC5zZWFyY2gtZm9ybSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLndyYXBwZXItaGVhZGVyIC5zZWFyY2gtYmFyIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNTUzcHg7XG4gIH1cblxuICAud3JhcHBlci1oZWFkZXIgLnNlYXJjaC1iYXIgLmljb24tc2VhcmNoIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1pbi13aWR0aDogaW5pdGlhbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5zZWFyY2gtb3BlbiAubmF2aWdhdGlvbiAuc2VhcmNoLWZvcm0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIH1cblxuICAuc2VhcmNoLW9wZW4gLm5hdmlnYXRpb24gLnNlYXJjaC1mb3JtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogNDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIC5pbnB1dC1ncm91cC1maWVsZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA1MHB4KTtcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA1MHB4KTtcbiAgICB3aWR0aDogLW1zLWNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgfVxuXG4gIC53cmFwcGVyLWhlYWRlciAuc2VhcmNoLWJhciAuaWNvbi1zZWFyY2ggc3ZnIHtcbiAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYmE3YTJkO1xuICB9XG5cbiAgLm5hdmlnYXRpb24gLnNlYXJjaC1mb3JtIC5oZWFkZXItc2VhcmNoX19mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubmF2aWdhdGlvbiAuaW5wdXQtZ3JvdXAtZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA1MnB4KTtcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA1MnB4KTtcbiAgICB3aWR0aDogLW1zLWNhbGMoMTAwJSAtIDUycHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MnB4KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGNvbG9yOiAjYmNiY2JjO1xuICAgIHBhZGRpbmc6IDEwcHggMTJweCA4cHg7XG4gIH1cblxuICAuc2VhcmNoLW9wZW4gLndyYXBwZXItaGVhZGVyIC5pbnB1dC1ncm91cC1maWVsZCB7XG4gICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gNTJweCk7XG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNTJweCk7XG4gICAgd2lkdGg6IC1tcy1jYWxjKDEwMCUgLSA1MnB4KTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTJweCk7XG4gIH1cblxuICAuc2VhcmNoLW9wZW4gLm5hdmlnYXRpb24gLmhlYWRlci1zZWFyY2gge1xuICAgIHRvcDogMDtcbiAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gIC5zZWFyY2gtb3BlbiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5oZWFkZXIgLndyYXBwZXItaGVhZGVyLXRvcCAudG9wLWxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdmlnYXRpb24gLnNlYXJjaC1mb3JtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tbGVmdCAudG9wLXRleHQtY2xvc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDIwcHggNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIC5zaXRlLW5hdiAubWVnYS1tZW51IC5tZW51LWx2LTIgPiBhLm1lbnVfX21vYmxpZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cblxuICAuaGVhZGVyIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaGVhZGVyIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtdGl0bGUge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICB9XG5cbiAgLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyAuY3VzdG9tZXItbGlua3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmF2aWdhdGlvbiAuaGVhZGVyLXBjIC5yaWdodC1ncm91cHMge1xuICAgIHBhZGRpbmc6IDEycHggMCAyMHB4IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTFweCkge1xuICAuaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLnRvcC1tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgfVxuXG4gIC53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5idG4tZ3JvdXAgLmltZy1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC50b3AtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gIH1cbn1cbi5uYXYtdmVydGljYWwgLnNvY2lhbC1pY29ucyBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5hdmlnYXRpb24tdmVydGljYWwtbWVudSxcbi53cmFwcGVyLW5hdmlnYXRpb24sXG4ubWFpbi1tZW51LFxuLnZlcnRpY2FsLW1lbnUgLm5hdi1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gIH1cblxuICAuc2l0ZS1uYXYgLnN1Yi1tZW51LW1vYmlsZSxcbi5zaXRlLW5hdiAuc3ViLW1lbnUtbW9iaWxlIC5iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC53cmFwcGVyLW5hdmlnYXRpb24gLm1haW4tbWVudSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC8qIE1lbnUgTHYgMSAqL1xuICAuaGFzX3N0aWNreSAud3JhcHBlcl9oZWFkZXJfZGVmYXVsdCAud3JhcHBlci10b3AtY2FydCAuY2FydC1pY29uIHN2Zyxcbi53cmFwcGVyLW5hdmlnYXRpb24gLmZpeGVkLXJpZ2h0LW1lbnUgYSxcbi53cmFwcGVyLW5hdmlnYXRpb24gLnNpdGUtbmF2IC5tZW51LWx2LTEgPiBhLFxuLndyYXBwZXJfaGVhZGVyX3N1cGVybWFya2V0IC52ZXJ0aWNhbC1tZW51IC5tZW51LWx2LTEuZHJvcGRvd24gPiBhOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5pcy1zdGlja3kgLndyYXBwZXItbmF2aWdhdGlvbiAuZml4ZWQtcmlnaHQtbWVudSAuc2VhcmNoLWZpeGVkLFxuLmlzLXN0aWNreSAud3JhcHBlci1uYXZpZ2F0aW9uIC5maXhlZC1yaWdodC1tZW51IC5jYXJ0LWZpeGVkIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgfVxuXG4gIC5zaXRlLW5hdiAubWVudS1sdi0xID4gYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuc2l0ZS1uYXYgLm1lbnUtbHYtMSA+IGEgc3BhbjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAvKiBNZW51IEx2IDIgKi9cbiAgLnNpdGUtbmF2IC5tZW51LWx2LTIgPiBhLFxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLm1lZ2EtYmFubmVyIC50aXRsZSxcbi5zaXRlLW5hdiAubWVnYS1tZW51IC5wcm9kdWN0LWl0ZW0gLmJ0biB7XG4gICAgY29sb3I6ICMyMzIzMjM7XG4gIH1cblxuICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAucHJvZHVjdC1pdGVtIC5idG4ge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMzUsIDM1LCAzNSwgMC43KTtcbiAgfVxuXG4gIC5zaXRlLW5hdiAubWVudS1sdi0yID4gYTpob3ZlciB7XG4gICAgY29sb3I6ICMyMzIzMjM7XG4gIH1cblxuICAubmF2aWdhdGlvbi0wOCAuc2l0ZS1uYXYgLm5vLW1lZ2EtbWVudSBsaSA+IGEgc3BhbjpiZWZvcmUsXG4ubmF2aWdhdGlvbi0wOCAuc2l0ZS1uYXYgLm5vLW1lZ2EtbWVudSAuZHJvcGRvd24gPiBhIHNwYW46YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY4OGUyO1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZW51LWx2LTMgPiBhLFxuLnNpdGUtbmF2IC5uby1tZWdhLW1lbnUgLm1lbnUtbHYtMiA+IGEge1xuICAgIGNvbG9yOiAjM2MzYzNjO1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZW51LWx2LTMgPiBhOmhvdmVyLFxuLnNpdGUtbmF2IC5uby1tZWdhLW1lbnUgLm1lbnUtbHYtMiA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDY4OGUyO1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZW51LWx2LTMgPiBhIHNwYW46YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY4OGUyO1xuICB9XG5cbiAgLnNpdGUtbmF2IC5pY29uX3NhbGU6YmVmb3JlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZWY2NDU0O1xuICB9XG5cbiAgLnNpdGUtbmF2IC5pY29uX25ldzpiZWZvcmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwNmJmZTI7XG4gIH1cblxuICAuc2l0ZS1uYXYgLmljb25faG90OmJlZm9yZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmYmI0OTtcbiAgfVxuXG4gIC5zaXRlLW5hdiAubWVudS1sdi0xID4gYSxcbi5zaXRlLW5hdiAubWVudS1tYi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZW51LWx2LTIgPiBhLFxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLm1lZ2EtYmFubmVyIC50aXRsZSxcbi5zaXRlLW5hdiAubWVnYS1tZW51IC5wcm9kdWN0LWl0ZW0gLmJ0biB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZW51LWx2LTMgPiBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuc2l0ZS1uYXYgLm5vLW1lZ2EtbWVudSAubWVudS1sdi0yID4gYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uc2l0ZS1uYXYgLmljb25fc2FsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjY0NTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2l0ZS1uYXYgLmljb25fbmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YmZlMjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zaXRlLW5hdiAuaWNvbl9ob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjQ5O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnN0eWxlXzUgLnNraW4tMiAuYXpicmFuZHN0YWJsZSAudmVuZG9yLWxldHRlci1tZW51IGEsXG4uc2l0ZS1uYXYgLm1lZ2EtbWVudSAuc3R5bGVfNSAubWVnYS1iYW5uZXIuc2tpbi0yIC5jb2wtcmlnaHQgLmxpbmstYnJhbmRzIHtcbiAgY29sb3I6ICMyMzIzMjM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLnNpdGUtbmF2IC5pY29uX3NhbGU6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlZjY0NTQ7XG4gIH1cblxuICAuc2l0ZS1uYXYgLmljb25fbmV3OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDZiZmUyO1xuICB9XG5cbiAgLnNpdGUtbmF2IC5pY29uX2hvdDpiZWZvcmUge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmYmI0OTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAuc3R5bGVfNSAubWVnYS1iYW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIH1cblxuICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAuc3R5bGVfNSAubWVnYS1iYW5uZXIgLmNvbC1sZWZ0OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgfVxuXG4gIC5zaXRlLW5hdiAubWVnYS1tZW51IC5zdHlsZV81IC5tZWdhLWJhbm5lci5za2luLTI6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnN0eWxlXzUgLm1lZ2EtYmFubmVyLnNraW4tMy5za2luLTMtcHJvZHVjdCxcbi5zaXRlLW5hdiAubWVnYS1tZW51IC5zdHlsZV81IC5tZWdhLWJhbm5lci5za2luLTMuc2tpbi0zLXByb2R1Y3Q6YmVmb3JlLFxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnN0eWxlXzUgLm1lZ2EtYmFubmVyLnNraW4tMy5za2luLTMtcHJvZHVjdDphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnN0eWxlXzUgLm1lZ2EtYmFubmVyLnNraW4tMyAuY29sLXByb2R1Y3QgLnNsaWNrLWFycm93IHtcbiAgICBiYWNrZ3JvdW5kOiAjOGM4YzhjO1xuICAgIGJvcmRlcjogIzhjOGM4YztcbiAgfVxuXG4gIC5zaXRlLW5hdiAubWVnYS1tZW51IC5zdHlsZV81IC5tZWdhLWJhbm5lci5za2luLTMgLmNvbC1wcm9kdWN0IC5zbGljay1hcnJvdyBzdmcge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59IiwiLmhlYWRlci10b3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThlODtcclxuICAgIGNvbG9yOiAjYjA1ZDVkO1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNiMDVkNWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcC1tZXNzYWdlIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLndyYXBwZXJfaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uaGVhZGVyIC5oZWFkZXItdG9wIHtcclxuICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgbWluLWhlaWdodDogNDBweFxyXG59XHJcblxyXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG59XHJcblxyXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLnRvcC1sb2NhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcblxyXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLnRvcC1sb2NhdGlvbiAuaXRlbS1sb2NhdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLnRvcC1sb2NhdGlvbiAuaWNvbi1nbG9iZSB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBzdHJva2U6IHVuc2V0XHJcbn1cclxuXHJcbi5oZWFkZXIgLndyYXBwZXItaGVhZGVyLXRvcCAudG9wLWxvY2F0aW9uIC5pY29uLXNvcnQtZG93biB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTRweDtcclxuICAgIHN0cm9rZTogdW5zZXRcclxufVxyXG5cclxuLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC50b3AtbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW1cclxufVxyXG5cclxuLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC50b3AtbWVzc2FnZSBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2NhZDNmMVxyXG59XHJcblxyXG4uaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3AgLmN1cy1zZXItdGV4dCBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcclxufVxyXG5cclxuLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC50b3AtbG9jYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA3cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gICAgaGVpZ2h0OiAzMHB4XHJcbn1cclxuXHJcbi5oZWFkZXIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcbi5oZWFkZXIgLmZyZWUtc2hpcHBpbmctdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHggNDVweCAycHggNDVweDtcclxuICAgIGNvbG9yOiAjYmE3YTJkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMFxyXG59XHJcblxyXG4uaGVhZGVyIC5mcmVlLXNoaXBwaW5nLXRleHQgYSBzcGFuIHtcclxuICAgIGNvbG9yOiAjYmE3YTJkXHJcbn1cclxuXHJcbi5oZWFkZXIgLmZyZWUtc2hpcHBpbmctdGV4dCBiIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMFxyXG59XHJcblxyXG4uaGVhZGVyIC5jdXN0b21lci1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uaGVhZGVyIC5jdXN0b21lci1saW5rcyBhIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4XHJcbn1cclxuXHJcbi5oZWFkZXIgLmN1c3RvbWVyLWxpbmtzIHN2ZyB7XHJcbiAgICBzdHJva2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHhcclxufVxyXG5cclxuLmlzLXN0aWNreSAubmF2aWdhdGlvbiAuaGVhZGVyLXBhbmVsLWJ0IHtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLm5hdi1zZWFyY2gge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtc2VhcmNoIC5pY29uLXNlYXJjaCB7XHJcbiAgICBjb2xvcjogIzAwMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXNlYXJjaCAuY2xvc2Utc2VhcmNoIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtc2VhcmNoIC5jbG9zZS1zZWFyY2ggc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXdpc2hsaXN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXdpc2hsaXN0OmJlZm9yZSxcclxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLndyYXBwZXItdG9wLWNhcnQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtd2lzaGxpc3QrLndyYXBwZXItdG9wLWNhcnQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IG5vbmVcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLm5hdi13aXNobGlzdCBhIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxcHhcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQgLndyYXBwZXItdG9wLWNhcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC53cmFwcGVyLXRvcC1jYXJ0IGEge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiAwXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5oZWFkZXItYm90dG9tLXJpZ2h0IC5uYXYtc2VhcmNoIHN2ZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXNlYXJjaCAuaWNvbi1zZWFyY2ggc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAubmF2LXdpc2hsaXN0IHN2ZyB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHN0cm9rZTogdW5zZXRcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmNhcnQtaWNvbiBzdmcge1xyXG4gICAgd2lkdGg6IDI5cHg7XHJcbiAgICBoZWlnaHQ6IDI5cHhcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmNhcnQtaWNvbiAuY2FydENvdW50IHtcclxuICAgIHRvcDogMTdweDtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuc2l0ZS1uYXYgLm1lbnUtbHYtMT5hIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIHtcclxuICAgIHBhZGRpbmc6IDI4cHggMTBweCAxNXB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5oZWFkZXItc2VhcmNoX190cmVuZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5saXN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIC03cHhcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAgLmxpc3QtaXRlbSAuaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDdweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAucXVpY2tTZWFyY2hSZXN1bHRzV3JhcCAuYm94LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5saXN0LWl0ZW0gLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgY29sb3I6ICM1MDUwNTA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5saXN0LWl0ZW0gLmhpZ2hsaWdodDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAuMilcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAgLmxpc3QtaXRlbSAuaGlnaGxpZ2h0IC5mYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICNiYTdhMmRcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC1pbWFnZSBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5oZWFkZXItc2VhcmNoX19wcm9kdWN0IC5ib3gtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4XHJcbn1cclxuXHJcbi5jdXN0b21lci10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4XHJcbn1cclxuXHJcbi5jdXN0b21lci10aXRsZSBoNSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwXHJcbn1cclxuXHJcbi5jdXN0b21lci10aXRsZSAuY2xvc2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4XHJcbn1cclxuXHJcbi5jdXN0b21lci1jb250ZW50IC5hY3Rpb24tYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnRcclxufVxyXG5cclxuLmN1c3RvbWVyLWNvbnRlbnQgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweFxyXG59XHJcblxyXG4ud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuYnRuLWdyb3VwIC5pbWctaWNvbiBpbWcsXHJcbi53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1sYWJlbCAuaW1nLWljb24gaW1nIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcclxufVxyXG5cclxuLndyYXBwZXJfaGVhZGVyLmhlYWRlci1sYW5nLXN0eWxlMiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcGFkZGluZzogM3B4IDE5cHggOHB4XHJcbn1cclxuXHJcbi53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5idG4tZ3JvdXAgLmltZy1pY29uIHtcclxuICAgIHdpZHRoOiAxNnB4XHJcbn1cclxuXHJcbi53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4XHJcbn1cclxuXHJcbi5zaXRlLW5hdiAubWVnYS1tZW51IC5tZW51LWx2LTI+YSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcclxufVxyXG5cclxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLm1lbnUtbHYtMj5hLm1lbnVfX21vYmxpZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXHJcbn1cclxuXHJcbi5oZWFkZXIgLmhlYWRlci1tYiAuY2FydC1pY29uIC5jYXJ0Q291bnQge1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICBtaW4td2lkdGg6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG5cclxuLmhlYWRlciAuaGVhZGVyLW1iIC5pY29uLXVzZXIgc3ZnIHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgc3Ryb2tlOiBub25lXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5jbG9zZS1tZW51LW1iLm1lbnUtb3BlbiB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQ6IDAgMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuY2xvc2UtbWVudS1tYi5tZW51LW9wZW4gLmljb24tbGluZTphZnRlcixcclxuLm5hdmlnYXRpb24gLmNsb3NlLW1lbnUtbWIubWVudS1vcGVuIC5pY29uLWxpbmU6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjBcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tbGVmdCAuY3VzLXNlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1sZWZ0IC5jdXMtc2VyLXRleHQgc3BhbiBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcclxufVxyXG5cclxuLnRvcC10ZXh0LWNsb3NlIC5pY29uLW5hdiAuaWNvbi1saW5lOmFmdGVyLFxyXG4udG9wLXRleHQtY2xvc2UgLmljb24tbmF2IC5pY29uLWxpbmU6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAyMHB4XHJcbn1cclxuXHJcbi50b3AtdGV4dC1jbG9zZSAuY2xvc2UtbWVudS1tYi5tZW51LW9wZW4gLmljb24tbGluZTphZnRlcixcclxuLnRvcC10ZXh0LWNsb3NlIC5jbG9zZS1tZW51LW1iLm1lbnUtb3BlbiAuaWNvbi1saW5lOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAwXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5zaXRlLW5hdiAubWVudS1sdi0xPmEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5zaXRlLW5hdiAubWVudS1tYi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLnNpdGUtbmF2IC5tZWdhLW1lbnUgLm1lbnUtbHYtMj5hIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHhcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tbGVmdCAubmF2LWJhciAuc2l0ZS1uYXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLXBjIC5yaWdodC1ncm91cHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmc6IDIwcHggMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuZnJlZS1zaGlwcGluZy10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDZweCA0NXB4IDJweCA0NXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuZnJlZS1zaGlwcGluZy10ZXh0IGIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5oZWFkZXItbGlua3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWxpbmtzIC5jdXN0b21lci1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHhcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyAuY3VzdG9tZXItbGlua3MgYSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWxpbmtzIC5uYXYtd2lzaGxpc3QgYSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5oZWFkZXItbGlua3Mgc3ZnIHtcclxuICAgIHN0cm9rZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDIycHhcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyAubmF2LXdpc2hsaXN0IC53aXNobGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaGVhZGVyLWxpbmtzIC5uYXYtd2lzaGxpc3QgLndpc2hsaXN0IHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIHtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5jdXJyZW5jeS1ibG9jayxcclxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5sYW5nLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHhcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5idG4tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IGluaXRpYWxcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5idG4tZ3JvdXAgLmltZy1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNnB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAubGFiZWwtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggN3B4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMzFlbVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmRyb3Bkb3duLW1lbnUgaDIge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmJ0bi1ncm91cCAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmJ0bi1ncm91cCAuZHJvcGRvd24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuYnRuLWdyb3VwIC5kcm9wZG93bi1sYWJlbDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcZjBkZFwiO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTRweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcblxyXG4ubmF2aWdhdGlvbiAuaXRlbS1sb2NhdGlvbiAud3JhcHBlci1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpIHtcclxuICAgIC5oZWFkZXIgLmhlYWRlci1wYW5lbC1idCAuaGVhZGVyLWxvZ28ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwXHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXJfaGVhZGVyIHtcclxuICAgICAgICB6LWluZGV4OiA1XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXJfaGVhZGVyLmhlYWRlci1sYW5nLXN0eWxlMiAuaXMtc3RpY2t5IC5maXhlZC1yaWdodC1tZW51IC5jYXJ0LWZpeGVkLFxyXG4gICAgLndyYXBwZXJfaGVhZGVyLmhlYWRlci1sYW5nLXN0eWxlMiAuaXMtc3RpY2t5IC5maXhlZC1yaWdodC1tZW51IC5zZWFyY2gtZml4ZWQge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmViZWJcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAubWVudS1sdi0yLm5vLXN1YiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtbmF2IC5tZWdhLW1lbnU6aG92ZXI+LnN1Yi1tZW51LW1vYmlsZSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTZcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1uYXYgLm1lbnUtbHYtMT5hIHtcclxuICAgICAgICBwYWRkaW5nOiAxOXB4IDAgMTdweFxyXG4gICAgfVxyXG5cclxuICAgICNkcm9wZG93bi1jdXN0b21lciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IC1tb3otY2FsYygxMDB2dyAtIDQwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogLXdlYmtpdC1jYWxjKDEwMHZ3IC0gNDBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAtbXMtY2FsYygxMDB2dyAtIDQwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1zaG93ICNkcm9wZG93bi1jdXN0b21lciB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtc2hvdyAud3JhcHBlci1vdmVybGF5LFxyXG4gICAgLmN1c3RvbWVyLXNob3cgLndyYXBwZXItb3ZlcmxheSB7XHJcbiAgICAgICAgei1pbmRleDogNVxyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItc2VhcmNoIC5idG4ge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICBib2R5PiNkcm9wZG93bi1jdXN0b21lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5oZXJpdFxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIC5oZWFkZXItcGFuZWwtYnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweClcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmlzLXN0aWNreSAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5pcy1zdGlja3kgLm5hdmlnYXRpb24gLmhlYWRlci1ib3R0b20tcmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIC5oZWFkZXItYm90dG9tIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweFxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyX2hlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA3cHggcmdiYSgwLCAwLCAwLCAuMTUpXHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXJfaGVhZGVyLmhlYWRlci1sYW5nLXN0eWxlMiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmRyb3Bkb3duLXRvZ2dsZTphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcXGYwZGRcIjtcclxuICAgICAgICB0b3A6IC0ycHhcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuY3VycmVuY3ktYmxvY2sgLmRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHhcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIC5sYW5nLWN1cnJlbmN5LWdyb3VwcyAuY3VycmVuY3ktYmxvY2sgLmRyb3Bkb3duLWxhYmVsOmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBsZWZ0OiAwXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci5oZWFkZXItbGFuZy1zdHlsZTIgLmxhbmctY3VycmVuY3ktZ3JvdXBzIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCA3cHggcmdiYSgwLCAwLCAwLCAuMTUpXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci5oZWFkZXItZGVmYXVsdCAuaGVhZGVyLXBhbmVsLWJ0IC5yaWdodC1ncm91cHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIgLmhlYWRlci1wYW5lbC1idCAudGV4dC1ob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgIGJvdHRvbTogNHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciAuaGVhZGVyLWJvdHRvbSAuaGVhZGVyLWxpbmtzIC5uYXYtd2lzaGxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuXHJcbiAgICAuaXMtc3RpY2t5IC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICBib3JkZXItdG9wOiAwXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24gLndyYXBwZXItdG9wLWNhcnQgI2Ryb3Bkb3duLWNhcnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIC4wNiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgLjA2KSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgLjA2KSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMSlcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAud3JhcHBlci10b3AtY2FydCAuY2FydC10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uICNkcm9wZG93bi1jYXJ0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI5OHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDB2d1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIC5zZWFyY2gtZm9ybSB7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24gLnF1aWNrU2VhcmNoUmVzdWx0c1dyYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgIH1cclxuXHJcbiAgICAud3JhcHBlcl9oZWFkZXIuaGVhZGVyLWxhbmctc3R5bGUyIC5pcy1zdGlja3kgLmZpeGVkLXJpZ2h0LW1lbnUgLmNhcnQtZml4ZWQgLmNhcnRDb3VudCB7XHJcbiAgICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICAgIHJpZ2h0OiAxOXB4XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1vcGVuIC53cmFwcGVyLW92ZXJsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1vcGVuIC5uYXZpZ2F0aW9uIC5maXhlZC1yaWdodC1tZW51IC5pY29uLXNlYXJjaCxcclxuICAgIC5zZWFyY2gtb3BlbiAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1yaWdodCAuaWNvbi1zZWFyY2gge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLW9wZW4gLm5hdmlnYXRpb24gLmZpeGVkLXJpZ2h0LW1lbnUgLmNsb3NlLXNlYXJjaCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogM3B4XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1vcGVuIC5uYXZpZ2F0aW9uIC5zZWFyY2gtZm9ybSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXItaGVhZGVyIC5zZWFyY2gtYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogNTUzcHhcclxuICAgIH1cclxuXHJcbiAgICAud3JhcHBlci1oZWFkZXIgLnNlYXJjaC1iYXIgLmljb24tc2VhcmNoIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtb3BlbiAubmF2aWdhdGlvbiAuc2VhcmNoLWZvcm0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWFcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLW9wZW4gLm5hdmlnYXRpb24gLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIC5pbnB1dC1ncm91cC1maWVsZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICB3aWR0aDogLW1zLWNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KVxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyLWhlYWRlciAuc2VhcmNoLWJhciAuaWNvbi1zZWFyY2ggc3ZnIHtcclxuICAgICAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjYmE3YTJkXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24gLnNlYXJjaC1mb3JtIC5oZWFkZXItc2VhcmNoX19mb3JtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAuaW5wdXQtZ3JvdXAtZmllbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA1MnB4KTtcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA1MnB4KTtcclxuICAgICAgICB3aWR0aDogLW1zLWNhbGMoMTAwJSAtIDUycHgpO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MnB4KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjYmNiY2JjO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweCA4cHhcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLW9wZW4gLndyYXBwZXItaGVhZGVyIC5pbnB1dC1ncm91cC1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gNTJweCk7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNTJweCk7XHJcbiAgICAgICAgd2lkdGg6IC1tcy1jYWxjKDEwMCUgLSA1MnB4KTtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTJweClcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLW9wZW4gLm5hdmlnYXRpb24gLmhlYWRlci1zZWFyY2gge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpY1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtb3BlbiB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG9cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTE5OXB4KSB7XHJcbiAgICAuaGVhZGVyIC53cmFwcGVyLWhlYWRlci10b3Age1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciAud3JhcHBlci1oZWFkZXItdG9wIC50b3AtbG9jYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAuc2VhcmNoLWZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAuaGVhZGVyLWJvdHRvbS1sZWZ0IC50b3AtdGV4dC1jbG9zZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24gLnNpdGUtbmF2IC5tZWdhLW1lbnUgLm1lbnUtbHYtMj5hLm1lbnVfX21vYmxpZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtaW1hZ2UgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIC5xdWlja1NlYXJjaFJlc3VsdHNXcmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24gLmhlYWRlci1saW5rcyAuY3VzdG9tZXItbGlua3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiAuaGVhZGVyLXBjIC5yaWdodC1ncm91cHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAyMHB4IDBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTUxcHgpIHtcclxuICAgIC5oZWFkZXIgLndyYXBwZXItaGVhZGVyLXRvcCAudG9wLW1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAyMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXJfaGVhZGVyLmhlYWRlci1sYW5nLXN0eWxlMiAubGFuZy1jdXJyZW5jeS1ncm91cHMgLmJ0bi1ncm91cCAuaW1nLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0xcHhcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAgIC5oZWFkZXIgLndyYXBwZXItaGVhZGVyLXRvcCAudG9wLW1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYtdmVydGljYWwgLnNvY2lhbC1pY29ucyBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5uYXZpZ2F0aW9uLXZlcnRpY2FsLW1lbnUsXHJcbiAgICAud3JhcHBlci1uYXZpZ2F0aW9uLFxyXG4gICAgLm1haW4tbWVudSxcclxuICAgIC52ZXJ0aWNhbC1tZW51IC5uYXYtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2IC5zdWItbWVudS1tb2JpbGUsXHJcbiAgICAuc2l0ZS1uYXYgLnN1Yi1tZW51LW1vYmlsZSAuYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAud3JhcHBlci1uYXZpZ2F0aW9uIC5tYWluLW1lbnUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9IC8qIE1lbnUgTHYgMSAqL1xyXG4gICAgLmhhc19zdGlja3kgLndyYXBwZXJfaGVhZGVyX2RlZmF1bHQgLndyYXBwZXItdG9wLWNhcnQgLmNhcnQtaWNvbiBzdmcsXHJcbiAgICAud3JhcHBlci1uYXZpZ2F0aW9uIC5maXhlZC1yaWdodC1tZW51IGEsXHJcbiAgICAud3JhcHBlci1uYXZpZ2F0aW9uIC5zaXRlLW5hdiAubWVudS1sdi0xID4gYSxcclxuICAgIC53cmFwcGVyX2hlYWRlcl9zdXBlcm1hcmtldCAudmVydGljYWwtbWVudSAubWVudS1sdi0xLmRyb3Bkb3duID4gYTphZnRlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAuaXMtc3RpY2t5IC53cmFwcGVyLW5hdmlnYXRpb24gLmZpeGVkLXJpZ2h0LW1lbnUgLnNlYXJjaC1maXhlZCxcclxuICAgIC5pcy1zdGlja3kgLndyYXBwZXItbmF2aWdhdGlvbiAuZml4ZWQtcmlnaHQtbWVudSAuY2FydC1maXhlZCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXYgLm1lbnUtbHYtMSA+IGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2IC5tZW51LWx2LTEgPiBhIHNwYW46YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfSAvKiBNZW51IEx2IDIgKi9cclxuICAgIC5zaXRlLW5hdiAubWVudS1sdi0yID4gYSxcclxuICAgIC5zaXRlLW5hdiAubWVnYS1tZW51IC5tZWdhLWJhbm5lciAudGl0bGUsXHJcbiAgICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAucHJvZHVjdC1pdGVtIC5idG4ge1xyXG4gICAgICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnByb2R1Y3QtaXRlbSAuYnRuIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDM1LCAzNSwgMzUsIDAuNyk7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXYgLm1lbnUtbHYtMiA+IGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb24tMDggLnNpdGUtbmF2IC5uby1tZWdhLW1lbnUgbGkgPiBhIHNwYW46YmVmb3JlLFxyXG4gICAgLm5hdmlnYXRpb24tMDggLnNpdGUtbmF2IC5uby1tZWdhLW1lbnUgLmRyb3Bkb3duID4gYSBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2ODhlMjtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAubWVudS1sdi0zID4gYSxcclxuICAgIC5zaXRlLW5hdiAubm8tbWVnYS1tZW51IC5tZW51LWx2LTIgPiBhIHtcclxuICAgICAgICBjb2xvcjogIzNjM2MzYztcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAubWVudS1sdi0zID4gYTpob3ZlcixcclxuICAgIC5zaXRlLW5hdiAubm8tbWVnYS1tZW51IC5tZW51LWx2LTIgPiBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzA2ODhlMjtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAubWVudS1sdi0zID4gYSBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2ODhlMjtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAuaWNvbl9zYWxlOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2VmNjQ1NDtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAuaWNvbl9uZXc6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDZiZmUyO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2IC5pY29uX2hvdDpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmJiNDk7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXYgLm1lbnUtbHYtMSA+IGEsXHJcbiAgICAuc2l0ZS1uYXYgLm1lbnUtbWItdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAubWVudS1sdi0yID4gYSxcclxuICAgIC5zaXRlLW5hdiAubWVnYS1tZW51IC5tZWdhLWJhbm5lciAudGl0bGUsXHJcbiAgICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAucHJvZHVjdC1pdGVtIC5idG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAubWVudS1sdi0zID4gYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2IC5uby1tZWdhLW1lbnUgLm1lbnUtbHYtMiA+IGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4uc2l0ZS1uYXYgLmljb25fc2FsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY2NDU0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnNpdGUtbmF2IC5pY29uX25ldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiZmUyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnNpdGUtbmF2IC5pY29uX2hvdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjQ5O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnN0eWxlXzUgLnNraW4tMiAuYXpicmFuZHN0YWJsZSAudmVuZG9yLWxldHRlci1tZW51IGEsXHJcbi5zaXRlLW5hdiAubWVnYS1tZW51IC5zdHlsZV81IC5tZWdhLWJhbm5lci5za2luLTIgLmNvbC1yaWdodCAubGluay1icmFuZHMge1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLnNpdGUtbmF2IC5pY29uX3NhbGU6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlZjY0NTQ7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXYgLmljb25fbmV3OmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDZiZmUyO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2IC5pY29uX2hvdDpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmYmI0OTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnN0eWxlXzUgLm1lZ2EtYmFubmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtbmF2IC5tZWdhLW1lbnUgLnN0eWxlXzUgLm1lZ2EtYmFubmVyIC5jb2wtbGVmdDpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAuc3R5bGVfNSAubWVnYS1iYW5uZXIuc2tpbi0yOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAubWVnYS1tZW51IC5zdHlsZV81IC5tZWdhLWJhbm5lci5za2luLTMuc2tpbi0zLXByb2R1Y3QsXHJcbiAgICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAuc3R5bGVfNSAubWVnYS1iYW5uZXIuc2tpbi0zLnNraW4tMy1wcm9kdWN0OmJlZm9yZSxcclxuICAgIC5zaXRlLW5hdiAubWVnYS1tZW51IC5zdHlsZV81IC5tZWdhLWJhbm5lci5za2luLTMuc2tpbi0zLXByb2R1Y3Q6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zaXRlLW5hdiAubWVnYS1tZW51IC5zdHlsZV81IC5tZWdhLWJhbm5lci5za2luLTMgLmNvbC1wcm9kdWN0IC5zbGljay1hcnJvdyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhjOGM4YztcclxuICAgICAgICBib3JkZXI6ICM4YzhjOGM7XHJcbiAgICB9XHJcbiAgICAuc2l0ZS1uYXYgLm1lZ2EtbWVudSAuc3R5bGVfNSAubWVnYS1iYW5uZXIuc2tpbi0zIC5jb2wtcHJvZHVjdCAuc2xpY2stYXJyb3cgc3ZnIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, {
        scrollThis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["document:scroll"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-useful-swiper */
    "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_46_div_12_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_div_12_div_2_Template_label_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var i_r6 = ctx.index;

          var p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.updateSource(ctx_r7.colors_src[i_r6], p_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", c_r5);
      }
    }

    function HomeComponent_div_46_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_46_div_12_div_2_Template, 2, 3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.colors);
      }
    }

    function HomeComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_Template_img_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var p_r2 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.selectProduct(p_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var p_r2 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selectProduct(p_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Popular items ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var p_r2 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.selectProduct(p_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var p_r2 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.selectProduct(p_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_46_div_12_Template, 3, 1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_46_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var p_r2 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.AddProduct(p_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r2.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r2.price, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r2.colors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r2.quantity < 1)("btn-outline-danger", p_r2.quantity < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", p_r2.quantity < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](p_r2.quantity < 1 ? "out-stock" : "icon-bag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r2.quantity < 1 ? "out stock" : "buy now", " ");
      }
    }

    function HomeComponent_div_59_div_1_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_59_div_1_div_5_div_2_Template_label_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var i_r22 = ctx.index;

          var p_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.updateSource(ctx_r23.colors_src[i_r22], p_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", c_r21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", c_r21);
      }
    }

    function HomeComponent_div_59_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_59_div_1_div_5_div_2_Template, 2, 3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.colors);
      }
    }

    function HomeComponent_div_59_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_59_div_1_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var p_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return p_r16.quantity < 1 ? ctx_r26.selectProduct(p_r16.id) : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("(click", function HomeComponent_div_59_div_1_Template_div__click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var p_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return p_r16.quantity < 1 ? ctx_r29.selectProduct(p_r16.id) : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_59_div_1_div_5_Template, 3, 1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_59_div_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var p_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.AddProduct(p_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r16.quantity < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r16.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r16.colors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r16.description.substr(0, 80), " ....");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r16.quantity < 1)("out-stock", p_r16.quantity < 1)("btn-outline-danger", p_r16.quantity < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", p_r16.quantity < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](p_r16.quantity < 1 ? "out-stock" : "icon-bag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r16.quantity < 1 ? "out stock" : "buy now", " ");
      }
    }

    function HomeComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_59_div_1_Template, 17, 19, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r17 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 8 > i_r17);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(productService, cartService, router) {
        _classCallCheck(this, HomeComponent);

        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.config = {
          slidesPerView: 4,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoHeight: true,
          allowTouchMove: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: false
        };
        this.products = [];
        this.colors = [];
        this.colors_src = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.productService.getAllProducts(15).subscribe(function (prods) {
            _this5.products = prods.products;
            prods.products.forEach(function (prod) {
              if (prod.colors != null) {
                //console.log(prod);
                _this5.colors = prod.colors.split(';');
                _this5.colors_src = prod.color_img.split(';');
              }
            });
            console.log(_this5.colors, _this5.colors_src);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "AddProduct",
        value: function AddProduct(id) {
          this.cartService.AddProductToCart(id);
        }
      }, {
        key: "selectProduct",
        value: function selectProduct(id) {
          this.router.navigate(['/product', id]).then();
        }
      }, {
        key: "scrollDown",
        value: function scrollDown() {
          var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;

            if (pos == 0) {
              window.scrollTo(0, 650);
            } else {
              window.clearInterval(scrollToTop);
            }
          }, 160);
        }
      }, {
        key: "updateSource",
        value: function updateSource(source, i) {
          i = i - 1; //console.log(source, this.products[i]);

          this.products[i].image = source;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["mg-home"]],
      decls: 71,
      vars: 3,
      consts: [[1, "background-text", "bg-home"], [1, "rich-text"], [1, "title-text", "large"], [1, "title-text"], [1, "subtitle-text"], [1, "btn", "btn-default"], [1, "icon-down-arrow", "bg-props", "triple-size", 3, "click"], [1, "container"], [1, "row"], [1, "item", "col-6", "col-sm-4", "three-blocks"], [1, "sub-banner", "banner-item"], [1, "img-box"], ["href", "", 1, "animate-scale", "adaptive_height", 2, "padding-top", "54.05405405405406%"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/sub-banner-1-compressor_370x_crop_center.jpg?v=1540985801", "alt", "new-ella", "data-sizes", "auto", "sizes", "370px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/sub-banner-1-compressor_370x_crop_center.jpg?v=1540985801", 1, "lazyautosizes", "ls-is-cached", "lazyloaded"], [1, "content-box"], [1, "banner-title", 2, "color", "#ffffff"], [1, "border-bt-hover", 2, "background-color", "#ffffff"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/sub-banner-2-compressor_370x_crop_center.jpg?v=1540985820", "alt", "new-ella", "data-sizes", "auto", "sizes", "370px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/sub-banner-2-compressor_370x_crop_center.jpg?v=1540985820", 1, "lazyautosizes", "lazyloaded"], ["data-srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/sub-banner-3-compressor_370x_crop_center.jpg?v=1540985831", "alt", "new-ella", "data-sizes", "auto", "sizes", "370px", "srcset", "//cdn.shopify.com/s/files/1/0071/4755/2866/files/sub-banner-3-compressor_370x_crop_center.jpg?v=1540985831", 1, "lazyautosizes", "lazyloaded"], [1, "controller-swiper", "container"], [1, "popular-itens-controller", 3, "config"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "section"], [1, "col-md-12"], [1, "section-title"], [1, "title"], ["class", "col-md-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "background-secondary", "pb-0", "mb-0"], [1, "box-right"], [1, "tag-category"], [1, "swiper-slide"], [1, "popular-itens"], [1, "popular-card"], [1, "popular-img"], [1, "img-fluid", 3, "src", "alt", "click"], [1, "popular-details"], [1, "tag", 3, "click"], [1, "subtitle", 3, "click"], [1, "price", 3, "click"], [4, "ngIf"], [1, "two-btn"], [1, "btn", "btn-outline", "small", 3, "disabled", "click"], [1, "colors-controller"], [4, "ngFor", "ngForOf"], [1, "select-colors", 3, "for", "click"], [1, "col-md-3", "col-sm-4"], ["class", "card my-2", 3, "disabled", 4, "ngIf"], [1, "card", "my-2"], [1, "card-image-controller"], [1, "img-fluid", 2, "cursor", "pointer", 3, "src", "alt", "click"], [1, "card-controller", "mt-3"], [1, "body", 3, "(click"], [1, "subtitle"], [1, "lead", "price", "my-2"], [1, "description"], [1, "col-md-12", "my-3", "px-0"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " COSMOPOLIS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DRESSES PROMOTION 07/07 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " NEW DRESSES COLLECTIONS 77% DISCOUNT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " GET DISCOUNT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_10_listener() {
            return ctx.scrollDown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Editors Pick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "swiper", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HomeComponent_div_46_Template, 18, 14, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "New Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HomeComponent_div_59_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " STAR COLLECTION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " METROP\xD3LIS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an tincidunt risus an consequat delit quisquemos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " shop the looks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".bg-home[_ngcontent-%COMP%] {\n  background-image: url('fashion.jpg');\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 720px;\n}\n\n.background-secondary[_ngcontent-%COMP%] {\n  background-image: url('secondary.jpg');\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 720px;\n}\n\n.box-right[_ngcontent-%COMP%] {\n  max-width: 35%;\n  text-align: center;\n}\n\n.background-text[_ngcontent-%COMP%], .background-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0 0 30px 0;\n}\n\n.background-text[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%], .background-secondary[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%] {\n  margin: 0 auto 0 15vw;\n  font-size: 12px;\n  color: #232323;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.background-text[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%], .background-secondary[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #232323;\n}\n\n.background-text[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .title-text.large[_ngcontent-%COMP%], .background-secondary[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .title-text.large[_ngcontent-%COMP%] {\n  font-size: 40px;\n  letter-spacing: 0.05em;\n  font-weight: 700;\n  text-transform: uppercase;\n  position: relative;\n  padding-bottom: 17px;\n}\n\n.background-text[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .subtitle-text[_ngcontent-%COMP%], .background-secondary[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .subtitle-text[_ngcontent-%COMP%] {\n  margin: 0.5em 0 0 0;\n}\n\n.background-text[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .background-secondary[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 1em !important;\n  margin: 1em;\n  display: block;\n  background: #232323;\n  color: white;\n}\n\n.background-text[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .tag-category[_ngcontent-%COMP%], .background-secondary[_ngcontent-%COMP%]   .rich-text[_ngcontent-%COMP%]   .tag-category[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: #232323;\n  text-transform: uppercase;\n  margin: 2em 0;\n  font-weight: bold;\n}\n\n.colors-controller[_ngcontent-%COMP%] {\n  flex-direction: column;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  right: 5%;\n  top: 10%;\n  max-height: 150px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.colors-controller[_ngcontent-%COMP%]   .select-colors[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  border-radius: 100%;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcUGljaGF1XFxCbHVlbW9kYXNfZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0kscUJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURHUTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDRlo7O0FESVk7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0ZoQjs7QURNUTtFQUNJLG1CQUFBO0FDSlo7O0FET1E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDTFo7O0FEUVE7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ05aOztBRFdBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEV0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWhvbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9mYXNoaW9uLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA3MjBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtc2Vjb25kYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2Uvc2Vjb25kYXJ5LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA3MjBweDtcclxufVxyXG5cclxuLmJveC1yaWdodHtcclxuICAgIG1heC13aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC10ZXh0LCAuYmFja2dyb3VuZC1zZWNvbmRhcnl7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcblxyXG4gICAgLnJpY2gtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAxNXZ3O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzIzMjMyMztcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC50aXRsZS10ZXh0e1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcclxuXHJcbiAgICAgICAgICAgICYubGFyZ2V7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VidGl0bGUtdGV4dHtcclxuICAgICAgICAgICAgbWFyZ2luOiAuNWVtIDAgMCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFnLWNhdGVnb3J5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICMyMzIzMjM7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMmVtIDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbG9ycy1jb250cm9sbGVye1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgdG9wOiAxMCU7XHJcblxyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAgIC5zZWxlY3QtY29sb3JzIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIuYmctaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9mYXNoaW9uLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA3MjBweDtcbn1cblxuLmJhY2tncm91bmQtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL3NlY29uZGFyeS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNzIwcHg7XG59XG5cbi5ib3gtcmlnaHQge1xuICBtYXgtd2lkdGg6IDM1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZC10ZXh0LCAuYmFja2dyb3VuZC1zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xufVxuLmJhY2tncm91bmQtdGV4dCAucmljaC10ZXh0LCAuYmFja2dyb3VuZC1zZWNvbmRhcnkgLnJpY2gtdGV4dCB7XG4gIG1hcmdpbjogMCBhdXRvIDAgMTV2dztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzIzMjMyMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmFja2dyb3VuZC10ZXh0IC5yaWNoLXRleHQgLnRpdGxlLXRleHQsIC5iYWNrZ3JvdW5kLXNlY29uZGFyeSAucmljaC10ZXh0IC50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzIzMjMyMztcbn1cbi5iYWNrZ3JvdW5kLXRleHQgLnJpY2gtdGV4dCAudGl0bGUtdGV4dC5sYXJnZSwgLmJhY2tncm91bmQtc2Vjb25kYXJ5IC5yaWNoLXRleHQgLnRpdGxlLXRleHQubGFyZ2Uge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG59XG4uYmFja2dyb3VuZC10ZXh0IC5yaWNoLXRleHQgLnN1YnRpdGxlLXRleHQsIC5iYWNrZ3JvdW5kLXNlY29uZGFyeSAucmljaC10ZXh0IC5zdWJ0aXRsZS10ZXh0IHtcbiAgbWFyZ2luOiAwLjVlbSAwIDAgMDtcbn1cbi5iYWNrZ3JvdW5kLXRleHQgLnJpY2gtdGV4dCAuYnRuLCAuYmFja2dyb3VuZC1zZWNvbmRhcnkgLnJpY2gtdGV4dCAuYnRuIHtcbiAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJhY2tncm91bmQtdGV4dCAucmljaC10ZXh0IC50YWctY2F0ZWdvcnksIC5iYWNrZ3JvdW5kLXNlY29uZGFyeSAucmljaC10ZXh0IC50YWctY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29sb3JzLWNvbnRyb2xsZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJpZ2h0OiA1JTtcbiAgdG9wOiAxMCU7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uY29sb3JzLWNvbnRyb2xsZXIgLnNlbGVjdC1jb2xvcnMge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["mg-login"]],
      decls: 0,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/orders/orders.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/orders/orders.component.ts ***!
    \*******************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppComponentsOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OrdersComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var o_r71 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r71.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r71.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r71.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r71.title);
      }
    }

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(OrderService, router) {
        _classCallCheck(this, OrdersComponent);

        this.OrderService = OrderService;
        this.router = router; // @ts-ignore

        this.myOrders = [];
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.OrderService.getAllOrders(25).subscribe(function (order) {
            // @ts-ignore
            _this6.myOrders = order;
          });
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["mg-orders"]],
      decls: 14,
      vars: 1,
      consts: [[1, "container"], [1, "title"], [1, "d-flex", "align-items-center", "justify-content-between", "list-title"], [1, "controll-height"], ["class", "d-flex align-items-center justify-content-between list", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-between", "list"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " List All Orders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " username ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrdersComponent_div_13_Template, 9, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myOrders);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.scss']
        }]
      }], function () {
        return [{
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/product/product.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/product/product.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-useful-swiper */
    "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["quantity"];

    function ProductComponent_ng_template_26_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", t_r61, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductComponent_ng_template_26_div_0_Template, 2, 1, "div", 108);
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r56.thumbimages);
      }
    }

    function ProductComponent_span_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Stock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Qty ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 114, 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_50_Template_span_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.Increase();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_50_Template_span_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.Decrease();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", (ctx_r58.product == null ? null : ctx_r58.product.quantity) >= 1 ? 1 : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r58.product == null ? null : ctx_r58.product.quantity)("min", (ctx_r58.product == null ? null : ctx_r58.product.quantity) >= 1 ? ctx_r58.product == null ? null : ctx_r58.product.quantity : 0);
      }
    }

    function ProductComponent_button_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_button_51_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.addToCart(ctx_r66.product == null ? null : ctx_r66.product.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add To Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(route, productService, cartService) {
        _classCallCheck(this, ProductComponent);

        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.thumbimages = [];
        this.config = {
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoHeight: true,
          allowTouchMove: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: false
        };
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (param) {
            // @ts-ignore
            return param.params.id;
          })).subscribe(function (prodId) {
            _this7.id = prodId;

            _this7.productService.getSingleProduct(_this7.id).subscribe(function (prod) {
              _this7.product = prod;

              if (prod.images !== null) {
                _this7.thumbimages = prod.images.split(';');
              }
            });
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "addToCart",
        value: function addToCart(id) {
          this.cartService.AddProductToCart(id, this.quantityInput.nativeElement.value);
        }
      }, {
        key: "Increase",
        value: function Increase() {
          var value = parseInt(this.quantityInput.nativeElement.value);

          if (this.product.quantity >= 1) {
            value++;

            if (value > this.product.quantity) {
              // @ts-ignore
              value = this.product.quantity;
            }
          } else {
            return;
          }

          this.quantityInput.nativeElement.value = value.toString();
        }
      }, {
        key: "Decrease",
        value: function Decrease() {
          var value = parseInt(this.quantityInput.nativeElement.value);

          if (this.product.quantity > 0) {
            value--;

            if (value <= 0) {
              // @ts-ignore
              value = 0;
            }
          } else {
            return;
          }

          this.quantityInput.nativeElement.value = value.toString();
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["mg-product"]],
      viewQuery: function ProductComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.quantityInput = _t.first);
        }
      },
      decls: 402,
      vars: 16,
      consts: [["id", "breadcrumb", 1, "section"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "breadcrumb-tree", "p-0", "m-0"], ["href", "#"], [1, "active"], [1, "section"], [1, "row", "d-flex"], [1, "col-md-5", "col-md-push-2"], [1, "controller-swiper"], [1, "gallery-controller", 3, "config"], [1, "swiper-wrapper"], [3, "ngIf"], [1, "swiper-button-next", "swiper-button-black"], [1, "swiper-button-prev", "swiper-button-black"], [1, "col-md-5"], [1, "product-details"], [1, "product-name"], [1, "product-rating"], [1, "fa", "fa-star"], [1, "fa", "fa-star-o"], ["href", "#", 1, "review-link"], [1, "product-price"], ["class", "product-available", 4, "ngIf"], [1, "add-to-cart"], ["class", "qty-label", 4, "ngIf"], ["class", "add-to-cart-btn", 3, "click", 4, "ngIf"], [1, "product-links"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-envelope"], ["id", "product-tab"], ["role", "tablist", 1, "tab-nav"], ["role", "presentation", 1, "active"], ["data-toggle", "tab", "href", "#tab1", "role", "tab"], ["role", "presentation"], ["data-toggle", "tab", "href", "#tab2", "role", "tab"], ["data-toggle", "tab", "href", "#tab3", "role", "tab"], [1, "tab-content"], ["id", "tab1", "role", "tabpanel", 1, "tab-pane", "fade", "in", "active"], ["id", "tab2", "role", "tabpanel", 1, "tab-pane", "fade", "in"], ["id", "tab3", "role", "tabpanel", 1, "tab-pane", "fade", "in"], [1, "col-md-3"], ["id", "rating"], [1, "rating-avg"], [1, "rating-stars"], [1, "rating"], [1, "rating-progress"], [2, "width", "80%"], [1, "sum"], [2, "width", "60%"], [1, "col-md-6"], ["id", "reviews"], [1, "reviews"], [1, "review-heading"], [1, "name"], [1, "date"], [1, "review-rating"], [1, "fa", "fa-star-o", "empty"], [1, "review-body"], [1, "reviews-pagination"], [1, "fa", "fa-angle-right"], ["id", "review-form"], [1, "review-form"], ["placeholder", "Your Name", "type", "text", 1, "input"], ["placeholder", "Your Email", "type", "email", 1, "input"], ["placeholder", "Your Review", 1, "input"], [1, "input-rating"], [1, "stars"], ["id", "star5", "name", "rating", "type", "radio", "value", "5"], ["for", "star5"], ["id", "star4", "name", "rating", "type", "radio", "value", "4"], ["for", "star4"], ["id", "star3", "name", "rating", "type", "radio", "value", "3"], ["for", "star3"], ["id", "star2", "name", "rating", "type", "radio", "value", "2"], ["for", "star2"], ["id", "star1", "name", "rating", "type", "radio", "value", "1"], ["for", "star1"], [1, "btn", "btn-outline", "small", "dark"], [1, "section-title", "text-center"], [1, "title"], [1, "col-md-3", "col-xs-6"], [1, "product"], [1, "product-img"], ["alt", "", "src", "assets/img/product01.png"], [1, "product-label"], [1, "sale"], [1, "product-body"], [1, "product-category"], [1, "product-old-price"], [1, "product-btns"], [1, "add-to-wishlist"], [1, "fa", "fa-heart-o"], [1, "tooltipp"], [1, "add-to-compare"], [1, "fa", "fa-exchange"], [1, "quick-view"], [1, "fa", "fa-eye"], [1, "add-to-cart-btn"], [1, "fa", "fa-shopping-cart"], ["alt", "", "src", "assets/img/product02.png"], [1, "new"], [1, "clearfix", "visible-sm", "visible-xs"], ["alt", "", "src", "assets/img/product03.png"], ["alt", "", "src", "assets/img/product04.png"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-slide"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "product-available"], [1, "qty-label"], [1, "input-number"], ["readonly", "", "type", "number", 3, "max", "min", "value"], ["quantity", ""], [1, "qty-up", 3, "click"], [1, "qty-down", 3, "click"], [1, "add-to-cart-btn", 3, "click"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "swiper", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductComponent_ng_template_26_Template, 1, 1, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "10 Review(s) | Add your review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProductComponent_span_46_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProductComponent_div_50_Template, 9, 3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProductComponent_button_51_Template, 3, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Category:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Share:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Reviews (3)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "4.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "ul", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "27 DEC 2018, 8:0 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "27 DEC 2018, 8:0 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "27 DEC 2018, 8:0 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "ul", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "form", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "textarea", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Your Rating: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "label", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h3", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Related Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "-30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "del", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "img", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "del", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "del", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "del", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thumbimages.length >= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 13, ctx.product == null ? null : ctx.product.price, "BRL"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.quantity) != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.quantity) != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.quantity) >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.description);
        }
      },
      directives: [ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_5__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
        }];
      }, {
        quantityInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['quantity']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["mg-register"]],
      decls: 0,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/thankyou/thankyou.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/thankyou/thankyou.component.ts ***!
    \***********************************************************/

  /*! exports provided: ThankyouComponent */

  /***/
  function srcAppComponentsThankyouThankyouComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function () {
      return ThankyouComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ThankyouComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r69 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r69.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r69.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r69.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, p_r69.price, "BRL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r69.quantityOrdered);
      }
    }

    var ThankyouComponent =
    /*#__PURE__*/
    function () {
      function ThankyouComponent(router, orderService) {
        _classCallCheck(this, ThankyouComponent);

        this.router = router;
        this.orderService = orderService;
        var navigation = this.router.getCurrentNavigation();
        var state = navigation.extras.state;
        this.message = state.message;
        this.orderId = state.orderId;
        this.products = state.products;
        this.cartTotal = state.total;
        console.log(this.products);
      }

      _createClass(ThankyouComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThankyouComponent;
    }();

    ThankyouComponent.ɵfac = function ThankyouComponent_Factory(t) {
      return new (t || ThankyouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]));
    };

    ThankyouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThankyouComponent,
      selectors: [["mg-thankyou"]],
      decls: 37,
      vars: 6,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "jumbotron", "text-center"], [1, "display-3"], [1, "lead"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "border", "none"], ["width", "100px", 1, "img-thumbnail", 3, "src", "alt"]],
      template: function ThankyouComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank You!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please check your email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " for order confirmation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Order Id : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ThankyouComponent_tr_28_Template, 10, 8, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TOTAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 3, ctx.cartTotal, "BRL"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhhbmt5b3UvdGhhbmt5b3UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankyouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-thankyou',
          templateUrl: './thankyou.component.html',
          styleUrls: ['./thankyou.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService(productService, orderService, httpClient, router, spinner, toast) {
        var _this8 = this;

        _classCallCheck(this, CartService);

        this.productService = productService;
        this.orderService = orderService;
        this.httpClient = httpClient;
        this.router = router;
        this.spinner = spinner;
        this.toast = toast;
        this.ServerURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.cartDataClient = {
          prodData: [{
            incart: 0,
            id: 0
          }],
          total: 0
        }; // This will be sent to the backend Server as post data
        // Cart Data variable to store the cart information on the server

        this.cartDataServer = {
          data: [{
            product: undefined,
            numInCart: 0
          }],
          total: 0
        };
        this.cartTotal$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0); // Data variable to store the cart information on the client's local storage

        this.cartDataObs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cartDataServer);
        this.cartTotal$.next(this.cartDataServer.total);
        this.cartDataObs$.next(this.cartDataServer);
        var info = JSON.parse(localStorage.getItem('cart'));

        if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
          // assign the value to our data variable which corresponds to the LocalStorage data format
          this.cartDataClient = info; // Loop through each entry and put it in the cartDataServer object

          this.cartDataClient.prodData.forEach(function (p) {
            _this8.productService.getSingleProduct(p.id).subscribe(function (actualProdInfo) {
              if (_this8.cartDataServer.data[0].numInCart === 0) {
                _this8.cartDataServer.data[0].numInCart = p.incart;
                _this8.cartDataServer.data[0].product = actualProdInfo;

                _this8.CalculateTotal();

                _this8.cartDataClient.total = _this8.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(_this8.cartDataClient));
              } else {
                _this8.cartDataServer.data.push({
                  numInCart: p.incart,
                  product: actualProdInfo
                });

                _this8.CalculateTotal();

                _this8.cartDataClient.total = _this8.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(_this8.cartDataClient));
              }

              _this8.cartDataObs$.next(Object.assign({}, _this8.cartDataServer));
            });
          });
        }
      }

      _createClass(CartService, [{
        key: "CalculateSubTotal",
        value: function CalculateSubTotal(index) {
          var subTotal = 0;
          var p = this.cartDataServer.data[index]; // @ts-ignore

          subTotal = p.product.price * p.numInCart;
          return subTotal;
        }
      }, {
        key: "AddProductToCart",
        value: function AddProductToCart(id, quantity) {
          var _this9 = this;

          this.productService.getSingleProduct(id).subscribe(function (prod) {
            // If the cart is empty
            if (_this9.cartDataServer.data[0].product === undefined) {
              _this9.cartDataServer.data[0].product = prod;
              _this9.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;

              _this9.CalculateTotal();

              _this9.cartDataClient.prodData[0].incart = _this9.cartDataServer.data[0].numInCart;
              _this9.cartDataClient.prodData[0].id = prod.id;
              _this9.cartDataClient.total = _this9.cartDataServer.total;
              localStorage.setItem('cart', JSON.stringify(_this9.cartDataClient));

              _this9.cartDataObs$.next(Object.assign({}, _this9.cartDataServer));

              _this9.toast.success("".concat(prod.name, " added to the cart."), "Product Added", {
                timeOut: 1500,
                progressBar: true,
                progressAnimation: 'increasing',
                positionClass: 'toast-top-right'
              });
            } // END of IF
            // Cart is not empty
            else {
                var index = _this9.cartDataServer.data.findIndex(function (p) {
                  return p.product.id === prod.id;
                }); // 1. If chosen product is already in cart array


                if (index !== -1) {
                  if (quantity !== undefined && quantity <= prod.quantity) {
                    // @ts-ignore
                    _this9.cartDataServer.data[index].numInCart = _this9.cartDataServer.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
                  } else {
                    // @ts-ignore
                    _this9.cartDataServer.data[index].numInCart < prod.quantity ? _this9.cartDataServer.data[index].numInCart++ : prod.quantity;
                  }

                  _this9.cartDataClient.prodData[index].incart = _this9.cartDataServer.data[index].numInCart;

                  _this9.toast.info("".concat(prod.name, " quantity updated in the cart."), "Product Updated", {
                    timeOut: 1500,
                    progressBar: true,
                    progressAnimation: 'increasing',
                    positionClass: 'toast-top-right'
                  });
                } // 2. If chosen product is not in cart array
                else {
                    _this9.cartDataServer.data.push({
                      product: prod,
                      numInCart: 1
                    });

                    _this9.cartDataClient.prodData.push({
                      incart: 1,
                      id: prod.id
                    });

                    _this9.toast.success("".concat(prod.name, " added to the cart."), "Product Added", {
                      timeOut: 1500,
                      progressBar: true,
                      progressAnimation: 'increasing',
                      positionClass: 'toast-top-right'
                    });
                  }

                _this9.CalculateTotal();

                _this9.cartDataClient.total = _this9.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(_this9.cartDataClient));

                _this9.cartDataObs$.next(Object.assign({}, _this9.cartDataServer));
              } // END of ELSE

          });
        }
      }, {
        key: "UpdateCartData",
        value: function UpdateCartData(index, increase) {
          var data = this.cartDataServer.data[index];

          if (increase) {
            // @ts-ignore
            data.numInCart < data.product.quantity ? data.numInCart++ : data.product.quantity;
            this.cartDataClient.prodData[index].incart = data.numInCart;
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          } else {
            if (data.numInCart > 1) {
              // @ts-ignore
              data.numInCart--; // @ts-ignore

              if (data.numInCart < 1) {
                this.DeleteProductFromCart(index);
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
              } else {
                // @ts-ignore
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
                this.cartDataClient.prodData[index].incart = data.numInCart;
                this.CalculateTotal();
                this.cartDataClient.total = this.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
              }
            }
          }
        }
      }, {
        key: "DeleteProductFromCart",
        value: function DeleteProductFromCart(index) {
          /*    console.log(this.cartDataClient.prodData[index].prodId);
              console.log(this.cartDataServer.data[index].product.id);*/
          if (window.confirm('Are you sure you want to delete the item?')) {
            this.cartDataServer.data.splice(index, 1);
            this.cartDataClient.prodData.splice(index, 1);
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;

            if (this.cartDataClient.total === 0) {
              this.cartDataClient = {
                prodData: [{
                  incart: 0,
                  id: 0
                }],
                total: 0
              };
              localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            } else {
              localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            }

            if (this.cartDataServer.total === 0) {
              this.cartDataServer = {
                data: [{
                  product: undefined,
                  numInCart: 0
                }],
                total: 0
              };
              this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            } else {
              this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            }
          } // If the user doesn't want to delete the product, hits the CANCEL button
          else {
              return;
            }
        }
      }, {
        key: "CheckoutFromCart",
        value: function CheckoutFromCart(userId) {
          var _this10 = this;

          this.httpClient.post("".concat(this.ServerURL, "orders/payment"), null).subscribe(function (res) {
            console.clear();

            if (res.success) {
              _this10.resetServerData();

              _this10.httpClient.post("".concat(_this10.ServerURL, "orders/new"), {
                userId: userId,
                products: _this10.cartDataClient.prodData
              }).subscribe(function (data) {
                _this10.orderService.getSingleOrder(data.order_id).then(function (prods) {
                  if (data.success) {
                    var navigationExtras = {
                      state: {
                        message: data.message,
                        products: prods,
                        orderId: data.order_id,
                        total: _this10.cartDataClient.total
                      }
                    };

                    _this10.spinner.hide().then();

                    _this10.router.navigate(['/thankyou'], navigationExtras).then(function (p) {
                      _this10.cartDataClient = {
                        prodData: [{
                          incart: 0,
                          id: 0
                        }],
                        total: 0
                      };

                      _this10.cartTotal$.next(0);

                      localStorage.setItem('cart', JSON.stringify(_this10.cartDataClient));
                    });
                  }
                });
              });
            } else {
              _this10.spinner.hide().then();

              _this10.router.navigateByUrl('/checkout').then();

              _this10.toast.error("Sorry, failed to book the order", "Order Status", {
                timeOut: 1500,
                progressBar: true,
                progressAnimation: 'increasing',
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "CalculateTotal",
        value: function CalculateTotal() {
          var Total = 0;
          this.cartDataServer.data.forEach(function (p) {
            var numInCart = p.numInCart;
            var price = p.product.price; // @ts-ignore

            Total += numInCart * price;
          });
          this.cartDataServer.total = Total;
          this.cartTotal$.next(this.cartDataServer.total);
        }
      }, {
        key: "resetServerData",
        value: function resetServerData() {
          this.cartDataServer = {
            data: [{
              product: undefined,
              numInCart: 0
            }],
            total: 0
          };
          this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]));
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService(http) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.products = [];
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(OrderService, [{
        key: "getAllOrders",
        value: function getAllOrders() {
          var limitOfResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
          return this.http.get(this.url + 'orders', {
            params: {
              limit: limitOfResults.toString()
            }
          });
        }
      }, {
        key: "getSingleOrder",
        value: function getSingleOrder(orderId) {
          return this.http.get("".concat(this.url, "orders/").concat(orderId)).toPromise();
        }
      }]);

      return OrderService;
    }();

    OrderService.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(ProductService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          var limitOfResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          return this.http.get(this.url + 'products', {
            params: {
              limit: limitOfResults.toString()
            }
          });
        }
      }, {
        key: "getSingleProduct",
        value: function getSingleProduct(id) {
          return this.http.get(this.url + 'products/' + id);
        }
      }, {
        key: "getProductsFromCategory",
        value: function getProductsFromCategory(catName) {
          return this.http.get(this.url + 'products/categories/' + catName);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serverURL: 'http://localhost:3636/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Pichau\Bluemodas_front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map