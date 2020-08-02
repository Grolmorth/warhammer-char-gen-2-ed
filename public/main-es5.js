function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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


    var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/forgot-password/forgot-password.component */
    "./src/app/login/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/verify-email/verify-email.component */
    "./src/app/login/verify-email/verify-email.component.ts");
    /* harmony import */


    var _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/sign-in/sign-in.component */
    "./src/app/login/sign-in/sign-in.component.ts");
    /* harmony import */


    var _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/sign-up/sign-up.component */
    "./src/app/login/sign-up/sign-up.component.ts");
    /* harmony import */


    var _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/dashboard/dashboard.component */
    "./src/app/login/dashboard/dashboard.component.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sekcjadodawanie/sekcjadodawanie.component */
    "./src/app/sekcjadodawanie/sekcjadodawanie.component.ts");
    /* harmony import */


    var _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./bohater/bohater.component */
    "./src/app/bohater/bohater.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }, {
      path: 'bohater',
      component: _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_9__["BohaterComponent"]
    }, {
      path: 'dodawanie',
      component: _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_8__["SekcjadodawanieComponent"]
    }, {
      path: 'sign-in',
      component: _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]
    }, {
      path: 'register-user',
      component: _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
    }, {
      path: 'dashboard',
      component: _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'forgot-password',
      component: _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
    }, {
      path: 'verify-email-address',
      component: _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailComponent"]
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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'gra';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-12", "text-center", "mt-1"], [1, "col-12"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _dodawanie_dodawanie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dodawanie/dodawanie.component */
    "./src/app/dodawanie/dodawanie.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _dodawanie_aside_aside_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dodawanie/aside/aside.component */
    "./src/app/dodawanie/aside/aside.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-select/ng-option-highlight */
    "./node_modules/@ng-select/ng-option-highlight/__ivy_ngcc__/fesm2015/ng-select-ng-option-highlight.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./login/forgot-password/forgot-password.component */
    "./src/app/login/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./login/verify-email/verify-email.component */
    "./src/app/login/verify-email/verify-email.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./login/dashboard/dashboard.component */
    "./src/app/login/dashboard/dashboard.component.ts");
    /* harmony import */


    var _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./login/sign-up/sign-up.component */
    "./src/app/login/sign-up/sign-up.component.ts");
    /* harmony import */


    var _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./login/sign-in/sign-in.component */
    "./src/app/login/sign-in/sign-in.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./sekcjadodawanie/sekcjadodawanie.component */
    "./src/app/sekcjadodawanie/sekcjadodawanie.component.ts");
    /* harmony import */


    var _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./bohater/bohater.component */
    "./src/app/bohater/bohater.component.ts");
    /* harmony import */


    var _bohater_bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./bohater/bohater-bohater/bohater-bohater.component */
    "./src/app/bohater/bohater-bohater/bohater-bohater.component.ts");
    /* harmony import */


    var _bohater_bohater_opis_bohatera_bohater_opis_bohatera_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./bohater/bohater-opis-bohatera/bohater-opis-bohatera.component */
    "./src/app/bohater/bohater-opis-bohatera/bohater-opis-bohatera.component.ts");
    /* harmony import */


    var _bohater_bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./bohater/bohater-cechy/bohater-cechy.component */
    "./src/app/bohater/bohater-cechy/bohater-cechy.component.ts");
    /* harmony import */


    var _bohater_bohater_bron_bohater_bron_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./bohater/bohater-bron/bohater-bron.component */
    "./src/app/bohater/bohater-bron/bohater-bron.component.ts");
    /* harmony import */


    var _bohater_bohater_pancerz_bohater_pancerz_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./bohater/bohater-pancerz/bohater-pancerz.component */
    "./src/app/bohater/bohater-pancerz/bohater-pancerz.component.ts");
    /* harmony import */


    var _bohater_bohater_gracz_bohater_gracz_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./bohater/bohater-gracz/bohater-gracz.component */
    "./src/app/bohater/bohater-gracz/bohater-gracz.component.ts");
    /* harmony import */


    var _bohater_bohater_punkty_doswiadczenia_bohater_punkty_doswiadczenia_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./bohater/bohater-punkty-doswiadczenia/bohater-punkty-doswiadczenia.component */
    "./src/app/bohater/bohater-punkty-doswiadczenia/bohater-punkty-doswiadczenia.component.ts");
    /* harmony import */


    var _bohater_bohater_ruch_w_walce_bohater_ruch_w_walce_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./bohater/bohater-ruch-w-walce/bohater-ruch-w-walce.component */
    "./src/app/bohater/bohater-ruch-w-walce/bohater-ruch-w-walce.component.ts");
    /* harmony import */


    var _bohater_bohater_punkty_zbroi_bohater_punkty_zbroi_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./bohater/bohater-punkty-zbroi/bohater-punkty-zbroi.component */
    "./src/app/bohater/bohater-punkty-zbroi/bohater-punkty-zbroi.component.ts");
    /* harmony import */


    var _bohater_bohater_zestawienie_akcji_bohater_zestawienie_akcji_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./bohater/bohater-zestawienie-akcji/bohater-zestawienie-akcji.component */
    "./src/app/bohater/bohater-zestawienie-akcji/bohater-zestawienie-akcji.component.ts");
    /* harmony import */


    var _bohater_bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./bohater/bohater-umiejetnosci/bohater-umiejetnosci.component */
    "./src/app/bohater/bohater-umiejetnosci/bohater-umiejetnosci.component.ts");
    /* harmony import */


    var _bohater_bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./bohater/bohater-zdolnosci/bohater-zdolnosci.component */
    "./src/app/bohater/bohater-zdolnosci/bohater-zdolnosci.component.ts");
    /* harmony import */


    var _bohater_bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./bohater/bohater-wyposarzenie/bohater-wyposarzenie.component */
    "./src/app/bohater/bohater-wyposarzenie/bohater-wyposarzenie.component.ts");
    /* harmony import */


    var _bohater_bohater_pieniadze_bohater_pieniadze_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./bohater/bohater-pieniadze/bohater-pieniadze.component */
    "./src/app/bohater/bohater-pieniadze/bohater-pieniadze.component.ts");

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
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"]],
      imports: [[_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_13__["NgOptionHighlightModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dodawanie_dodawanie_component__WEBPACK_IMPORTED_MODULE_4__["DodawanieComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"], _dodawanie_aside_aside_component__WEBPACK_IMPORTED_MODULE_10__["AsideComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"], _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_19__["VerifyEmailComponent"], _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"], _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"], _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_25__["SekcjadodawanieComponent"], _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_26__["BohaterComponent"], _bohater_bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_27__["BohaterBohaterComponent"], _bohater_bohater_opis_bohatera_bohater_opis_bohatera_component__WEBPACK_IMPORTED_MODULE_28__["BohaterOpisBohateraComponent"], _bohater_bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_29__["BohaterCechyComponent"], _bohater_bohater_bron_bohater_bron_component__WEBPACK_IMPORTED_MODULE_30__["BohaterBronComponent"], _bohater_bohater_pancerz_bohater_pancerz_component__WEBPACK_IMPORTED_MODULE_31__["BohaterPancerzComponent"], _bohater_bohater_gracz_bohater_gracz_component__WEBPACK_IMPORTED_MODULE_32__["BohaterGraczComponent"], _bohater_bohater_punkty_doswiadczenia_bohater_punkty_doswiadczenia_component__WEBPACK_IMPORTED_MODULE_33__["BohaterPunktyDoswiadczeniaComponent"], _bohater_bohater_ruch_w_walce_bohater_ruch_w_walce_component__WEBPACK_IMPORTED_MODULE_34__["BohaterRuchWWalceComponent"], _bohater_bohater_punkty_zbroi_bohater_punkty_zbroi_component__WEBPACK_IMPORTED_MODULE_35__["BohaterPunktyZbroiComponent"], _bohater_bohater_zestawienie_akcji_bohater_zestawienie_akcji_component__WEBPACK_IMPORTED_MODULE_36__["BohaterZestawienieAkcjiComponent"], _bohater_bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_37__["BohaterUmiejetnosciComponent"], _bohater_bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_38__["BohaterZdolnosciComponent"], _bohater_bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_39__["BohaterWyposarzenieComponent"], _bohater_bohater_pieniadze_bohater_pieniadze_component__WEBPACK_IMPORTED_MODULE_40__["BohaterPieniadzeComponent"]],
        imports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_13__["NgOptionHighlightModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dodawanie_dodawanie_component__WEBPACK_IMPORTED_MODULE_4__["DodawanieComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"], _dodawanie_aside_aside_component__WEBPACK_IMPORTED_MODULE_10__["AsideComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"], _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_19__["VerifyEmailComponent"], _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"], _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"], _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_25__["SekcjadodawanieComponent"], _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_26__["BohaterComponent"], _bohater_bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_27__["BohaterBohaterComponent"], _bohater_bohater_opis_bohatera_bohater_opis_bohatera_component__WEBPACK_IMPORTED_MODULE_28__["BohaterOpisBohateraComponent"], _bohater_bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_29__["BohaterCechyComponent"], _bohater_bohater_bron_bohater_bron_component__WEBPACK_IMPORTED_MODULE_30__["BohaterBronComponent"], _bohater_bohater_pancerz_bohater_pancerz_component__WEBPACK_IMPORTED_MODULE_31__["BohaterPancerzComponent"], _bohater_bohater_gracz_bohater_gracz_component__WEBPACK_IMPORTED_MODULE_32__["BohaterGraczComponent"], _bohater_bohater_punkty_doswiadczenia_bohater_punkty_doswiadczenia_component__WEBPACK_IMPORTED_MODULE_33__["BohaterPunktyDoswiadczeniaComponent"], _bohater_bohater_ruch_w_walce_bohater_ruch_w_walce_component__WEBPACK_IMPORTED_MODULE_34__["BohaterRuchWWalceComponent"], _bohater_bohater_punkty_zbroi_bohater_punkty_zbroi_component__WEBPACK_IMPORTED_MODULE_35__["BohaterPunktyZbroiComponent"], _bohater_bohater_zestawienie_akcji_bohater_zestawienie_akcji_component__WEBPACK_IMPORTED_MODULE_36__["BohaterZestawienieAkcjiComponent"], _bohater_bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_37__["BohaterUmiejetnosciComponent"], _bohater_bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_38__["BohaterZdolnosciComponent"], _bohater_bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_39__["BohaterWyposarzenieComponent"], _bohater_bohater_pieniadze_bohater_pieniadze_component__WEBPACK_IMPORTED_MODULE_40__["BohaterPieniadzeComponent"]],
          imports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_13__["NgOptionHighlightModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-bohater/bohater-bohater.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/bohater/bohater-bohater/bohater-bohater.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BohaterBohaterComponent */

  /***/
  function srcAppBohaterBohaterBohaterBohaterBohaterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterBohaterComponent", function () {
      return BohaterBohaterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");
    /* harmony import */


    var _service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/shared.service */
    "./src/app/bohater/service/shared.service.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BohaterBohaterComponent = /*#__PURE__*/function () {
      function BohaterBohaterComponent(logika, share) {
        _classCallCheck(this, BohaterBohaterComponent);

        this.logika = logika;
        this.share = share;
        this.submittedRasa = false;
        this.submittedProfesja = false;
        this.data = this.selectedRasaId;
        this.dataa = this.selectedProfesjaId; // przypisanie tablic ras z charakterystykami

        this.cechy = [];
        this.profesjaRoll = [];
      } // pobranie wszystkich ras z serwisu


      _createClass(BohaterBohaterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.logika.getListaRasy().subscribe(function (items) {
            return _this.cechy = items;
          });
          console.log('pobrano rasy');
        } // logika przyciusku do zmiany rasy

      }, {
        key: "nowaRasa",
        value: function nowaRasa() {
          var _this2 = this;

          this.share.changeRasa(this.selectedRasaId);
          console.log('zmieniono rase na', this.selectedRasaId); // ukrycie i pokazanie elementów html

          this.submittedRasa = true; // pobranie listy możliwych profesji

          this.logika.getListaProfesje(this.selectedRasaId).subscribe(function (items) {
            return _this2.profesjaRoll = items;
          });
          console.log('dostępne profesje z rasy:', this.selectedRasaId);
        }
      }, {
        key: "innaRasa",
        value: function innaRasa() {
          var _this3 = this;

          // ukrycie i pokazanie elementów html
          this.submittedRasa = false;
          console.log('wycofano rase', this.selectedRasaId, 'ponowne wybieranie rasy');
          this.share.changeRasa(this.selectedRasaId); // wyzerowanie statystyk początkowych

          this.share.resetStatystyk(); // zresetowanie listy profesji

          this.selectedRasaId = null;
          this.selectedProfesjaId = null;
          this.logika.getListaProfesje(this.selectedRasaId).subscribe(function (items) {
            return _this3.profesjaRoll = items;
          });
          this.submittedProfesja = false;
        } // logika przyciusku do zmiany profesji

      }, {
        key: "nowaProfesja",
        value: function nowaProfesja() {
          console.log('nowa profesja', this.selectedProfesjaId);
          this.share.changeProfesja(this.selectedProfesjaId);
          this.submittedProfesja = true;
          this.share.changeAktualne();
        }
      }, {
        key: "innaProfesja",
        value: function innaProfesja() {
          this.submittedProfesja = false;
          this.share.resetStatystykProfesja();
        }
      }]);

      return BohaterBohaterComponent;
    }();

    BohaterBohaterComponent.ɵfac = function BohaterBohaterComponent_Factory(t) {
      return new (t || BohaterBohaterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    BohaterBohaterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterBohaterComponent,
      selectors: [["app-bohater-bohater"]],
      decls: 34,
      vars: 10,
      consts: [[1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "bg-dark", "text-light", "p-1"], [1, ""], ["for", "inputRasa", 1, "m-0", "p-0"], [3, "hidden"], ["bindLabel", "rasatitle", "bindValue", "rasatitle", 3, "items", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", "m-1", 3, "click"], [1, "btn", "btn-danger", "btn-sm", "m-1", 3, "click"], ["for", "inputProfesja", 1, "m-0", "p-0"], ["bindLabel", "profesjatitle", "bindValue", "profesjatitle", 3, "items", "ngModel", "ngModelChange"]],
      template: function BohaterBohaterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bohater");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rasa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterBohaterComponent_Template_ng_select_ngModelChange_11_listener($event) {
            return ctx.selectedRasaId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_Template_button_click_12_listener() {
            return ctx.nowaRasa();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wybierz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_Template_button_click_17_listener() {
            return ctx.innaRasa();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zmie\u0144 ras\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Profesja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterBohaterComponent_Template_ng_select_ngModelChange_26_listener($event) {
            return ctx.selectedProfesjaId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_Template_button_click_27_listener() {
            return ctx.nowaProfesja();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wybierz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_Template_button_click_32_listener() {
            return ctx.innaProfesja();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Zmie\u0144 profesj\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submittedRasa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.cechy)("ngModel", ctx.selectedRasaId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submittedRasa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedRasaId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submittedProfesja);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.profesjaRoll)("ngModel", ctx.selectedProfesjaId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submittedProfesja);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProfesjaId);
        }
      },
      directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1ib2hhdGVyL2JvaGF0ZXItYm9oYXRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterBohaterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-bohater',
          templateUrl: './bohater-bohater.component.html',
          styleUrls: ['./bohater-bohater.component.css']
        }]
      }], function () {
        return [{
          type: _service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]
        }, {
          type: _service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-bron/bohater-bron.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/bohater/bohater-bron/bohater-bron.component.ts ***!
    \****************************************************************/

  /*! exports provided: BohaterBronComponent */

  /***/
  function srcAppBohaterBohaterBronBohaterBronComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterBronComponent", function () {
      return BohaterBronComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterBronComponent = /*#__PURE__*/function () {
      function BohaterBronComponent() {
        _classCallCheck(this, BohaterBronComponent);
      }

      _createClass(BohaterBronComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterBronComponent;
    }();

    BohaterBronComponent.ɵfac = function BohaterBronComponent_Factory(t) {
      return new (t || BohaterBronComponent)();
    };

    BohaterBronComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterBronComponent,
      selectors: [["app-bohater-bron"]],
      decls: 36,
      vars: 0,
      consts: [[1, "table", "table-sm"], [1, "thead-dark"], ["scope", "col", "colspan", "7", 1, "text-center"], [1, "text-center"]],
      template: function BohaterBronComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bro\u0144");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nazwa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Obc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kategoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Si\u0142a broni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zasi\u0119g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prze\u0142ad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cechy or\u0119\u017Ca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Kosa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sieczne");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1icm9uL2JvaGF0ZXItYnJvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterBronComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-bron',
          templateUrl: './bohater-bron.component.html',
          styleUrls: ['./bohater-bron.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-cechy/bohater-cechy.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/bohater/bohater-cechy/bohater-cechy.component.ts ***!
    \******************************************************************/

  /*! exports provided: BohaterCechyComponent */

  /***/
  function srcAppBohaterBohaterCechyBohaterCechyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterCechyComponent", function () {
      return BohaterCechyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");
    /* harmony import */


    var _service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/shared.service */
    "./src/app/bohater/service/shared.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BohaterCechyComponent = /*#__PURE__*/function () {
      function BohaterCechyComponent(logika, share) {
        _classCallCheck(this, BohaterCechyComponent);

        this.logika = logika;
        this.share = share;
      }

      _createClass(BohaterCechyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.poczatkowa = this.share.poczatkoweStatystykiRasowe;
          this.schematRozwoju = this.share.schematRozwojuProfesja;
          this.aktualne = this.share.sumowaneStatystyki;
        }
      }]);

      return BohaterCechyComponent;
    }();

    BohaterCechyComponent.ɵfac = function BohaterCechyComponent_Factory(t) {
      return new (t || BohaterCechyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    BohaterCechyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterCechyComponent,
      selectors: [["app-bohater-cechy"]],
      decls: 174,
      vars: 48,
      consts: [[1, "table", "table-sm"], [1, "thead-dark"], ["scope", "col", "colspan", "9", 1, "text-center"], [1, "text-center"], ["placement", "top", "ngbTooltip", "Walka Wr\u0119cz", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Umiej\u0119tno\u015Bci Strzeleckie", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Krzepa", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Odporno\u015B\u0107", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Zr\u0119czno\u015B\u0107", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Inteligencja", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Si\u0142a Woli", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Og\u0142ada", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Ataki", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "\u017Bywotno\u015B\u0107", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Si\u0142a", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Wytrzyma\u0142o\u015B\u0107", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Szybko\u015B\u0107", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Magia", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Punkty Ob\u0142\u0119du", 1, "btn", "btn-xs", "m-0", "p-0"], ["placement", "top", "ngbTooltip", "Punkty Przeznaczenia", 1, "btn", "btn-xs", "m-0", "p-0"]],
      template: function BohaterCechyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cechy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cechy g\u0142\xF3wne");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Odp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Zr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Int");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ogd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pocz\u0105tkowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Schemat rozwoju");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Aktualna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Cechy drugorz\u0119dne");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u017Byw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Wt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Sz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Mag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "PO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "PP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Pocz\u0105tkowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Schemat rozwoju");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Aktualna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.WW);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.US);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.K);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Odp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Zr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Int);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.SW);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Ogd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.WW);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.US);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.K);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Odp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Zr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Int);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.SW);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Ogd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.WW);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.US);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.K);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Odp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Zr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Int);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.SW);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Ogd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.A);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Zyw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.S);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Wt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Sz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.Mag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.PO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poczatkowa.PP);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.A);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Zyw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.S);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Wt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Sz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.Mag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.PO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.schematRozwoju.PP);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.A);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Zyw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.S);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Wt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Sz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.Mag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.PO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aktualne.PP);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1jZWNoeS9ib2hhdGVyLWNlY2h5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterCechyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-cechy',
          templateUrl: './bohater-cechy.component.html',
          styleUrls: ['./bohater-cechy.component.css']
        }]
      }], function () {
        return [{
          type: _service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]
        }, {
          type: _service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-gracz/bohater-gracz.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/bohater/bohater-gracz/bohater-gracz.component.ts ***!
    \******************************************************************/

  /*! exports provided: BohaterGraczComponent */

  /***/
  function srcAppBohaterBohaterGraczBohaterGraczComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterGraczComponent", function () {
      return BohaterGraczComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterGraczComponent = /*#__PURE__*/function () {
      function BohaterGraczComponent() {
        _classCallCheck(this, BohaterGraczComponent);
      }

      _createClass(BohaterGraczComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterGraczComponent;
    }();

    BohaterGraczComponent.ɵfac = function BohaterGraczComponent_Factory(t) {
      return new (t || BohaterGraczComponent)();
    };

    BohaterGraczComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterGraczComponent,
      selectors: [["app-bohater-gracz"]],
      decls: 24,
      vars: 0,
      consts: [[1, "table", "text-center", "table-sm"], [1, "thead-dark"], ["colspan", "4"]],
      template: function BohaterGraczComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gracz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Imi\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Trol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mistrz gry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Marian");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kampania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Jaka\u015B pojebana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Rok kampanii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1ncmFjei9ib2hhdGVyLWdyYWN6LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterGraczComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-gracz',
          templateUrl: './bohater-gracz.component.html',
          styleUrls: ['./bohater-gracz.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-opis-bohatera/bohater-opis-bohatera.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/bohater/bohater-opis-bohatera/bohater-opis-bohatera.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BohaterOpisBohateraComponent */

  /***/
  function srcAppBohaterBohaterOpisBohateraBohaterOpisBohateraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterOpisBohateraComponent", function () {
      return BohaterOpisBohateraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterOpisBohateraComponent = /*#__PURE__*/function () {
      function BohaterOpisBohateraComponent() {
        _classCallCheck(this, BohaterOpisBohateraComponent);
      }

      _createClass(BohaterOpisBohateraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterOpisBohateraComponent;
    }();

    BohaterOpisBohateraComponent.ɵfac = function BohaterOpisBohateraComponent_Factory(t) {
      return new (t || BohaterOpisBohateraComponent)();
    };

    BohaterOpisBohateraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterOpisBohateraComponent,
      selectors: [["app-bohater-opis-bohatera"]],
      decls: 52,
      vars: 0,
      consts: [[1, "table", "table-sm"], [1, "thead-dark"], ["scope", "col", "colspan", "4", 1, "text-center"], ["colspan", "3"]],
      template: function BohaterOpisBohateraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Opis Bohatera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wiek");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "P\u0142e\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "M\u0119\u017Cczyzna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kolor oczu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Niebieskie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Waga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "85kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kolor w\u0142os\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Br\u0105zowe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Wzrost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "180cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Znak gwiezdny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "B\u0119bniarz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Rodze\u0144stwo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Miejsce urodzenia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Altdorf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Znaki szczeg\xF3lne");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Tatua\u017C na lewej nodze i pod okiem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1vcGlzLWJvaGF0ZXJhL2JvaGF0ZXItb3Bpcy1ib2hhdGVyYS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterOpisBohateraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-opis-bohatera',
          templateUrl: './bohater-opis-bohatera.component.html',
          styleUrls: ['./bohater-opis-bohatera.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-pancerz/bohater-pancerz.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/bohater/bohater-pancerz/bohater-pancerz.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BohaterPancerzComponent */

  /***/
  function srcAppBohaterBohaterPancerzBohaterPancerzComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterPancerzComponent", function () {
      return BohaterPancerzComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterPancerzComponent = /*#__PURE__*/function () {
      function BohaterPancerzComponent() {
        _classCallCheck(this, BohaterPancerzComponent);
      }

      _createClass(BohaterPancerzComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterPancerzComponent;
    }();

    BohaterPancerzComponent.ɵfac = function BohaterPancerzComponent_Factory(t) {
      return new (t || BohaterPancerzComponent)();
    };

    BohaterPancerzComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterPancerzComponent,
      selectors: [["app-bohater-pancerz"]],
      decls: 39,
      vars: 0,
      consts: [[1, "table", "table-sm"], [1, "thead-dark"], ["scope", "col", "colspan", "4", 1, "text-center"], [1, "text-center"], ["colspan", "4"]],
      template: function BohaterPancerzComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pancerz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Opancerzenie proste");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Typ pancerza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ci\u0119\u017Cki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Punkty zbroi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Opancerzenie z\u0142o\u017Cone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Typ pancerza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Obc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lokacja cia\u0142a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "PZ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Zbroja p\u0142ytowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Korpus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1wYW5jZXJ6L2JvaGF0ZXItcGFuY2Vyei5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterPancerzComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-pancerz',
          templateUrl: './bohater-pancerz.component.html',
          styleUrls: ['./bohater-pancerz.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-pieniadze/bohater-pieniadze.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/bohater/bohater-pieniadze/bohater-pieniadze.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BohaterPieniadzeComponent */

  /***/
  function srcAppBohaterBohaterPieniadzeBohaterPieniadzeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterPieniadzeComponent", function () {
      return BohaterPieniadzeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterPieniadzeComponent = /*#__PURE__*/function () {
      function BohaterPieniadzeComponent() {
        _classCallCheck(this, BohaterPieniadzeComponent);
      }

      _createClass(BohaterPieniadzeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterPieniadzeComponent;
    }();

    BohaterPieniadzeComponent.ɵfac = function BohaterPieniadzeComponent_Factory(t) {
      return new (t || BohaterPieniadzeComponent)();
    };

    BohaterPieniadzeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterPieniadzeComponent,
      selectors: [["app-bohater-pieniadze"]],
      decls: 21,
      vars: 0,
      consts: [[1, "table", "table-sm"], [1, "thead-dark"], ["scope", "col", "colspan", "2", 1, "text-center"]],
      template: function BohaterPieniadzeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pieni\u0105dze");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Z\u0142ote korony (zk)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Srebrne szylingi (s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mosi\u0119\u017Cne pensy (p)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1waWVuaWFkemUvYm9oYXRlci1waWVuaWFkemUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterPieniadzeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-pieniadze',
          templateUrl: './bohater-pieniadze.component.html',
          styleUrls: ['./bohater-pieniadze.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-punkty-doswiadczenia/bohater-punkty-doswiadczenia.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/bohater/bohater-punkty-doswiadczenia/bohater-punkty-doswiadczenia.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: BohaterPunktyDoswiadczeniaComponent */

  /***/
  function srcAppBohaterBohaterPunktyDoswiadczeniaBohaterPunktyDoswiadczeniaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterPunktyDoswiadczeniaComponent", function () {
      return BohaterPunktyDoswiadczeniaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterPunktyDoswiadczeniaComponent = /*#__PURE__*/function () {
      function BohaterPunktyDoswiadczeniaComponent() {
        _classCallCheck(this, BohaterPunktyDoswiadczeniaComponent);
      }

      _createClass(BohaterPunktyDoswiadczeniaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterPunktyDoswiadczeniaComponent;
    }();

    BohaterPunktyDoswiadczeniaComponent.ɵfac = function BohaterPunktyDoswiadczeniaComponent_Factory(t) {
      return new (t || BohaterPunktyDoswiadczeniaComponent)();
    };

    BohaterPunktyDoswiadczeniaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterPunktyDoswiadczeniaComponent,
      selectors: [["app-bohater-punkty-doswiadczenia"]],
      decls: 15,
      vars: 0,
      consts: [[1, "table", "text-center", "table-sm"], [1, "thead-dark"], ["colspan", "4"]],
      template: function BohaterPunktyDoswiadczeniaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Punkty do\u015Bwiadczenia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Obecnie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Razem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1wdW5rdHktZG9zd2lhZGN6ZW5pYS9ib2hhdGVyLXB1bmt0eS1kb3N3aWFkY3plbmlhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterPunktyDoswiadczeniaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-punkty-doswiadczenia',
          templateUrl: './bohater-punkty-doswiadczenia.component.html',
          styleUrls: ['./bohater-punkty-doswiadczenia.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-punkty-zbroi/bohater-punkty-zbroi.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/bohater/bohater-punkty-zbroi/bohater-punkty-zbroi.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BohaterPunktyZbroiComponent */

  /***/
  function srcAppBohaterBohaterPunktyZbroiBohaterPunktyZbroiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterPunktyZbroiComponent", function () {
      return BohaterPunktyZbroiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterPunktyZbroiComponent = /*#__PURE__*/function () {
      function BohaterPunktyZbroiComponent() {
        _classCallCheck(this, BohaterPunktyZbroiComponent);
      }

      _createClass(BohaterPunktyZbroiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterPunktyZbroiComponent;
    }();

    BohaterPunktyZbroiComponent.ɵfac = function BohaterPunktyZbroiComponent_Factory(t) {
      return new (t || BohaterPunktyZbroiComponent)();
    };

    BohaterPunktyZbroiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterPunktyZbroiComponent,
      selectors: [["app-bohater-punkty-zbroi"]],
      decls: 55,
      vars: 0,
      consts: [[1, "table", "text-center", "table-sm"], [1, "thead-dark"], ["colspan", "3"]],
      template: function BohaterPunktyZbroiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Punkty zbroi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Warto\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "k100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "G\u0142owa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "01-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Prawa R\u0119ka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "16-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lewa R\u0119ka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "36-55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Korpus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "56-80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Prawa noga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "81-90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lewa noga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "91-00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1wdW5rdHktemJyb2kvYm9oYXRlci1wdW5rdHktemJyb2kuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterPunktyZbroiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-punkty-zbroi',
          templateUrl: './bohater-punkty-zbroi.component.html',
          styleUrls: ['./bohater-punkty-zbroi.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-ruch-w-walce/bohater-ruch-w-walce.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/bohater/bohater-ruch-w-walce/bohater-ruch-w-walce.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BohaterRuchWWalceComponent */

  /***/
  function srcAppBohaterBohaterRuchWWalceBohaterRuchWWalceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterRuchWWalceComponent", function () {
      return BohaterRuchWWalceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterRuchWWalceComponent = /*#__PURE__*/function () {
      function BohaterRuchWWalceComponent() {
        _classCallCheck(this, BohaterRuchWWalceComponent);
      }

      _createClass(BohaterRuchWWalceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterRuchWWalceComponent;
    }();

    BohaterRuchWWalceComponent.ɵfac = function BohaterRuchWWalceComponent_Factory(t) {
      return new (t || BohaterRuchWWalceComponent)();
    };

    BohaterRuchWWalceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterRuchWWalceComponent,
      selectors: [["app-bohater-ruch-w-walce"]],
      decls: 19,
      vars: 0,
      consts: [[1, "table", "text-center", "table-sm"], [1, "thead-dark"], ["colspan", "6"]],
      template: function BohaterRuchWWalceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ruch w walce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ruch/odwr\xF3t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Szar\u017Ca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bieg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci1ydWNoLXctd2FsY2UvYm9oYXRlci1ydWNoLXctd2FsY2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterRuchWWalceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-ruch-w-walce',
          templateUrl: './bohater-ruch-w-walce.component.html',
          styleUrls: ['./bohater-ruch-w-walce.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-umiejetnosci/bohater-umiejetnosci.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/bohater/bohater-umiejetnosci/bohater-umiejetnosci.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BohaterUmiejetnosciComponent */

  /***/
  function srcAppBohaterBohaterUmiejetnosciBohaterUmiejetnosciComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterUmiejetnosciComponent", function () {
      return BohaterUmiejetnosciComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");
    /* harmony import */


    var _service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/shared.service */
    "./src/app/bohater/service/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BohaterUmiejetnosciComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r4[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r4[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r4[0].zdolnoscipokrewne);
      }
    }

    function BohaterUmiejetnosciComponent_div_16_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterUmiejetnosciComponent_div_16_div_1_div_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var schemat_r9 = ctx.$implicit;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onWyborUmiejetnosciRasa(schemat_r9, [i_r6]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r9[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r9[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r9[0].zdolnoscipokrewne);
      }
    }

    function BohaterUmiejetnosciComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wybierz jedno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BohaterUmiejetnosciComponent_div_16_div_1_div_4_Template, 9, 3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.umiejetnosciRasy.wyborUmiejetnosciRasy[i_r6]);
      }
    }

    function BohaterUmiejetnosciComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterUmiejetnosciComponent_div_16_div_1_Template, 5, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.umiejetnosciRasy.wyborUmiejetnosciRasy[i_r6][0] !== undefined);
      }
    }

    function BohaterUmiejetnosciComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r14[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r14[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r14[0].zdolnoscipokrewne);
      }
    }

    function BohaterUmiejetnosciComponent_div_18_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterUmiejetnosciComponent_div_18_div_1_div_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var schemat_r19 = ctx.$implicit;

          var i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onWyborUmiejetnosciProfesja(schemat_r19, [i_r16]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r19[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r19[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r19[0].zdolnoscipokrewne);
      }
    }

    function BohaterUmiejetnosciComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wybierz jedno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BohaterUmiejetnosciComponent_div_18_div_1_div_4_Template, 9, 3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.umiejetnosciProfesji.wyborUmiejetnosciProfesji[i_r16]);
      }
    }

    function BohaterUmiejetnosciComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterUmiejetnosciComponent_div_18_div_1_Template, 5, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r16 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.umiejetnosciProfesji.wyborUmiejetnosciProfesji[i_r16][0] !== undefined);
      }
    }

    var BohaterUmiejetnosciComponent = /*#__PURE__*/function () {
      function BohaterUmiejetnosciComponent(logika, share) {
        _classCallCheck(this, BohaterUmiejetnosciComponent);

        this.logika = logika;
        this.share = share;
      }

      _createClass(BohaterUmiejetnosciComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.umiejetnosciProfesji = this.share.schematRozwojuProfesja;
          this.umiejetnosciRasy = this.share.poczatkoweStatystykiRasowe;
        }
      }, {
        key: "onWyborUmiejetnosciProfesja",
        value: function onWyborUmiejetnosciProfesja(schemat, _ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              i = _ref2[0];

          this.share.schematRozwojuProfesja.umiejetnosci.push(schemat);
          this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[i] = [];
          console.log('dodano umiejetnosc', schemat[0].umiejetnosc, 'do puli umiejetnosci');
        }
      }, {
        key: "onWyborUmiejetnosciRasa",
        value: function onWyborUmiejetnosciRasa(schemat, _ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              i = _ref4[0];

          this.share.poczatkoweStatystykiRasowe.umiejetnosci.push(schemat);
          this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[i] = [];
          console.log('dodano umiejetnosc', schemat[0].umiejetnosc, 'do puli umiejetnosci');
        }
      }]);

      return BohaterUmiejetnosciComponent;
    }();

    BohaterUmiejetnosciComponent.ɵfac = function BohaterUmiejetnosciComponent_Factory(t) {
      return new (t || BohaterUmiejetnosciComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    BohaterUmiejetnosciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterUmiejetnosciComponent,
      selectors: [["app-bohater-umiejetnosci"]],
      decls: 19,
      vars: 4,
      consts: [[1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "bg-dark", "text-light", "p-1", "text-center"], [1, "border-bottom", "border-dark"], [1, "row"], [1, "col-sm", "ml-1"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "border-bottom"], [4, "ngIf"], [1, "bg-info", "text-center"], ["class", "border-bottom ", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-secondary", "p-0", "m-0", "container-fluid", 3, "click"]],
      template: function BohaterUmiejetnosciComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Umiej\u0119tno\u015Bci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Umiej\u0119tno\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Zdolno\u015Bci pokrewne");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BohaterUmiejetnosciComponent_div_15_Template, 8, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BohaterUmiejetnosciComponent_div_16_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BohaterUmiejetnosciComponent_div_17_Template, 8, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BohaterUmiejetnosciComponent_div_18_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.umiejetnosciRasy.umiejetnosci);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.umiejetnosciRasy.wyborUmiejetnosciRasy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.umiejetnosciProfesji.umiejetnosci);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.umiejetnosciProfesji.wyborUmiejetnosciProfesji);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci11bWllamV0bm9zY2kvYm9oYXRlci11bWllamV0bm9zY2kuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterUmiejetnosciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-umiejetnosci',
          templateUrl: './bohater-umiejetnosci.component.html',
          styleUrls: ['./bohater-umiejetnosci.component.css']
        }]
      }], function () {
        return [{
          type: _service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]
        }, {
          type: _service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-wyposarzenie/bohater-wyposarzenie.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/bohater/bohater-wyposarzenie/bohater-wyposarzenie.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BohaterWyposarzenieComponent */

  /***/
  function srcAppBohaterBohaterWyposarzenieBohaterWyposarzenieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterWyposarzenieComponent", function () {
      return BohaterWyposarzenieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterWyposarzenieComponent = /*#__PURE__*/function () {
      function BohaterWyposarzenieComponent() {
        _classCallCheck(this, BohaterWyposarzenieComponent);
      }

      _createClass(BohaterWyposarzenieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterWyposarzenieComponent;
    }();

    BohaterWyposarzenieComponent.ɵfac = function BohaterWyposarzenieComponent_Factory(t) {
      return new (t || BohaterWyposarzenieComponent)();
    };

    BohaterWyposarzenieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterWyposarzenieComponent,
      selectors: [["app-bohater-wyposarzenie"]],
      decls: 20,
      vars: 0,
      consts: [[1, "table", "table-sm"], [1, "thead-dark"], ["scope", "col", "colspan", "3", 1, "text-center"]],
      template: function BohaterWyposarzenieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wyposa\u017Cenie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Przedmiot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Obc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Opis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Plecak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prosty plecak pozwalaj\u0105cy nie\u015B\u0107 dodatkowo 250 jednostek obci\u0105\u017Cenia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci13eXBvc2FyemVuaWUvYm9oYXRlci13eXBvc2FyemVuaWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterWyposarzenieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-wyposarzenie',
          templateUrl: './bohater-wyposarzenie.component.html',
          styleUrls: ['./bohater-wyposarzenie.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-zdolnosci/bohater-zdolnosci.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/bohater/bohater-zdolnosci/bohater-zdolnosci.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BohaterZdolnosciComponent */

  /***/
  function srcAppBohaterBohaterZdolnosciBohaterZdolnosciComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterZdolnosciComponent", function () {
      return BohaterZdolnosciComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterZdolnosciComponent = /*#__PURE__*/function () {
      function BohaterZdolnosciComponent() {
        _classCallCheck(this, BohaterZdolnosciComponent);
      }

      _createClass(BohaterZdolnosciComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterZdolnosciComponent;
    }();

    BohaterZdolnosciComponent.ɵfac = function BohaterZdolnosciComponent_Factory(t) {
      return new (t || BohaterZdolnosciComponent)();
    };

    BohaterZdolnosciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterZdolnosciComponent,
      selectors: [["app-bohater-zdolnosci"]],
      decls: 21,
      vars: 0,
      consts: [[1, "table", "table-sm"], [1, "thead-dark"], ["scope", "col", "colspan", "2", 1, "text-center"]],
      template: function BohaterZdolnosciComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zdolno\u015Bci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zdolno\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Opis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Taniec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bohaterowie z t\u0105 umiej\u0119tno\u015Bci\u0105 potrafi\u0105 wyj\u0105tkowo dobrze ta\u0144czy\u0107 - zar\xF3wno klasycznie, jak i nowocze\u015Bnie lub na oba sposoby. Dodaj\u0105 modyfikator +10% do test\xF3w zatrudnienia lub improwizacji, gdy szukaj\u0105 pracy jako osoby dostarczaj\u0105ce rozrywki, czy gdy postanawiaj\u0105 wyst\u0105pi\u0107 na ulicy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stolarstwo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Stolarze potrafi\u0105 obrabia\u0107 drzewo i budowa\u0107 przedmioty takie jak meble, wyposa\u017Cenie dom\xF3w, skrzynie, wozy i temu podobne. Znaj\u0105 narz\u0119dzia, s\u0142u\u017C\u0105ce do pracy w drewnie, odpowiednie techniki i rodzaje budulca. Bohaterowie z t\u0105 umiej\u0119tno\u015Bci\u0105 posiadaj\u0105 modyfikator +10% do wszystkich test\xF3w budowy, zwi\u0105zanych z konstrukcjami drewnianymi.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci16ZG9sbm9zY2kvYm9oYXRlci16ZG9sbm9zY2kuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterZdolnosciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-zdolnosci',
          templateUrl: './bohater-zdolnosci.component.html',
          styleUrls: ['./bohater-zdolnosci.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater-zestawienie-akcji/bohater-zestawienie-akcji.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/bohater/bohater-zestawienie-akcji/bohater-zestawienie-akcji.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: BohaterZestawienieAkcjiComponent */

  /***/
  function srcAppBohaterBohaterZestawienieAkcjiBohaterZestawienieAkcjiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterZestawienieAkcjiComponent", function () {
      return BohaterZestawienieAkcjiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BohaterZestawienieAkcjiComponent = /*#__PURE__*/function () {
      function BohaterZestawienieAkcjiComponent() {
        _classCallCheck(this, BohaterZestawienieAkcjiComponent);
      }

      _createClass(BohaterZestawienieAkcjiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterZestawienieAkcjiComponent;
    }();

    BohaterZestawienieAkcjiComponent.ɵfac = function BohaterZestawienieAkcjiComponent_Factory(t) {
      return new (t || BohaterZestawienieAkcjiComponent)();
    };

    BohaterZestawienieAkcjiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterZestawienieAkcjiComponent,
      selectors: [["app-bohater-zestawienie-akcji"]],
      decls: 108,
      vars: 0,
      consts: [[1, "table", "text-center", "table-sm"], [1, "thead-dark"], ["colspan", "4"]],
      template: function BohaterZestawienieAkcjiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zestawienie akcji");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Akcje podstawowe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Typ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Akcje z\u0142o\u017Cone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Typ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Atak wielokrotny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bieg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Odwr\xF3t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Finta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prze\u0142adowanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "R\xF3\u017Cnie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Odepchni\u0119cie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ruch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Op\xF3\u017Anienie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Rzucanie zakl\u0119cia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "R\xF3\u017Cnie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Ostro\u017Cny atak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Szar\u017Ca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Parowanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "U\u017Cycie przedmiotu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Pozycja obronna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Wstawanie/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Dosiadanie wierzchowca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Skok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Wycelowanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Szale\u0144czy atak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Akcja podw\xF3jna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Wykorzystanie umiej\u0119tno\u015Bci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "R\xF3\u017Cnie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Zwyk\u0142y atak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Akcja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci16ZXN0YXdpZW5pZS1ha2NqaS9ib2hhdGVyLXplc3Rhd2llbmllLWFrY2ppLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterZestawienieAkcjiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater-zestawienie-akcji',
          templateUrl: './bohater-zestawienie-akcji.component.html',
          styleUrls: ['./bohater-zestawienie-akcji.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/bohater.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/bohater/bohater.component.ts ***!
    \**********************************************/

  /*! exports provided: BohaterComponent */

  /***/
  function srcAppBohaterBohaterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterComponent", function () {
      return BohaterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bohater-bohater/bohater-bohater.component */
    "./src/app/bohater/bohater-bohater/bohater-bohater.component.ts");
    /* harmony import */


    var _bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bohater-cechy/bohater-cechy.component */
    "./src/app/bohater/bohater-cechy/bohater-cechy.component.ts");
    /* harmony import */


    var _bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bohater-umiejetnosci/bohater-umiejetnosci.component */
    "./src/app/bohater/bohater-umiejetnosci/bohater-umiejetnosci.component.ts");
    /* harmony import */


    var _bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bohater-zdolnosci/bohater-zdolnosci.component */
    "./src/app/bohater/bohater-zdolnosci/bohater-zdolnosci.component.ts");
    /* harmony import */


    var _bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bohater-wyposarzenie/bohater-wyposarzenie.component */
    "./src/app/bohater/bohater-wyposarzenie/bohater-wyposarzenie.component.ts");
    /* harmony import */


    var _bohater_pieniadze_bohater_pieniadze_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bohater-pieniadze/bohater-pieniadze.component */
    "./src/app/bohater/bohater-pieniadze/bohater-pieniadze.component.ts");
    /* harmony import */


    var _bohater_ruch_w_walce_bohater_ruch_w_walce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bohater-ruch-w-walce/bohater-ruch-w-walce.component */
    "./src/app/bohater/bohater-ruch-w-walce/bohater-ruch-w-walce.component.ts");
    /* harmony import */


    var _bohater_zestawienie_akcji_bohater_zestawienie_akcji_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./bohater-zestawienie-akcji/bohater-zestawienie-akcji.component */
    "./src/app/bohater/bohater-zestawienie-akcji/bohater-zestawienie-akcji.component.ts");

    var BohaterComponent = /*#__PURE__*/function () {
      function BohaterComponent() {
        _classCallCheck(this, BohaterComponent);
      }

      _createClass(BohaterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterComponent;
    }();

    BohaterComponent.ɵfac = function BohaterComponent_Factory(t) {
      return new (t || BohaterComponent)();
    };

    BohaterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterComponent,
      selectors: [["app-bohater"]],
      decls: 16,
      vars: 0,
      consts: [[1, "container", "bohater"], [1, "row"], [1, "col-12", "col-lg-6", "my-1"]],
      template: function BohaterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-bohater-bohater");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-bohater-cechy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-bohater-umiejetnosci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-bohater-zdolnosci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-bohater-wyposarzenie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-bohater-pieniadze");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-bohater-ruch-w-walce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-bohater-zestawienie-akcji");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_1__["BohaterBohaterComponent"], _bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_2__["BohaterCechyComponent"], _bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_3__["BohaterUmiejetnosciComponent"], _bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_4__["BohaterZdolnosciComponent"], _bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_5__["BohaterWyposarzenieComponent"], _bohater_pieniadze_bohater_pieniadze_component__WEBPACK_IMPORTED_MODULE_6__["BohaterPieniadzeComponent"], _bohater_ruch_w_walce_bohater_ruch_w_walce_component__WEBPACK_IMPORTED_MODULE_7__["BohaterRuchWWalceComponent"], _bohater_zestawienie_akcji_bohater_zestawienie_akcji_component__WEBPACK_IMPORTED_MODULE_8__["BohaterZestawienieAkcjiComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvYm9oYXRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bohater',
          templateUrl: './bohater.component.html',
          styleUrls: ['./bohater.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/service/bohater-logika.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/bohater/service/bohater-logika.service.ts ***!
    \***********************************************************/

  /*! exports provided: BohaterLogikaService */

  /***/
  function srcAppBohaterServiceBohaterLogikaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BohaterLogikaService", function () {
      return BohaterLogikaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BohaterLogikaService = /*#__PURE__*/function () {
      function BohaterLogikaService() {
        _classCallCheck(this, BohaterLogikaService);
      } // pobranie listy ras


      _createClass(BohaterLogikaService, [{
        key: "getListaRasy",
        value: function getListaRasy() {
          var items = getMockRasy();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
        } // pobieranie listy profesji dla wybranej rasy

      }, {
        key: "getListaProfesje",
        value: function getListaProfesje(rasa) {
          if (rasa === 'Człowiek') {
            var items = getMockProfesjeCzlowiek();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
          } else if (rasa === 'Krasnolud') {
            var _items = getMockProfesjeKrasnolud();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items);
          } else if (rasa === 'Elf') {
            var _items2 = getMockProfesjeElf();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items2);
          } else if (rasa === 'Niziołek') {
            var _items3 = getMockProfesjeNiziolek();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items3);
          } else {
            var _items4 = null;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items4);
          }
        }
      }, {
        key: "getProfesja",
        value: function getProfesja(profesja) {
          if (profesja === 'Akolita') {
            var items = getAkolita();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
          } else if (profesja === 'Banita') {
            var _items5 = getBanita();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items5);
          } else if (profesja === 'Berserker z Norski') {
            var _items6 = getberserkerZNorski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items6);
          } else if (profesja === 'Chłop') {
            var _items7 = getChlop();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items7);
          } else if (profesja === 'Ciura obozowa') {
            var _items8 = getCiuraObozowa();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items8);
          } else if (profesja === 'Cyrkowiec') {
            var _items9 = getCyrkowiec();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items9);
          } else if (profesja === 'Cyrulik') {
            var _items10 = getCyrulik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items10);
          } else if (profesja === 'Fanatyk') {
            var _items11 = getFanatyk();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items11);
          } else if (profesja === 'Flisak') {
            var _items12 = getFlisak();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items12);
          } else if (profesja === 'Giermek') {
            var _items13 = getGiermek();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items13);
          } else if (profesja === 'Gladiator') {
            var _items14 = getGladiator();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items14);
          } else if (profesja === 'Goniec') {
            var _items15 = getGoniec();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items15);
          } else if (profesja === 'Górnik') {
            var _items16 = getGornik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items16);
          } else if (profesja === 'Guślarz') {
            var _items17 = getGuslarz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items17);
          } else if (profesja === 'Hiena cmentarna') {
            var _items18 = getHienaCmentarna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items18);
          } else if (profesja === 'Kanciarz') {
            var _items19 = getKanciarz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items19);
          } else if (profesja === 'Kozak kislevski') {
            var _items20 = getKozakKislevski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items20);
          } else if (profesja === 'Leśnik') {
            var _items21 = getLesnik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items21);
          } else if (profesja === 'Łowca') {
            var _items22 = getLowca();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items22);
          } else if (profesja === 'Łowca nagród') {
            var _items23 = getLowcaNagrod();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items23);
          } else if (profesja === 'Mieszczanin') {
            var _items24 = getMieszczanin();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items24);
          } else if (profesja === 'Mytnik') {
            var _items25 = getMytnik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items25);
          } else if (profesja === 'Najemnik') {
            var _items26 = getNajemnik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items26);
          } else if (profesja === 'Ochotnik') {
            var _items27 = getOchotnik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items27);
          } else if (profesja === 'Ochroniarz') {
            var _items28 = getOchroniarz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items28);
          } else if (profesja === 'Oprych') {
            var _items29 = getOprych();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items29);
          } else if (profesja === 'Paź') {
            var _items30 = getPaz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items30);
          } else if (profesja === 'Podżegacz') {
            var _items31 = getPodzegacz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items31);
          } else if (profesja === 'Porywacz zwłok') {
            var _items32 = getPorywaczZwlok();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items32);
          } else if (profesja === 'Posłaniec') {
            var _items33 = getPoslaniec();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items33);
          } else if (profesja === 'Przemytnik') {
            var _items34 = getPrzemytnik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items34);
          } else if (profesja === 'Przepatrywacz') {
            var _items35 = getPrzepatrywacz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items35);
          } else if (profesja === 'Przewoźnik') {
            var _items36 = getPrzewoznik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items36);
          } else if (profesja === 'Rybak') {
            var _items37 = getRybak();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items37);
          } else if (profesja === 'Rzecznik rodu') {
            var _items38 = getRzecznikRodu();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items38);
          } else if (profesja === 'Rzemieślnik') {
            var _items39 = getRzemieslnik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items39);
          } else if (profesja === 'Rzezimieszek') {
            var _items40 = getRzezimieszek();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items40);
          } else if (profesja === 'Skryba') {
            var _items41 = getSkryba();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items41);
          } else if (profesja === 'Sługa') {
            var _items42 = getSluga();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items42);
          } else if (profesja === 'Strażnik') {
            var _items43 = getStraznik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items43);
          } else if (profesja === 'Strażnik dróg') {
            var _items44 = getStraznikDrog();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items44);
          } else if (profesja === 'Strażnik pól') {
            var _items45 = getStraznikPol();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items45);
          } else if (profesja === 'Strażnik więzienny') {
            var _items46 = getStraznikWiezienny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items46);
          } else if (profesja === 'Szczurołap') {
            var _items47 = getSzczurolap();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items47);
          } else if (profesja === 'Szermierz estalijski') {
            var _items48 = getSzermierzEstalijski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items48);
          } else if (profesja === 'Szlachcic') {
            var _items49 = GetSzlachcic();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items49);
          } else if (profesja === 'Śmieciarz') {
            var _items50 = getSmieciarz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items50);
          } else if (profesja === 'Tarczownik') {
            var _items51 = getTarczownik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items51);
          } else if (profesja === 'Uczeń czarodzieja') {
            var _items52 = getUczenCzarodzieja();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items52);
          } else if (profesja === 'Węglarz') {
            var _items53 = getWeglarz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items53);
          } else if (profesja === 'Włóczykij') {
            var _items54 = getWloczykij();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items54);
          } else if (profesja === 'Wojownik klanowy') {
            var _items55 = getWojownikKlanowy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items55);
          } else if (profesja === 'Woźnica') {
            var _items56 = getWoznica();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items56);
          } else if (profesja === 'Zabójca trolli') {
            var _items57 = getZabojcaTrolli();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items57);
          } else if (profesja === 'Zarządca') {
            var _items58 = getZarzadca();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items58);
          } else if (profesja === 'Złodziej') {
            var _items59 = getZlodziej();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items59);
          } else if (profesja === 'Żak') {
            var _items60 = getZak();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items60);
          } else if (profesja === 'Żeglarz') {
            var _items61 = getZeglarz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items61);
          } else if (profesja === 'Żołnierz') {
            var _items62 = getZolnierz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items62);
          } else if (profesja === 'Żołnierz okrętowy') {
            var _items63 = getZolnierzOkretowy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items63);
          }
        }
      }, {
        key: "getUmiejetnosci",
        value: function getUmiejetnosci(umiejetnosc) {
          if (umiejetnosc === 'Brzuchomówstwo') {
            var items = getBrzuchomowstwo();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
          } else if (umiejetnosc === 'Charakteryzacja') {
            var _items64 = getCharakteryzacja();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items64);
          } else if (umiejetnosc === 'Czytanie i pisanie') {
            var _items65 = getCzytanieiPisanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items65);
          } else if (umiejetnosc === 'Czytanie z warg') {
            var _items66 = getCzytaniezWarg();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items66);
          } else if (umiejetnosc === 'Dowodzenie') {
            var _items67 = getDowodzenie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items67);
          } else if (umiejetnosc === 'Gadanina') {
            var _items68 = getGadanina();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items68);
          } else if (umiejetnosc === 'Hazard') {
            var _items69 = getHazard();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items69);
          } else if (umiejetnosc === 'Hipnoza') {
            var _items70 = getHipnoza();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items70);
          } else if (umiejetnosc === 'Jeździectwo') {
            var _items71 = getJezdziectwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items71);
          } else if (umiejetnosc === 'Język tajemny(magiczny)') {
            var _items72 = getJezykTajemnyMagiczny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items72);
          } else if (umiejetnosc === 'Kuglarstwo(akrobatyka)') {
            var _items73 = getKuglarstwoAkrobatyka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items73);
          } else if (umiejetnosc === 'Kuglarstwo(aktorstwo)') {
            var _items74 = getKuglarstwoAktorstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items74);
          } else if (umiejetnosc === 'Kuglarstwo(błaznowanie)') {
            var _items75 = getKuglarstwoBlaznowanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items75);
          } else if (umiejetnosc === 'Kuglarstwo(gawędziarstwo)') {
            var _items76 = getKuglarstwoGawedziarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items76);
          } else if (umiejetnosc === 'Kuglarstwo(komedianctwo)') {
            var _items77 = getKuglarstwoKomedianctwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items77);
          } else if (umiejetnosc === 'Kuglarstwo(mimika)') {
            var _items78 = getKuglarstwoMimika();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items78);
          } else if (umiejetnosc === 'Kuglarstwo(muzykalność)') {
            var _items79 = getKuglarstwoMuzykalnosc();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items79);
          } else if (umiejetnosc === 'Kuglarstwo(połykanie ognia)') {
            var _items80 = getKuglarstwoPolykanieOgnia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items80);
          } else if (umiejetnosc === 'Kuglarstwo(śpiew)') {
            var _items81 = getKuglarstwoSpiew();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items81);
          } else if (umiejetnosc === 'Kuglarstwo(taniec)') {
            var _items82 = getKuglarstwoTaniec();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items82);
          } else if (umiejetnosc === 'Kuglarstwo(wróżenie z dłoni)') {
            var _items83 = getKuglarstwoWrozenieZDloni();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items83);
          } else if (umiejetnosc === 'Kuglarstwo(żonglerka)') {
            var _items84 = getKuglarstwoZonglerka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items84);
          } else if (umiejetnosc === 'Leczenie') {
            var _items85 = getLeczenie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items85);
          } else if (umiejetnosc === 'Mocna głowa') {
            var _items86 = getMocnaGlowa();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items86);
          } else if (umiejetnosc === 'Nauka(alchemia)') {
            var _items87 = getNaukaAlchemia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items87);
          } else if (umiejetnosc === 'Nauka(astronomia)') {
            var _items88 = getNaukaAstronomia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items88);
          } else if (umiejetnosc === 'Nauka(anatomia)') {
            var _items89 = getNaukaAnatomia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items89);
          } else if (umiejetnosc === 'Nauka(demonologia)') {
            var _items90 = getNaukaDemonologia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items90);
          } else if (umiejetnosc === 'Nauka(filozofia)') {
            var _items91 = getNaukaFilozofia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items91);
          } else if (umiejetnosc === 'Nauka(historia)') {
            var _items92 = getNaukaHistoria();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items92);
          } else if (umiejetnosc === 'Nauka(inżynieria)') {
            var _items93 = getNaukaInzynieria();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items93);
          } else if (umiejetnosc === 'Nauka(magia)') {
            var _items94 = getNaukaMagia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items94);
          } else if (umiejetnosc === 'Nauka(genealogia/heraldyka)') {
            var _items95 = getNaukaGenealogiaHeraldyka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items95);
          } else if (umiejetnosc === 'Nauka(matematyka)') {
            var _items96 = getNaukaMatematyka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items96);
          } else if (umiejetnosc === 'Nauka(nekromancja)') {
            var _items97 = getNaukaNekromancja();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items97);
          } else if (umiejetnosc === 'Nauka(prawo)') {
            var _items98 = getNaukaPrawo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items98);
          } else if (umiejetnosc === 'Nauka(runy)') {
            var _items99 = getNaukaRuny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items99);
          } else if (umiejetnosc === 'Nauka(strategia/taktyka)') {
            var _items100 = getNaukaStrategiaTaktyka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items100);
          } else if (umiejetnosc === 'Nauka(sztuka)') {
            var _items101 = getNaukaSztuka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items101);
          } else if (umiejetnosc === 'Nauka(teologia)') {
            var _items102 = getNaukaTeologia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items102);
          } else if (umiejetnosc === 'Nawigacja') {
            var _items103 = getNawigacja();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items103);
          } else if (umiejetnosc === 'Opieka nad zwierzętami') {
            var _items104 = getOpiekaNadZwierzetami();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items104);
          } else if (umiejetnosc === 'Oswajanie') {
            var _items105 = getOswajanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items105);
          } else if (umiejetnosc === 'Otwieranie zamków') {
            var _items106 = getOtwieranieZamkow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items106);
          } else if (umiejetnosc === 'Plotkowanie') {
            var _items107 = getPlotkowanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items107);
          } else if (umiejetnosc === 'Pływanie') {
            var _items108 = getPlywanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items108);
          } else if (umiejetnosc === 'Powożenie') {
            var _items109 = getPowozenie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items109);
          } else if (umiejetnosc === 'Przekonywanie') {
            var _items110 = getPrzekonywanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items110);
          } else if (umiejetnosc === 'Przeszukiwanie') {
            var _items111 = getPrzeszukiwanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items111);
          } else if (umiejetnosc === 'Rzemiosło(aptekarstwo)') {
            var _items112 = getRzemiosloAptekarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items112);
          } else if (umiejetnosc === 'Rzemiosło(bednarstwo)') {
            var _items113 = getRzemiosloBednarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items113);
          } else if (umiejetnosc === 'Rzemiosło(garbarstwo)') {
            var _items114 = getRzemiosloGarbarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items114);
          } else if (umiejetnosc === 'Rzemiosło(gotowanie)') {
            var _items115 = getRzemiosloGotowanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items115);
          } else if (umiejetnosc === 'Rzemiosło(górnictwo)') {
            var _items116 = getRzemiosloGornictwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items116);
          } else if (umiejetnosc === 'Rzemiosło(górnictwo odkrywkowe)') {
            var _items117 = getRzemiosloGornictwoOdkrywkowe();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items117);
          } else if (umiejetnosc === 'Rzemiosło(handel)') {
            var _items118 = getRzemiosloHandel();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items118);
          } else if (umiejetnosc === 'Rzemiosło(jubilerstwo)') {
            var _items119 = getRzemiosloJubilerstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items119);
          } else if (umiejetnosc === 'Rzemiosło(kaligrafia)') {
            var _items120 = getRzemiosloKaligrafia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items120);
          } else if (umiejetnosc === 'Rzemiosło(kamieniarstwo)') {
            var _items121 = getRzemiosloKamieniarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items121);
          } else if (umiejetnosc === 'Rzemiosło(kartografia)') {
            var _items122 = getRzemiosloKartografia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items122);
          } else if (umiejetnosc === 'Rzemiosło(kowalstwo)') {
            var _items123 = getRzemiosloKowalstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items123);
          } else if (umiejetnosc === 'Rzemiosło(krawiectwo)') {
            var _items124 = getRzemiosloKrawiectwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items124);
          } else if (umiejetnosc === 'Rzemiosło(młynarstwo)') {
            var _items125 = getRzemiosloMlynarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items125);
          } else if (umiejetnosc === 'Rzemiosło(piwowarstwo)') {
            var _items126 = getRzemiosloPiwowarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items126);
          } else if (umiejetnosc === 'Rzemiosło(płatnerstwo)') {
            var _items127 = getRzemiosloPlatnerstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items127);
          } else if (umiejetnosc === 'Rzemiosło(rusznikarstwo)') {
            var _items128 = getRzemiosloRusznikarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items128);
          } else if (umiejetnosc === 'Rzemiosło(rymarstwo)') {
            var _items129 = getRzemiosloRymarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items129);
          } else if (umiejetnosc === 'Rzemiosło(szewstwo)') {
            var _items130 = getRzemiosloSzewstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items130);
          } else if (umiejetnosc === 'Rzemiosło(stolarstwo)') {
            var _items131 = getRzemiosloStolarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items131);
          } else if (umiejetnosc === 'Rzemiosło(szkutnictwo)') {
            var _items132 = getRzemiosloSzkutnictwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items132);
          } else if (umiejetnosc === 'Rzemiosło(sztuka)') {
            var _items133 = getRzemiosloSztuka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items133);
          } else if (umiejetnosc === 'Rzemiosło(świecarstwo)') {
            var _items134 = getRzemiosloSwiecarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items134);
          } else if (umiejetnosc === 'Rzemiosło(uprawa ziemi)') {
            var _items135 = getRzemiosloUprawaZiemi();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items135);
          } else if (umiejetnosc === 'Rzemiosło(wyrób łuków)') {
            var _items136 = getRzemiosloWyrobLukow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items136);
          } else if (umiejetnosc === 'Rzemiosło(zielarstwo)') {
            var _items137 = getRzemiosloZielarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items137);
          } else if (umiejetnosc === 'Rzemiosło(złotnictwo)') {
            var _items138 = getRzemiosloZlotnictwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items138);
          } else if (umiejetnosc === 'Sekretne znaki(łowców)') {
            var _items139 = getSekretneZnakiLowcow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items139);
          } else if (umiejetnosc === 'Sekretne znaki(rycerzy zakonnych)') {
            var _items140 = getSekretneZnakiRycerzyZakonnych();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items140);
          } else if (umiejetnosc === 'Sekretne znaki(złodziei)') {
            var _items141 = getSekretneZnakiZlodziei();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items141);
          } else if (umiejetnosc === 'Sekretne znaki(zwiadowców)') {
            var _items142 = getSekretneZnakiZwiadowcow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items142);
          } else if (umiejetnosc === 'Sekretny język(bitewny)') {
            var _items143 = getSekretnyJezykBitewny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items143);
          } else if (umiejetnosc === 'Sekretny język(gildii)') {
            var _items144 = getSekretnyJezykGildii();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items144);
          } else if (umiejetnosc === 'Sekretny język(łowców)') {
            var _items145 = getSekretnyJezykLowcow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items145);
          } else if (umiejetnosc === 'Sekretny język(złodziejski)') {
            var _items146 = getSekretnyJezykZlodziejski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items146);
          } else if (umiejetnosc === 'Skradanie się') {
            var _items147 = getSkradanieSie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items147);
          } else if (umiejetnosc === 'Splatanie magii') {
            var _items148 = getSplatanieMagii();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items148);
          } else if (umiejetnosc === 'Spostrzegawczość') {
            var _items149 = getSpostrzegawczosc();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items149);
          } else if (umiejetnosc === 'Sztuka przetrwania') {
            var _items150 = getSztukaPrzetrwania();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items150);
          } else if (umiejetnosc === 'Śledzenie') {
            var _items151 = getSledzenie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items151);
          } else if (umiejetnosc === 'Targowanie') {
            var _items152 = getTargowanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items152);
          } else if (umiejetnosc === 'Torturowanie') {
            var _items153 = getTorturowanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items153);
          } else if (umiejetnosc === 'Tresura') {
            var _items154 = getTresura();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items154);
          } else if (umiejetnosc === 'Tropienie') {
            var _items155 = getTropienie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items155);
          } else if (umiejetnosc === 'Ukrywanie się') {
            var _items156 = getUkrywanieSie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items156);
          } else if (umiejetnosc === 'Unik') {
            var _items157 = getUnik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items157);
          } else if (umiejetnosc === 'Warzenie trucizn') {
            var _items158 = getWarzenieTrucizn();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items158);
          } else if (umiejetnosc === 'Wiedza(bretonia)') {
            var _items159 = getWiedzaBretonia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items159);
          } else if (umiejetnosc === 'Wiedza(estalia)') {
            var _items160 = getWiedzaEstalia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items160);
          } else if (umiejetnosc === 'Wiedza(imperium)') {
            var _items161 = getWiedzaImperium();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items161);
          } else if (umiejetnosc === 'Wiedza(jałowa kraina)') {
            var _items162 = getWiedzaJalowaKraina();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items162);
          } else if (umiejetnosc === 'Wiedza(kislev)') {
            var _items163 = getWiedzaKislev();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items163);
          } else if (umiejetnosc === 'Wiedza(księstwa graniczne)') {
            var _items164 = getWiedzaKsiestwaGraniczne();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items164);
          } else if (umiejetnosc === 'Wiedza(norska)') {
            var _items165 = getWiedzaNorska();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items165);
          } else if (umiejetnosc === 'Wiedza(tilea)') {
            var _items166 = getWiedzaTilea();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items166);
          } else if (umiejetnosc === 'Wiedza(elfy)') {
            var _items167 = getWiedzaElfy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items167);
          } else if (umiejetnosc === 'Wiedza(krasnoludy)') {
            var _items168 = getWiedzaKrasnoludy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items168);
          } else if (umiejetnosc === 'Wiedza(niziołki)') {
            var _items169 = getWiedzaNiziolki();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items169);
          } else if (umiejetnosc === 'Wiedza(ogry)') {
            var _items170 = getWiedzaOgry();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items170);
          } else if (umiejetnosc === 'Wioślarstwo') {
            var _items171 = getWioślarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items171);
          } else if (umiejetnosc === 'Wspinaczka') {
            var _items172 = getWspinaczka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items172);
          } else if (umiejetnosc === 'Wycena') {
            var _items173 = getWycena();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items173);
          } else if (umiejetnosc === 'Wykrywanie magii') {
            var _items174 = getWykrywanieMagii();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items174);
          } else if (umiejetnosc === 'Zastawianie pułapek') {
            var _items175 = getZastawaniePulapek();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items175);
          } else if (umiejetnosc === 'Zastraszanie') {
            var _items176 = getZastraszanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items176);
          } else if (umiejetnosc === 'Znajomość języka(bretoński)') {
            var _items177 = getZnajomoscJezykaBretonski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items177);
          } else if (umiejetnosc === 'Znajomość języka(eltharin)') {
            var _items178 = getZnajomoscjezykaEltharin();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items178);
          } else if (umiejetnosc === 'Znajomość języka(estalijski)') {
            var _items179 = getZnajomoscjezykaEstalisjki();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items179);
          } else if (umiejetnosc === 'Znajomość języka(khazalid)') {
            var _items180 = getZnajomoscjezykaKhazaldin();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items180);
          } else if (umiejetnosc === 'Znajomość języka(kislevski)') {
            var _items181 = getZnajomoscjezykaKislevski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items181);
          } else if (umiejetnosc === 'Znajomość języka(norski)') {
            var _items182 = getZnajomoscjezykaNorski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items182);
          } else if (umiejetnosc === 'Znajomość języka(tileański)') {
            var _items183 = getZnajomoscjezykaTileanski();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items183);
          } else if (umiejetnosc === 'Znajomość języka(klasyczny)') {
            var _items184 = getZnajomoscJezykaKlasyczny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items184);
          } else if (umiejetnosc === 'Znajomość języka(staroświatowy)') {
            var _items185 = getZnajomoscJezykaStaroswiatowy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items185);
          } else if (umiejetnosc === 'Znajomość języka(niziołków)') {
            var _items186 = getZnajomoscjezykaNiziolkow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items186);
          } else if (umiejetnosc === 'Zwinne palce') {
            var _items187 = getZwinnePalce();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items187);
          } else if (umiejetnosc === 'Żeglarstwo') {
            var _items188 = getZeglarstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items188);
          }
        }
      }]);

      return BohaterLogikaService;
    }();

    BohaterLogikaService.ɵfac = function BohaterLogikaService_Factory(t) {
      return new (t || BohaterLogikaService)();
    };

    BohaterLogikaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BohaterLogikaService,
      factory: BohaterLogikaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BohaterLogikaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })(); // rasy


    function getMockRasy() {
      return [{
        rasatitle: 'Człowiek',
        WW: 20,
        US: 20,
        K: 20,
        Odp: 20,
        Zr: 20,
        Int: 20,
        SW: 20,
        Ogd: 20,
        Sz: 4,
        umiejetnosci: ['Plotkowanie', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)']
      }, {
        rasatitle: 'Krasnolud',
        WW: 30,
        US: 20,
        K: 20,
        Odp: 30,
        Zr: 10,
        Int: 20,
        SW: 20,
        Ogd: 10,
        Sz: 3,
        umiejetnosci: ['Znajomość języka(khazalid)', 'Wiedza(krasnoludy)', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciRasy: [['Rzemiosło(górnictwo)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kowalstwo)']]
      }, {
        rasatitle: 'Elf',
        WW: 20,
        US: 30,
        K: 20,
        Odp: 20,
        Zr: 30,
        Int: 20,
        SW: 20,
        Ogd: 20,
        Sz: 5,
        umiejetnosci: ['Wiedza(elfy)', 'Znajomość języka(eltharin)', 'Znajomość języka(staroświatowy)']
      }, {
        rasatitle: 'Niziołek',
        WW: 10,
        US: 30,
        K: 10,
        Odp: 10,
        Zr: 30,
        Int: 20,
        SW: 20,
        Ogd: 30,
        Sz: 4,
        umiejetnosci: ['Plotkowanie', 'Znajomość języka(staroświatowy)', 'Wiedza(niziołki)', 'Znajomość języka(niziołków)', 'Nauka(genealogia/heraldyka)'],
        wyborUmiejetnosciRasy: [['Rzemiosło(gotowanie)', 'Rzemiosło(uprawa ziemi)']]
      }];
    }

    function getMockProfesjeCzlowiek() {
      return [{
        profesjatitle: 'Akolita',
        rollmin: 1,
        rollmax: 2
      }, {
        profesjatitle: 'Banita',
        rollmin: 3,
        rollmax: 4
      }, {
        profesjatitle: 'Berserker z Norski',
        rollmin: 5,
        rollmax: 5
      }, {
        profesjatitle: 'Chłop',
        rollmin: 6,
        rollmax: 7
      }, {
        profesjatitle: 'Ciura obozowa',
        rollmin: 8,
        rollmax: 9
      }, {
        profesjatitle: 'Cyrkowiec',
        rollmin: 10,
        rollmax: 11
      }, {
        profesjatitle: 'Cyrulik',
        rollmin: 12,
        rollmax: 12
      }, {
        profesjatitle: 'Fanatyk',
        rollmin: 13,
        rollmax: 14
      }, {
        profesjatitle: 'Flisak',
        rollmin: 15,
        rollmax: 16
      }, {
        profesjatitle: 'Giermek',
        rollmin: 17,
        rollmax: 18
      }, {
        profesjatitle: 'Gladiator',
        rollmin: 19,
        rollmax: 20
      }, {
        profesjatitle: 'Górnik',
        rollmin: 21,
        rollmax: 22
      }, {
        profesjatitle: 'Guślarz',
        rollmin: 23,
        rollmax: 23
      }, {
        profesjatitle: 'Hiena cmentarna',
        rollmin: 24,
        rollmax: 25
      }, {
        profesjatitle: 'Kanciarz',
        rollmin: 26,
        rollmax: 27
      }, {
        profesjatitle: 'Kozak kislevski',
        rollmin: 28,
        rollmax: 28
      }, {
        profesjatitle: 'Leśnik',
        rollmin: 29,
        rollmax: 30
      }, {
        profesjatitle: 'Łowca',
        rollmin: 31,
        rollmax: 32
      }, {
        profesjatitle: 'Łowca nagród',
        rollmin: 33,
        rollmax: 34
      }, {
        profesjatitle: 'Mieszczanin',
        rollmin: 35,
        rollmax: 36
      }, {
        profesjatitle: 'Mytnik',
        rollmin: 37,
        rollmax: 38
      }, {
        profesjatitle: 'Najemnik',
        rollmin: 39,
        rollmax: 40
      }, {
        profesjatitle: 'Ochotnik',
        rollmin: 41,
        rollmax: 42
      }, {
        profesjatitle: 'Ochroniarz',
        rollmin: 43,
        rollmax: 44
      }, {
        profesjatitle: 'Oprych',
        rollmin: 45,
        rollmax: 46
      }, {
        profesjatitle: 'Paź',
        rollmin: 47,
        rollmax: 48
      }, {
        profesjatitle: 'Podżegacz',
        rollmin: 49,
        rollmax: 50
      }, {
        profesjatitle: 'Porywacz zwłok',
        rollmin: 51,
        rollmax: 52
      }, {
        profesjatitle: 'Posłaniec',
        rollmin: 53,
        rollmax: 54
      }, {
        profesjatitle: 'Przemytnik',
        rollmin: 55,
        rollmax: 56
      }, {
        profesjatitle: 'Przepatrywacz',
        rollmin: 57,
        rollmax: 58
      }, {
        profesjatitle: 'Przewoźnik',
        rollmin: 59,
        rollmax: 59
      }, {
        profesjatitle: 'Rybak',
        rollmin: 60,
        rollmax: 61
      }, {
        profesjatitle: 'Rzemieślnik',
        rollmin: 62,
        rollmax: 63
      }, {
        profesjatitle: 'Rzezimieszek',
        rollmin: 64,
        rollmax: 65
      }, {
        profesjatitle: 'Skryba',
        rollmin: 66,
        rollmax: 67
      }, {
        profesjatitle: 'Sługa',
        rollmin: 68,
        rollmax: 69
      }, {
        profesjatitle: 'Strażnik',
        rollmin: 70,
        rollmax: 71
      }, {
        profesjatitle: 'Strażnik dróg',
        rollmin: 72,
        rollmax: 73
      }, {
        profesjatitle: 'Strażnik więzienny',
        rollmin: 74,
        rollmax: 74
      }, {
        profesjatitle: 'Szczurołap',
        rollmin: 75,
        rollmax: 76
      }, {
        profesjatitle: 'Szermierz estalijski',
        rollmin: 77,
        rollmax: 77
      }, {
        profesjatitle: 'Szlachcic',
        rollmin: 78,
        rollmax: 79
      }, {
        profesjatitle: 'Śmieciarz',
        rollmin: 80,
        rollmax: 81
      }, {
        profesjatitle: 'Uczeń czarodzieja',
        rollmin: 82,
        rollmax: 83
      }, {
        profesjatitle: 'Węglarz',
        rollmin: 84,
        rollmax: 85
      }, {
        profesjatitle: 'Włóczykij',
        rollmin: 86,
        rollmax: 87
      }, {
        profesjatitle: 'Woźnica',
        rollmin: 88,
        rollmax: 89
      }, {
        profesjatitle: 'Zarządca',
        rollmin: 90,
        rollmax: 90
      }, {
        profesjatitle: 'Złodziej',
        rollmin: 91,
        rollmax: 92
      }, {
        profesjatitle: 'Żak',
        rollmin: 93,
        rollmax: 94
      }, {
        profesjatitle: 'Żeglarz',
        rollmin: 95,
        rollmax: 96
      }, {
        profesjatitle: 'Żołnierz',
        rollmin: 97,
        rollmax: 98
      }, {
        profesjatitle: 'Żołnierz okrętowy',
        rollmin: 99,
        rollmax: 100
      }];
    }

    function getMockProfesjeKrasnolud() {
      return [{
        profesjatitle: 'Banita',
        rollmin: 1,
        rollmax: 3
      }, {
        profesjatitle: 'Cyrkowiec',
        rollmin: 4,
        rollmax: 6
      }, {
        profesjatitle: 'Gladiator',
        rollmin: 7,
        rollmax: 11
      }, {
        profesjatitle: 'Goniec',
        rollmin: 12,
        rollmax: 16
      }, {
        profesjatitle: 'Górnik',
        rollmin: 17,
        rollmax: 22
      }, {
        profesjatitle: 'Hiena cmentarna',
        rollmin: 23,
        rollmax: 25
      }, {
        profesjatitle: 'Łowca',
        rollmin: 26,
        rollmax: 29
      }, {
        profesjatitle: 'Mieszczanin',
        rollmin: 30,
        rollmax: 33
      }, {
        profesjatitle: 'Mytnik',
        rollmin: 34,
        rollmax: 36
      }, {
        profesjatitle: 'Najemnik',
        rollmin: 37,
        rollmax: 42
      }, {
        profesjatitle: 'Ochotnik',
        rollmin: 43,
        rollmax: 46
      }, {
        profesjatitle: 'Ochroniarz',
        rollmin: 47,
        rollmax: 50
      }, {
        profesjatitle: 'Podżegacz',
        rollmin: 51,
        rollmax: 52
      }, {
        profesjatitle: 'Przemytnik',
        rollmin: 53,
        rollmax: 55
      }, {
        profesjatitle: 'Rzemieślnik',
        rollmin: 56,
        rollmax: 59
      }, {
        profesjatitle: 'Rzezimieszek',
        rollmin: 60,
        rollmax: 63
      }, {
        profesjatitle: 'Skryba',
        rollmin: 64,
        rollmax: 65
      }, {
        profesjatitle: 'Sługa',
        rollmin: 66,
        rollmax: 67
      }, {
        profesjatitle: 'Strażnik',
        rollmin: 68,
        rollmax: 69
      }, {
        profesjatitle: 'Strażnik więzienny',
        rollmin: 70,
        rollmax: 73
      }, {
        profesjatitle: 'Szczurołap',
        rollmin: 74,
        rollmax: 77
      }, {
        profesjatitle: 'Szlachcic',
        rollmin: 78,
        rollmax: 79
      }, {
        profesjatitle: 'Tarczownik',
        rollmin: 80,
        rollmax: 83
      }, {
        profesjatitle: 'Woźnica',
        rollmin: 84,
        rollmax: 85
      }, {
        profesjatitle: 'Zabójca troli',
        rollmin: 86,
        rollmax: 89
      }, {
        profesjatitle: 'Złodziej',
        rollmin: 90,
        rollmax: 92
      }, {
        profesjatitle: 'Żak',
        rollmin: 93,
        rollmax: 94
      }, {
        profesjatitle: 'Żeglarz',
        rollmin: 95,
        rollmax: 95
      }, {
        profesjatitle: 'Żołnierz',
        rollmin: 96,
        rollmax: 99
      }, {
        profesjatitle: 'Żołnierz okrętowy',
        rollmin: 100,
        rollmax: 100
      }];
    }

    function getMockProfesjeElf() {
      return [{
        profesjatitle: 'Banita',
        rollmin: 1,
        rollmax: 5
      }, {
        profesjatitle: 'Cyrkowiec',
        rollmin: 6,
        rollmax: 10
      }, {
        profesjatitle: 'Kanciarz',
        rollmin: 11,
        rollmax: 16
      }, {
        profesjatitle: 'Łowca',
        rollmin: 17,
        rollmax: 24
      }, {
        profesjatitle: 'Najemnik',
        rollmin: 25,
        rollmax: 29
      }, {
        profesjatitle: 'Paź',
        rollmin: 30,
        rollmax: 31
      }, {
        profesjatitle: 'Posłaniec',
        rollmin: 32,
        rollmax: 37
      }, {
        profesjatitle: 'Przepatrywacz',
        rollmin: 38,
        rollmax: 43
      }, {
        profesjatitle: 'Rzecznik rodu',
        rollmin: 44,
        rollmax: 50
      }, {
        profesjatitle: 'Rzemieślnik',
        rollmin: 51,
        rollmax: 57
      }, {
        profesjatitle: 'Skryba',
        rollmin: 58,
        rollmax: 63
      }, {
        profesjatitle: 'Uczeń czarodzieja',
        rollmin: 64,
        rollmax: 70
      }, {
        profesjatitle: 'Włóczykij',
        rollmin: 71,
        rollmax: 77
      }, {
        profesjatitle: 'Wojownik klanowy',
        rollmin: 78,
        rollmax: 84
      }, {
        profesjatitle: 'Złodziej',
        rollmin: 85,
        rollmax: 90
      }, {
        profesjatitle: 'Żak',
        rollmin: 91,
        rollmax: 95
      }, {
        profesjatitle: 'Żeglarz',
        rollmin: 96,
        rollmax: 100
      }];
    }

    function getMockProfesjeNiziolek() {
      return [{
        profesjatitle: 'Banita',
        rollmin: 1,
        rollmax: 3
      }, {
        profesjatitle: 'Ciura obozowa',
        rollmin: 4,
        rollmax: 5
      }, {
        profesjatitle: 'Cyrkowiec',
        rollmin: 6,
        rollmax: 8
      }, {
        profesjatitle: 'Cyrulik',
        rollmin: 9,
        rollmax: 9
      }, {
        profesjatitle: 'Hiena cmentarna',
        rollmin: 10,
        rollmax: 14
      }, {
        profesjatitle: 'Kanciarz',
        rollmin: 15,
        rollmax: 20
      }, {
        profesjatitle: 'Łowca',
        rollmin: 21,
        rollmax: 25
      }, {
        profesjatitle: 'Łowca nagród',
        rollmin: 26,
        rollmax: 27
      }, {
        profesjatitle: 'Mieszczanin',
        rollmin: 28,
        rollmax: 29
      }, {
        profesjatitle: 'Mytnik',
        rollmin: 30,
        rollmax: 31
      }, {
        profesjatitle: 'Najemnik',
        rollmin: 32,
        rollmax: 35
      }, {
        profesjatitle: 'Ochotnik',
        rollmin: 36,
        rollmax: 40
      }, {
        profesjatitle: 'Paź',
        rollmin: 41,
        rollmax: 42
      }, {
        profesjatitle: 'Podżegacz',
        rollmin: 43,
        rollmax: 45
      }, {
        profesjatitle: 'Porywacz zwłok',
        rollmin: 46,
        rollmax: 48
      }, {
        profesjatitle: 'Posłaniec',
        rollmin: 49,
        rollmax: 53
      }, {
        profesjatitle: 'Przemytnik',
        rollmin: 54,
        rollmax: 56
      }, {
        profesjatitle: 'Przewoźnik',
        rollmin: 57,
        rollmax: 57
      }, {
        profesjatitle: 'Rybak',
        rollmin: 58,
        rollmax: 58
      }, {
        profesjatitle: 'Rzemieślnik',
        rollmin: 59,
        rollmax: 63
      }, {
        profesjatitle: 'Sługa',
        rollmin: 64,
        rollmax: 68
      }, {
        profesjatitle: 'Strażnik',
        rollmin: 69,
        rollmax: 72
      }, {
        profesjatitle: 'Strażnik dróg',
        rollmin: 73,
        rollmax: 74
      }, {
        profesjatitle: 'Strażnik pól',
        rollmin: 75,
        rollmax: 78
      }, {
        profesjatitle: 'Szczurołap',
        rollmin: 79,
        rollmax: 82
      }, {
        profesjatitle: 'Śmieciarz',
        rollmin: 83,
        rollmax: 83
      }, {
        profesjatitle: 'Węglarz',
        rollmin: 84,
        rollmax: 86
      }, {
        profesjatitle: 'Włóczykij',
        rollmin: 87,
        rollmax: 90
      }, {
        profesjatitle: 'Złodziej',
        rollmin: 91,
        rollmax: 96
      }, {
        profesjatitle: 'Żak',
        rollmin: 97,
        rollmax: 98
      }, {
        profesjatitle: 'Żołnierz',
        rollmin: 99,
        rollmax: 100
      }];
    } // profesje


    function getAkolita() {
      return [{
        title: 'Akolita',
        opis: 'W hierarchii wartości mieszkańców Starego Świata religia spadła na drugie miejsce, ustępując bogactwu, ale wciąż jeszcze wielu młodych ludzi obojga płci znajduje w sobie powołanie do służby bożej. Praca kapłana wymaga poświęcenia i determinacji duchowej. Bycie akolitą to pierwszy krok na drodze ku kapłaństwu. Młodzi duchowni przechodzą surowe ćwiczenia pod opieką starszych kapłanów. Do końca nowicjatu nie mogą nauczać ani wygłaszać kazań.Czas spędzają na studiowaniu świętych ksiąg, czytaniu i przepisywaniu manuskryptów oraz na poznawaniu sztuki wzniosłego przemawiania. Akolici uczą się również walki na wypadek, gdyby trzeba było bronić świątyni.',
        // tslint:disable-next-line: max-line-length
        WW: 5,
        US: 5,
        K: 0,
        Odp: 5,
        Zr: 0,
        Int: 10,
        SW: 10,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Leczenie', 'Nauka(teologia)', 'Przekonywanie', 'Spostrzegawczość', 'Znajomość języka(klasyczny)', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Nauka(astronomia)', 'Nauka(historia)']],
        zdolnosci: ['bardzo silny albo szybki refleks', 'charyzmatyczny albo urodzony wojownik', 'przemawianie'],
        wyposazenie: ['szaty kapłańskie', 'symbol boga']
      }];
    }

    function getBanita() {
      return [{
        title: 'Banita',
        opis: 'blelbe',
        WW: 10,
        US: 10,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 5,
        SW: 0,
        Ogd: 0,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Skradanie się', 'Spostrzegawczość', 'Ukrywanie się', 'Unik', 'Wspinaczka'],
        wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Wiedza(imperium)'], ['Plotkowanie', 'Sekretne znaki(złodziei)'], ['Powożenie', 'Jeździectwo'], ['Zastawianie pułapek', 'Pływanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getberserkerZNorski() {
      return [{
        title: 'Berserker z Norski',
        opis: 'blelbe',
        WW: 15,
        US: 0,
        K: 10,
        Odp: 10,
        Zr: 0,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Kuglarstwo(gawędziarstwo)', 'Mocna głowa', 'Pływanie', 'Wiedza(norska)', 'Zastraszanie', 'Znajomość języka(norski)'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getChlop() {
      return [{
        title: 'Chłop',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 5,
        Odp: 10,
        Zr: 5,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Ukrywanie się'],
        wyborUmiejetnosciProfesji: [['Hazard', 'Kuglarstwo(taniec)', 'Kuglarstwo(śpiew)'], ['Opieka nad zwierzętami', 'Przekonywanie'], ['Oswajanie', 'Rzemiosło(gotowanie)'], ['Powożenie', 'Rzemiosło(wyrób łuków)'], ['Sztuka przetrwania', 'Rzemiosło(uprawa ziemi)'], ['Tresura', 'Pływanie'], ['Zastawianie pułapek', 'Wioślarstwo'], ['Wspinaczka', 'Skradanie się']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getCiuraObozowa() {
      return [{
        title: 'Ciura Obozowa',
        opis: 'blelbe',
        WW: 0,
        US: 0,
        K: 0,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Plotkowanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Zwinne palce'],
        wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Powożenie'], ['Przekonywanie', 'Wycena'], ['Rzemiosło(gotowanie)', 'Rzemiosło(handel)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getCyrkowiec() {
      return [{
        title: 'Cyrkowiec',
        opis: 'blelbe',
        WW: 5,
        US: 10,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 0,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Przekonywanie', 'Spostrzegawczość', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)'], ['Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)'], ['Opieka nad zwierzętami', 'Pływanie'], ['Wycena', 'Plotkowanie'], ['Brzuchomówstwo', 'Gadanina', 'Hipnoza', 'Jeździectwo', 'Oswajanie', 'Tresura', 'Wspinaczka', 'Zwinne palce']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getCyrulik() {
      return [{
        title: 'Cyrulik',
        opis: 'blelbe',
        WW: 5,
        US: 0,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 10,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Leczenie', 'Przekonywanie', 'Rzemiosło(aptekarstwo)', 'Spostrzegawczość', 'Targowanie'],
        wyborUmiejetnosciProfesji: [['Powożenie', 'Pływanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)', 'Znajomość języka(tileański)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getFanatyk() {
      return [{
        title: 'Fanatyk',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 5,
        Odp: 10,
        Zr: 0,
        Int: 0,
        SW: 10,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Nauka(teologia)', 'Przekonywanie', 'Wiedza(imperium)', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getFlisak() {
      return [{
        title: 'Flisak',
        opis: 'blelbe',
        WW: 10,
        US: 5,
        K: 5,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 0,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Nawigacja', 'Pływanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Wioślarstwo', 'Żeglarstwo'],
        wyborUmiejetnosciProfesji: [['Mocna głowa', 'Plotkowanie'], ['Sekretny język(łowców)', 'Znajomość języka(kislevski)'], ['Wiedza(imperium)', 'Wiedza(kislev)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getGiermek() {
      return [{
        title: 'Giermek',
        opis: 'blelbe',
        WW: 10,
        US: 5,
        K: 5,
        Odp: 5,
        Zr: 5,
        Int: 0,
        SW: 0,
        Ogd: 5,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Jeździectwo', 'Opieka nad zwierzętami', 'Tresura', 'Unik'],
        wyborUmiejetnosciProfesji: [['Nauka(genealogia/heraldyka)', 'Wiedza(bretonia)'], ['Przekonywanie', 'Plotkowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getGladiator() {
      return [{
        title: 'Gladiator',
        opis: 'blelbe',
        WW: 15,
        US: 0,
        K: 0,
        Odp: 10,
        Zr: 10,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getGoniec() {
      return [{
        title: 'Goniec',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 1,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Nawigacja', 'Pływanie', 'Sekretne znaki(zwiadowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getGornik() {
      return [{
        title: 'Górnik',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 10,
        Odp: 5,
        Zr: 0,
        Int: 5,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Nawigacja', 'Opieka nad zwierzętami', 'Spostrzegawczość', 'Wspinaczka'],
        wyborUmiejetnosciProfesji: [['Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)'], ['Ukrywanie się', 'Powożenie'], ['Wycena', 'Sztuka przetrwania']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getGuslarz() {
      return [{
        title: 'Guślarz',
        opis: 'blelbe',
        WW: 0,
        US: 0,
        K: 0,
        Odp: 5,
        Zr: 5,
        Int: 5,
        SW: 10,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 1,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Przeszukiwanie', 'Splatanie magii', 'Spostrzegawczość', 'Wykrywanie magii'],
        wyborUmiejetnosciProfesji: [['Leczenie', 'Hipnoza'], ['Opieka nad zwierzętami', 'Targowanie'], ['Oswajanie', 'Rzemiosło(aptekarstwo)'], ['Przekonywanie', 'Zastraszanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getHienaCmentarna() {
      return [{
        title: 'Hiena Cmentarna',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 10,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Zastraszanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Wspinaczka', 'Wycena'],
        wyborUmiejetnosciProfesji: [['Otwieranie zamków', 'Skradanie się'], ['Ukrywanie się', 'Sztuka przetrwania'], ['Wiedza(imperium)', 'Sekretne znaki(złodziei)'], ['Znajomość języka(eltharin)', 'Znajomość języka(khazalid)', 'Znajomość języka(klasyczny)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getKanciarz() {
      return [{
        title: 'Kanciarz',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 5,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Gadanina', 'Przekonywanie', 'Spostrzegawczość', 'Wycena', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Hazard', 'Sekretne znaki(złodziei)'], ['Kuglarstwo(aktorstwo)', 'Kuglarstwo(gawędziarstwo)'], ['Plotkowanie', 'Targowanie'], ['Przeszukiwanie', 'Sekretny język(złodziejski)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getKozakKislevski() {
      return [{
        title: 'Koza kislevski',
        opis: 'blelbe',
        WW: 10,
        US: 10,
        K: 0,
        Odp: 10,
        Zr: 0,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Mocna głowa', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik', 'Wiedza(kislev)', 'Znajomość języka(kislevski)'],
        wyborUmiejetnosciProfesji: [['Hazard', 'Targowanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getLesnik() {
      return [{
        title: 'Leśnik',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 10,
        Odp: 0,
        Zr: 5,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 3,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Sekretne znaki(łowców)', 'Sekretny język(łowców)', 'Skradanie się', 'Spostrzegawczość', 'Ukrywanie się', 'Wspinaczka'],
        wyborUmiejetnosciProfesji: [['Tropienie', 'Zastawianie pułapek']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getLowca() {
      return [{
        title: 'Łowca',
        opis: 'blelbe',
        WW: 0,
        US: 15,
        K: 0,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 0,
        Ogd: 0,
        A: 0,
        Zyw: 3,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Sekretne znaki(łowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się'],
        wyborUmiejetnosciProfesji: [['Przeszukiwanie', 'Pływanie'], ['Skradanie się', 'Zastawianie pułapek']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getLowcaNagrod() {
      return [{
        title: 'Łowca Nagród',
        opis: 'blelbe',
        WW: 5,
        US: 10,
        K: 5,
        Odp: 0,
        Zr: 10,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Śledzenie', 'Tropienie', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getMieszczanin() {
      return [{
        title: 'Mieszczanin',
        opis: 'blelbe',
        WW: 5,
        US: 0,
        K: 0,
        Odp: 0,
        Zr: 5,
        Int: 10,
        SW: 5,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wycena', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Czytanie i pisanie'], ['Wiedza(imperium)', 'Mocna głowa'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getMytnik() {
      return [{
        title: 'Mytnik',
        opis: 'blelbe',
        WW: 10,
        US: 5,
        K: 5,
        Odp: 10,
        Zr: 5,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Unik', 'Wycena'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getNajemnik() {
      return [{
        title: 'Najemnik',
        opis: 'blelbe',
        WW: 10,
        US: 10,
        K: 5,
        Odp: 5,
        Zr: 5,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Sekretny język(bitewny)', 'Unik'],
        wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Hazard'], ['Plotkowanie', 'Targowanie'], ['Powożenie', 'Jeździectwo'], ['Spostrzegawczość', 'Przeszukiwanie'], ['Wiedza(bretonia)', 'Wiedza(kislev)', 'Wiedza(tilea)'], ['Znajomość języka(tileański)', 'Pływanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getOchotnik() {
      return [{
        title: 'Ochotnik',
        opis: 'blelbe',
        WW: 10,
        US: 5,
        K: 5,
        Odp: 5,
        Zr: 10,
        Int: 0,
        SW: 0,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Opieka nad zwierzętami', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik'],
        wyborUmiejetnosciProfesji: [['Hazard', 'Plotkowanie'], ['Powożenie', 'Pływanie'], ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getOchroniarz() {
      return [{
        title: 'Ochroniarz',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 5,
        Int: 0,
        SW: 0,
        Ogd: 0,
        A: 1,
        Zyw: 3,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Leczenie', 'Spostrzegawczość', 'Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getOprych() {
      return [{
        title: 'Oprych',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 0,
        Int: 0,
        SW: 5,
        Ogd: 5,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Hazard', 'Mocna głowa', 'Sekretny język(złodziejski)', 'Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getPaz() {
      return [{
        title: 'Paź',
        opis: 'blelbe',
        WW: 0,
        US: 0,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Gadanina', 'Nauka(genealogia/heraldyka)', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getPodzegacz() {
      return [{
        title: 'Podżegacz',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 0,
        Odp: 0,
        Zr: 5,
        Int: 10,
        SW: 0,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Przekonywanie', 'Spostrzegawczość', 'Ukrywanie się', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Nauka(historia)', 'Plotkowanie'], ['Nauka(prawo)', 'Wiedza(imperium)'], ['Znajomość języka(bretoński)', 'Znajomość języka(tileański)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getPorywaczZwlok() {
      return [{
        title: 'Porywacz zwłok',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 5,
        Odp: 0,
        Zr: 10,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Powożenie', 'Przeszukiwanie', 'Sekretne znaki(złodziei)', 'Skradanie się', 'Spostrzegawczość', 'Wspinaczka'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getPoslaniec() {
      return [{
        title: 'Posłaniec',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 0,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Pływanie', 'Sekretne znaki(zwiadowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Wiedza(imperium)', 'Wiedza(jałowa kraina)', 'Plotkowanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getPrzemytnik() {
      return [{
        title: 'Przemytnik',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 0,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Pływanie', 'Powożenie', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Targowanie', 'Wioślarstwo', 'Wycena'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Sekretny język(złodziejski)'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Sekretne znaki(złodziei)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getPrzepatrywacz() {
      return [{
        title: 'Przepatrywacz',
        opis: 'blelbe',
        WW: 5,
        US: 10,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getPrzewoznik() {
      return [{
        title: 'Przewoźnik',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 10,
        Odp: 5,
        Zr: 5,
        Int: 5,
        SW: 0,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Pływanie', 'Przekonywanie', 'Spostrzegawczość', 'Targowanie', 'Wiedza(imperium)', 'Wioślarstwo'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Zastraszanie'], ['Wycena', 'Sekretny język(łowców)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getRybak() {
      return [{
        title: 'Rybak',
        opis: 'blelbe',
        WW: 0,
        US: 5,
        K: 10,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 0,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Pływanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Wioślrastwo', 'Żeglarstwo'],
        wyborUmiejetnosciProfesji: [['Mocna głowa', 'Targowanie'], ['Nawigacja', 'Rzemiosło(handel)'], ['Wiedza(imperium)', 'Wiedza(jałowa kraina)'], ['Znajomość języka(staroświatowy)', 'Znajomość języka(norski)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getRzecznikRodu() {
      return [{
        title: 'Rzecznik rodu',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 0,
        Odp: 0,
        Zr: 5,
        Int: 10,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Plotkowanie', 'Pływanie', 'Przekonywanie', 'Rzemiosło(handel)', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
        wyborUmiejetnosciProfesji: [['Wiedza(imperium)', 'Wiedza(jałowa kraina)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getRzemieslnik() {
      return [{
        title: '',
        opis: 'blelbe',
        WW: 0,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Powożenie', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
        wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Plotkowanie'], ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)'], ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getRzezimieszek() {
      return [{
        title: 'Rzezimieszek',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 10,
        Odp: 0,
        Zr: 10,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Jeździectwo', 'Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getSkryba() {
      return [{
        title: 'Skryba',
        opis: 'blelbe',
        WW: 0,
        US: 0,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 10,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Rzemiosło(kaligrafia)', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Wiedza(imperium)', 'Znajomość języka(klasyczny)'],
        wyborUmiejetnosciProfesji: [['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)'], ['Wiedza(imperium)', 'Plotkowanie'], ['Znajomość języka(staroświatowy)', 'Znajomość języka(tileański)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getSluga() {
      return [{
        title: 'Sługa',
        opis: 'blelbe',
        WW: 5,
        US: 0,
        K: 5,
        Odp: 0,
        Zr: 10,
        Int: 5,
        SW: 10,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Gadanina', 'Plotkowanie', 'Spostrzegawczość', 'Unik'],
        wyborUmiejetnosciProfesji: [['Czytanie i pisanie', 'Zwinne palce'], ['Opieka nad zwierzętami', 'Rzemiosło(gotowanie)'], ['Powożenie', 'Przeszukiwanie'], ['Targowanie', 'Wycena']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getStraznik() {
      return [{
        title: 'Strażnik',
        opis: 'blelbe',
        WW: 10,
        US: 5,
        K: 5,
        Odp: 0,
        Zr: 5,
        Int: 10,
        SW: 0,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Nauka(prawo)', 'Plotkowanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Tropienie', 'Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getStraznikDrog() {
      return [{
        title: 'Strażnik Dróg',
        opis: 'blelbe',
        WW: 10,
        US: 10,
        K: 5,
        Odp: 0,
        Zr: 10,
        Int: 5,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania'],
        wyborUmiejetnosciProfesji: [['Tropienie', 'Sekretne znaki(zwiadowców)'], ['Wiedza(imperium)', 'Plotkowanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getStraznikPol() {
      return [{
        title: 'Strażnik pól',
        opis: 'blelbe',
        WW: 5,
        US: 10,
        K: 0,
        Odp: 5,
        Zr: 10,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się'],
        wyborUmiejetnosciProfesji: [['Nauka(nekromancja)', 'Wiedza(imperium)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getStraznikWiezienny() {
      return [{
        title: 'Strażnik więzienny',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 10,
        Odp: 10,
        Zr: 0,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 3,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Dowodzenie', 'Mocna głowa', 'Przeszukiwanie', 'Spostrzegawczość', 'Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [['Leczenie', 'Zwinne palce']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getSzczurolap() {
      return [{
        title: 'Szczurołap',
        opis: 'blelbe',
        WW: 5,
        US: 10,
        K: 0,
        Odp: 5,
        Zr: 10,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Opieka nad zwierzętami', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Tresura', 'Ukrywanie się', 'Zastawianie pułapek'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getSzermierzEstalijski() {
      return [{
        title: 'Szermierz estalijski',
        opis: 'blelbe',
        WW: 15,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 10,
        Int: 5,
        SW: 0,
        Ogd: 0,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Nauka(anatomia)', 'Unik', 'Wiedza(estalia)', 'Znajomość języka(estalijski)'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function GetSzlachcic() {
      return [{
        title: 'Szlachcic',
        opis: 'blelbe',
        WW: 10,
        US: 5,
        K: 0,
        Odp: 0,
        Zr: 5,
        Int: 5,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Jeździectwo', 'Przekonywanie', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Gadanina', 'Dowodzenie'], ['Hazard', 'Plotkowanie'], ['Mocna głowa', 'Kuglarstwo(muzykalność)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getSmieciarz() {
      return [{
        title: 'Śmieciarz',
        opis: 'blelbe',
        WW: 5,
        US: 0,
        K: 5,
        Odp: 10,
        Zr: 5,
        Int: 0,
        SW: 5,
        Ogd: 5,
        A: 0,
        Zyw: 5,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Opieka nad zwierzętami', 'Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wiedza(imperium)', 'Wycena'],
        wyborUmiejetnosciProfesji: [['Przekonywanie', 'Plotkowanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getTarczownik() {
      return [{
        title: 'Tarczownik',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 10,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Nawigacja', 'Spostrzegawczość', 'Śledzenie', 'Unik', 'Wspinaczka'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getUczenCzarodzieja() {
      return [{
        title: 'Uczeń Czarodzieja',
        opis: 'blelbe',
        WW: 0,
        US: 0,
        K: 0,
        Odp: 0,
        Zr: 5,
        Int: 10,
        SW: 15,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 1,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Język tajemny(magiczny)', 'Nauka(magia)', 'Przeszukiwanie', 'Splatanie magii', 'Spostrzegawczość', 'Wykrywanie magii', 'Znajomość języka(klasyczny)'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getWeglarz() {
      return [{
        title: 'Węglarz',
        opis: 'blelbe',
        WW: 5,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 5,
        Int: 5,
        SW: 5,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Przeszukiwanie', 'Sekretne znaki(łowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Targowanie', 'Wspinaczka'],
        wyborUmiejetnosciProfesji: [['Powożenie', 'Plotkowanie'], ['Wiedza(imperium)', 'Ukrywanie się']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getWloczykij() {
      return [{
        title: 'Włóczykij',
        opis: 'blelbe',
        WW: 5,
        US: 10,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 5,
        SW: 0,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Nawigacja', 'Plotkowanie', 'Skradanie się', 'Sztuka przetrwania'],
        wyborUmiejetnosciProfesji: [['Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Sekretne znaki(łowców)', 'Sekretne znaki(złodziei)'], ['Leczenie', 'Spostrzegawczość'], ['Plotkowanie', 'Sekretny język(łowców)', 'Sekretny język(złodziejski)'], ['Targowanie', 'Pływanie'], ['Wiedza(bretonia)', 'Wiedza(estalia)', 'Wiedza(kislev)', 'Wiedza(tilea)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getWojownikKlanowy() {
      return [{
        title: 'Wojownik Klanowy',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 5,
        Ogd: 0,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się', 'Unik', 'Wspinaczka'],
        wyborUmiejetnosciProfesji: [['Leczenie', 'Przeszukiwanie']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getWoznica() {
      return [{
        title: 'Woźnica',
        opis: 'blelbe',
        WW: 5,
        US: 10,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 0,
        SW: 5,
        Ogd: 5,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Nawigacja', 'Opieka nad zwierzętami', 'Powożenie', 'Sekretne znaki(łowców)', 'Spostrzegawczość'],
        wyborUmiejetnosciProfesji: [['Leczenie', 'Jeździectwo'], ['Plotkowanie', 'Targowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getZabojcaTrolli() {
      return [{
        title: 'Zabójca trolli',
        opis: 'blelbe',
        WW: 10,
        US: 0,
        K: 5,
        Odp: 5,
        Zr: 5,
        Int: 0,
        SW: 10,
        Ogd: 0,
        A: 1,
        Zyw: 3,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Mocna głowa', 'Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [[]],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getZarzadca() {
      return [{
        title: 'Zarządca',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 5,
        Odp: 0,
        Zr: 0,
        Int: 10,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Jeździectwo', 'Nauka(prawo)', 'Przekonywanie', 'Spostrzegawczość'],
        wyborUmiejetnosciProfesji: [['Dowodzenie', 'Nawigacja'], ['Opieka nad zwierzętami', 'Plotkowanie'], ['Zastraszanie', 'Wiedza(imperium)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getZlodziej() {
      return [{
        title: 'Złodziej',
        opis: 'blelbe',
        WW: 5,
        US: 5,
        K: 0,
        Odp: 0,
        Zr: 15,
        Int: 5,
        SW: 0,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Ukrywanie się'],
        wyborUmiejetnosciProfesji: [['Czytanie i pisanie', 'Zwinne palce'], ['Hazard', 'Otwieranie zamków'], ['Przekonywanie', 'Wspinaczka'], ['Sekretny język(złodziejski)', 'Sekretne znaki(złodziei)'], ['Wycena', 'Charakteryzacja']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getZak() {
      return [{
        title: 'Żak',
        opis: 'blelbe',
        WW: 0,
        US: 0,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 10,
        SW: 5,
        Ogd: 10,
        A: 0,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Czytanie i pisanie', 'Spostrzegawczość', 'Znajomość języka(klasyczny)', 'Znajomość języka(staroświatowy)'],
        wyborUmiejetnosciProfesji: [['Leczenie', 'Przeszukiwanie'], ['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)'], ['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)', 'Plotkowanie'], ['Przekonywanie', 'Mocna głowa']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getZeglarz() {
      return [{
        title: 'Żeglarz',
        opis: 'blelbe',
        WW: 10,
        US: 5,
        K: 10,
        Odp: 0,
        Zr: 10,
        Int: 0,
        SW: 0,
        Ogd: 0,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Pływanie', 'Unik', 'Wioślarstwo', 'Wspinaczka', 'Żeglarstwo'],
        wyborUmiejetnosciProfesji: [['Mocna głowa', 'Spostrzegawczość'], ['Wiedza(bretonia)', 'Wiedza(norska)', 'Wiedza(tilea)', 'Wiedza(jałowa kraina)'], ['Znajomość języka(bretoński)', 'Znajomość języka(tileański)', 'Znajomość języka(norski)']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getZolnierz() {
      return [{
        title: 'Żołnierz',
        opis: 'blelbe',
        WW: 10,
        US: 10,
        K: 0,
        Odp: 0,
        Zr: 10,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 1,
        Zyw: 2,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Unik', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [['Hazard', 'Plotkowanie'], ['Opieka nad zwierzętami', 'Leczenie'], ['Powożenie', 'Jeździectwo'], ['Wiedza(imperium)', 'Spostrzegawczość']],
        zdolnosci: [],
        wyposazenie: []
      }];
    }

    function getZolnierzOkretowy() {
      return [{
        title: 'Żołnierz okrętowy',
        opis: 'blelbe',
        WW: 10,
        US: 10,
        K: 10,
        Odp: 0,
        Zr: 5,
        Int: 0,
        SW: 5,
        Ogd: 0,
        A: 1,
        Zyw: 3,
        S: 0,
        Wt: 0,
        Sz: 0,
        Mag: 0,
        PO: 0,
        PP: 0,
        umiejetnosci: ['Mocna głowa', 'Pływanie', 'Unik', 'Wioślarstwo', 'Zastraszanie'],
        wyborUmiejetnosciProfesji: [['Plotkowanie', 'Sekretny język(bitewny)'], ['Wiedza(jałowa kraina)', 'Hazard']],
        zdolnosci: [],
        wyposazenie: []
      }];
    } // umiejętności


    function getBrzuchomowstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Brzuchomówstwo',
        cecha: 'Ogłada',
        opis: 'Bohater potrafi mówić bez otwierania ust. Osoby uważnie obcerwujące Bohatera korzystające z tej umiejętności mogą wykonywać test spostrzegawczości przeciwko testowi brzuchomówstwa BG, żeby wykryć sztuczkę Bohatera.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getCharakteryzacja() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Charakteryzacja',
        cecha: 'Ogłada',
        opis: 'opis charakteryzacji',
        zdolnoscipokrewne: 'naśladowca.'
      }];
    }

    function getCzytanieiPisanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Czytanie i Pisanie',
        cecha: 'Inteligencja',
        opis: 'opis czytania i pisania',
        zdolnoscipokrewne: 'poliglota.'
      }];
    }

    function getCzytaniezWarg() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Czytanie z warg',
        cecha: 'Inteligencja',
        opis: 'opis czytania z warg',
        zdolnoscipokrewne: 'bystry wzrok.'
      }];
    }

    function getDowodzenie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Dowodzenie',
        cecha: 'Ogłada',
        opis: 'opis dowodzenia',
        zdolnoscipokrewne: 'brak'
      }];
    }

    function getGadanina() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'gadanina',
        cecha: 'Ogłada',
        opis: 'opis ogłady',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getHazard() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Hazard',
        cecha: 'Inteligencja',
        opis: 'opis hazardu',
        zdolnoscipokrewne: 'geniusz arytmetyczny.'
      }];
    }

    function getHipnoza() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Hipnoza',
        cecha: 'Siła Woli',
        opis: 'opis siły woli',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getJezdziectwo() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Jeździectwo',
        cecha: 'Zręczność',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'woltyżerka.'
      }];
    }

    function getJezykTajemnyMagiczny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Język Tajemny(magiczny)',
        cecha: 'Inteligencja',
        opis: 'opis jezyk tajemny',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getKuglarstwoAkrobatyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(akrobatyka)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoAktorstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(aktorstwo)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoBlaznowanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(błaznowanie)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoGawedziarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(gawędziarstwo)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoKomedianctwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(komedianctwo)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoMimika() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(mimika)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoMuzykalnosc() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(muzykalność)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoPolykanieOgnia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(połykanie ognia)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoSpiew() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(śpiew)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoTaniec() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(taniec)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoWrozenieZDloni() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(wróżenie z dłoni)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoZonglerka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(żonglerka)',
        cecha: 'Ogłada',
        opis: 'opis kuglarstwa',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getLeczenie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Leczenie',
        cecha: 'Inteligencja',
        opis: 'opis leczenia',
        zdolnoscipokrewne: 'chirurgia.'
      }];
    }

    function getMocnaGlowa() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Mocna Głowa',
        cecha: 'Zręczność',
        opis: 'opis mocnej glowy',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaAlchemia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(alchemia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaAnatomia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(anatomia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaAstronomia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(astronomia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaDemonologia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(demonologia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaFilozofia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(filozofia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaGenealogiaHeraldyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(genealogia/heraldyka)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaHistoria() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(historia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaInzynieria() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(inżynieria)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaMagia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(magia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaMatematyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(matematyka)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaNekromancja() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(nekromancja)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaPrawo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(prawo)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaRuny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(runy)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaStrategiaTaktyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(strategia/taktyka)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaSztuka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(sztuka)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaTeologia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(teologia)',
        cecha: 'Inteligencja',
        opis: 'opis jezdziectwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNawigacja() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nawigacja',
        cecha: 'Inteligencja',
        opis: 'opis nawigacji',
        zdolnoscipokrewne: 'geniusz arytmetyczny, wyczucie kierunku.'
      }];
    }

    function getOpiekaNadZwierzetami() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Opieka Nad Zwierzętami',
        cecha: 'Inteligencja',
        opis: 'opis opieki',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getOswajanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Oswajanie',
        cecha: 'Ogłada',
        opis: 'opis oswajania',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getOtwieranieZamkow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Otwieranie Zamków',
        cecha: 'Zręczność',
        opis: 'opis otwierania zamkow  ',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getPlotkowanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Plotkowanie',
        cecha: 'Ogłada',
        opis: 'opis plotkowania',
        zdolnoscipokrewne: 'etykieta, łotrzyk.'
      }];
    }

    function getPlywanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Pływanie',
        cecha: 'Krzepa',
        opis: 'opis plywania',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getPowozenie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Powożenie',
        cecha: 'Krzepa',
        opis: 'opis powozenia',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getPrzekonywanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Przekonywanie',
        cecha: 'Ogłada',
        opis: 'opis przekonywania',
        zdolnoscipokrewne: 'etykieta, intrygant, krasomówstwo, łotrzyk, przemawianie.'
      }];
    }

    function getPrzeszukiwanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Przeszukiwanie',
        cecha: 'Inteligencja',
        opis: 'opis przeszukiwania',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getRzemiosloAptekarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(aptekarstwo)',
        cecha: 'Inteligencja',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloBednarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(bednarstwo)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGarbarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(garbarstwo)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGotowanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(gotowanie)',
        cecha: 'Inteligencja',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGornictwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(górnictwo)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGornictwoOdkrywkowe() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(górnictwo odkrywkowe)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloHandel() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(handel)',
        cecha: 'Ogłada',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloJubilerstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(jubilerstwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKaligrafia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kaligrafia)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKamieniarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kamieniarstwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKartografia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kartografia)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKowalstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kowalstwo)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKrawiectwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(krawiectwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloMlynarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(młynarstwo)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloPiwowarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(piwowarstwo)',
        cecha: 'Inteligencja',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloPlatnerstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(płatnerstwo)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloRusznikarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(rusznikarstwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloRymarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(rymarstwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloStolarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(stolarstwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSzkutnictwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(szkutnictwo)',
        cecha: 'Inteligencja',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSzewstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(szewstwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSztuka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(sztuka)',
        cecha: 'Zręszność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSwiecarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(świecarstwo)',
        cecha: 'Zręszność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloUprawaZiemi() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(uprawa ziemi)',
        cecha: 'Siła',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloWyrobLukow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(wyrób łuków)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloZielarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(zielarstwo)',
        cecha: 'Inteligencja',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloZlotnictwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(złotnictwo)',
        cecha: 'Zręczność',
        opis: 'opis rzemiosla ',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getSekretneZnakiLowcow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(łowców)',
        cecha: 'Inteligencja',
        opis: 'opis sekretnych znakow',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretneZnakiRycerzyZakonnych() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(rycerzy zakonnych)',
        cecha: 'Inteligencja',
        opis: 'opis sekretnych znakow',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretneZnakiZwiadowcow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(zwiadowców)',
        cecha: 'Inteligencja',
        opis: 'opis sekretnych znakow',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretneZnakiZlodziei() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(złodziei)',
        cecha: 'Inteligencja',
        opis: 'opis sekretnych znakow',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykBitewny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(bitewny)',
        cecha: 'Inteligencja',
        opis: 'opis sekretny jezyk',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykGildii() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(gildii)',
        cecha: 'Inteligencja',
        opis: 'opis sekretny jezyk',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykLowcow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(łowców)',
        cecha: 'Inteligencja',
        opis: 'opis sekretny jezyk',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykZlodziejski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(złodziejski)',
        cecha: 'Inteligencja',
        opis: 'opis sekretny jezyk',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSkradanieSie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Skradanie się',
        cecha: 'Zręczność',
        opis: 'opis skradania',
        zdolnoscipokrewne: 'grotołaz, ulicznik, wędrowiec.'
      }];
    }

    function getSplatanieMagii() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Splatanie magii',
        cecha: 'Siła Woli',
        opis: 'opis spalatania ',
        zdolnoscipokrewne: 'zmysł magii.'
      }];
    }

    function getSpostrzegawczosc() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Spostrzegawczość',
        cecha: 'Inteligencja',
        opis: 'opis spostrzegawczosci',
        zdolnoscipokrewne: 'bystry wzrok, czuły słuch, geniusz arytmetyczny.'
      }];
    }

    function getSztukaPrzetrwania() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Sztuka Przetrwania',
        cecha: 'Inteligencja',
        opis: 'opis sztuki przetwrwania',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSledzenie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Śledzenie',
        cecha: 'Zręczność',
        opis: 'opis sledzenia ',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getTargowanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Targowanie',
        cecha: 'Ogłada',
        opis: 'opis targowania',
        zdolnoscipokrewne: 'żyłka handlowa.'
      }];
    }

    function getTorturowanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Torturowanie',
        cecha: 'Ogłada',
        opis: 'opis torturowania',
        zdolnoscipokrewne: 'groźny.'
      }];
    }

    function getTresura() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Tresura',
        cecha: 'Ogłada',
        opis: 'opis rtesury ',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getTropienie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Tropienie',
        cecha: 'Inteligencja',
        opis: 'opis tropienia',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getUkrywanieSie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Ukrywanie się',
        cecha: 'Zręszność.',
        opis: 'opis ukrywania ',
        zdolnoscipokrewne: 'grotołaz, ulicznik, wędrowiec.'
      }];
    }

    function getUnik() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Unik',
        cecha: 'Zręczność',
        opis: 'opis uniku',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWarzenieTrucizn() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Warzenie Trucizn',
        cecha: 'Inteligencja',
        opis: 'opis warzenia ',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWiedzaBretonia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(bretonia)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaEstalia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(estalia)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaImperium() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(imperium)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaJalowaKraina() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(jałowa kraina)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaKislev() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(kislev)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaKsiestwaGraniczne() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(księstwa graniczne)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaNorska() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(norska)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaTilea() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(tilea)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaElfy() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(elfy)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaKrasnoludy() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(krasnoludy)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaNiziolki() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(niziołki)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaOgry() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(ogry)',
        cecha: 'Inteligencja',
        opis: 'opis wiedzy',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWioślarstwo() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Wioślarstwo',
        cecha: 'Krzepa',
        opis: 'opis wioslarstwa ',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWspinaczka() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Wspinaczka',
        cecha: 'Krzepa',
        opis: 'opis wspinaczki',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWycena() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Wycena',
        cecha: 'Inteligencja',
        opis: 'opis wyceny',
        zdolnoscipokrewne: 'telent artystyczny, żyłka handlowa.'
      }];
    }

    function getWykrywanieMagii() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wykrywanie Magii',
        cecha: 'Siła Woli',
        opis: 'opis wykrywania magii',
        zdolnoscipokrewne: 'zmysł magii.'
      }];
    }

    function getZastawaniePulapek() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Zastawianie Pułapek',
        cecha: 'Zręczność',
        opis: 'opis zxastawainai',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getZastraszanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Zastraszanie',
        cecha: 'Krzepa',
        opis: 'opis zastraszania',
        zdolnoscipokrewne: 'groźny.'
      }];
    }

    function getZnajomoscJezykaBretonski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(bretoński)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaEltharin() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(eltharin)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaEstalisjki() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(estalijski)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaKhazaldin() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(khazaldin)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaKislevski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(kislevski)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaNorski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(norski)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaTileanski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(tileanski)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscJezykaStaroswiatowy() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(staroświatowy)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscJezykaKlasyczny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(klasyczny)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaNiziolkow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(niziołków)',
        cecha: 'Inteligencja',
        opis: 'opis znajomosci jezyka',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZwinnePalce() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Zwinne palce',
        cecha: 'Zręczność',
        opis: 'opis zwinnych palcow',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getZeglarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Żeglarstwo',
        cecha: 'Zręczność',
        opis: 'opis zeglarstwa',
        zdolnoscipokrewne: 'brak.'
      }];
    }
    /***/

  },

  /***/
  "./src/app/bohater/service/shared.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/bohater/service/shared.service.ts ***!
    \***************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppBohaterServiceSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");

    var SharedService = /*#__PURE__*/function () {
      function SharedService(logika) {
        _classCallCheck(this, SharedService);

        this.logika = logika; // statystyki początkowe rasy

        this.poczatkoweStatystykiRasowe = {
          rasatitle: '',
          profesjatitle: '',
          WW: 0,
          US: 0,
          K: 0,
          Odp: 0,
          Zr: 0,
          Int: 0,
          SW: 0,
          Ogd: 0,
          A: 0,
          Zyw: 0,
          S: 0,
          Wt: 0,
          Sz: 0,
          Mag: 0,
          PO: 0,
          PP: 0,
          umiejetnosci: [],
          wyborUmiejetnosciRasy: [],
          zdolnosci: [],
          wyposazenie: []
        }; // statystyki początkowe profesji

        this.schematRozwojuProfesja = {
          rasatitle: '',
          profesjatitle: '',
          WW: 0,
          US: 0,
          K: 0,
          Odp: 0,
          Zr: 0,
          Int: 0,
          SW: 0,
          Ogd: 0,
          A: 0,
          Zyw: 0,
          S: 0,
          Wt: 0,
          Sz: 0,
          Mag: 0,
          PO: 0,
          PP: 0,
          umiejetnosci: [],
          wyborUmiejetnosciProfesji: [[]],
          zdolnosci: [],
          wyposazenie: []
        };
        this.sumowaneStatystyki = {
          WW: 0,
          US: 0,
          K: 0,
          Odp: 0,
          Zr: 0,
          Int: 0,
          SW: 0,
          Ogd: 0,
          A: 0,
          Zyw: 0,
          S: 0,
          Wt: 0,
          Sz: 0,
          Mag: 0,
          PO: 0,
          PP: 0
        };
      }

      _createClass(SharedService, [{
        key: "resetStatystyk",
        value: function resetStatystyk() {
          this.poczatkoweStatystykiRasowe.WW = 0;
          this.poczatkoweStatystykiRasowe.US = 0;
          this.poczatkoweStatystykiRasowe.K = 0;
          this.poczatkoweStatystykiRasowe.Odp = 0;
          this.poczatkoweStatystykiRasowe.Zr = 0;
          this.poczatkoweStatystykiRasowe.Int = 0;
          this.poczatkoweStatystykiRasowe.SW = 0;
          this.poczatkoweStatystykiRasowe.Ogd = 0;
          this.poczatkoweStatystykiRasowe.A = 0;
          this.poczatkoweStatystykiRasowe.Zyw = 0;
          this.poczatkoweStatystykiRasowe.S = 0;
          this.poczatkoweStatystykiRasowe.Wt = 0;
          this.poczatkoweStatystykiRasowe.Sz = 0;
          this.poczatkoweStatystykiRasowe.Mag = 0;
          this.poczatkoweStatystykiRasowe.PO = 0;
          this.poczatkoweStatystykiRasowe.PP = 0;
          this.poczatkoweStatystykiRasowe.umiejetnosci = [];
          this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy = [];
          this.poczatkoweStatystykiRasowe.zdolnosci = [];
          this.poczatkoweStatystykiRasowe.wyposazenie = [];
          console.log('zresetowano statystyki dla', this.poczatkoweStatystykiRasowe.rasatitle);
          this.resetStatystykProfesja();
        }
      }, {
        key: "resetStatystykProfesja",
        value: function resetStatystykProfesja() {
          this.schematRozwojuProfesja.WW = 0;
          this.schematRozwojuProfesja.US = 0;
          this.schematRozwojuProfesja.K = 0;
          this.schematRozwojuProfesja.Odp = 0;
          this.schematRozwojuProfesja.Zr = 0;
          this.schematRozwojuProfesja.Int = 0;
          this.schematRozwojuProfesja.SW = 0;
          this.schematRozwojuProfesja.Ogd = 0;
          this.schematRozwojuProfesja.A = 0;
          this.schematRozwojuProfesja.Zyw = 0;
          this.schematRozwojuProfesja.S = 0;
          this.schematRozwojuProfesja.Wt = 0;
          this.schematRozwojuProfesja.Sz = 0;
          this.schematRozwojuProfesja.Mag = 0;
          this.schematRozwojuProfesja.PO = 0;
          this.schematRozwojuProfesja.PP = 0;
          this.sumowaneStatystyki.WW = 0;
          this.sumowaneStatystyki.US = 0;
          this.sumowaneStatystyki.K = 0;
          this.sumowaneStatystyki.Odp = 0;
          this.sumowaneStatystyki.Zr = 0;
          this.sumowaneStatystyki.Int = 0;
          this.sumowaneStatystyki.SW = 0;
          this.sumowaneStatystyki.Ogd = 0;
          this.sumowaneStatystyki.A = 0;
          this.sumowaneStatystyki.Zyw = 0;
          this.sumowaneStatystyki.S = 0;
          this.sumowaneStatystyki.Wt = 0;
          this.sumowaneStatystyki.Sz = 0;
          this.sumowaneStatystyki.Mag = 0;
          this.sumowaneStatystyki.PO = 0;
          this.sumowaneStatystyki.PP = 0;
          this.schematRozwojuProfesja.umiejetnosci = [];
          this.schematRozwojuProfesja.wyborUmiejetnosciProfesji = [[]];
          this.schematRozwojuProfesja.zdolnosci = [];

          if (this.schematRozwojuProfesja.profesjatitle !== '') {
            console.log('zresetowano statystyki dla', this.schematRozwojuProfesja.profesjatitle);
          }

          this.schematRozwojuProfesja.profesjatitle = '';
        } // funkcja losujaca

      }, {
        key: "randomNumber",
        value: function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        } // losowanie zywotnosci dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek

      }, {
        key: "zywotnosc",
        value: function zywotnosc(n) {
          var a = this.randomNumber(1, 10);

          if (n === 0) {
            if (a === 10) {
              return 13;
            } else if (a > 6) {
              return 12;
            } else if (a > 3) {
              return 11;
            } else {
              return 10;
            }
          } else if (n === 1) {
            if (a === 10) {
              return 14;
            } else if (a > 6) {
              return 13;
            } else if (a > 3) {
              return 12;
            } else {
              return 11;
            }
          } else if (n === 2) {
            if (a === 10) {
              return 12;
            } else if (a > 6) {
              return 11;
            } else if (a > 3) {
              return 10;
            } else {
              return 9;
            }
          } else {
            if (a === 10) {
              return 11;
            } else if (a > 6) {
              return 10;
            } else if (a > 3) {
              return 9;
            } else {
              return 8;
            }
          }
        } // losowanie przeznaczenia dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek

      }, {
        key: "przeznaczenie",
        value: function przeznaczenie(n) {
          var a = this.randomNumber(1, 10);

          if (n === 0) {
            if (a > 4) {
              return 3;
            } else {
              return 2;
            }
          } else if (n === 1) {
            if (a > 7) {
              return 3;
            } else if (a > 4) {
              return 2;
            } else {
              return 1;
            }
          } else if (n === 2) {
            if (a > 4) {
              return 2;
            } else {
              return 1;
            }
          } else {
            if (a > 7) {
              return 3;
            } else {
              return 2;
            }
          }
        } // zmiana rasy i losowanie statystyk poczatkowych

      }, {
        key: "changeRasa",
        value: function changeRasa(rasa) {
          var _this4 = this;

          // pobranie poczatkowych statystyk rasowych
          this.logika.getListaRasy().subscribe(function (items) {
            return _this4.statystykiRasowe = items;
          });
          console.log(this.statystykiRasowe[0].rasatitle); // przypisanie nazwy rasy do aktualnych statystyk

          this.poczatkoweStatystykiRasowe.rasatitle = rasa; // losowanie statystyk poczatkowych dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek

          for (var n = 0; n < 4; n++) {
            if (this.statystykiRasowe[n].rasatitle === this.poczatkoweStatystykiRasowe.rasatitle) {
              this.poczatkoweStatystykiRasowe.WW = this.statystykiRasowe[n].WW + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.US = this.statystykiRasowe[n].US + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.K = this.statystykiRasowe[n].K + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.Odp = this.statystykiRasowe[n].Odp + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.Zr = this.statystykiRasowe[n].Zr + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.Int = this.statystykiRasowe[n].Int + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.SW = this.statystykiRasowe[n].SW + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.Ogd = this.statystykiRasowe[n].Ogd + this.randomNumber(2, 20);
              this.poczatkoweStatystykiRasowe.A = 1;
              this.poczatkoweStatystykiRasowe.Zyw = this.zywotnosc(n);
              this.poczatkoweStatystykiRasowe.S = Math.floor(this.poczatkoweStatystykiRasowe.K / 10);
              this.poczatkoweStatystykiRasowe.Wt = Math.floor(this.poczatkoweStatystykiRasowe.Odp / 10);
              this.poczatkoweStatystykiRasowe.Sz = this.statystykiRasowe[n].Sz;
              this.poczatkoweStatystykiRasowe.Mag = 0;
              this.poczatkoweStatystykiRasowe.PO = 0;
              this.poczatkoweStatystykiRasowe.PP = this.przeznaczenie(n); // dodanie listy umiejetnosci rasowych

              for (var m = 0; m < this.statystykiRasowe[n].umiejetnosci.length; m++) {
                this.logika.getUmiejetnosci(this.statystykiRasowe[n].umiejetnosci[m]).subscribe(function (items) {
                  return _this4.umiejetnosciRasowe = items;
                });
                this.poczatkoweStatystykiRasowe.umiejetnosci[m] = this.umiejetnosciRasowe;
              }

              console.log('pobranie listy umiejetnosci rasowych'); // dodanie umiejetnosci do wyboru

              if (this.statystykiRasowe[n].wyborUmiejetnosciRasy !== undefined) {
                for (var _m = 0; _m < this.statystykiRasowe[n].wyborUmiejetnosciRasy.length; _m++) {
                  // zainicjalizowanie pustej tablicy jezeli nieistnieje
                  if (!this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[_m]) {
                    this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[_m] = [];
                  }

                  for (var p = 0; p < this.statystykiRasowe[n].wyborUmiejetnosciRasy[_m].length; p++) {
                    this.logika.getUmiejetnosci(this.statystykiRasowe[n].wyborUmiejetnosciRasy[_m][p]).subscribe(function (items) {
                      return _this4.umiejetnosciProfesji = items;
                    });
                    this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[_m][p] = this.umiejetnosciProfesji;
                  }
                }

                console.log('pobrano umiejetnosci do wyboru dla', rasa);
              }
            }
          }
        } // zmiana profesji dodanie schematu rozwoju statystyk

      }, {
        key: "changeProfesja",
        value: function changeProfesja(profesja) {
          var _this5 = this;

          this.logika.getProfesja(profesja).subscribe(function (items) {
            return _this5.statystkiProfesji = items;
          });
          this.schematRozwojuProfesja.profesjatitle = profesja;
          this.schematRozwojuProfesja.WW = this.statystkiProfesji[0].WW;
          this.schematRozwojuProfesja.US = this.statystkiProfesji[0].US;
          this.schematRozwojuProfesja.K = this.statystkiProfesji[0].K;
          this.schematRozwojuProfesja.Odp = this.statystkiProfesji[0].Odp;
          this.schematRozwojuProfesja.Zr = this.statystkiProfesji[0].Zr;
          this.schematRozwojuProfesja.Int = this.statystkiProfesji[0].Int;
          this.schematRozwojuProfesja.SW = this.statystkiProfesji[0].SW;
          this.schematRozwojuProfesja.Ogd = this.statystkiProfesji[0].Ogd;
          this.schematRozwojuProfesja.A = this.statystkiProfesji[0].A;
          this.schematRozwojuProfesja.Zyw = this.statystkiProfesji[0].Zyw;
          this.schematRozwojuProfesja.S = this.statystkiProfesji[0].S;
          this.schematRozwojuProfesja.Wt = this.statystkiProfesji[0].Wt;
          this.schematRozwojuProfesja.Sz = this.statystkiProfesji[0].Sz;
          this.schematRozwojuProfesja.Mag = this.statystkiProfesji[0].Mag;
          this.schematRozwojuProfesja.PO = this.statystkiProfesji[0].PO;
          this.schematRozwojuProfesja.PP = this.statystkiProfesji[0].PP; // dodanie umiejetnosci

          if (this.statystkiProfesji[0].umiejetnosci !== undefined) {
            for (var n = 0; n < this.statystkiProfesji[0].umiejetnosci.length; n++) {
              this.logika.getUmiejetnosci(this.statystkiProfesji[0].umiejetnosci[n]).subscribe(function (items) {
                return _this5.umiejetnosciProfesji = items;
              });
              this.schematRozwojuProfesja.umiejetnosci[n] = this.umiejetnosciProfesji;
            }

            console.log('pobrano umiejetnosci dla', profesja);
          } // dodanie umiejetnosci do wyboru


          if (this.statystkiProfesji[0].wyborUmiejetnosciProfesji !== undefined) {
            for (var _n2 = 0; _n2 < this.statystkiProfesji[0].wyborUmiejetnosciProfesji.length; _n2++) {
              // zainicjalizowanie pustej tablicy jezeli nieistnieje
              if (!this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[_n2]) {
                this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[_n2] = [];
              }

              for (var p = 0; p < this.statystkiProfesji[0].wyborUmiejetnosciProfesji[_n2].length; p++) {
                this.logika.getUmiejetnosci(this.statystkiProfesji[0].wyborUmiejetnosciProfesji[_n2][p]).subscribe(function (items) {
                  return _this5.umiejetnosciProfesji = items;
                });
                this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[_n2][p] = this.umiejetnosciProfesji;
              }
            }

            console.log('pobrano umiejetnosci do wyboru dla', profesja);
          }
        } // sumowanie aktualnych statystyk

      }, {
        key: "changeAktualne",
        value: function changeAktualne() {
          this.sumowaneStatystyki.WW = this.poczatkoweStatystykiRasowe.WW + this.schematRozwojuProfesja.WW;
          this.sumowaneStatystyki.US = this.poczatkoweStatystykiRasowe.US + this.schematRozwojuProfesja.US;
          this.sumowaneStatystyki.K = this.poczatkoweStatystykiRasowe.K + this.schematRozwojuProfesja.K;
          this.sumowaneStatystyki.Odp = this.poczatkoweStatystykiRasowe.Odp + this.schematRozwojuProfesja.Odp;
          this.sumowaneStatystyki.Zr = this.poczatkoweStatystykiRasowe.Zr + this.schematRozwojuProfesja.Zr;
          this.sumowaneStatystyki.Int = this.poczatkoweStatystykiRasowe.Int + this.schematRozwojuProfesja.Int;
          this.sumowaneStatystyki.SW = this.poczatkoweStatystykiRasowe.SW + this.schematRozwojuProfesja.SW;
          this.sumowaneStatystyki.Ogd = this.poczatkoweStatystykiRasowe.Ogd + this.schematRozwojuProfesja.Ogd;
          this.sumowaneStatystyki.A = this.poczatkoweStatystykiRasowe.A + this.schematRozwojuProfesja.A;
          this.sumowaneStatystyki.Zyw = this.poczatkoweStatystykiRasowe.Zyw + this.schematRozwojuProfesja.Zyw;
          this.sumowaneStatystyki.S = Math.floor(this.sumowaneStatystyki.K / 10);
          this.sumowaneStatystyki.Wt = Math.floor(this.sumowaneStatystyki.Odp / 10);
          this.sumowaneStatystyki.Sz = this.poczatkoweStatystykiRasowe.Sz + this.schematRozwojuProfesja.Sz;
          this.sumowaneStatystyki.Mag = this.poczatkoweStatystykiRasowe.Mag + this.schematRozwojuProfesja.Mag;
          this.sumowaneStatystyki.PO = this.poczatkoweStatystykiRasowe.PO + this.schematRozwojuProfesja.PO;
          this.sumowaneStatystyki.PP = this.poczatkoweStatystykiRasowe.PP + this.schematRozwojuProfesja.PP;
        }
      }]);

      return SharedService;
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]));
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 4,
      vars: 0,
      consts: [["id", "kontener", 1, "container"], [1, "row"], ["id", "outlet", 1, "bg-light"], [1, "col-12"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dodawanie/aside/aside.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/dodawanie/aside/aside.component.ts ***!
    \****************************************************/

  /*! exports provided: AsideComponent */

  /***/
  function srcAppDodawanieAsideAsideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideComponent", function () {
      return AsideComponent;
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


    var src_app_services_score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/score.service */
    "./src/app/services/score.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AsideComponent_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zaloguj, aby zapisa\u0107 wynik!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AsideComponent_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Brak");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AsideComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var score_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", score_r3.who, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, score_r3.czas, "1.2-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, score_r3.date, "short"), " ");
      }
    }

    var AsideComponent = /*#__PURE__*/function () {
      function AsideComponent(scoreService, authService) {
        _classCallCheck(this, AsideComponent);

        this.scoreService = scoreService;
        this.authService = authService;
      }

      _createClass(AsideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getScoreList();
        }
      }, {
        key: "getScoreList",
        value: function getScoreList() {
          var _this6 = this;

          this.scoreService.getScoreList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.doc.id
              }, c.payload.doc.data());
            });
          })).subscribe(function (score) {
            _this6.score = score;
            return score.sort(function (a, b) {
              return a.czas - b.czas;
            });
          });
        }
      }]);

      return AsideComponent;
    }();

    AsideComponent.ɵfac = function AsideComponent_Factory(t) {
      return new (t || AsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AsideComponent,
      selectors: [["app-aside"]],
      decls: 16,
      vars: 7,
      consts: [[4, "ngIf"], ["class", "text", 4, "ngIf"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["routerLink", "/sign-in"], [1, "text"], ["scope", "row"]],
      template: function AsideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AsideComponent_p_0_Template, 3, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsideComponent_p_1_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Czas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kiedy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AsideComponent_tr_14_Template, 11, 10, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.score.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 3, ctx.score, 0, 5));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvZGF3YW5pZS9hc2lkZS9hc2lkZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aside',
          templateUrl: './aside.component.html',
          styleUrls: ['./aside.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dodawanie/dodawanie.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dodawanie/dodawanie.component.ts ***!
    \**************************************************/

  /*! exports provided: DodawanieComponent */

  /***/
  function srcAppDodawanieDodawanieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DodawanieComponent", function () {
      return DodawanieComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/score */
    "./src/app/services/score.ts");
    /* harmony import */


    var _services_score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/score.service */
    "./src/app/services/score.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DodawanieComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DodawanieComponent_div_13_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var odpowiedz_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.czyWygrales(odpowiedz_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var odpowiedz_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](odpowiedz_r1);
      }
    }

    var DodawanieComponent = /*#__PURE__*/function () {
      function DodawanieComponent(scoreservice, authservice) {
        _classCallCheck(this, DodawanieComponent);

        this.scoreservice = scoreservice;
        this.authservice = authservice;
        this.tab1 = new Array();
        this.tab = new Array();
        this.tabOdpowiedzi1 = new Array();
        this.tabOdpowiedzi2 = new Array();
        this.submitted = true;
        this.dobreodpowiedzi = 0;
        this.intervalId = 0;
        this.czas = 0;
        this.seconds = 0;
        this.score = new _services_score__WEBPACK_IMPORTED_MODULE_2__["Score"]();
        this.iloscPotrzebnychOdpowiedzi = 5;
      }

      _createClass(DodawanieComponent, [{
        key: "randomNumber",
        value: function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        } // cala funkcja losujaca

      }, {
        key: "getRandom",
        value: function getRandom() {
          this.startTimer(); // losowanie 5 liczb

          for (var i = 0; i < 5; i++) {
            this.tab[i] = this.randomNumber(1, 10);
          } // przypisywanie dobrego i złego wyniku do zmiennych


          var dobrywynik = this.tab[0] + this.tab[1];
          var zlywynik1 = this.tab[1] + this.tab[2];
          var zlywynik2 = this.tab[2] + this.tab[3];
          var zlywynik3 = this.tab[3] + this.tab[4]; // sprawdzanie czy odpowiedzi się nie powtarzają

          for (; dobrywynik === zlywynik1 || dobrywynik === zlywynik2 || dobrywynik === zlywynik3 || zlywynik1 === zlywynik2 || zlywynik1 === zlywynik3 || zlywynik2 === zlywynik3;) {
            zlywynik1 = this.randomNumber(2, 20);
            zlywynik2 = this.randomNumber(2, 20);
            zlywynik3 = this.randomNumber(2, 20);
          } // zmienne wyswietlane w tresci zadania


          this.liczba1 = this.tab[0];
          this.liczba2 = this.tab[1]; // przypisywanie wszystkich odpowiedzi do tablicy

          this.tabOdpowiedzi1[0] = dobrywynik;
          this.tabOdpowiedzi1[1] = zlywynik1;
          this.tabOdpowiedzi1[2] = zlywynik2;
          this.tabOdpowiedzi1[3] = zlywynik3; // przypisywanie odpowiedzi do losowych miejsc w nowej tablicy tabOdpowiedzi2

          for (var _i2 = 0; _i2 < this.tabOdpowiedzi1.length; _i2++) {
            this.tab1[_i2] = this.randomNumber(0, 3);

            for (var j = _i2; j !== 0; j--) {
              if (this.tab1[_i2] === this.tab1[j - 1]) {
                _i2--;
              }
            }

            this.tabOdpowiedzi2[this.tab1[_i2]] = this.tabOdpowiedzi1[_i2];
          } // pokazywanie nowego zadania


          this.onSubmit();
        } // wyswietlane komunikaty

      }, {
        key: "wygrales",
        value: function wygrales() {
          this.getRandom();
          this.dobreodpowiedzi = this.dobreodpowiedzi + 1;
        }
      }, {
        key: "przegrales",
        value: function przegrales() {
          this.stopTimer();
          this.submitted = true;
          this.dobreodpowiedzi = 0;
          this.intervalId = 0;
          this.czas = 0;
          this.seconds = 0;
        }
      }, {
        key: "resetPytania",
        value: function resetPytania() {
          this.dobreodpowiedzi = 0;
          this.seconds = 0;
        } // warunek dobrej odpowiedzi

      }, {
        key: "czyWygrales",
        value: function czyWygrales(a) {
          if (a === this.liczba1 + this.liczba2) {
            this.wygrales();
          } else {
            this.przegrales();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = false;
        } // dodanie timera

      }, {
        key: "clearTimer",
        value: function clearTimer() {
          clearInterval(this.intervalId);
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          this.countDown();
        }
      }, {
        key: "stopTimer",
        value: function stopTimer() {
          this.clearTimer();
        } // timer i export dobrych odpowiedzi do bazy danych

      }, {
        key: "countDown",
        value: function countDown() {
          var _this7 = this;

          this.clearTimer();
          this.intervalId = window.setInterval(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.seconds += 0.01;

                      if (!(this.dobreodpowiedzi === this.iloscPotrzebnychOdpowiedzi)) {
                        _context.next = 14;
                        break;
                      }

                      this.czas = this.seconds;
                      this.stopTimer();
                      this.submitted = true;
                      this.score.date = new Date().toString();
                      this.score.ileOdpowiedzi = this.dobreodpowiedzi;
                      this.score.czas = this.czas;
                      _context.next = 10;
                      return this.authservice.afAuth.currentUser;

                    case 10:
                      this.score.who = _context.sent.email;
                      this.scoreservice.addScore(this.score);
                      _context.next = 15;
                      break;

                    case 14:
                      this.czas = this.seconds;

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, 10);
        }
      }]);

      return DodawanieComponent;
    }();

    DodawanieComponent.ɵfac = function DodawanieComponent_Factory(t) {
      return new (t || DodawanieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    DodawanieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DodawanieComponent,
      selectors: [["app-dodawanie"]],
      decls: 14,
      vars: 10,
      consts: [[1, "btn", "btn-success", "m-1", 3, "click"], [1, "btn", "btn-danger", "m-1", 3, "click"], [3, "hidden"], [1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["type", "button", 1, "col", "btn-dark", 3, "click"]],
      template: function DodawanieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DodawanieComponent_Template_button_click_2_listener() {
            return ctx.getRandom();
          })("click", function DodawanieComponent_Template_button_click_2_listener() {
            return ctx.resetPytania();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nowe zadanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DodawanieComponent_Template_button_click_4_listener() {
            return ctx.przegrales();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DodawanieComponent_div_13_Template, 4, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Odpowiadaj p\xF3ki nie osi\u0105gniesz ", ctx.iloscPotrzebnychOdpowiedzi, " dobych wynik\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("dobre odpowiedzi: ", ctx.dobreodpowiedzi, " w ci\u0105gu ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, ctx.czas, "1.2-2"), " sekund");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.liczba1, " + ", ctx.liczba2, " = ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabOdpowiedzi2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvZGF3YW5pZS9kb2Rhd2FuaWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DodawanieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dodawanie',
          templateUrl: './dodawanie.component.html',
          styleUrls: ['./dodawanie.component.css']
        }]
      }], function () {
        return [{
          type: _services_score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var FooterComponent = /*#__PURE__*/function () {
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
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 2,
      vars: 0,
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/login/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppLoginDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DashboardComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email Verified: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.photoURL ? user_r1.photoURL : "/assets/dummy-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r1.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.displayName ? user_r1.displayName : "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.emailVerified);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(authService) {
        _classCallCheck(this, DashboardComponent);

        this.authService = authService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 8,
      vars: 1,
      consts: [[1, "container"], [1, "row"], ["role", "main", 1, "col-md-9", "ml-sm-auto", "col-lg-10", "px-4"], [1, "inner-adjust"], [1, "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "h2"], ["class", "row", 4, "ngIf"], [1, "col-md-12"], [1, "media"], ["width", "100px", "height", "100px", 1, "align-self-start", "mr-5", "img-thumbnail", "rounded-circle", 3, "src", "alt"], [1, "media-body"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 16, 5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/forgot-password/forgot-password.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
    \********************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppLoginForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(authService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.authService = authService;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 17,
      vars: 0,
      consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "text-center"], [1, "formGroup"], ["type", "email", "placeholder", "Email Address", "required", "", 1, "formControl"], ["passwordResetEmail", ""], ["type", "submit", "value", "Reset Password", 1, "btn", "btnPrimary", 3, "click"], [1, "redirectToLogin"], ["routerLink", "/sign-in", 1, "redirect"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter your email address to request a password reset.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_input_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return ctx.authService.ForgotPassword(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go back to ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/sign-in/sign-in.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login/sign-in/sign-in.component.ts ***!
    \****************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppLoginSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(authService) {
        _classCallCheck(this, SignInComponent);

        this.authService = authService;
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 29,
      vars: 0,
      consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], ["type", "text", "placeholder", "Username", "required", "", 1, "formControl"], ["userName", ""], ["type", "password", "placeholder", "Password", "required", "", 1, "formControl"], ["userPassword", ""], ["type", "button", "value", "Log in", 1, "btn", "btn-primary", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fab", "fa-google-plus-g"], [1, "forgotPassword"], ["routerLink", "/forgot-password", 1, "btn", "btn-primary"], [1, "redirectToLogin"], ["routerLink", "/register-user", 1, "btn", "btn-primary"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_input_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.authService.SignIn(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_18_listener() {
            return ctx.authService.GoogleAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Log in with Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Don't have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/sign-up/sign-up.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login/sign-up/sign-up.component.ts ***!
    \****************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppLoginSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(authService) {
        _classCallCheck(this, SignUpComponent);

        this.authService = authService;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 26,
      vars: 0,
      consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], ["type", "email", "placeholder", "Email Address", "required", "", 1, "formControl"], ["userEmail", ""], ["type", "password", "placeholder", "Password", "required", "", 1, "formControl"], ["userPwd", ""], ["type", "button", "value", "Sign Up", 1, "btn", "btn-primary", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fab", "fa-google-plus-g"], [1, "redirectToLogin"], ["routerLink", "/sign-in", 1, "btn", "btn-primary"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_input_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.authService.SignUp(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_18_listener() {
            return ctx.authService.GoogleAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Continue with Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/verify-email/verify-email.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/login/verify-email/verify-email.component.ts ***!
    \**************************************************************/

  /*! exports provided: VerifyEmailComponent */

  /***/
  function srcAppLoginVerifyEmailVerifyEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () {
      return VerifyEmailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function VerifyEmailComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We have sent a confirmation email to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please check your email and click on the link to verfiy your email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
      }
    }

    var VerifyEmailComponent = /*#__PURE__*/function () {
      function VerifyEmailComponent(authService) {
        _classCallCheck(this, VerifyEmailComponent);

        this.authService = authService;
      }

      _createClass(VerifyEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerifyEmailComponent;
    }();

    VerifyEmailComponent.ɵfac = function VerifyEmailComponent_Factory(t) {
      return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    VerifyEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VerifyEmailComponent,
      selectors: [["app-verify-email"]],
      decls: 15,
      vars: 1,
      consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], ["class", "formGroup", 4, "ngIf"], [1, "formGroup"], ["type", "button", 1, "btn", "btnPrimary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "redirectToLogin"], ["routerLink", "/sign-in", 1, "redirect"], [1, "text-center"]],
      template: function VerifyEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thank You for Registering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerifyEmailComponent_div_5_Template, 8, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyEmailComponent_Template_button_click_7_listener() {
            return ctx.authService.SendVerificationMail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Resend Verification Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Go back to?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifyEmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-verify-email',
          templateUrl: './verify-email.component.html',
          styleUrls: ['./verify-email.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_11_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.authService.SignOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wyloguj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zaloguj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r7 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.email);
      }
    }

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(authService) {
        _classCallCheck(this, NavComponent);

        this.authService = authService;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 16,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-md", "bg-primary", "navbar-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#mainmenu", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mainmenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["routerLink", "bohater", 1, "nav-link"], ["routerLink", "dodawanie", 1, "nav-link"], ["class", "nav-item ", 4, "ngIf", "ngIfElse"], ["login", ""], ["class", "nav-link", "routerLink", "dashboard", 4, "ngIf"], ["routerLink", "sign-in", 1, "nav-link", 3, "click"], ["routerLink", "sign-in", 1, "nav-link"], ["routerLink", "dashboard", 1, "nav-link"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bohater");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dodawanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavComponent_li_11_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavComponent_a_15_Template, 2, 1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sekcjadodawanie/sekcjadodawanie.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/sekcjadodawanie/sekcjadodawanie.component.ts ***!
    \**************************************************************/

  /*! exports provided: SekcjadodawanieComponent */

  /***/
  function srcAppSekcjadodawanieSekcjadodawanieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SekcjadodawanieComponent", function () {
      return SekcjadodawanieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dodawanie_dodawanie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dodawanie/dodawanie.component */
    "./src/app/dodawanie/dodawanie.component.ts");
    /* harmony import */


    var _dodawanie_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dodawanie/aside/aside.component */
    "./src/app/dodawanie/aside/aside.component.ts");

    var SekcjadodawanieComponent = /*#__PURE__*/function () {
      function SekcjadodawanieComponent() {
        _classCallCheck(this, SekcjadodawanieComponent);
      }

      _createClass(SekcjadodawanieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SekcjadodawanieComponent;
    }();

    SekcjadodawanieComponent.ɵfac = function SekcjadodawanieComponent_Factory(t) {
      return new (t || SekcjadodawanieComponent)();
    };

    SekcjadodawanieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SekcjadodawanieComponent,
      selectors: [["app-sekcjadodawanie"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-12", "col-xl-8", "my-1", "text-center"], [1, "col-12", "col-xl-4", "bg-light", "my-1", "text-center"]],
      template: function SekcjadodawanieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-dodawanie", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aside", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_dodawanie_dodawanie_component__WEBPACK_IMPORTED_MODULE_1__["DodawanieComponent"], _dodawanie_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nla2NqYWRvZGF3YW5pZS9zZWtjamFkb2Rhd2FuaWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SekcjadodawanieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sekcjadodawanie',
          templateUrl: './sekcjadodawanie.component.html',
          styleUrls: ['./sekcjadodawanie.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['sign-in']);
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this8 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this8.userData = user;
            localStorage.setItem('user', JSON.stringify(_this8.userData));
            JSON.parse(localStorage.getItem('user'));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      } // Sign in with email/password


      _createClass(AuthService, [{
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this9 = this;

          return this.afAuth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this9.ngZone.run(function () {
              _this9.router.navigate(['dodawanie']);
            });

            _this9.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          var _this10 = this;

          return this.afAuth.createUserWithEmailAndPassword(email, password).then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this10.SendVerificationMail();

            _this10.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Send email verfificaiton when new user sign up

      }, {
        key: "SendVerificationMail",
        value: function SendVerificationMail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.currentUser;

                  case 2:
                    return _context2.abrupt("return", _context2.sent.sendEmailVerification().then(function () {
                      _this11.router.navigate(['verify-email-address']);
                    }));

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(function () {
            window.alert('Password reset email sent, check your inbox.');
          })["catch"](function (error) {
            window.alert(error);
          });
        } // Returns true when user is looged in and email is verified

      }, {
        key: "GoogleAuth",
        // Sign in with Google
        value: function GoogleAuth() {
          var _this12 = this;

          return this.AuthLogin(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).then(function () {
            _this12.router.navigate(['dodawanie']);
          });
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this13 = this;

          return this.afAuth.signInWithPopup(provider).then(function (result) {
            _this13.ngZone.run(function () {
              _this13.router.navigate(['dashboard']);
            });

            _this13.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error);
          });
        }
        /* Setting up user data when sign in with username/password,
        sign up with username/password and sign in with social auth
        provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
          };
          return userRef.set(userData, {
            merge: true
          });
        } // Sign out

      }, {
        key: "SignOut",
        value: function SignOut() {
          var _this14 = this;

          return this.afAuth.signOut().then(function () {
            localStorage.removeItem('user');

            _this14.router.navigate(['sign-in']);

            _this14.refresh();
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          location.reload();
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null && user.emailVerified !== false ? true : false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/score.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/score.service.ts ***!
    \*******************************************/

  /*! exports provided: ScoreService */

  /***/
  function srcAppServicesScoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreService", function () {
      return ScoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ScoreService = /*#__PURE__*/function () {
      function ScoreService(db) {
        _classCallCheck(this, ScoreService);

        this.db = db;
        this.dbPath = '/highscore';
        this.highscoreRef = null;
        this.highscoreRef = db.collection(this.dbPath);
      }

      _createClass(ScoreService, [{
        key: "addScore",
        value: function addScore(score) {
          var param = JSON.parse(JSON.stringify(score));
          this.highscoreRef.add(param);
        }
      }, {
        key: "getScoreList",
        value: function getScoreList() {
          return this.highscoreRef;
        }
      }]);

      return ScoreService;
    }();

    ScoreService.ɵfac = function ScoreService_Factory(t) {
      return new (t || ScoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    ScoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScoreService,
      factory: ScoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/score.ts":
  /*!***********************************!*\
    !*** ./src/app/services/score.ts ***!
    \***********************************/

  /*! exports provided: Score */

  /***/
  function srcAppServicesScoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Score", function () {
      return Score;
    });

    var Score = function Score() {
      _classCallCheck(this, Score);
    };
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
    });

    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyBeiE7JebqOSCyRWRnr4fjKORUbujyP4fU",
        authDomain: "mojagraaa.firebaseapp.com",
        databaseURL: "https://mojagraaa.firebaseio.com",
        projectId: "mojagraaa",
        storageBucket: "mojagraaa.appspot.com",
        messagingSenderId: "965533806322",
        appId: "1:965533806322:web:141c6c738031bd14d1aa6b",
        measurementId: "G-XCDW9NZN8F"
      }
    };
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
    /*! D:\angular\gra\gra\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map