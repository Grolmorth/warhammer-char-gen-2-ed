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


    var _import_bohatera_import_bohatera_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./import-bohatera/import-bohatera.component */
    "./src/app/import-bohatera/import-bohatera.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/forgot-password/forgot-password.component */
    "./src/app/login/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/verify-email/verify-email.component */
    "./src/app/login/verify-email/verify-email.component.ts");
    /* harmony import */


    var _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/sign-in/sign-in.component */
    "./src/app/login/sign-in/sign-in.component.ts");
    /* harmony import */


    var _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/sign-up/sign-up.component */
    "./src/app/login/sign-up/sign-up.component.ts");
    /* harmony import */


    var _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/dashboard/dashboard.component */
    "./src/app/login/dashboard/dashboard.component.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sekcjadodawanie/sekcjadodawanie.component */
    "./src/app/sekcjadodawanie/sekcjadodawanie.component.ts");
    /* harmony import */


    var _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./bohater/bohater.component */
    "./src/app/bohater/bohater.component.ts");
    /* harmony import */


    var _zdolnosci_zdolnosci_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./zdolnosci/zdolnosci.component */
    "./src/app/zdolnosci/zdolnosci.component.ts");
    /* harmony import */


    var _umiejetnosci_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./umiejetnosci/umiejetnosci.component */
    "./src/app/umiejetnosci/umiejetnosci.component.ts");
    /* harmony import */


    var _profesje_profesje_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profesje/profesje.component */
    "./src/app/profesje/profesje.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'bohater',
      pathMatch: 'full'
    }, {
      path: 'bohater',
      component: _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_10__["BohaterComponent"]
    }, {
      path: 'zdolnosci',
      component: _zdolnosci_zdolnosci_component__WEBPACK_IMPORTED_MODULE_11__["ZdolnosciComponent"]
    }, {
      path: 'umiejetnosci',
      component: _umiejetnosci_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_12__["UmiejetnosciComponent"]
    }, {
      path: 'profesje',
      component: _profesje_profesje_component__WEBPACK_IMPORTED_MODULE_13__["ProfesjeComponent"]
    }, {
      path: 'dodawanie',
      component: _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_9__["SekcjadodawanieComponent"]
    }, {
      path: 'sign-in',
      component: _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
    }, {
      path: 'register-user',
      component: _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]
    }, {
      path: 'dashboard',
      component: _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'forgot-password',
      component: _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
    }, {
      path: 'verify-email-address',
      component: _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__["VerifyEmailComponent"]
    }, {
      path: 'import',
      component: _import_bohatera_import_bohatera_component__WEBPACK_IMPORTED_MODULE_0__["ImportBohateraComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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
    /* harmony import */


    var _bohater_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./bohater/import-export/import-export.component */
    "./src/app/bohater/import-export/import-export.component.ts");
    /* harmony import */


    var _import_bohatera_import_bohatera_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./import-bohatera/import-bohatera.component */
    "./src/app/import-bohatera/import-bohatera.component.ts");
    /* harmony import */


    var _bohater_footer_bohater_footer_bohater_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./bohater/footer-bohater/footer-bohater.component */
    "./src/app/bohater/footer-bohater/footer-bohater.component.ts");
    /* harmony import */


    var _profesje_profesje_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./profesje/profesje.component */
    "./src/app/profesje/profesje.component.ts");
    /* harmony import */


    var _umiejetnosci_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./umiejetnosci/umiejetnosci.component */
    "./src/app/umiejetnosci/umiejetnosci.component.ts");
    /* harmony import */


    var _zdolnosci_zdolnosci_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./zdolnosci/zdolnosci.component */
    "./src/app/zdolnosci/zdolnosci.component.ts");
    /* harmony import */


    var _bohater_chat_chat_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./bohater/chat/chat.component */
    "./src/app/bohater/chat/chat.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

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
      imports: [[_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_13__["NgOptionHighlightModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_49__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_50__["MatButtonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dodawanie_dodawanie_component__WEBPACK_IMPORTED_MODULE_4__["DodawanieComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"], _dodawanie_aside_aside_component__WEBPACK_IMPORTED_MODULE_10__["AsideComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"], _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_19__["VerifyEmailComponent"], _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"], _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"], _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_25__["SekcjadodawanieComponent"], _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_26__["BohaterComponent"], _bohater_bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_27__["BohaterBohaterComponent"], _bohater_bohater_opis_bohatera_bohater_opis_bohatera_component__WEBPACK_IMPORTED_MODULE_28__["BohaterOpisBohateraComponent"], _bohater_bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_29__["BohaterCechyComponent"], _bohater_bohater_bron_bohater_bron_component__WEBPACK_IMPORTED_MODULE_30__["BohaterBronComponent"], _bohater_bohater_pancerz_bohater_pancerz_component__WEBPACK_IMPORTED_MODULE_31__["BohaterPancerzComponent"], _bohater_bohater_gracz_bohater_gracz_component__WEBPACK_IMPORTED_MODULE_32__["BohaterGraczComponent"], _bohater_bohater_punkty_doswiadczenia_bohater_punkty_doswiadczenia_component__WEBPACK_IMPORTED_MODULE_33__["BohaterPunktyDoswiadczeniaComponent"], _bohater_bohater_ruch_w_walce_bohater_ruch_w_walce_component__WEBPACK_IMPORTED_MODULE_34__["BohaterRuchWWalceComponent"], _bohater_bohater_punkty_zbroi_bohater_punkty_zbroi_component__WEBPACK_IMPORTED_MODULE_35__["BohaterPunktyZbroiComponent"], _bohater_bohater_zestawienie_akcji_bohater_zestawienie_akcji_component__WEBPACK_IMPORTED_MODULE_36__["BohaterZestawienieAkcjiComponent"], _bohater_bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_37__["BohaterUmiejetnosciComponent"], _bohater_bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_38__["BohaterZdolnosciComponent"], _bohater_bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_39__["BohaterWyposarzenieComponent"], _bohater_bohater_pieniadze_bohater_pieniadze_component__WEBPACK_IMPORTED_MODULE_40__["BohaterPieniadzeComponent"], _bohater_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_41__["ImportExportComponent"], _import_bohatera_import_bohatera_component__WEBPACK_IMPORTED_MODULE_42__["ImportBohateraComponent"], _bohater_footer_bohater_footer_bohater_component__WEBPACK_IMPORTED_MODULE_43__["FooterBohaterComponent"], _profesje_profesje_component__WEBPACK_IMPORTED_MODULE_44__["ProfesjeComponent"], _umiejetnosci_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_45__["UmiejetnosciComponent"], _zdolnosci_zdolnosci_component__WEBPACK_IMPORTED_MODULE_46__["ZdolnosciComponent"], _bohater_chat_chat_component__WEBPACK_IMPORTED_MODULE_47__["ChatComponent"]],
        imports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_13__["NgOptionHighlightModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_49__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_50__["MatButtonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dodawanie_dodawanie_component__WEBPACK_IMPORTED_MODULE_4__["DodawanieComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"], _dodawanie_aside_aside_component__WEBPACK_IMPORTED_MODULE_10__["AsideComponent"], _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"], _login_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_19__["VerifyEmailComponent"], _login_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_22__["SignUpComponent"], _login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"], _sekcjadodawanie_sekcjadodawanie_component__WEBPACK_IMPORTED_MODULE_25__["SekcjadodawanieComponent"], _bohater_bohater_component__WEBPACK_IMPORTED_MODULE_26__["BohaterComponent"], _bohater_bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_27__["BohaterBohaterComponent"], _bohater_bohater_opis_bohatera_bohater_opis_bohatera_component__WEBPACK_IMPORTED_MODULE_28__["BohaterOpisBohateraComponent"], _bohater_bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_29__["BohaterCechyComponent"], _bohater_bohater_bron_bohater_bron_component__WEBPACK_IMPORTED_MODULE_30__["BohaterBronComponent"], _bohater_bohater_pancerz_bohater_pancerz_component__WEBPACK_IMPORTED_MODULE_31__["BohaterPancerzComponent"], _bohater_bohater_gracz_bohater_gracz_component__WEBPACK_IMPORTED_MODULE_32__["BohaterGraczComponent"], _bohater_bohater_punkty_doswiadczenia_bohater_punkty_doswiadczenia_component__WEBPACK_IMPORTED_MODULE_33__["BohaterPunktyDoswiadczeniaComponent"], _bohater_bohater_ruch_w_walce_bohater_ruch_w_walce_component__WEBPACK_IMPORTED_MODULE_34__["BohaterRuchWWalceComponent"], _bohater_bohater_punkty_zbroi_bohater_punkty_zbroi_component__WEBPACK_IMPORTED_MODULE_35__["BohaterPunktyZbroiComponent"], _bohater_bohater_zestawienie_akcji_bohater_zestawienie_akcji_component__WEBPACK_IMPORTED_MODULE_36__["BohaterZestawienieAkcjiComponent"], _bohater_bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_37__["BohaterUmiejetnosciComponent"], _bohater_bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_38__["BohaterZdolnosciComponent"], _bohater_bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_39__["BohaterWyposarzenieComponent"], _bohater_bohater_pieniadze_bohater_pieniadze_component__WEBPACK_IMPORTED_MODULE_40__["BohaterPieniadzeComponent"], _bohater_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_41__["ImportExportComponent"], _import_bohatera_import_bohatera_component__WEBPACK_IMPORTED_MODULE_42__["ImportBohateraComponent"], _bohater_footer_bohater_footer_bohater_component__WEBPACK_IMPORTED_MODULE_43__["FooterBohaterComponent"], _profesje_profesje_component__WEBPACK_IMPORTED_MODULE_44__["ProfesjeComponent"], _umiejetnosci_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_45__["UmiejetnosciComponent"], _zdolnosci_zdolnosci_component__WEBPACK_IMPORTED_MODULE_46__["ZdolnosciComponent"], _bohater_chat_chat_component__WEBPACK_IMPORTED_MODULE_47__["ChatComponent"]],
          imports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_13__["NgOptionHighlightModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_49__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_50__["MatButtonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__["BrowserAnimationsModule"]],
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    function BohaterBohaterComponent_h2_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.imie);
      }
    }

    function BohaterBohaterComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Imi\u0119");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterBohaterComponent_div_12_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.imieId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_div_12_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.noweImie();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wybierz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.imieId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.imieId === undefined || ctx_r1.imieId.valueOf() === "");
      }
    }

    function BohaterBohaterComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.inneImie();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zmie\u0144 imi\u0119");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterBohaterComponent_div_14_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-select", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterBohaterComponent_div_14_div_6_Template_ng_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.selectedRasaId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_div_14_div_6_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.nowaRasa();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wybierz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r10.cechy)("ngModel", ctx_r10.selectedRasaId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.selectedRasaId === undefined || ctx_r10.selectedRasaId === null);
      }
    }

    function BohaterBohaterComponent_div_14_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_div_14_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.innaRasa();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zmie\u0144 ras\u0119");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterBohaterComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rasa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BohaterBohaterComponent_div_14_div_6_Template, 4, 3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BohaterBohaterComponent_div_14_button_10_Template, 2, 0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.aktualne.rasatitle === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.aktualne.rasatitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.aktualne.rasatitle !== "" && ctx_r3.aktualne.importowane !== true);
      }
    }

    function BohaterBohaterComponent_div_15_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-select", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterBohaterComponent_div_15_div_6_Template_ng_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.selectedProfesjaId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_div_15_div_6_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.nowaProfesja();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wybierz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r17.profesjaRoll)("ngModel", ctx_r17.selectedProfesjaId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r17.selectedProfesjaId === undefined || ctx_r17.selectedProfesjaId === null);
      }
    }

    function BohaterBohaterComponent_div_15_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterBohaterComponent_div_15_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.innaProfesja();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zmie\u0144 profesj\u0119");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterBohaterComponent_div_15_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opis profesji/postaci");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Opisz swoj\u0105 posta\u0107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterBohaterComponent_div_15_div_11_Template_textarea_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.share.schematRozwojuProfesja.opis = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.share.schematRozwojuProfesja.opis);
      }
    }

    function BohaterBohaterComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profesja");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BohaterBohaterComponent_div_15_div_6_Template, 4, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BohaterBohaterComponent_div_15_button_10_Template, 2, 0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BohaterBohaterComponent_div_15_div_11_Template, 8, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.aktualne.profesjatitle === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.aktualne.profesjatitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.aktualne.profesjatitle !== "" && ctx_r4.aktualne.importowane !== true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.aktualne.profesjatitle !== "");
      }
    }

    var BohaterBohaterComponent = /*#__PURE__*/function () {
      function BohaterBohaterComponent(logika, share) {
        _classCallCheck(this, BohaterBohaterComponent);

        this.logika = logika;
        this.share = share;
        this.data = this.selectedRasaId;
        this.dataa = this.selectedProfesjaId;
      } // pobranie wszystkich ras z serwisu


      _createClass(BohaterBohaterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.logika.getListaRasy().subscribe(function (items) {
            return _this.cechy = items;
          });
          this.aktualne = this.share.poczatkoweStatystykiRasowe;
        } // logika przyciusku do zmiany imienia

      }, {
        key: "noweImie",
        value: function noweImie() {
          this.share.changeImie(this.imieId);
        }
      }, {
        key: "inneImie",
        value: function inneImie() {
          this.share.changeImie('');
        } // logika przyciusku do zmiany rasy

      }, {
        key: "nowaRasa",
        value: function nowaRasa() {
          var _this2 = this;

          console.log('zmieniono rase na', this.selectedRasaId);
          this.share.changeRasa(this.selectedRasaId); // pobranie listy możliwych profesji

          this.logika.getListaProfesje(this.selectedRasaId).subscribe(function (items) {
            return _this2.profesjaRoll = items;
          });
        }
      }, {
        key: "innaRasa",
        value: function innaRasa() {
          var _this3 = this;

          // ukrycie i pokazanie elementów html
          console.log('wycofano rase', this.selectedRasaId, 'ponowne wybieranie rasy');
          this.share.changeRasa(this.selectedRasaId); // wyzerowanie statystyk początkowych

          this.share.resetStatystyk(); // zresetowanie listy profesji

          this.selectedRasaId = null;
          this.selectedProfesjaId = null;
          this.logika.getListaProfesje(this.selectedRasaId).subscribe(function (items) {
            return _this3.profesjaRoll = items;
          });
          this.share.poczatkoweStatystykiRasowe.rasatitle = '';
          this.share.poczatkoweStatystykiRasowe.profesjatitle = '';
        } // logika przyciusku do zmiany profesji

      }, {
        key: "nowaProfesja",
        value: function nowaProfesja() {
          console.log('nowa profesja', this.selectedProfesjaId);
          this.share.changeProfesja(this.selectedProfesjaId);
          this.share.changeAktualne();
          this.umiejetnosciProfesji = this.share.schematRozwojuProfesja;
        }
      }, {
        key: "innaProfesja",
        value: function innaProfesja() {
          this.share.resetStatystykProfesja();
          this.share.poczatkoweStatystykiRasowe.profesjatitle = '';
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
      decls: 16,
      vars: 5,
      consts: [[1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title"], [1, ""], [1, "border-bottom", "border-dark"], ["for", "nameInput", 1, "m-0", "p-0"], [4, "ngIf"], ["class", "m-1 mat-button", "mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "form__group", "field"], ["matInput", "", "type", "input", "id", "imie", "required", "", "placeholder", "Imi\u0119", "name", "imi\u0119", 1, "form__field", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "m-1", "mat-button", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 1, "m-1", "mat-button", 3, "click"], ["for", "inputRasa", 1, "m-0", "p-0"], ["class", "text-center", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "class", "mat-button m-1", 3, "click", 4, "ngIf"], [1, "text-center"], ["bindLabel", "rasatitle", "bindValue", "rasatitle", "placeholder", "Wybierz", 1, "custom", 3, "items", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "mat-button", "m-1", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 1, "mat-button", "m-1", 3, "click"], ["for", "inputProfesja", 1, "m-0", "p-0"], ["class", "m-2 p-2 text-justify profesja-opis text-center", 4, "ngIf"], ["bindLabel", "profesjatitle", "bindValue", "profesjatitle", "placeholder", "Wybierz", 1, "custom", 3, "items", "ngModel", "ngModelChange"], [1, "m-2", "p-2", "text-justify", "profesja-opis", "text-center"], [1, "p-1", "title", "text-center"], [1, "p-1", "m-2", "full-width"], ["matInput", "", 3, "ngModel", "ngModelChange"]],
      template: function BohaterBohaterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bohater");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Imi\u0119 Bohatera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BohaterBohaterComponent_h2_11_Template, 2, 1, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BohaterBohaterComponent_div_12_Template, 7, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BohaterBohaterComponent_button_13_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BohaterBohaterComponent_div_14_Template, 11, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BohaterBohaterComponent_div_15_Template, 12, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aktualne.imie !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aktualne.imie === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aktualne.imie !== "" && ctx.aktualne.importowane !== true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aktualne.imie !== "" || ctx.aktualne.rasatitle !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aktualne.rasatitle !== "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"]],
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function BohaterCechyComponent_div_0_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.zdolnosciStatystykiRasowe.WW + ctx_r1.zdolnosciStatystykiProfesji.WW);
      }
    }

    function BohaterCechyComponent_div_0_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.zdolnosciStatystykiRasowe.US + ctx_r2.zdolnosciStatystykiProfesji.US);
      }
    }

    function BohaterCechyComponent_div_0_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.zdolnosciStatystykiRasowe.K + ctx_r3.zdolnosciStatystykiProfesji.K);
      }
    }

    function BohaterCechyComponent_div_0_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.zdolnosciStatystykiRasowe.Odp + ctx_r4.zdolnosciStatystykiProfesji.Odp);
      }
    }

    function BohaterCechyComponent_div_0_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.zdolnosciStatystykiRasowe.Zr + ctx_r5.zdolnosciStatystykiProfesji.Zr);
      }
    }

    function BohaterCechyComponent_div_0_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.zdolnosciStatystykiRasowe.Int + ctx_r6.zdolnosciStatystykiProfesji.Int);
      }
    }

    function BohaterCechyComponent_div_0_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.zdolnosciStatystykiRasowe.SW + ctx_r7.zdolnosciStatystykiProfesji.SW);
      }
    }

    function BohaterCechyComponent_div_0_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.zdolnosciStatystykiRasowe.Ogd + ctx_r8.zdolnosciStatystykiProfesji.Ogd);
      }
    }

    function BohaterCechyComponent_div_0_div_120_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.zdolnosciStatystykiRasowe.Zyw + ctx_r9.zdolnosciStatystykiProfesji.Zyw);
      }
    }

    function BohaterCechyComponent_div_0_div_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.zdolnosciStatystykiRasowe.Sz + ctx_r10.zdolnosciStatystykiProfesji.Sz);
      }
    }

    function BohaterCechyComponent_div_0_div_166_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterCechyComponent_div_0_div_166_Template_ng_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.mod = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterCechyComponent_div_0_div_166_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.shallya(ctx_r14.mod);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0141aska Shallyi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r11.mods)("ngModel", ctx_r11.mod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.mod === undefined);
      }
    }

    function BohaterCechyComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cechy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cechy g\u0142\xF3wne");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "WW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "US");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "K");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Odp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Zr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Int");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ogd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pocz\u0105tkowa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BohaterCechyComponent_div_0_div_30_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BohaterCechyComponent_div_0_div_33_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BohaterCechyComponent_div_0_div_36_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, BohaterCechyComponent_div_0_div_39_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BohaterCechyComponent_div_0_div_42_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, BohaterCechyComponent_div_0_div_45_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BohaterCechyComponent_div_0_div_48_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, BohaterCechyComponent_div_0_div_51_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Schemat Rozwoju");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Aktualna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Cechy drugorz\u0119dne");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u017Byw");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Wt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Sz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "PO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "PP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Pocz\u0105tkowa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, BohaterCechyComponent_div_0_div_120_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, BohaterCechyComponent_div_0_div_125_Template, 3, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Schemat Rozwoju");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Aktualna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, BohaterCechyComponent_div_0_div_166_Template, 5, 3, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterCechyComponent_div_0_Template_button_click_169_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.po(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Punkty Ob\u0142\u0119du +");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterCechyComponent_div_0_Template_button_click_171_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.po(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Punkty Ob\u0142\u0119du -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterCechyComponent_div_0_Template_button_click_174_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.pp(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Punkty Przeznaczenia +");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterCechyComponent_div_0_Template_button_click_176_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.pp(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Punkty Przeznaczenia -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.WW, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.WW + ctx_r0.zdolnosciStatystykiProfesji.WW !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.US, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.US + ctx_r0.zdolnosciStatystykiProfesji.US !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.K, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.K + ctx_r0.zdolnosciStatystykiProfesji.K !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.Odp, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.Odp + ctx_r0.zdolnosciStatystykiProfesji.Odp !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.Zr, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.Zr + ctx_r0.zdolnosciStatystykiProfesji.Zr !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.Int, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.Int + ctx_r0.zdolnosciStatystykiProfesji.Int !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.SW, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.SW + ctx_r0.zdolnosciStatystykiProfesji.SW !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.Ogd, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.Ogd + ctx_r0.zdolnosciStatystykiProfesji.Ogd !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.WW, "/", ctx_r0.schematRozwoju.WW, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.US, "/", ctx_r0.schematRozwoju.US, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.K, "/", ctx_r0.schematRozwoju.K, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.Odp, "/", ctx_r0.schematRozwoju.Odp, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.Zr, "/", ctx_r0.schematRozwoju.Zr, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.Int, "/", ctx_r0.schematRozwoju.Int, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.SW, "/", ctx_r0.schematRozwoju.SW, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.Ogd, "/", ctx_r0.schematRozwoju.Ogd, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.WW);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.US);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.K);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Odp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Zr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Int);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.SW);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Ogd);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.poczatkowa.A);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.Zyw, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.Zr + ctx_r0.zdolnosciStatystykiProfesji.Zyw !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.poczatkowa.Sz, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zdolnosciStatystykiRasowe.Sz + ctx_r0.zdolnosciStatystykiProfesji.Sz !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.poczatkowa.Mag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.A, "/", ctx_r0.schematRozwoju.A, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.Zyw, "/", ctx_r0.schematRozwoju.Zyw, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.Sz, "/", ctx_r0.schematRozwoju.Sz, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.wykupionyRzowoj.Mag, "/", ctx_r0.schematRozwoju.Mag, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.A);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Zyw);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.S);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Wt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Sz);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.Mag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.PO);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.aktualne.PP);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.share.poczatkoweStatystykiRasowe.shallya);
      }
    }

    var BohaterCechyComponent = /*#__PURE__*/function () {
      function BohaterCechyComponent(logika, share) {
        _classCallCheck(this, BohaterCechyComponent);

        this.logika = logika;
        this.share = share;
        this.mods = ['Walka Wręcz', 'Umiejętności Strzeleckie', 'Krzepa', 'Odporność', 'Zręczność', 'Inteligencja', 'Siła Woli', 'Ogłada'];
      }

      _createClass(BohaterCechyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.poczatkowa = this.share.poczatkoweStatystykiRasowe;
          this.schematRozwoju = this.share.schematRozwojuProfesja;
          this.aktualne = this.share.sumowaneStatystyki;
          this.zdolnosciStatystykiRasowe = this.share.zdolnosciStatystykiRasowe;
          this.zdolnosciStatystykiProfesji = this.share.zdolnosciStatystykiProfesji;
          this.wykupionyRzowoj = this.share.wykupionyRozwoj;
        }
      }, {
        key: "po",
        value: function po(mod) {
          if (mod === true) {
            this.share.poczatkoweStatystykiRasowe.PO = this.share.poczatkoweStatystykiRasowe.PO + 1;
          } else {
            this.share.poczatkoweStatystykiRasowe.PO = this.share.poczatkoweStatystykiRasowe.PO - 1;
          }

          this.share.changeAktualne();
        }
      }, {
        key: "pp",
        value: function pp(mod) {
          if (mod === true) {
            this.share.poczatkoweStatystykiRasowe.PP = this.share.poczatkoweStatystykiRasowe.PP + 1;
          } else {
            this.share.poczatkoweStatystykiRasowe.PP = this.share.poczatkoweStatystykiRasowe.PP - 1;
          }

          this.share.changeAktualne();
        }
      }, {
        key: "shallya",
        value: function shallya(mod) {
          if (this.share.poczatkoweStatystykiRasowe.shallya === true) {
            if (this.poczatkowa.rasatitle === "Człowiek") {
              if (mod === "Walka Wręcz") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
                this.shalyaZmiana = 31;
              }

              if (mod === "Umiejętności Strzeleckie") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
                this.shalyaZmiana = 31;
              }

              if (mod === "Krzepa") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
                this.shalyaZmiana = 31;
              }

              if (mod === "Odporność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
                this.shalyaZmiana = 31;
              }

              if (mod === "Zręczność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
                this.shalyaZmiana = 31;
              }

              if (mod === "Inteligencja") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
                this.shalyaZmiana = 31;
              }

              if (mod === "Siła Woli") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
                this.shalyaZmiana = 31;
              }

              if (mod === "Ogłada") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
                this.shalyaZmiana = 31;
              }
            }

            if (this.poczatkowa.rasatitle === "Krasnolud") {
              if (mod === "Walka Wręcz") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
                this.shalyaZmiana = 41;
              }

              if (mod === "Umiejętności Strzeleckie") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
                this.shalyaZmiana = 31;
              }

              if (mod === "Krzepa") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
                this.shalyaZmiana = 31;
              }

              if (mod === "Odporność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
                this.shalyaZmiana = 41;
              }

              if (mod === "Zręczność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
                this.shalyaZmiana = 21;
              }

              if (mod === "Inteligencja") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
                this.shalyaZmiana = 31;
              }

              if (mod === "Siła Woli") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
                this.shalyaZmiana = 31;
              }

              if (mod === "Ogłada") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
                this.shalyaZmiana = 21;
              }
            }

            if (this.poczatkowa.rasatitle === "Elf") {
              if (mod === "Walka Wręcz") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
                this.shalyaZmiana = 31;
              }

              if (mod === "Umiejętności Strzeleckie") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
                this.shalyaZmiana = 41;
              }

              if (mod === "Krzepa") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
                this.shalyaZmiana = 31;
              }

              if (mod === "Odporność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
                this.shalyaZmiana = 31;
              }

              if (mod === "Zręczność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
                this.shalyaZmiana = 41;
              }

              if (mod === "Inteligencja") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
                this.shalyaZmiana = 31;
              }

              if (mod === "Siła Woli") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
                this.shalyaZmiana = 31;
              }

              if (mod === "Ogłada") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
                this.shalyaZmiana = 31;
              }
            }

            if (this.poczatkowa.rasatitle === "Niziołek") {
              if (mod === "Walka Wręcz") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
                this.shalyaZmiana = 21;
              }

              if (mod === "Umiejętności Strzeleckie") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
                this.shalyaZmiana = 41;
              }

              if (mod === "Krzepa") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
                this.shalyaZmiana = 21;
              }

              if (mod === "Odporność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
                this.shalyaZmiana = 21;
              }

              if (mod === "Zręczność") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
                this.shalyaZmiana = 41;
              }

              if (mod === "Inteligencja") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
                this.shalyaZmiana = 31;
              }

              if (mod === "Siła Woli") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
                this.shalyaZmiana = 31;
              }

              if (mod === "Ogłada") {
                this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
                this.shalyaZmiana = 41;
              }
            }
          }
        }
      }, {
        key: "shallyaConfirm",
        value: function shallyaConfirm(mod) {
          if (this.poczatkowa.rasatitle === "Człowiek") {
            if (mod === "Walka Wręcz") {
              this.share.poczatkoweStatystykiRasowe.WW = 31;
            }

            if (mod === "Umiejętności Strzeleckie") {
              this.share.poczatkoweStatystykiRasowe.US = 31;
            }

            if (mod === "Krzepa") {
              this.share.poczatkoweStatystykiRasowe.K = 31;
            }

            if (mod === "Odporność") {
              this.share.poczatkoweStatystykiRasowe.Odp = 31;
            }

            if (mod === "Zręczność") {
              this.share.poczatkoweStatystykiRasowe.Zr = 31;
            }

            if (mod === "Inteligencja") {
              this.share.poczatkoweStatystykiRasowe.Int = 31;
            }

            if (mod === "Siła Woli") {
              this.share.poczatkoweStatystykiRasowe.SW = 31;
            }

            if (mod === "Ogłada") {
              this.share.poczatkoweStatystykiRasowe.Ogd = 31;
            }
          }

          if (this.poczatkowa.rasatitle === "Krasnolud") {
            if (mod === "Walka Wręcz") {
              this.share.poczatkoweStatystykiRasowe.WW = 41;
            }

            if (mod === "Umiejętności Strzeleckie") {
              this.share.poczatkoweStatystykiRasowe.US = 31;
            }

            if (mod === "Krzepa") {
              this.share.poczatkoweStatystykiRasowe.K = 31;
            }

            if (mod === "Odporność") {
              this.share.poczatkoweStatystykiRasowe.Odp = 41;
            }

            if (mod === "Zręczność") {
              this.share.poczatkoweStatystykiRasowe.Zr = 21;
            }

            if (mod === "Inteligencja") {
              this.share.poczatkoweStatystykiRasowe.Int = 31;
            }

            if (mod === "Siła Woli") {
              this.share.poczatkoweStatystykiRasowe.SW = 31;
            }

            if (mod === "Ogłada") {
              this.share.poczatkoweStatystykiRasowe.Ogd = 21;
            }
          }

          if (this.poczatkowa.rasatitle === "Elf") {
            if (mod === "Walka Wręcz") {
              this.share.poczatkoweStatystykiRasowe.WW = 31;
            }

            if (mod === "Umiejętności Strzeleckie") {
              this.share.poczatkoweStatystykiRasowe.US = 41;
            }

            if (mod === "Krzepa") {
              this.share.poczatkoweStatystykiRasowe.K = 31;
            }

            if (mod === "Odporność") {
              this.share.poczatkoweStatystykiRasowe.Odp = 31;
            }

            if (mod === "Zręczność") {
              this.share.poczatkoweStatystykiRasowe.Zr = 41;
            }

            if (mod === "Inteligencja") {
              this.share.poczatkoweStatystykiRasowe.Int = 31;
            }

            if (mod === "Siła Woli") {
              this.share.poczatkoweStatystykiRasowe.SW = 31;
            }

            if (mod === "Ogłada") {
              this.share.poczatkoweStatystykiRasowe.Ogd = 31;
            }
          }

          if (this.poczatkowa.rasatitle === "Niziołek") {
            if (mod === "Walka Wręcz") {
              this.share.poczatkoweStatystykiRasowe.WW = 21;
            }

            if (mod === "Umiejętności Strzeleckie") {
              this.share.poczatkoweStatystykiRasowe.US = 41;
            }

            if (mod === "Krzepa") {
              this.share.poczatkoweStatystykiRasowe.K = 21;
            }

            if (mod === "Odporność") {
              this.share.poczatkoweStatystykiRasowe.Odp = 21;
            }

            if (mod === "Zręczność") {
              this.share.poczatkoweStatystykiRasowe.Zr = 41;
            }

            if (mod === "Inteligencja") {
              this.share.poczatkoweStatystykiRasowe.Int = 31;
            }

            if (mod === "Siła Woli") {
              this.share.poczatkoweStatystykiRasowe.SW = 31;
            }

            if (mod === "Ogłada") {
              this.share.poczatkoweStatystykiRasowe.Ogd = 41;
            }
          }

          this.share.changeAktualne();
          this.share.poczatkoweStatystykiRasowe.shallya = false;
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
      decls: 13,
      vars: 4,
      consts: [["class", "container text-center  cechy-container p-0 m-0", 4, "ngIf"], ["id", "shallya", "tabindex", "-1", "role", "dialog", "aria-labelledby", "shallya", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "container", "text-center", "cechy-container", "p-0", "m-0"], [1, "p-1", "title"], [1, "border-bottom", "border-dark"], [1, "row"], [1, "col-3", "ml-1"], ["ngbTooltip", "Walka Wr\u0119cz", 1, "col-1"], ["ngbTooltip", "Umiej\u0119tno\u015Bci Strzeleckie", 1, "col-1"], ["ngbTooltip", "Krzepa", 1, "col-1"], ["ngbTooltip", "Odporno\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Zr\u0119czno\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Inteligencja", 1, "col-1"], ["ngbTooltip", "Si\u0142a Woli", 1, "col-1"], ["ngbTooltip", "Og\u0142ada", 1, "col-1"], [1, "border-bottom", "border-dark", "cechy-custom"], [1, "col-1"], [4, "ngIf"], [1, "col-1", "font-weight-bold"], ["ngbTooltip", "Ataki", 1, "col-1"], ["ngbTooltip", "\u017Bywotno\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Si\u0142a", 1, "col-1"], ["ngbTooltip", "Wytrzyma\u0142o\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Szybko\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Magia", 1, "col-1"], ["ngbTooltip", "Punkty Ob\u0142\u0119du", 1, "col-1"], ["ngbTooltip", "Punkty Przeznaczenia", 1, "col-1"], [1, "cechy-custom"], ["class", "row ", 4, "ngIf"], [1, "col"], ["mat-raised-button", "", "color", "accent", 1, "m-1", 3, "click"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Urodzony wojownik"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Strzelec wyborowy"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Bardzo silny"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Niezwykle odporny"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Szybki refleks"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: B\u0142yskotliwo\u015B\u0107"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Opanowanie"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Charyzmatyczny"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Twardziel"], ["placement", "top", "ngbTooltip", "Zdolno\u015B\u0107: Bardzo Szybki"], ["placeholder", "Wybierz ceche do zmiany", 1, "custom", 3, "items", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "accent", "data-toggle", "modal", "data-target", "#shallya", 1, "m-1", 3, "disabled", "click"]],
      template: function BohaterCechyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BohaterCechyComponent_div_0_Template, 178, 63, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Uwaga! \u0141ask\u0119 Shallyi mo\u017Cna wykorzysta\u0107 tylko raz!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterCechyComponent_Template_button_click_11_listener() {
            return ctx.shallyaConfirm(ctx.mod);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.poczatkowa.WW !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Czy na pewno zmieni\u0107 ", ctx.mod, " ", ctx.shalyaAktualne, " na ", ctx.shalyaZmiana, "? ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
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
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_11_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.dodajDoswiadczenie();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dodaj 100 do\u015Bwiadczenia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Koszt: 100 punkt\xF3w do\u015Bwiadczenia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_12_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.zwiekszenieCechyGlownej();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119kszenie cechy g\u0142\xF3wnej +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_12_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.zwiekszenieCechyDrugorzednej();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Zwi\u0119kszenie cechy drugorz\u0119dnej +1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_12_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.wykupienieUmiejetnosci();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wykupienie umiej\u0119tno\u015Bci");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_12_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.wykupienieZdolnosci();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Wykupienie zdolno\u015Bci");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_12_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.umiejetnosci10();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Specjalizacja w umiej\u0119tno\u015Bci +10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wyb\xF3r nowej profesji");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Koszt: 200 punkt\xF3w do\u015Bwiadczenia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Wyb\xF3r nowe profesji podstawowej (nie wyj\u015Bciowej)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.submittedButton);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_4_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r24.zwiekszenieWW();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Walk\u0119 Wr\u0119cz o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r16.wykupioneCechy.WW, "/", ctx_r16.schematRozwoju.WW, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_5_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r26.zwiekszenieUS();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Umiej\u0119tno\u015Bci Strzeleckie o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r17.wykupioneCechy.US, "/", ctx_r17.schematRozwoju.US, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_6_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r28.zwiekszenieK();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Krzep\u0119 o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r18.wykupioneCechy.K, "/", ctx_r18.schematRozwoju.K, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_7_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r30.zwiekszenieOdp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Odporno\u015B\u0107 o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r19.wykupioneCechy.Odp, "/", ctx_r19.schematRozwoju.Odp, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_8_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r32.zwiekszenieZr();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Zr\u0119czno\u015B\u0107 o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r20.wykupioneCechy.Zr, "/", ctx_r20.schematRozwoju.Zr, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_9_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r34.zwiekszenieInt();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Inteligencj\u0119 o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r21.wykupioneCechy.Int, "/", ctx_r21.schematRozwoju.Int, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_10_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r36.zwiekszenieSW();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Si\u0142\u0119 Woli o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r22.wykupioneCechy.SW, "/", ctx_r22.schematRozwoju.SW, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_11_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r38.zwiekszenieOgd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Og\u0142ad\u0119 o +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r23.wykupioneCechy.Ogd, "/", ctx_r23.schematRozwoju.Ogd, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zwi\u0119kszenie cechy g\u0142\xF3wnej +5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_4_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_5_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_6_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_7_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_8_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_9_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_10_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_div_11_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_13_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r40.cofnijCechyGlowne();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cofnij");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.cechyGlowne);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.WW - ctx_r3.wykupioneCechy.WW != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.US - ctx_r3.wykupioneCechy.US != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.K - ctx_r3.wykupioneCechy.K != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.Odp - ctx_r3.wykupioneCechy.Odp != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.Zr - ctx_r3.wykupioneCechy.Zr != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.Int - ctx_r3.wykupioneCechy.Int != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.SW - ctx_r3.wykupioneCechy.SW != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.schematRozwoju.Ogd - ctx_r3.wykupioneCechy.Ogd != 0);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_4_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r46.zwiekszenieA();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Ataki o +1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r42.wykupioneCechy.A, "/", ctx_r42.schematRozwoju.A, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_5_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r48.zwiekszenieZyw();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz \u017Bywotno\u015Bci o +1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r43.wykupioneCechy.Zyw, "/", ctx_r43.schematRozwoju.Zyw, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_6_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r50.zwiekszenieSz();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Szybko\u015B\u0107 o +1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r44.wykupioneCechy.Sz, "/", ctx_r44.schematRozwoju.Sz, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_7_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r52.zwiekszenieMag();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zwi\u0119ksz Magii o +1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r45.wykupioneCechy.Mag, "/", ctx_r45.schematRozwoju.Mag, "");
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zwi\u0119kszenie cechy drugorz\u0119dnej +1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_4_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_5_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_6_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BohaterPunktyDoswiadczeniaComponent_div_0_div_14_div_7_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_14_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r54.cofnijCechyDrugorzedne();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cofnij");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.cechyDrugorzedne);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.schematRozwoju.A - ctx_r4.wykupioneCechy.A != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.schematRozwoju.Zyw - ctx_r4.wykupioneCechy.Zyw != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.schematRozwoju.Sz - ctx_r4.wykupioneCechy.Sz != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.schematRozwoju.Mag - ctx_r4.wykupioneCechy.Mag != 0);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dodaj now\u0105 umiej\u0119tno\u015B\u0107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterPunktyDoswiadczeniaComponent_div_0_div_15_Template_ng_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r56.selectedUmiejetnosciId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_15_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r58.dodajUmiejetnosc(ctx_r58.selectedUmiejetnosciId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dodaj umiej\u0119tno\u015B\u0107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_15_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r59.cofnijNoweUmiejetnosci();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cofnij");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r5.noweUmiejetnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.umiejetnosciDoWykupienia)("ngModel", ctx_r5.selectedUmiejetnosciId);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dodaj now\u0105 zdolno\u015B\u0107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterPunktyDoswiadczeniaComponent_div_0_div_16_Template_ng_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r60.selectedZdolnosciId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_16_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r62.dodajZdolnosc(ctx_r62.selectedZdolnosciId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dodaj umiej\u0119tno\u015B\u0107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_16_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r63.cofnijNoweZdolnosci();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cofnij");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.noweZdolnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r6.zdolnosciDoWykupienia)("ngModel", ctx_r6.selectedZdolnosciId);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_6_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var schemat_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r68.dodajUmiejetnosc1020(schemat_r66[0].umiejetnosc, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r66[0].umiejetnosc);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_6_div_1_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schemat_r66[0].umiejetnosc20 !== true);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_7_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var schemat_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r74.dodajUmiejetnosc1020(schemat_r72[0].umiejetnosc, false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r72[0].umiejetnosc);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_7_div_1_Template, 2, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schemat_r72[0].umiejetnosc20 !== true);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dodaj umiej\u0119tno\u015B\u0107 modyfikator +10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_6_Template, 2, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BohaterPunktyDoswiadczeniaComponent_div_0_div_17_div_7_Template, 2, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterPunktyDoswiadczeniaComponent_div_0_div_17_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r78.cofnijUmiejetnosci10();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cofnij");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r7.umiejetnosc10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.umiejetnosciRasy.umiejetnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.umiejetnosciProfesji.umiejetnosci);
      }
    }

    function BohaterPunktyDoswiadczeniaComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Punkty do\u015Bwiadczenia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ilo\u015B\u0107 do\u015Bwiadczenia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BohaterPunktyDoswiadczeniaComponent_div_0_div_11_Template, 3, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BohaterPunktyDoswiadczeniaComponent_div_0_div_12_Template, 21, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BohaterPunktyDoswiadczeniaComponent_div_0_div_13_Template, 16, 9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BohaterPunktyDoswiadczeniaComponent_div_0_div_14_Template, 12, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BohaterPunktyDoswiadczeniaComponent_div_0_div_15_Template, 12, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BohaterPunktyDoswiadczeniaComponent_div_0_div_16_Template, 12, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BohaterPunktyDoswiadczeniaComponent_div_0_div_17_Template, 11, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.schematRozwoju.doswiadczenie);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schematRozwoju.profesjatitle !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schematRozwoju.doswiadczenie >= 100 && ctx_r0.schematRozwoju.profesjatitle !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schematRozwoju.doswiadczenie >= 100 && ctx_r0.schematRozwoju.profesjatitle !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schematRozwoju.doswiadczenie >= 100 && ctx_r0.schematRozwoju.profesjatitle !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schematRozwoju.doswiadczenie >= 100 && ctx_r0.schematRozwoju.profesjatitle !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schematRozwoju.doswiadczenie >= 100 && ctx_r0.schematRozwoju.profesjatitle !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schematRozwoju.doswiadczenie >= 100 && ctx_r0.schematRozwoju.profesjatitle !== "");
      }
    }

    var BohaterPunktyDoswiadczeniaComponent = /*#__PURE__*/function () {
      function BohaterPunktyDoswiadczeniaComponent(logika, share) {
        _classCallCheck(this, BohaterPunktyDoswiadczeniaComponent);

        this.logika = logika;
        this.share = share;
        this.submittedButton = false;
        this.cechyGlowne = true;
        this.cechyDrugorzedne = true;
        this.noweUmiejetnosci = true;
        this.noweZdolnosci = true;
        this.umiejetnosc10 = true;
        this.umiejetnosciDoWykupienia = ['Brzuchomówstwo', 'Charakteryzacja', 'Czytanie i pisanie', 'Czytanie z warg', 'Dowodzenie', 'Gadanina', 'Hazard', 'Hipnoza', 'Jeździectwo', 'Język tajemny(magiczny)', 'Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)', 'Leczenie', 'Mocna głowa', 'Nauka(alchemia)', 'Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)', 'Nawigacja', 'Opieka nad zwierzętami', 'Oswajanie', 'Otwieranie zamków', 'Plotkowanie', 'Pływanie', 'Powożenie', 'Przekonywanie', 'Przeszukiwanie', 'Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)', 'Sekretne znaki(łowców)', 'Sekretne znaki(rycerzy zakonnych)', 'Sekretne znaki(złodziei)', 'Sekretne znaki(zwiadowców)', 'Sekretny język(bitewny)', 'Sekretny język(gildii)', 'Sekretny język(łowców)', 'Sekretny język(złodziejski)', 'Skradanie się', 'Splatanie magii', 'Spostrzegawczość', 'Sztuka przetrwania', 'Śledzenie', 'Targowanie', 'Torturowanie', 'Tresura', 'Tropienie', 'Ukrywanie się', 'Unik', 'Warzenie trucizn', 'Wiedza(bretonia)', 'Wiedza(estalia)', 'Wiedza(imperium)', 'Wiedza(jałowa kraina)', 'Wiedza(kislev)', 'Wiedza(księstwa graniczne)', 'Wiedza(norska)', 'Wiedza(tilea)', 'Wiedza(elfy)', 'Wiedza(krasnoludy)', 'Wiedza(niziołki)', 'Wiedza(ogry)', 'Wioślarstwo', 'Wspinaczka', 'Wycena', 'Wykrywanie magii', 'Zastawianie pułapek', 'Zastraszanie', 'Znajomość języka(bretoński)', 'Znajomość języka(eltharin)', 'Znajomość języka(estalijski)', 'Znajomość języka(khazalid)', 'Znajomość języka(kislevski)', 'Znajomość języka(norski)', 'Znajomość języka(tileański)', 'Znajomość języka(klasyczny)', 'Znajomość języka(staroświatowy)', 'Znajomość języka(niziołków)', 'Zwinne palce', 'Żeglarstwo'];
        this.zdolnosciDoWykupienia = ['Artylerzysta', 'Bardzo silny', 'Bardzo szybki', 'Bijatyka', 'Błyskawiczne przeładowanie', 'Błyskawiczny blok', 'Błyskotliwość', 'Brawura', 'Broń naturalna', 'Broń specjalna(dwuręczna)', 'Broń specjalna(kawaleryjska)', 'Broń specjalna(mechaniczna)', 'Broń specjalna(palna)', 'Broń specjalna(parująca)', 'Broń specjalna(rzucana)', 'Broń specjalna(szermiercza)', 'Broń specjalna(unieruchamiająca)', 'Broń specjalna(korbacz)', 'Broń specjalna(kusza)', 'Broń specjalna(łuk)', 'Broń specjalna(proca)', 'Bystry wzrok', 'Charyzmatyczny', 'Chirurgia', 'Chodu!', 'Czarnoksięstwo', 'Człowiek-guma', 'Czuły słuch', 'Dotyk mocy', 'Etykieta', 'Geniusz arytmetyczny', 'Grotołaz', 'Groźny', 'Gusła', 'Intrygant', 'Krasnoludzki fach', 'Krasomówstwo', 'Krzepki', 'Latanie', 'Lewitacja', 'Łotrzyk', 'Magia czarnoksięska', 'Magia kapłańska', 'Magia powrzechna', 'Magia prosta', 'Magia prosta(gusła)', 'Magia prosta(tajemna)', 'Magia tajemna', 'Medytacja', 'Morderczy atak', 'Morderczy pocisk', 'Naśladowca', 'Niepokojący', 'Nieustraszony', 'Niezwykle odporny', 'Obieżyświat', 'Oburęczność', 'Odporność na chaos', 'Odporność na choroby', 'Odporność na magię', 'Odporność na trucizny', 'Odporność psychiczna', 'Odwaga', 'Ogłuszanie', 'Opanowanie', 'Ożywieniec', 'Pancerz wiary', 'Poliglota', 'Przemawianie', 'Przerażający', 'Rozbrajanie', 'Silny cios', 'Straszny', 'Strzał mierzony', 'Strzał precyzyjny', 'Strzał przebijający', 'Strzelec wyborowy', 'Szał bojowy', 'Szczęście', 'Szósty zmysł', 'Szybki refleks', 'Szybkie wyciągnięcie', 'Talent artystyczny', 'Twardziel', 'Ulicznik', 'Urodzony wojownik', 'Wędrowiec', 'Widzenie w ciemności', 'Woltyżerka', 'Wyczucie kierunku', 'Wykrywanie pułapek', 'Wyostrzone zmysły', 'Zapasy', 'Zapiekła nienawiść', 'Zmysł magii', 'Żyłka handlowa'];
      }

      _createClass(BohaterPunktyDoswiadczeniaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.schematRozwoju = this.share.schematRozwojuProfesja;
          this.wykupioneCechy = this.share.wykupionyRozwoj;
          this.umiejetnosciProfesji = this.share.schematRozwojuProfesja;
          this.umiejetnosciRasy = this.share.poczatkoweStatystykiRasowe;
        }
      }, {
        key: "dodajDoswiadczenie",
        value: function dodajDoswiadczenie() {
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie + 100;
        } // cechy główne

      }, {
        key: "zwiekszenieCechyGlownej",
        value: function zwiekszenieCechyGlownej() {
          this.submittedButton = true;
          this.cechyGlowne = false;
        }
      }, {
        key: "cofnijCechyGlowne",
        value: function cofnijCechyGlowne() {
          this.cechyGlowne = true;
          this.submittedButton = false;
        }
      }, {
        key: "zwiekszenieWW",
        value: function zwiekszenieWW() {
          this.share.wykupionyRozwoj.WW = this.share.wykupionyRozwoj.WW + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        }
      }, {
        key: "zwiekszenieUS",
        value: function zwiekszenieUS() {
          this.share.wykupionyRozwoj.US = this.share.wykupionyRozwoj.US + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        }
      }, {
        key: "zwiekszenieK",
        value: function zwiekszenieK() {
          this.share.wykupionyRozwoj.K = this.share.wykupionyRozwoj.K + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        }
      }, {
        key: "zwiekszenieOdp",
        value: function zwiekszenieOdp() {
          this.share.wykupionyRozwoj.Odp = this.share.wykupionyRozwoj.Odp + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        }
      }, {
        key: "zwiekszenieZr",
        value: function zwiekszenieZr() {
          this.share.wykupionyRozwoj.Zr = this.share.wykupionyRozwoj.Zr + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        }
      }, {
        key: "zwiekszenieInt",
        value: function zwiekszenieInt() {
          this.share.wykupionyRozwoj.Int = this.share.wykupionyRozwoj.Int + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        }
      }, {
        key: "zwiekszenieSW",
        value: function zwiekszenieSW() {
          this.share.wykupionyRozwoj.SW = this.share.wykupionyRozwoj.SW + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        }
      }, {
        key: "zwiekszenieOgd",
        value: function zwiekszenieOgd() {
          this.share.wykupionyRozwoj.Ogd = this.share.wykupionyRozwoj.Ogd + 5;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyGlowne();
        } // cechy drugorzedne

      }, {
        key: "zwiekszenieCechyDrugorzednej",
        value: function zwiekszenieCechyDrugorzednej() {
          this.submittedButton = true;
          this.cechyDrugorzedne = false;
        }
      }, {
        key: "cofnijCechyDrugorzedne",
        value: function cofnijCechyDrugorzedne() {
          this.cechyDrugorzedne = true;
          this.submittedButton = false;
        }
      }, {
        key: "zwiekszenieA",
        value: function zwiekszenieA() {
          this.share.wykupionyRozwoj.A = this.share.wykupionyRozwoj.A + 1;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyDrugorzedne();
        }
      }, {
        key: "zwiekszenieZyw",
        value: function zwiekszenieZyw() {
          this.share.wykupionyRozwoj.Zyw = this.share.wykupionyRozwoj.Zyw + 1;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyDrugorzedne();
        }
      }, {
        key: "zwiekszenieSz",
        value: function zwiekszenieSz() {
          this.share.wykupionyRozwoj.Sz = this.share.wykupionyRozwoj.Sz + 1;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyDrugorzedne();
        }
      }, {
        key: "zwiekszenieMag",
        value: function zwiekszenieMag() {
          this.share.wykupionyRozwoj.Mag = this.share.wykupionyRozwoj.Mag + 1;
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.share.changeAktualne();
          this.cofnijCechyDrugorzedne();
        } // umiejętności

      }, {
        key: "wykupienieUmiejetnosci",
        value: function wykupienieUmiejetnosci() {
          this.submittedButton = true;
          this.noweUmiejetnosci = false;
        }
      }, {
        key: "cofnijNoweUmiejetnosci",
        value: function cofnijNoweUmiejetnosci() {
          this.noweUmiejetnosci = true;
          this.submittedButton = false;
          this.selectedUmiejetnosciId = null;
        }
      }, {
        key: "dodajUmiejetnosc",
        value: function dodajUmiejetnosc(umiejetnosc) {
          var _this4 = this;

          this.logika.getUmiejetnosci(umiejetnosc).subscribe(function (items) {
            return _this4.umiejetnosciDoDodania = items;
          });
          this.share.schematRozwojuProfesja.umiejetnosci.push(this.umiejetnosciDoDodania);
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.cofnijNoweUmiejetnosci();
        } // zdolności

      }, {
        key: "wykupienieZdolnosci",
        value: function wykupienieZdolnosci() {
          this.submittedButton = true;
          this.noweZdolnosci = false;
        }
      }, {
        key: "cofnijNoweZdolnosci",
        value: function cofnijNoweZdolnosci() {
          this.noweZdolnosci = true;
          this.submittedButton = false;
          this.selectedZdolnosciId = null;
        }
      }, {
        key: "dodajZdolnosc",
        value: function dodajZdolnosc(zdolnosc) {
          var _this5 = this;

          this.logika.getZdolnosc(zdolnosc).subscribe(function (items) {
            return _this5.zdolnosciDoDodania = items;
          });
          this.share.schematRozwojuProfesja.zdolnosci.push(this.zdolnosciDoDodania);
          this.share.zdolnosciDoCechyPoczatkowych(zdolnosc, false);
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
          this.cofnijNoweZdolnosci();
        } // umiejetnosci +10

      }, {
        key: "umiejetnosci10",
        value: function umiejetnosci10() {
          this.submittedButton = true;
          this.umiejetnosc10 = false;
        }
      }, {
        key: "cofnijUmiejetnosci10",
        value: function cofnijUmiejetnosci10() {
          this.umiejetnosc10 = true;
          this.submittedButton = false;
        }
      }, {
        key: "dodajUmiejetnosc1020",
        value: function dodajUmiejetnosc1020(umiejetnosc, cos) {
          this.dodajUmiejetnosc10(umiejetnosc, cos);
          this.cofnijUmiejetnosci10();
          this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
        } // cos-true rasa, cos-false profesja

      }, {
        key: "dodajUmiejetnosc10",
        value: function dodajUmiejetnosc10(umiejetnosc, cos) {
          if (cos === true) {
            for (var n = 0; n < this.umiejetnosciRasy.umiejetnosci.length; n++) {
              if (this.umiejetnosciRasy.umiejetnosci[n][0].umiejetnosc === umiejetnosc) {
                if (this.share.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc10 === true) {
                  return this.share.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc20 = true;
                }

                return this.share.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc10 = true;
              }
            }
          }

          if (cos === false) {
            for (var _n = 0; _n < this.umiejetnosciProfesji.umiejetnosci.length; _n++) {
              if (this.umiejetnosciProfesji.umiejetnosci[_n][0].umiejetnosc === umiejetnosc) {
                if (this.share.schematRozwojuProfesja.umiejetnosci[_n][0].umiejetnosc10 === true) {
                  return this.share.schematRozwojuProfesja.umiejetnosci[_n][0].umiejetnosc20 = true;
                }

                return this.share.schematRozwojuProfesja.umiejetnosci[_n][0].umiejetnosc10 = true;
              }
            }
          }
        }
      }]);

      return BohaterPunktyDoswiadczeniaComponent;
    }();

    BohaterPunktyDoswiadczeniaComponent.ɵfac = function BohaterPunktyDoswiadczeniaComponent_Factory(t) {
      return new (t || BohaterPunktyDoswiadczeniaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    BohaterPunktyDoswiadczeniaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterPunktyDoswiadczeniaComponent,
      selectors: [["app-bohater-punkty-doswiadczenia"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container bohater text-center  p-0 m-0", 4, "ngIf"], [1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title"], [1, "cursorDefault"], [1, "row"], [1, "col-sm-3", "ml-1"], [1, "col-sm", "ml-1"], ["class", "col ml-1", 4, "ngIf"], [3, "hidden", 4, "ngIf"], ["class", "container", 3, "hidden", 4, "ngIf"], [1, "col", "ml-1"], [1, "btn", "btn-success", "btn-sm", "m-1", 3, "click"], [3, "hidden"], [1, "btn", "btn-primary", "btn-sm", "m-1", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "m-1", "disabled"], [1, "container", 3, "hidden"], ["class", "row ", 4, "ngIf"], [1, "col-12"], [1, "btn", "btn-danger", "btn-sm", "m-1", 3, "click"], [1, "col-1"], [1, "col-11"], ["bindLabel", "umiejetnoscititle", "bindValue", "umiejetnoscititle", 1, "custom", 3, "items", "ngModel", "ngModelChange"], ["class", "border-bottom cursorDefault", 4, "ngFor", "ngForOf"], [1, "border-bottom", "cursorDefault"], ["class", "col-sm ml-1 ", 3, "click", 4, "ngIf"], [1, "col-sm", "ml-1", 3, "click"], ["class", "col-sm ml-1", 3, "click", 4, "ngIf"]],
      template: function BohaterPunktyDoswiadczeniaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BohaterPunktyDoswiadczeniaComponent_div_0_Template, 18, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schematRozwoju.profesjatitle !== "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
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
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function BohaterUmiejetnosciComponent_div_0_div_21_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_21_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BohaterUmiejetnosciComponent_div_0_div_21_div_9_Template, 2, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BohaterUmiejetnosciComponent_div_0_div_21_div_11_Template, 2, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", schemat_r5[0].opis);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r5[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r5[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r5[0].zdolnoscipokrewne);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schemat_r5[0].umiejetnosc10 === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schemat_r5[0].umiejetnosc20 === true);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_22_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_22_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BohaterUmiejetnosciComponent_div_0_div_22_div_9_Template, 2, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BohaterUmiejetnosciComponent_div_0_div_22_div_11_Template, 2, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", schemat_r8[0].opis);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r8[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r8[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r8[0].zdolnoscipokrewne);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schemat_r8[0].umiejetnosc10 === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", schemat_r8[0].umiejetnosc20 === true);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_23_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterUmiejetnosciComponent_div_0_div_23_div_1_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var schemat_r15 = ctx.$implicit;

          var i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.onWyborUmiejetnosciRasa(schemat_r15, [i_r12]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", schemat_r15[0].opis);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r15[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r15[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r15[0].zdolnoscipokrewne);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wybierz jedno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BohaterUmiejetnosciComponent_div_0_div_23_div_1_div_5_Template, 9, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.umiejetnosciRasy.wyborUmiejetnosciRasy[i_r12]);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterUmiejetnosciComponent_div_0_div_23_div_1_Template, 6, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r12 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.umiejetnosciRasy.wyborUmiejetnosciRasy[i_r12][0] !== undefined);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_24_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterUmiejetnosciComponent_div_0_div_24_div_1_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var schemat_r24 = ctx.$implicit;

          var i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.onWyborUmiejetnosciProfesja(schemat_r24, [i_r21]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", schemat_r24[0].opis);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r24[0].umiejetnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r24[0].cecha);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r24[0].zdolnoscipokrewne);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wybierz jedno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BohaterUmiejetnosciComponent_div_0_div_24_div_1_div_5_Template, 9, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.umiejetnosciProfesji.wyborUmiejetnosciProfesji[i_r21]);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterUmiejetnosciComponent_div_0_div_24_div_1_Template, 6, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r21 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.umiejetnosciProfesji.wyborUmiejetnosciProfesji[i_r21][0] !== undefined);
      }
    }

    function BohaterUmiejetnosciComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Umiej\u0119tno\u015Bci");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Umiej\u0119tno\u015B\u0107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Zdolno\u015Bci pokrewne");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "+10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+20");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BohaterUmiejetnosciComponent_div_0_div_21_Template, 12, 6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BohaterUmiejetnosciComponent_div_0_div_22_Template, 12, 6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BohaterUmiejetnosciComponent_div_0_div_23_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BohaterUmiejetnosciComponent_div_0_div_24_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.umiejetnosciRasy.umiejetnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.umiejetnosciProfesji.umiejetnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.umiejetnosciRasy.wyborUmiejetnosciRasy);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.umiejetnosciProfesji.wyborUmiejetnosciProfesji);
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
        key: "umiejetnosc",
        value: function umiejetnosc(element, index, array) {
          return element === [];
        }
      }, {
        key: "onWyborUmiejetnosciProfesja",
        value: function onWyborUmiejetnosciProfesja(schemat, _ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              i = _ref2[0];

          // sprawdzanie czy nie istnieje juz taka umiejetnosc rasowa, jezeli tak to +10/+20
          var n = 0;

          for (var _m = 0; _m < this.share.poczatkoweStatystykiRasowe.umiejetnosci.length; _m++) {
            if (this.share.poczatkoweStatystykiRasowe.umiejetnosci[_m][0].umiejetnosc === schemat[0].umiejetnosc && n === 0) {
              if (this.share.poczatkoweStatystykiRasowe.umiejetnosci[_m][0].umiejetnosc10 === true) {
                this.share.poczatkoweStatystykiRasowe.umiejetnosci[_m][0].umiejetnosc20 = true;
                this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[i] = [];
                n = 1;
              }

              this.share.poczatkoweStatystykiRasowe.umiejetnosci[_m][0].umiejetnosc10 = true;
              this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[i] = [];
              n = 1;
            }
          }

          if (n === 0) {
            this.share.schematRozwojuProfesja.umiejetnosci.push(schemat);
            this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[i] = [];
            n = 1;
          } // eksport disabler gdy nie wybrano umiejetnosci


          var m = 0;

          for (var _n2 = 0; _n2 < this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji.length; _n2++) {
            var passed = this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[_n2].every(this.umiejetnosc);

            if (passed === true) {
              m = m + 1;

              if (m === this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji.length) {
                this.share.wyborUmiejetnosciProfesjaDisabler = false;
              }
            }
          }

          this.share.exportAbler();
        }
      }, {
        key: "onWyborUmiejetnosciRasa",
        value: function onWyborUmiejetnosciRasa(schemat, _ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              i = _ref4[0];

          this.share.poczatkoweStatystykiRasowe.umiejetnosci.push(schemat);
          this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[i] = [];
          var m = 0;

          for (var n = 0; n < this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy.length; n++) {
            var passed = this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[n].every(this.umiejetnosc);

            if (passed === true) {
              m = m + 1;

              if (m === this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy.length) {
                this.share.wyborUmiejetnosciRasaDisabler = false;
              }
            }
          }

          this.share.exportAbler();
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
      decls: 1,
      vars: 1,
      consts: [["class", "container bohater text-center  p-0 m-0", 4, "ngIf"], [1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title"], [1, "border-bottom", "border-dark", "cursorDefault"], [1, "row"], [1, "col-sm", "ml-1"], [1, "col-sm-1", "ml-1"], ["class", "border-bottom cursorDefault", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "border-bottom", "cursorDefault"], ["tooltipClass", "tooltip-class ", 1, "row", 3, "ngbTooltip"], [4, "ngIf"], [1, "border-bottom"], [1, "text-center", "pick-one-title"], ["class", "border-bottom ", 4, "ngFor", "ngForOf"], [1, "pick-one", "btn", "btn-sm", "p-0", "m-0", "container-fluid", 3, "click"]],
      template: function BohaterUmiejetnosciComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BohaterUmiejetnosciComponent_div_0_Template, 25, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.umiejetnosciRasy.WW !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"]],
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
    /* harmony import */


    var _service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/shared.service */
    "./src/app/bohater/service/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function BohaterWyposarzenieComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wyposa\u017Cenie");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wyposa\u017Cenie Bohatera");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BohaterWyposarzenieComponent_div_0_Template_textarea_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.share.schematRozwojuProfesja.wyposazenie = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.share.schematRozwojuProfesja.wyposazenie);
      }
    }

    var BohaterWyposarzenieComponent = /*#__PURE__*/function () {
      function BohaterWyposarzenieComponent(share) {
        _classCallCheck(this, BohaterWyposarzenieComponent);

        this.share = share;
      }

      _createClass(BohaterWyposarzenieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BohaterWyposarzenieComponent;
    }();

    BohaterWyposarzenieComponent.ɵfac = function BohaterWyposarzenieComponent_Factory(t) {
      return new (t || BohaterWyposarzenieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]));
    };

    BohaterWyposarzenieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterWyposarzenieComponent,
      selectors: [["app-bohater-wyposarzenie"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container bohater text-center p-0 m-0", 4, "ngIf"], [1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title"], [1, "m-2", "p-2", "text-justify"], [1, "p-1", "m-2", "full-width"], ["matInput", "", 3, "ngModel", "ngModelChange"]],
      template: function BohaterWyposarzenieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BohaterWyposarzenieComponent_div_0_Template, 9, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.share.schematRozwojuProfesja.profesjatitle !== "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
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
        return [{
          type: _service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }];
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

    function BohaterZdolnosciComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r5[0].zdolnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r5[0].opis);
      }
    }

    function BohaterZdolnosciComponent_div_0_div_13_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterZdolnosciComponent_div_0_div_13_div_1_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var schemat_r10 = ctx.$implicit;

          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.onWyborZdolnosciRasa(schemat_r10, [i_r7]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r10[0].zdolnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r10[0].opis);
      }
    }

    function BohaterZdolnosciComponent_div_0_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wybierz jedno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BohaterZdolnosciComponent_div_0_div_13_div_1_div_5_Template, 7, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.zdolnosciRasy.wyborZdolnosciRasy[i_r7]);
      }
    }

    function BohaterZdolnosciComponent_div_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterZdolnosciComponent_div_0_div_13_div_1_Template, 6, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r7 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.zdolnosciRasy.wyborZdolnosciRasy[i_r7][0] !== undefined);
      }
    }

    function BohaterZdolnosciComponent_div_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r15[0].zdolnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r15[0].opis);
      }
    }

    function BohaterZdolnosciComponent_div_0_div_15_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BohaterZdolnosciComponent_div_0_div_15_div_1_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var schemat_r20 = ctx.$implicit;

          var i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.onWyborZdolnosciProfesja(schemat_r20, [i_r17]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r20[0].zdolnosc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r20[0].opis);
      }
    }

    function BohaterZdolnosciComponent_div_0_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wybierz jedno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BohaterZdolnosciComponent_div_0_div_15_div_1_div_5_Template, 7, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.zdolnosciProfesji.wyborZdolnosciProfesji[i_r17]);
      }
    }

    function BohaterZdolnosciComponent_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BohaterZdolnosciComponent_div_0_div_15_div_1_Template, 6, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r17 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.zdolnosciProfesji.wyborZdolnosciProfesji[i_r17][0] !== undefined);
      }
    }

    function BohaterZdolnosciComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zdolno\u015Bci");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zdolno\u015B\u0107");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Opis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BohaterZdolnosciComponent_div_0_div_12_Template, 6, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BohaterZdolnosciComponent_div_0_div_13_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BohaterZdolnosciComponent_div_0_div_14_Template, 6, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BohaterZdolnosciComponent_div_0_div_15_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.zdolnosciRasy.zdolnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.zdolnosciRasy.wyborZdolnosciRasy);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.zdolnosciProfesji.zdolnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.zdolnosciProfesji.wyborZdolnosciProfesji);
      }
    }

    var BohaterZdolnosciComponent = /*#__PURE__*/function () {
      function BohaterZdolnosciComponent(logika, share) {
        _classCallCheck(this, BohaterZdolnosciComponent);

        this.logika = logika;
        this.share = share;
      }

      _createClass(BohaterZdolnosciComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.zdolnosciProfesji = this.share.schematRozwojuProfesja;
          this.zdolnosciRasy = this.share.poczatkoweStatystykiRasowe;
        }
      }, {
        key: "zdolnosc",
        value: function zdolnosc(element, index, array) {
          return element === [];
        }
      }, {
        key: "onWyborZdolnosciProfesja",
        value: function onWyborZdolnosciProfesja(schemat, _ref5) {
          var _ref6 = _slicedToArray(_ref5, 1),
              i = _ref6[0];

          this.share.schematRozwojuProfesja.zdolnosci.push(schemat);
          this.share.schematRozwojuProfesja.wyborZdolnosciProfesji[i] = [];
          this.share.zdolnosciDoCechyPoczatkowych(schemat[0].zdolnosc, false);
          var m = 0;

          for (var n = 0; n < this.share.schematRozwojuProfesja.wyborZdolnosciProfesji.length; n++) {
            var passed = this.share.schematRozwojuProfesja.wyborZdolnosciProfesji[n].every(this.zdolnosc);

            if (passed === true) {
              m = m + 1;

              if (m === this.share.schematRozwojuProfesja.wyborZdolnosciProfesji.length) {
                this.share.wyborZdolnosciProdesjaDisabler = false;
              }
            }
          }

          this.share.exportAbler();
        }
      }, {
        key: "onWyborZdolnosciRasa",
        value: function onWyborZdolnosciRasa(schemat, _ref7) {
          var _ref8 = _slicedToArray(_ref7, 1),
              i = _ref8[0];

          this.share.poczatkoweStatystykiRasowe.zdolnosci.push(schemat);
          this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[i] = [];
          this.share.zdolnosciDoCechyPoczatkowych(schemat[0].zdolnosc, true);
          var m = 0;

          for (var n = 0; n < this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy.length; n++) {
            var passed = this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[n].every(this.zdolnosc);

            if (passed === true) {
              m = m + 1;

              if (m === this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy.length) {
                this.share.wyborZdolnosciRasaDisabler = false;
              }
            }
          }

          this.share.exportAbler();
        }
      }]);

      return BohaterZdolnosciComponent;
    }();

    BohaterZdolnosciComponent.ɵfac = function BohaterZdolnosciComponent_Factory(t) {
      return new (t || BohaterZdolnosciComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    BohaterZdolnosciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BohaterZdolnosciComponent,
      selectors: [["app-bohater-zdolnosci"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container bohater text-center  p-0 m-0", 4, "ngIf"], [1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title"], [1, "border-bottom", "border-dark", "cursorDefault"], [1, "row"], [1, "col-sm-3", "ml-1"], [1, "col-sm", "ml-1"], ["class", "border-bottom ", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "border-bottom"], [1, "row", "cursorDefault"], [4, "ngIf"], [1, "text-center", "pick-one-title"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "pick-one", "btn", "btn-sm", "p-0", "m-0", "container-fluid", 3, "click"]],
      template: function BohaterZdolnosciComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BohaterZdolnosciComponent_div_0_Template, 16, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.zdolnosciRasy.WW !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
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


    var _import_export_import_export_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./import-export/import-export.component */
    "./src/app/bohater/import-export/import-export.component.ts");
    /* harmony import */


    var _bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bohater-bohater/bohater-bohater.component */
    "./src/app/bohater/bohater-bohater/bohater-bohater.component.ts");
    /* harmony import */


    var _bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bohater-cechy/bohater-cechy.component */
    "./src/app/bohater/bohater-cechy/bohater-cechy.component.ts");
    /* harmony import */


    var _bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bohater-wyposarzenie/bohater-wyposarzenie.component */
    "./src/app/bohater/bohater-wyposarzenie/bohater-wyposarzenie.component.ts");
    /* harmony import */


    var _bohater_punkty_doswiadczenia_bohater_punkty_doswiadczenia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bohater-punkty-doswiadczenia/bohater-punkty-doswiadczenia.component */
    "./src/app/bohater/bohater-punkty-doswiadczenia/bohater-punkty-doswiadczenia.component.ts");
    /* harmony import */


    var _bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bohater-umiejetnosci/bohater-umiejetnosci.component */
    "./src/app/bohater/bohater-umiejetnosci/bohater-umiejetnosci.component.ts");
    /* harmony import */


    var _bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bohater-zdolnosci/bohater-zdolnosci.component */
    "./src/app/bohater/bohater-zdolnosci/bohater-zdolnosci.component.ts");
    /* harmony import */


    var _footer_bohater_footer_bohater_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer-bohater/footer-bohater.component */
    "./src/app/bohater/footer-bohater/footer-bohater.component.ts");

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
      decls: 21,
      vars: 0,
      consts: [[1, "container", "bohater"], [1, "row"], [1, "col-12", "col-lg-6", "my-1"], ["id", "footer"]],
      template: function BohaterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-import-export");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-bohater-bohater");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-bohater-cechy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-bohater-wyposarzenie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-bohater-punkty-doswiadczenia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-bohater-umiejetnosci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-bohater-zdolnosci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-footer-bohater");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_1__["ImportExportComponent"], _bohater_bohater_bohater_bohater_component__WEBPACK_IMPORTED_MODULE_2__["BohaterBohaterComponent"], _bohater_cechy_bohater_cechy_component__WEBPACK_IMPORTED_MODULE_3__["BohaterCechyComponent"], _bohater_wyposarzenie_bohater_wyposarzenie_component__WEBPACK_IMPORTED_MODULE_4__["BohaterWyposarzenieComponent"], _bohater_punkty_doswiadczenia_bohater_punkty_doswiadczenia_component__WEBPACK_IMPORTED_MODULE_5__["BohaterPunktyDoswiadczeniaComponent"], _bohater_umiejetnosci_bohater_umiejetnosci_component__WEBPACK_IMPORTED_MODULE_6__["BohaterUmiejetnosciComponent"], _bohater_zdolnosci_bohater_zdolnosci_component__WEBPACK_IMPORTED_MODULE_7__["BohaterZdolnosciComponent"], _footer_bohater_footer_bohater_component__WEBPACK_IMPORTED_MODULE_8__["FooterBohaterComponent"]],
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
  "./src/app/bohater/chat/chat.component.ts":
  /*!************************************************!*\
    !*** ./src/app/bohater/chat/chat.component.ts ***!
    \************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppBohaterChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent() {
        _classCallCheck(this, ChatComponent);
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)();
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      decls: 3,
      vars: 0,
      consts: [[1, "p-1", "title", "text-center"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/footer-bohater/footer-bohater.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/bohater/footer-bohater/footer-bohater.component.ts ***!
    \********************************************************************/

  /*! exports provided: FooterBohaterComponent */

  /***/
  function srcAppBohaterFooterBohaterFooterBohaterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterBohaterComponent", function () {
      return FooterBohaterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterBohaterComponent = /*#__PURE__*/function () {
      function FooterBohaterComponent() {
        _classCallCheck(this, FooterBohaterComponent);

        this.rollDisabled = false;
      }

      _createClass(FooterBohaterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // funkcja losujaca

      }, {
        key: "randomNumber",
        value: function randomNumber(min, max) {
          var _this6 = this;

          this.rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          this.rollDisabled = true;
          setTimeout(function () {
            _this6.rollDisabled = false;
          }, 3000);
        }
      }]);

      return FooterBohaterComponent;
    }();

    FooterBohaterComponent.ɵfac = function FooterBohaterComponent_Factory(t) {
      return new (t || FooterBohaterComponent)();
    };

    FooterBohaterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterBohaterComponent,
      selectors: [["app-footer-bohater"]],
      decls: 21,
      vars: 4,
      consts: [[1, "footer"], [1, "container", "text-center"], [1, "row"], [1, "col-sm"], [1, "text-light", "bg-dark"], [1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"]],
      template: function FooterBohaterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterBohaterComponent_Template_button_click_9_listener() {
            return ctx.randomNumber(1, 10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "K10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterBohaterComponent_Template_button_click_14_listener() {
            return ctx.randomNumber(1, 20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterBohaterComponent_Template_button_click_19_listener() {
            return ctx.randomNumber(0, 99);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "K100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rollNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rollDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rollDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rollDisabled);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvZm9vdGVyLWJvaGF0ZXIvZm9vdGVyLWJvaGF0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterBohaterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer-bohater',
          templateUrl: './footer-bohater.component.html',
          styleUrls: ['./footer-bohater.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bohater/import-export/import-export.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/bohater/import-export/import-export.component.ts ***!
    \******************************************************************/

  /*! exports provided: ImportExportComponent */

  /***/
  function srcAppBohaterImportExportImportExportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImportExportComponent", function () {
      return ImportExportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../service/shared.service */
    "./src/app/bohater/service/shared.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ImportExportComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Zaloguj, aby eksportowa\u0107! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImportExportComponent_div_0_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sko\u0144cz tworzy\u0107 posta\u0107, aby wyeksportowa\u0107!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImportExportComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportExportComponent_div_0_div_6_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4["export"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eksport");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImportExportComponent_div_0_div_6_div_3_Template, 2, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.exportDisabled === true)("disabled", ctx_r2.share.exportDisabler === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.share.exportDisabler);
      }
    }

    function ImportExportComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Eksport");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImportExportComponent_div_0_div_5_Template, 3, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImportExportComponent_div_0_div_6_Template, 4, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportExportComponent_div_0_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.refresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Od Nowa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn === false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn === true);
      }
    }

    var ImportExportComponent = /*#__PURE__*/function () {
      function ImportExportComponent(share, authService) {
        _classCallCheck(this, ImportExportComponent);

        this.share = share;
        this.authService = authService;
        this.exportDisabled = false;
      }

      _createClass(ImportExportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rasa = this.share.poczatkoweStatystykiRasowe;
          this.profesja = this.share.schematRozwojuProfesja;
        }
      }, {
        key: "export",
        value: function _export() {
          var _this7 = this;

          this.share.exportPostaci();
          this.exportDisabled = true;
          setTimeout(function () {
            _this7.exportDisabled = false;
          }, 3000);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          location.reload();
        }
      }]);

      return ImportExportComponent;
    }();

    ImportExportComponent.ɵfac = function ImportExportComponent_Factory(t) {
      return new (t || ImportExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    ImportExportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImportExportComponent,
      selectors: [["app-import-export"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container bohater text-center p-0 m-0", 4, "ngIf"], [1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title"], [1, "row"], ["class", "", 4, "ngIf"], [4, "ngIf"], [1, ""], [1, "btn", "btn-primary", "btn-sm", "m-1", 3, "click"], ["routerLink", "/sign-in", 1, "btn", "btn-primary", "btn-sm", "m-1"], [1, "btn", "btn-danger", "btn-sm", "m-1", 3, "disabled", "click"]],
      template: function ImportExportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImportExportComponent_div_0_Template, 10, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rasa.WW !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaGF0ZXIvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportExportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-import-export',
          templateUrl: './import-export.component.html',
          styleUrls: ['./import-export.component.css']
        }]
      }], function () {
        return [{
          type: _service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
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
      }, {
        key: "getZdolnosc",
        value: function getZdolnosc(zdolnosc) {
          if (zdolnosc === 'Artylerzysta') {
            var items = getArtylerzysta();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
          } else if (zdolnosc === 'Bardzo silny') {
            var _items189 = getBardzoSilny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items189);
          } else if (zdolnosc === 'Bardzo szybki') {
            var _items190 = getBardzoSzybki();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items190);
          } else if (zdolnosc === 'Bijatyka') {
            var _items191 = getBijatyka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items191);
          } else if (zdolnosc === 'Błyskawiczne przeładowanie') {
            var _items192 = getBlyskawicznePrzeladowanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items192);
          } else if (zdolnosc === 'Błyskawiczny blok') {
            var _items193 = getBlyskawicznyBlok();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items193);
          } else if (zdolnosc === 'Błyskotliwość') {
            var _items194 = getBlyskotliwosc();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items194);
          } else if (zdolnosc === 'Brawura') {
            var _items195 = getBrawura();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items195);
          } else if (zdolnosc === 'Broń naturalna') {
            var _items196 = getBronNaturalna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items196);
          } else if (zdolnosc === 'Broń specjalna(dwuręczna)') {
            var _items197 = getBronSpecjalnaDwureczna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items197);
          } else if (zdolnosc === 'Broń specjalna(kawaleryjska)') {
            var _items198 = getBronSpecjalnaKawaleryjska();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items198);
          } else if (zdolnosc === 'Broń specjalna(mechaniczna)') {
            var _items199 = getBronSpecjalnaMechaniczna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items199);
          } else if (zdolnosc === 'Broń specjalna(palna)') {
            var _items200 = getBronSpecjalnaPalna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items200);
          } else if (zdolnosc === 'Broń specjalna(parująca)') {
            var _items201 = getBronSpecjalnaParujaca();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items201);
          } else if (zdolnosc === 'Broń specjalna(rzucana)') {
            var _items202 = getBronSpecjalnaRzucana();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items202);
          } else if (zdolnosc === 'Broń specjalna(szermiercza)') {
            var _items203 = getBronSpecjalnaSzermiercza();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items203);
          } else if (zdolnosc === 'Broń specjalna(unieruchamiająca)') {
            var _items204 = getBronSpecjalnaUnieruchamiajaca();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items204);
          } else if (zdolnosc === 'Broń specjalna(korbacz)') {
            var _items205 = getBronSpecjalnaKorbacze();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items205);
          } else if (zdolnosc === 'Broń specjalna(kusza)') {
            var _items206 = getBronSpecjalnaKusze();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items206);
          } else if (zdolnosc === 'Broń specjalna(łuk)') {
            var _items207 = getBronSpecjalnaLuki();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items207);
          } else if (zdolnosc === 'Broń specjalna(proca)') {
            var _items208 = getBronSpecjalnaProce();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items208);
          } else if (zdolnosc === 'Bystry wzrok') {
            var _items209 = getBystryWzrok();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items209);
          } else if (zdolnosc === 'Charyzmatyczny') {
            var _items210 = getCharyzmatyczny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items210);
          } else if (zdolnosc === 'Chirurgia') {
            var _items211 = getChirurgia();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items211);
          } else if (zdolnosc === 'Chodu!') {
            var _items212 = getChodu();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items212);
          } else if (zdolnosc === 'Czarnoksięstwo') {
            var _items213 = getCzarnoksieswto();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items213);
          } else if (zdolnosc === 'Człowiek-guma') {
            var _items214 = getCzlowiekGuma();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items214);
          } else if (zdolnosc === 'Czuły słuch') {
            var _items215 = getCzulySluch();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items215);
          } else if (zdolnosc === 'Dotyk mocy') {
            var _items216 = getDotykMocy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items216);
          } else if (zdolnosc === 'Etykieta') {
            var _items217 = getEtykieta();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items217);
          } else if (zdolnosc === 'Geniusz arytmetyczny') {
            var _items218 = getGeniuszArytmetyczny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items218);
          } else if (zdolnosc === 'Grotołaz') {
            var _items219 = getGrotolaz();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items219);
          } else if (zdolnosc === 'Groźny') {
            var _items220 = getGrozny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items220);
          } else if (zdolnosc === 'Gusła') {
            var _items221 = getGusla();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items221);
          } else if (zdolnosc === 'Intrygant') {
            var _items222 = getIntrygant();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items222);
          } else if (zdolnosc === 'Krasnoludzki fach') {
            var _items223 = getKrasnoludzkiFach();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items223);
          } else if (zdolnosc === 'Krasomówstwo') {
            var _items224 = getKrasomowstwo();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items224);
          } else if (zdolnosc === 'Krzepki') {
            var _items225 = getKrzepki();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items225);
          } else if (zdolnosc === 'Latanie') {
            var _items226 = getLatanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items226);
          } else if (zdolnosc === 'Lewitacja') {
            var _items227 = getLewitacja();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items227);
          } else if (zdolnosc === 'Łotrzyk') {
            var _items228 = getLotrzyk();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items228);
          } else if (zdolnosc === 'Magia czarnoksięska') {
            var _items229 = getMagiaCzaroksieska();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items229);
          } else if (zdolnosc === 'Magia kapłańska') {
            var _items230 = getMagiaKaplanska();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items230);
          } else if (zdolnosc === 'Magia powrzechna') {
            var _items231 = getMagiaPowrzechna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items231);
          } else if (zdolnosc === 'Magia prosta') {
            var _items232 = getMagiaProsta();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items232);
          } else if (zdolnosc === 'Magia prosta(gusła)') {
            var _items233 = getMagiaProstaGusla();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items233);
          } else if (zdolnosc === 'Magia prosta(tajemna)') {
            var _items234 = getMagiaProstaTajemna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items234);
          } else if (zdolnosc === 'Magia tajemna') {
            var _items235 = getMagiaTajemna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items235);
          } else if (zdolnosc === 'Medytacja') {
            var _items236 = getMedytacja();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items236);
          } else if (zdolnosc === 'Morderczy atak') {
            var _items237 = getMorderczyAtak();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items237);
          } else if (zdolnosc === 'Morderczy pocisk') {
            var _items238 = getMorderczyPocisk();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items238);
          } else if (zdolnosc === 'Naśladowca') {
            var _items239 = getNasladowca();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items239);
          } else if (zdolnosc === 'Niepokojący') {
            var _items240 = getNiepokojacy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items240);
          } else if (zdolnosc === 'Nieustraszony') {
            var _items241 = getNieustraszony();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items241);
          } else if (zdolnosc === 'Niezwykle odporny') {
            var _items242 = getNiezwykleOdporny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items242);
          } else if (zdolnosc === 'Obieżyświat') {
            var _items243 = getObiezyswiat();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items243);
          } else if (zdolnosc === 'Oburęczność') {
            var _items244 = getOburecznosc();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items244);
          } else if (zdolnosc === 'Odporność na chaos') {
            var _items245 = getOdpornoscNaChaos();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items245);
          } else if (zdolnosc === 'Odporność na choroby') {
            var _items246 = getOdpornoscNaChoroby();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items246);
          } else if (zdolnosc === 'Odporność na magię') {
            var _items247 = getOdpornoscNaMagie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items247);
          } else if (zdolnosc === 'Odporność na trucizny') {
            var _items248 = getOdpornoscNaTrucizny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items248);
          } else if (zdolnosc === 'Odporność psychiczna') {
            var _items249 = getOdpornoscPsychiczna();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items249);
          } else if (zdolnosc === 'Odwaga') {
            var _items250 = getOdwaga();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items250);
          } else if (zdolnosc === 'Ogłuszanie') {
            var _items251 = getOgluszenie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items251);
          } else if (zdolnosc === 'Opanowanie') {
            var _items252 = getOpanowanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items252);
          } else if (zdolnosc === 'Ożywieniec') {
            var _items253 = getOzywieniec();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items253);
          } else if (zdolnosc === 'Pancerz wiary') {
            var _items254 = getPancerzWiary();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items254);
          } else if (zdolnosc === 'Poliglota') {
            var _items255 = getPoliglota();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items255);
          } else if (zdolnosc === 'Przemawianie') {
            var _items256 = getPrzemawianie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items256);
          } else if (zdolnosc === 'Przerażający') {
            var _items257 = getPrzerazajacy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items257);
          } else if (zdolnosc === 'Rozbrajanie') {
            var _items258 = getRozbrajanie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items258);
          } else if (zdolnosc === 'Silny cios') {
            var _items259 = getSilnyCios();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items259);
          } else if (zdolnosc === 'Straszny') {
            var _items260 = getStraszny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items260);
          } else if (zdolnosc === 'Strzał mierzony') {
            var _items261 = getStrzalMierzony();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items261);
          } else if (zdolnosc === 'Strzał precyzyjny') {
            var _items262 = getStrzalPrecyzyjny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items262);
          } else if (zdolnosc === 'Strzał przebijający') {
            var _items263 = getStrzalPrzebijajacy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items263);
          } else if (zdolnosc === 'Strzelec wyborowy') {
            var _items264 = getStrzelecWyborowy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items264);
          } else if (zdolnosc === 'Szał bojowy') {
            var _items265 = getSzalBojowy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items265);
          } else if (zdolnosc === 'Szczęście') {
            var _items266 = getSzczescie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items266);
          } else if (zdolnosc === 'Szósty zmysł') {
            var _items267 = getSzostyZmysl();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items267);
          } else if (zdolnosc === 'Szybki refleks') {
            var _items268 = getSzybkiRefleks();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items268);
          } else if (zdolnosc === 'Szybkie wyciągnięcie') {
            var _items269 = getSzybkieWyciagniecie();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items269);
          } else if (zdolnosc === 'Talent artystyczny') {
            var _items270 = getTalentArtystyczny();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items270);
          } else if (zdolnosc === 'Twardziel') {
            var _items271 = getTwardziel();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items271);
          } else if (zdolnosc === 'Ulicznik') {
            var _items272 = getUlicznik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items272);
          } else if (zdolnosc === 'Urodzony wojownik') {
            var _items273 = getUrodzonyWojownik();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items273);
          } else if (zdolnosc === 'Wędrowiec') {
            var _items274 = getWedrowiec();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items274);
          } else if (zdolnosc === 'Widzenie w ciemności') {
            var _items275 = getWidzenieWCiemnosci();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items275);
          } else if (zdolnosc === 'Woltyżerka') {
            var _items276 = getWoltyzerka();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items276);
          } else if (zdolnosc === 'Wyczucie kierunku') {
            var _items277 = getWyczucieKierunku();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items277);
          } else if (zdolnosc === 'Wykrywanie pułapek') {
            var _items278 = getWykrywaniePulapek();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items278);
          } else if (zdolnosc === 'Wyostrzone zmysły') {
            var _items279 = getWyostrzonezmysly();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items279);
          } else if (zdolnosc === 'Zapasy') {
            var _items280 = getZapasy();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items280);
          } else if (zdolnosc === 'Zapiekła nienawiść') {
            var _items281 = getZapieklaNienawisc();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items281);
          } else if (zdolnosc === 'Zmysł magii') {
            var _items282 = getZmyslMagii();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items282);
          } else if (zdolnosc === 'Żyłka handlowa') {
            var _items283 = getZylkaHandlowa();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items283);
          } else if (zdolnosc === 'Losowe człowiek') {
            var i = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

            if (i < 5) {
              var _items284 = getBardzoSilny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items284);
            } else if (i < 10) {
              var _items285 = getBardzoSzybki();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items285);
            } else if (i < 14) {
              var _items286 = getBlyskotliwosc();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items286);
            } else if (i < 19) {
              var _items287 = getBystryWzrok();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items287);
            } else if (i < 23) {
              var _items288 = getCharyzmatyczny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items288);
            } else if (i < 28) {
              var _items289 = getCzulySluch();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items289);
            } else if (i < 32) {
              var _items290 = getGeniuszArytmetyczny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items290);
            } else if (i < 36) {
              var _items291 = getKrzepki();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items291);
            } else if (i < 41) {
              var _items292 = getNasladowca();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items292);
            } else if (i < 45) {
              var _items293 = getNiezwykleOdporny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items293);
            } else if (i < 50) {
              var _items294 = getOburecznosc();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items294);
            } else if (i < 54) {
              var _items295 = getOdpornoscNaChoroby();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items295);
            } else if (i < 58) {
              var _items296 = getOdpornoscNaMagie();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items296);
            } else if (i < 62) {
              var _items297 = getOdpornoscNaTrucizny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items297);
            } else if (i < 67) {
              var _items298 = getOdpornoscPsychiczna();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items298);
            } else if (i < 72) {
              var _items299 = getOpanowanie();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items299);
            } else if (i < 76) {
              var _items300 = getStrzelecWyborowy();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items300);
            } else if (i < 80) {
              var _items301 = getSzczescie();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items301);
            } else if (i < 84) {
              var _items302 = getSzostyZmysl();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items302);
            } else if (i < 88) {
              var _items303 = getSzybkiRefleks();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items303);
            } else if (i < 92) {
              var _items304 = getTwardziel();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items304);
            } else if (i < 96) {
              var _items305 = getUrodzonyWojownik();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items305);
            } else {
              var _items306 = getWidzenieWCiemnosci();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items306);
            }
          } else if (zdolnosc === 'Losowe niziołek') {
            var _i2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

            if (_i2 < 5) {
              var _items307 = getBardzoSilny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items307);
            } else if (_i2 < 10) {
              var _items308 = getBardzoSzybki();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items308);
            } else if (_i2 < 14) {
              var _items309 = getBlyskotliwosc();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items309);
            } else if (_i2 < 19) {
              var _items310 = getBystryWzrok();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items310);
            } else if (_i2 < 24) {
              var _items311 = getCharyzmatyczny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items311);
            } else if (_i2 < 29) {
              var _items312 = getCzulySluch();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items312);
            } else if (_i2 < 35) {
              var _items313 = getGeniuszArytmetyczny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items313);
            } else if (_i2 < 40) {
              var _items314 = getKrzepki();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items314);
            } else if (_i2 < 45) {
              var _items315 = getNasladowca();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items315);
            } else if (_i2 < 50) {
              var _items316 = getNiezwykleOdporny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items316);
            } else if (_i2 < 54) {
              var _items317 = getOburecznosc();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items317);
            } else if (_i2 < 59) {
              var _items318 = getOdpornoscNaChoroby();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items318);
            } else if (_i2 < 63) {
              var _items319 = getOdpornoscNaMagie();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items319);
            } else if (_i2 < 65) {
              var _items320 = getOdpornoscNaTrucizny();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items320);
            } else if (_i2 < 69) {
              var _items321 = getOdpornoscPsychiczna();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items321);
            } else if (_i2 < 74) {
              var _items322 = getOpanowanie();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items322);
            } else if (_i2 < 79) {
              var _items323 = getStrzelecWyborowy();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items323);
            } else if (_i2 < 83) {
              var _items324 = getSzczescie();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items324);
            } else if (_i2 < 88) {
              var _items325 = getSzostyZmysl();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items325);
            } else if (_i2 < 93) {
              var _items326 = getSzybkiRefleks();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items326);
            } else if (_i2 < 97) {
              var _items327 = getTwardziel();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items327);
            } else {
              var _items328 = getUrodzonyWojownik();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_items328);
            }
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
        umiejetnosci: ['Plotkowanie', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
        zdolnosci: ['Losowe człowiek', 'Losowe człowiek']
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
        wyborUmiejetnosciRasy: [['Rzemiosło(górnictwo)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kowalstwo)']],
        zdolnosci: ['Krasnoludzki fach', 'Krzepki', 'Odporność na magię', 'Odwaga', 'Widzenie w ciemności', 'Zapiekła nienawiść']
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
        umiejetnosci: ['Wiedza(elfy)', 'Znajomość języka(eltharin)', 'Znajomość języka(staroświatowy)'],
        zdolnosci: ['Bystry wzrok', 'Widzenie w ciemności'],
        wyborZdolnosciRasy: [['Broń specjalna(łuk)', 'Zmysł magii'], ['Opanowanie', 'Błyskotliwość']]
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
        wyborUmiejetnosciRasy: [['Rzemiosło(gotowanie)', 'Rzemiosło(uprawa ziemi)']],
        zdolnosci: ['Broń specjalna(proca)', 'Odporność na chaos', 'Widzenie w ciemności', 'Losowe niziołek']
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
        profesjatitle: 'Zabójca trolli',
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
        opis: 'W hierarchii wartości mieszkańców Starego Świata religia spadła na drugie miejsce, ustępując bogactwu, ale wciąż jeszcze wielu młodych ludzi obojga płci znajduje w sobie powołanie do służby bożej. Praca kapłana wymaga poświęcenia i determinacji duchowej. Bycie akolitą to pierwszy krok na drodze ku kapłaństwu. Młodzi duchowni przechodzą surowe ćwiczenia pod opieką starszych kapłanów. Do końca nowicjatu nie mogą nauczać ani wygłaszać kazań. Czas spędzają na studiowaniu świętych ksiąg, czytaniu i przepisywaniu manuskryptów oraz na poznawaniu sztuki wzniosłego przemawiania. Akolici uczą się również walki na wypadek, gdyby trzeba było bronić świątyni. Uwagi: Musisz wybrać boga i Świątynię, którym służy Twój Bohater. Szczegółowy opis rozmaitych religii wyznawanych w Starym Święcie znajdziesz w Rozdziale VIII: Religie i wierzenia. Wybór bóstwa zapewnia dodatkową umiejętność lub zdolność, wymienioną w opisie kultu.',
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
        zdolnosci: ['Przemawianie'],
        wyborZdolnosciProfesji: [['Bardzo silny', 'Szybki refleks'], ['Charyzmatyczny', 'Urodzony wojownik']],
        wyposazenie: 'szaty kapłańskie, symbol boga'
      }];
    }

    function getBanita() {
      return [{
        title: 'Banita',
        opis: 'W Imperium kara za przestępstwo wymierzana jest szybko i bez litości. Nic więc dziwnego, że wielu ludzi wybiera ucieczkę przed strażnikami i życie na wygnaniu. W lasach pełno jest grup banitów, którzy nic tylko muszą ukrywać się przed stróżami prawa, ale także walczyć z żyjącymi w lasach potworami i sługami ciemności. Większość banitów to zwykli złodzieje i zbóje napadający na karawany i powozy. Inni próbują występować w obronie chłopów i walczyć o sprawiedliwość, przeciwstawiając się okrutnym rządom lokalnych panów. Banici, którzy napadają na żołnierzy i najemników szlacheckich, mogą liczyć na pomoc chłopów, przeważnie w formie żywności, schronienia i przekazywanych wiadomości. Wyśledzenie ich kryjówek, zazwyczaj ukrytych gdzieś w głębi lasu lub w trudnym, górskim terenie, jest wyjątkowo ciężkim zadaniem dla stróżów prawa. Miejscowi władcy i zarządcy często korzystają z usług łowców nagród, by unieszkodliwiać najbardziej kłopotliwych bandytów.',
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
        wyborZdolnosciProfesji: [['Strzał mierzony', 'Ogłuszanie'], ['Wędrowiec', 'Łotrzyk']],
        wyposazenie: 'łuk, 10 strzał, lekki pancerz(skórzany kaftan)'
      }];
    }

    function getberserkerZNorski() {
      return [{
        title: 'Berserker z Norski',
        opis: 'Norska to ponura kraina na północ od Imperium, nawiedzana przez śnieżne trolle i pomioty Chaosu. To także kraj twardych i walecznych wojowników. Najsłynniejszymi i jednocześnie najbardziej szalonymi są berserkerzy. Ruszają do walki bez pancerzy, by pokazać przeciwnikowi i swoim towarzyszom, że nie znają strachu. Przed walką doprowadzają się do szalu, gryząc tarcze lub łomocząc w nie mieczami. O ich wyczynach bardowie układają pieśni. O ich odwadze zaświadczają ci z żołnierzy Imperium, którzy przeżyli walkę z berserkerami. Spotykani w Imperium podróżnicy z Norski są wygnańcami, albo też przybyli ujrzeć krainy słabych południowców. Rzadko pozostają w jednym miejscu przez długi czas, gdyż niewielu stróżów prawa lubi mieć pod bokiem groźnego szaleńca. Berserkerzy są często zatrudniani jako najemnicy, głównie ze względu na swoją skuteczność. Idzie ona w parze z ceną, jakiej żądają za swoje usługi.',
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
        zdolnosci: ['Broń specjalna(dwuręczna)', 'Groźny', 'Szał bojowy', 'Szybkie wyciągnięcie'],
        wyposazenie: 'broń dwuręczna albo tarcza, lekki pancerz(skórzany kaftan), butelka gorzałki'
      }];
    }

    function getChlop() {
      return [{
        title: 'Chłop',
        opis: 'Chłopi stanowią najliczniejszą część ludności Imperium. Szlachta rządzi, mieszczanie handlują, natomiast chłopi wykonują za nich najcięższą pracę. Uprawiają ziemię, wypasają bydło i zajmują się drobnym rzemiosłem. W czasie wojny walczą i giną za swojego władcę oraz Imperium. Wielu chłopów szuka lepszego życia w miastach, zasilając wciąż rosnącą rzeszę żebraków i biedaków żyjących na skraju śmierci głodowej. Większość chłopów całe życic spędza w swoich wioskach, otoczonych przez dzikie ostępy lub mroczne lasy. Mimo że są zacofani i przesądni, chłopi to prawdziwa sól tej ziemi.',
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
        wyborZdolnosciProfesji: [['Chodu!', 'Broń specjalna(proca)'], ['Twardziel', 'Wędrowiec']],
        wyposazenie: 'proca albo kij, skórzany bukłak'
      }];
    }

    function getCiuraObozowa() {
      return [{
        title: 'Ciura Obozowa',
        opis: 'Liczne wojny z Chaosem, orkami i okolicznymi księstwami powodują, że wojska Imperium prawic zawsze są w polu. Po kraju krążą też kompanie najemników i oddziały ochotników, które przeczesują lasy w poszukiwaniu bandytów. Jednak wojsko rzadko podróżuje bez taborów i służby pomocniczej. Za armiami zawsze ciągnie się kolumna włóczęgów, zwanych ciurami obozowymi. Są wśród nich drobni handlarze opiekujący się taborami, rzemieślnicy próbujący zarobić gotowaniem i drobnymi naprawami, markietanki, a także złodzieje, którzy okradają zwłoki poległych. Traktowani z pogardą przez wyniosłych dowódców armii, ciury obozowe stanowią zaplecze o kluczowym znaczeniu dla oddziałów wojskowych w terenie.',
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
        zdolnosci: ['Chodu!'],
        wyborZdolnosciProfesji: [['Odporność na choroby', 'Obieżyświat'], ['Twardziel', 'Charyzmatyczny'], ['Żyłka handlowa', 'Bijatyka']],
        wyposazenie: 'taliznam szczęścia albo narzędzia(rzemieślnika), sakiewka, namiot'
      }];
    }

    function getCyrkowiec() {
      return [{
        title: 'Cyrkowiec',
        opis: 'Cyrkowcy dostarczają rozrywki ludności Imperium. Akrobaci, siłacze, żonglerzy, hipnotyzerzy, woltyżerzy i brzuchomówcy - wszyscy występują dla spragnionej uciechy gawiedzi. Niektórzy robią to dla pieniędzy lub dla sławy i przyjemności, jaką daje zachwyt zgromadzonej publiczności. Inni wybierają życie cyrkowca, za wszelką cenę próbując wyrwać się z biedy. Cyrkowcy dużo podróżują, zazwyczaj w towarzystwie podobnych sobie kuglarzy. Trupy aktorskie dają przedstawienia w każdej wiosce, mieście i porcie. Szczęśliwcy mogą liczyć na wielokrotne występy, co pozwala na spędzenie kilku miesięcy w jednym miejscu. Ci. którym mniej się poszczęściło, podróżują dalej w poszukiwaniu hojniejszej publiczności (lub mniej podejrzliwej gwardii miejskiej). Najlepsi cyrkowcy cieszą się opieką arystokratów i zarabiają ogromne sumy. występując na zamkach i dworach.',
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
        wyborZdolnosciProfesji: [['Bardzo silny', 'Broń specjalna(rzucana)', 'Człowiek-guma', 'Naśladowca', 'Przemawianie', 'Strzał mierzony', 'Szybki refleks', 'Szybkie wyciągnięcie', 'Woltyżerka', 'Zapasy'], ['Bardzo silny', 'Broń specjalna(rzucana)', 'Człowiek-guma', 'Naśladowca', 'Przemawianie', 'Strzał mierzony', 'Szybki refleks', 'Szybkie wyciągnięcie', 'Woltyżerka', 'Zapasy']],
        wyposazenie: 'lekki pancerz(skórzana kaftan), jeden przedmiot do wyboru spośród: 3 noże do rzucania, 2 topory do rzucania, instrument muzyczny(dowolny), narzędzia(kuglarza), jeden przedmiot do wyboru spośród: kustium cyrkowca(dowolny) albo ubranie dobrej jakości'
      }];
    }

    function getCyrulik() {
      return [{
        title: 'Cyrulik',
        opis: 'Cyrulicy zajmują się leczeniem najbiedniejszych obywateli Imperium. Wykonują zabiegi, często bolesne, które jednak okazują się zaskakująco skuteczne. Chociaż cyrulicy nie są tak wykształceni jak medycy, znają jednak podstawy anatomii. Dorabiają również jako balwierze, strzygąc włosy i brody, ale znani są głównie z prostych zabiegów leczniczych, wśród których dominuje puszczanie krwi, przystawianie pijawek oraz amputacje. Cyrulicy zawsze noszą przy sobie zestaw ostrych noży różnej długości, od niewielkich skalpeli po wielkie piły do cięcia kości. Niektórzy dysponują jeszcze bardziej przerażającymi narzędziami, których używają w najbardziej  znienawidzonej specjalności - wyrywaniu zębów. Większość statków morskich ma na pokładzie cyrulika, który dba o zdrowie żeglarzy. Czysto spotyka się ich również w miastach, szczególnie w biedniejszych dzielnicach.',
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
        zdolnosci: ['Chirurgia'],
        wyborZdolnosciProfesji: [['Charyzmatyczny', 'Niezwykle odporny'], ['Odporność na choroby', 'Błyskotliwość']],
        wyposazenie: 'narzędzia(cyrulika)'
      }];
    }

    function getFanatyk() {
      return [{
        title: 'Fanatyk',
        opis: 'Fanatyk stracił wszystko, co było dla niego cenne. Być może jego rodzinę wymordowali zwierzoludzie albo cala wioska została spalona przez orki. Być może stracił majątek w wyniku intrygi przekupnego kupca albo młody szlachcic uprowadził lub zgwałcił jego córkę. Niezależnie od powodu, fanatyków utrzymuje A przy życiu tylko jedno - religia. Znajdują ukojenie w płomiennych kazaniach kapłanów Ulryka lub Sigmara. Wędrują w podartych łachmanach po całym Imperium, szukając sług zła lub osób skażonych Chaosem. Ukojenie od bólu i odkupienie  win może im zapewnić tylko przelewana w dobrej sprawie krew - zarówno ich własna, jak i wrogów Imperium. Nie są tak dobrze wyszkoleni jak żołnierze, ale rozpala ich żar prawdziwej wiary, a to naprawdę potężny oręż.',
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
        zdolnosci: ['Broń specjalna(korbacz)', 'Przemawianie'],
        wyborZdolnosciProfesji: [['Opanowanie', 'Bardzo silny'], ['Twardziel', 'Charyzmatyczny']],
        wyposazenie: 'korbacz, albo morgensztern, lekki pancerz(skórzana kurta), butelka spirytusu lub gorzałki dobrej jakości'
      }];
    }

    function getFlisak() {
      return [{
        title: 'Flisak',
        opis: 'Rzeki w Imperium są ważnymi szlakami komunikacyjnymi i handlowymi. łączą większość głównych miast w kraju. Transportem rzecznym zajmują się flisacy, wożąc pasażerów i towary po niemal całym Imperium. Niektórzy podróżują nawet do Kisleva. Rzeki, choć bezpieczniejsze od mrocznych leśnych ścieżek, nic są całkowicie wolne od zagrożeń. Wiele szlaków rzecznych przecina dzikie tereny. Flisacy stale muszą mieć się na baczności, chroniąc podróżnych i ładunek przed atakami piratów na wodzie lub rozbójników na lądzie. Doświadczeni flisacy są pomysłowi i odważni. Świetnie radzą sobie z nawigacją i sterowaniem łodzią. Potrafią też sprawnie posługiwać się bronią.',
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
        zdolnosci: ['Obieżyświat', 'Wyczucie kierunku'],
        wyposazenie: 'lekki pancerz(skórzana kurta), łódź wiosłowa'
      }];
    }

    function getGiermek() {
      return [{
        title: 'Giermek',
        opis: 'Giermkowie towarzyszą rycerzowi w bitwie i podróży, zdobywając doświadczenie i umiejętności przydatne w walce. Zazwyczaj wywodzą się z rodów szlacheckich, jednak rzadko ich obowiązki wykraczają poza zajęcia godne służących. Zwykle ich jedynym zadaniem jest przynoszenie jadła i napitku swoim opiekunom lub zajmowanie się rumakiem i uprzężą rycerza. Ciężka praca ma nauczyć ich pokory i wytrzymałości na trudy, a także przygotować do bycia rycerzem. Pan giermka ma obowiązek wprawiać go w sztuce wojennej, choć wielu zaniedbuje wykonywania wymaganych ćwiczeń szermierki i taktyki. Synowie wpływowych szlachciców są giermkami zaledwie przez kilka miesięcy, natomiast biedniejsi młodzieńcy muszą czekać cale lata na ceremonię pasowania. Uwagi: Jeśli przy tworzeniu Bohatera Gracza wybierzesz umiejętności wiedza (Bretonia) i znajomość języka (bretoński), Twój Bohater może pochodzić z Bretonii.',
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
        zdolnosci: ['Broń specjalna(kawaleryjska)', 'Etykieta', 'Silny cios'],
        wyposazenie: 'lanca, średni pancerz(kaftan kolczy, czepiec kolczy i skórzana kurta), tarcza, koń z siodłem i uprzężą'
      }];
    }

    function getGladiator() {
      return [{
        title: 'Gladiator',
        opis: 'Walki gladiatorów to podobno ulubiona rozrywka ogrów. Możliwe, że brutalne walki na śmierć i życie są jedynym wkładem tej prymitywnej rasy w rozwój kultury Starego Świata. W przeszłości na arenie występowali przestępcy albo jeńcy wojenni. Wypuszczano ich grupą na środek areny otoczonej murem lub wykopanej w dole i rzucano kilka sztuk broni. Wygrywał ostatni pozostały przy życiu. Obecnie, niezależnie od wciąż wykorzystywanych skazańców i niewolników, istnieje też grupa zawodowych gladiatorów, którzy szukają na arenie bogactwa i sławy. Inni walczą jedynie po to. by przeżyć jak najdłużej, wśród wrzasków gawiedzi żądnej ich krwi. Najlepsi gladiatorzy zdobywają pokaźny majątek (z nagród oraz zakładów, jakie towarzyszą każdej walce). Gladiatorzy-niewolnicy mogą dzięki temu wykupić sobie wolność.',
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
        zdolnosci: ['Broń specjalna(parująca)', 'Silny cios'],
        wyborZdolnosciProfesji: [['Bardzo silny', 'Odporność psychiczna'], ['Broń specjalna(dwuręczna)', 'Broń specjalna(korbacz)'], ['Rozbrajanie', 'Zapasy'], ['Szybkie wyciągnięcie', 'Morderczy atak']],
        wyposazenie: 'korbacz albo broń dwuręczna, kastet, średni pancerz(kaftan kolczy i skórzana kurta), tarcza albo puklerz'
      }];
    }

    function getGoniec() {
      return [{
        title: 'Goniec',
        opis: 'Krasnoludzkie twierdze w Górach Krańca Świata łączy skomplikowana sieć podziemnych korytarzy, zwana Undgrin Ankor. Łączność między fortecami zapewniają gońcy. Są to doskonale wyszkoleni młodzi biegacze, którzy doręczają wiadomości zapisane krasnoludzkim pismem runicznym. W ciągu ostatnich kilkuset lat praca gońca stała się jeszcze bardziej niebezpieczna. Muszą unikać wszędobylskich goblinów. Nadkładają drogi, omijając zablokowane korytarze i eksplorując dzikie, podziemne obszary. Często muszą podróżować na powierzchni ziemi. Najsilniejsi i najbardziej wytrzymali gońcy są wykorzystywani do przekazywania wiadomości między fortecami krasnoludów w górach a koloniami w głębi Imperium.',
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
        zdolnosci: ['Błyskawiczne przeładowanie', 'Chodu!', 'Wyczucie kierunku'],
        wyborZdolnosciProfesji: [['Bardzo szybki', 'Szósty zmysł'], ['Niezwykle odporny', 'Bardzo silny']],
        wyposazenie: 'kusza i 10 bełtów, lekki pancerz(skórzana kurta), mikstura leczenia, talizman szczęścia'
      }];
    }

    function getGornik() {
      return [{
        title: 'Górnik',
        opis: 'Granice Imperium wyznaczają góry. Na wchodzie ciągnie się grzbiet Gór Krańca Świata, na południu leżą Góry Czarne, a na zachodzie Góry Szare. Pomimo zagrożenie ze strony goblinów i innych podziemnych stworów, ludzie i krasnoludy od niepamiętnych czasów pracowali w górskich kopalniach. Górnicy wydobywają złoto, srebro, kamienie szlachetne, ale przede wszystkim żelazo i rudy różnych metali. Inni poszukują złóż na powierzchni, szczególnie w Górach Środkowych, na granicy między prowincjami Hochland i Ostland. Mimo iż te pokryte lasami góry znajdują się w całości na terenach Imperium, są schronieniem dla trolli, zwierzoludzi i innych plugawych stworzeń. Przeżycie w takich warunkach wymaga nie lada wysiłku i umiejętności.',
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
        zdolnosci: ['Broń specjalna(dwuręczna)', 'Wyczucie kierunku'],
        wyborZdolnosciProfesji: [['Niezwykle odporny', 'Urodzony wojownik']],
        wyposazenie: 'broń dwuręczna(dwuręczny kilof), lekki pancerz(skórzana kurta), kilof, łopata, latarnia sztormowa, olej do latarni'
      }];
    }

    function getGuslarz() {
      return [{
        title: 'Guślarz',
        opis: 'Guślarze potrafią rzucać czary nie mając formalnego wykształcenia w sztukach magicznych. Tworzą zaklęcia, używając instynktu, sztuczek i wykorzystując zakorzenione wśród ludzi przesądy. Choć czasem nie zdają sobie z tego sprawy, za każdym razem, gdy korzystają z magii, ryzykują zwróceniem na siebie uwagi demonów i innych istot nie z tego świata. Z tego powodu stają się celem poszukiwań i prześladowań ze strony łowców czarownic. Niektórzy guślarze decydują się na dołączenie do jednego z Kolegiów Magii. Inni próbują ukrywać swój dziki talent, zamieszkując z dala od ludzkich osad. Zwykle nie jest to najrozsądniejszy wybór.',
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
        zdolnosci: ['Gusła', 'Magia prosta(gusła)'],
        wyposazenie: 'mikstura leczenia, płaszcz z kapturem'
      }];
    }

    function getHienaCmentarna() {
      return [{
        title: 'Hiena Cmentarna',
        opis: 'Mimo pewnych podobieństw do porywaczy zwłok, hieny cmentarne różnią się od nich w zasadniczej kwestii. Bardziej niż trupami interesują się kosztownościami, jakie można znaleźć w grobowcach i kryptach. Mimo iż obecnie rzadko można znaleźć w grobach cenne przedmioty, to jednak istnieje sporo starożytnych nekropolii, które zawierają bezcenne skarby. Hieny cmentarne specjalizują się w odkrywaniu takich miejsc i ich plądrowaniu. Sekretne krypty znajdują się zazwyczaj w niedostępnych miejscach i bywają zabezpieczone pułapkami. Cmentarze w Imperium, uznawane za ziemię poświęconą, strzeżone są przez miejscowych strażników. Wejście na teren nekropolii może więc okazać się bardzo ryzykowne. Groby dostojników i władców mieszczą się w katakumbach świątyń i w miejscach strzeżonych nie tylko przez ludzi. Niewiele hien cmentarnych przeżywa na tyle długo, by uzbierać wielką fortunę.',
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
        wyborZdolnosciProfesji: [['Szczęście', 'Szósty zmysł'], ['Wykrywanie pułapek', 'Grotołaz']],
        wyposazenie: 'lekki pancerz(skórzana kurta), łom, latarnia, olej do latarni, 10 metrów liny, 2 worki'
      }];
    }

    function getKanciarz() {
      return [{
        title: 'Kanciarz',
        opis: 'Kanciarze kierują się swoistym życiowym mottem: jeśli nie musisz, nie pracuj uczciwie. Sprytem i gładkimi słówkami próbują zdobyć możliwie najwyższą pozycję w hierarchii przestępców. Niektórzy pracują jako przewodnicy po najlepszych oberżach i zamtuzach w mieście. Inni parają się szulerstwem lub fałszerstwami. Kanciarz woli posługiwać się rozumem niż mieczem. Zawsze ma na podorędziu kilka wymyślonych opowiastek i wykrętów. Niektórzy kanciarze działają wyłącznie na dobrze sobie znanym terenie. Inni podróżują od osady do osady, zarabiając na wyrafinowanych szwindlach, a potem błyskawicznie znikają z miasta. Najlepsi kanciarze nie oszukują, tylko tworzą rzeczywistość. Nawet ich ofiary nie wiedzą, że padły ofiarą przekrętu.',
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
        zdolnosci: ['Przemawianie'],
        wyborZdolnosciProfesji: [['Chodu!', 'Łotrzyk'], ['Szczęście', 'Szósty zmysł']],
        wyposazenie: 'ubranie najlepszej jakości albo zestaw kości do gry albo talia kart, 1k10 zk'
      }];
    }

    function getKozakKislevski() {
      return [{
        title: 'Koza kislevski',
        opis: 'Kozacy należeli do plemienia Ungolów, które zajmowało tereny na północny wschód od imperium. Plemię ze wschodu. zwane Gospodarami, najechało ich ziemie. podbiło lud Ungołów i założyło państwo Kislev. W tej wojnie Kozacy walczyli po stronie Gospodarów jako najemnicy przeciwko pozostałym Ungolom. Ich niezwykły styl walki wywarł spore wrażenie na starszyźnie Gospodarów, Od tamtego czasu regimenty Kozaków służą jako gwardia Carów Kisleva. Obecnie Kozacy nie są już odrębnym plemieniem. Lecz stanowią elitarną jednostkę bojową, tworzoną z najlepszych wojowników pochodzących z całego Kisleva. Uzbrojeni w łuki i dwuręczne topory są niezwykle wszechstronnymi wojownikami na polu bitwy. Wielu Kozaków, zmęczonych nieustanną Wojną w ojczyźnie podróżuje po imperium, wybierając życie najemnika lub poszukiwacza przygód.',
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
        zdolnosci: ['Broń specjalna(dwuręczna)', 'Morderczy atak'],
        wyposazenie: 'łuk i 10 strzał, broń dwuręczna(dwuręczny topór), średni pancerz(kolczuga, skórzana kurta i skórzane nogawice)'
      }];
    }

    function getLesnik() {
      return [{
        title: 'Leśnik',
        opis: 'Leśnicy żyją zwykle w pobliżu wielkich puszcz, zajmując się ścinaniem drzew i łowiectwem dla potrzeb miejscowej ludności. Najbogatsi pracują w pobliżu wielkich posiadłości szlacheckich, zaś najodważniejsi żyją na skraju cywilizowanych obszarów, pomagając zasiedlać dzikie obszary. Leśnicy muszą zmagać się z czyhającymi w lasach bandytami, zwierzoludźmi i dziką zwierzyną. Na podorędziu mają topory, nie zawsze używane tylko do ścinania drzew. Przy tej okazji często dochodzi do zwad z elfami, które nie tolerują, ich zdaniem całkowicie niepotrzebnego, wycinania świętych lasów.',
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
        zdolnosci: ['Broń specjalna(dwuręczna)', 'Wędrowiec'],
        wyborZdolnosciProfesji: [['Bardzo szybki', 'Niezwykle odporny']],
        wyposazenie: 'broń dwuręczna(dwuręczny topór), lekki pancerz(skórzana kurta), odtrutki'
      }];
    }

    function getLowca() {
      return [{
        title: 'Łowca',
        opis: 'Chociaż od powstania Imperium minęła ponad dwa i pół tysiąca lat, niektóre rzeczy pozostają niezmienne. Minio rozwoju wiosek i rolnictwa wielkie obszary wciąż porośnięte są przez lasy pełne dzikiego zwierza. Łowcy, tak jak ich przodkowie przed wiekami, używają tych samych metod, by wytropić zwierzynę i zabić ją celnym strzałem lub złapać w sidła. Podchodzenie zwierzyny wymaga wiele odwagi, szczególnie wobec nieustannego zagrożenia ze strony potworów, jakie zamieszkują leśne ostępy. Łowcy chętnie noszą futrzane płaszcze i czapy. Przy pierwszym spotkaniu mogą wydawać- się nieokrzesani, szczególnie w opinii mieszkańców miast. Łowcy szczycą się jednak swoją niezależnością, więc niespecjalnie przejmują się opinią innych.',
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
        zdolnosci: ['Błyskawiczne przeładowanie'],
        wyborZdolnosciProfesji: [['Strzelec wyborowy', 'Wędrowiec'], ['Szybki refleks', 'Niezwykle odporny'], ['Twardziel', 'Broń specjalna(łuk)']],
        wyposazenie: 'długi łuk i 10 strzał, 2 potrzaski albo wnyki na zwierzęta, odtrutki'
      }];
    }

    function getLowcaNagrod() {
      return [{
        title: 'Łowca Nagród',
        opis: 'Łowcy nagród zajmują się tropieniem przestępców  i uciekinierów oraz doprowadzaniem ich przed oblicze sprawiedliwości. Samotny łowca nagród może wejść tam, gdzie nic nie zdziała nawet zbrojny oddział stróży prawa. To czyni ich niezwykle pożytecznymi dla władz i stróżów prawa, choć zazwyczaj bywają traktowani z pogardą. Nagrody są zwykle wyznaczane przez miejscowych władców, gildie kupieckie oraz rady miejskie. Łowcy nagród to zawodowi zabójcy, którzy przywiązują niewielką wagę do ludzkiego życia. Są całkowicie bezwzględni. Używają wszelkich dostępnych metod, by wytropić i jeśli trzeba, zabić przestępcę. Budzą strach wśród biedniejszej części społeczeństwa, gdyż znane są przypadki, gdy łowcy nagród zabijali przygodnie napotkanych chłopów. Następnie przywozili ich ciała, ogłaszając, że są to trupy poszukiwanych przestępców. Pobierali nagrodę i odjeżdżali w swoją stronę.',
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
        zdolnosci: ['Broń specjalna(unieruchamiająca)', 'Wędrowiec'],
        wyborZdolnosciProfesji: [['Strzał mierzony', 'Silny cios'], ['Strzelec wyborowy', 'Ogłuszanie']],
        wyposazenie: 'kusza i 10 bełtów, sieć, lekki pancerz(skórzany kaftan i skórzany hełm), kajdany, 10 metrów liny'
      }];
    }

    function getMieszczanin() {
      return [{
        title: 'Mieszczanin',
        opis: 'Wraz z rozwojem miast pojawiła się nowa klasa obywateli Imperium — mieszczanie. Ich przodkowie byli zwykłymi chłopami, którzy wydobyli się z nędzy i na nowo ułożyli sobie życie w mieście. Następne pokolenie tworzy już społeczność miejską, która rządzi się innymi prawami. Mieszczanie są właścicielami kramów, drobnymi handlarzami, a także świadczą rozliczne usługi na potrzeby ludności miejskiej. Niektórzy zostają kupcami lub urzędnikami miejskimi. Nie są traktowani z pogardą, tak jak chłopstwo, ale również nie cieszą się szacunkiem, takim jak przedstawiciele szlachty. Mimo że zarazy zbierają obfite żniwo wśród obywateli mieszkających w ciasno zabudowanych dzielnicach, to żaden z nich nie chce zamienić życia w mieście na ciężką harówkę na wsi. Dla nich życie w mieście to jedyna szansa, by wybić się ponad nędzny, chłopski stan.',
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
        zdolnosci: ['Żyłka handlowa'],
        wyborZdolnosciProfesji: [['Błyskotliwość', 'Charyzmatyczny']],
        wyposazenie: 'ubranie dobrej jakości, liczydło, latarnia'
      }];
    }

    function getMytnik() {
      return [{
        title: 'Mytnik',
        opis: 'Praca poborcy podatkowego to niewdzięczny zawód. Na terenach wiejskich w zasadzie oznacza to wyrok śmierci. Mytnicy mieszkają w stanicach przy drodze, pobierając myto od przejeżdżających podróżnych. Pieniądze przeznaczane są głównie na naprawę i utrzymanie dróg w Imperium, ale to nie powstrzymuje ich użytkowników przed znieważaniem, biciem, a czasem nawet zabijaniem mytników. Na domiar złego, stanice poborców stanowią ulubiony cel ataków rozbójników i banitów. Profesja mytnika jest więc bardzo niebezpiecznym zajęciem. Mimo stosunkowo wysokich zarobków, niewielu ludzi pracuje długo w tym zawodzie.',
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
        wyborZdolnosciProfesji: [['Szybki refleks', 'Strzelec wyborowy']],
        wyposazenie: 'kusza i 10 bełtów, średni pancerz(kaftan kolczy i skórzany kaftan), tarcza, zamykana na kłódkę skrzynia, 1k10zk'
      }];
    }

    function getNajemnik() {
      return [{
        title: 'Najemnik',
        opis: 'W Starym Świecie wstrząsanym nieustannie wojnami, zawsze znajdzie się praca dla wojownika, który potrafi władać orężem i kocha brzęk złotych monet. Chociaż imperium Utrzymuje potężną armię, chętnie korzysta z pomocy kompanii najemników. Wynajmują ich także miejscowi władcy i bogaci kupcy. Wśród najemników trafiają się młodzi awanturnicy, ale także zawodowi żołnierze, weterani wielu bitew. Pochodzą z różnych regionów Imperium, ale najsłynniejsi przybywają z Tilei. Wszyscy najemnicy marzą o szybkim zdobyciu majątku, jednak większość dorabia się jedynie bezimiennej mogiły na koniec krótkiego życia. Uwagi: Jeśli w trakcie tworzenia Bohatera Gracza wybierzesz umiejętność wiedza (Tilea) i znajomość języka (tileański), Twój Bohater może pochodzić z Tilei.',
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
        wyborZdolnosciProfesji: [['Błyskawiczne przeładowanie', 'Silny cios'], ['Rozbrajanie', 'Szybkie wyciągnięcie'], ['Strzał mierzony', 'Ogłuszanie']],
        wyposazenie: 'kusza i 10 bełtów, średni pancerz(kaftan kolczy i skórzana kurta), tarcza, mikstura lecznicza'
      }];
    }

    function getOchotnik() {
      return [{
        title: 'Ochotnik',
        opis: 'Ochotnicy tworzą lokalne oddziały straży miejskiej. Są to głównie chłopi z okolicznych wiosek. Zobowiązują się do służby w armii przez pewien okres w ciągu roku - zazwyczaj siedem dni - w trakcie którego odbywają ćwiczenia wojskowe. Poszczególne drużyny ochotnicze odbywają wspólne Ćwiczenia na wypadek zwołania pospolitego ruszenia. Nawet tak krótki okres służby może zwiększyć szanse przeżycia na przesiąkniętych krwią polach bitew Starego Świata. Dowódcy drużyn ochotniczych są zazwyczaj weteranami wojskowymi albo najemnikami. Niektóre kompanie ochotnicze muszą zapewnić swoim żołnierzom ekwipunek i uzbrojenie, inne są wyposażane przez lokalne władze. Oznacza to, że niektórzy z ochotników pojawiają się na ćwiczeniach w jednolitych mundurach i z bronią, natomiast inni mają  na sobie jedynie zwykle odzienie i łuki myśliwskie.',
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
        zdolnosci: ['Silny cios'],
        wyborZdolnosciProfesji: [['Broń specjalna(dwuręczna)', 'Błyskawiczne przeładowanie']],
        wyposazenie: 'halabarda albo łuk i 10 strzał, lekki pancerz(skórzana kurta i skórzany hełm), mundur'
      }];
    }

    function getOchroniarz() {
      return [{
        title: 'Ochroniarz',
        opis: 'Mieszkańcy Starego świata mawiają, że kupcy z Altdorfu są tak nieuczciwi, że nie ufają nawet samym sobie. Dlatego zatrudniają ochroniarzy, którzy strzegą bezpieczeństwa kupca i jego majątku. Stary Świat nie jest miejscem spokojnym, a wielkie miasta wcale nie są wyjątkiem od tej reguły. Bogaci i wpływowi kupcy zatrudniają więc osobistych ochroniarzy, którzy mają ich chronić przed złodziejami i drobnymi rzezimieszkami, Niektórzy wyglądają na oprychów (od których zresztą niewiele się różnią), ale inni często przywdziewają bogato zdobione liberie z herbem rodowym ich pana. Najbogatsi kupcy i wpływowi urzędnicy miejscy mają czasami tak liczne orszaki ochroniarzy, że przypominają prywatną gwardię.',
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
        zdolnosci: ['Bijatyka', 'Broń specjalna(parująca)', 'Broń specjalna(rzucana)', 'Ogłuszanie'],
        wyborZdolnosciProfesji: [['Bardzo silny', 'Niezwykle odporny'], ['Rozbrajanie', 'Szybkie wyciągnięcie']],
        wyposazenie: 'dwa topory albo 3 noże do rzucania, kastety, lekki pancerz(skórzana kurta), puklerz'
      }];
    }

    function getOprych() {
      return [{
        title: 'Oprych',
        opis: 'W światku przestępczym siła i brutalność oprychów są wysoko cenione. Tego rodzaju zalety przydają się przy odzyskiwaniu długów, uciszaniu zbyt gorliwego podżegacza lub eliminowaniu konkurencji. Kilka solidnych ciosów pałką zazwyczaj wystarcza. by adresat zrozumiał swój błąd, ale trudniejsze przypadki wymagają pełnego asortymentu narzędzi i bardziej brutalnych metod. W takim przypadku najlepszym wyjściem dla delikwenta jest opuszczenie miasta na jakiś czas. Cmentarze jednakże pełne są tych, którzy uwierzyli we własny spryt. Wszystkie gildie złodziei i organizacje przestępcze korzystają z usług zaufanych oprychów.',
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
        zdolnosci: ['Ogłuszanie', 'Rozbrajanie'],
        wyborZdolnosciProfesji: [['Morderczy atak', 'Zapasy'], ['Odporność na trucizny', 'Szybkie wyciągnięcie'], ['Opanowanie', 'Szybki refleks']],
        wyposazenie: 'kastety, średni pancerz(kaftan kolczy i skórzany kaftan)'
      }];
    }

    function getPaz() {
      return [{
        title: 'Paź',
        opis: 'Paź jest osobistym służącym bogatego mieszczanina, kupca lub szlachcica, a czasem też pełni rolę adiutanta wysokiego rangą oficera wojskowego. Do jego obowiązków należy opieka nad odzieniem, uczesaniem i wygodą pana. Gdy pada deszcz paź natychmiast podaje płaszcz i kapelusz. Na uroczysty bal musi dobrać odpowiedni strój. Dobrze wyszkolony paź jest nieocenioną pomocą dla każdego szlachcica, który dba o swój wygląd, W porównaniu do służących ich życie wydaje się rajem, jednakże wielu paziów nienawidzi swoich zadufanych mocodawców. Kobiety, które usługują swoim paniom, nazywa się służkami.',
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
        zdolnosci: ['Etykieta'],
        wyborZdolnosciProfesji: [['Opanowanie', 'Charyzmatyczny'], ['Żyłka handlowa', 'Obieżyświat']],
        wyposazenie: '2 komplety ubrań najlepszej jakości, liberia, perfumy, mieszek'
      }];
    }

    function getPodzegacz() {
      return [{
        title: 'Podżegacz',
        opis: 'Większość obywateli Imperium ma niewiele do powiedzenia w kwestii polityki. Stanowieniem i egzekwowaniem prawa zajmują się Imperator i elektorzy, przy wsparciu rozmaitych świątyń (wśród których najważniejszą rolę pełnią kulty Sigmara i Ulryka). Niemniej jednak w miastach Imperium dość częstym widokiem są różnego rodzaju działacze polityczni. Podżegacze agitują w rozmaitych sprawach, rozdają ulotki, a takie wygłaszają płomienne przemowy i apele, podburzając okoliczną ludność. W większości przypadków są ignorowani przez straż i władze. Jednak bardziej aktywni podżegacze - szczególnie tacy, którym udało się utrafić w czuły punkt niezadowolonych chłopów i mieszczan - mogą być uznani za niebezpiecznych przestępców, winnych zakłócania porządku publicznego. Tacy podżegacze bywają prześladowani przez miejskie straże, oskarżani o herezję przez lokalnych kapłanów lub wydawani w ręce łowców czarownic. Pomimo wielkiego ryzyka podżegacze wciąż działają. Niektórzy naprawdę wierzą w „sprawę”, za którą agitują, chociaż trafiają się też żądni władzy cynicy, równie występni jak ci, przeciw którym się opowiadają. ',
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
        zdolnosci: ['Chodu!', 'Przemawianie'],
        wyborZdolnosciProfesji: [['Opanowanie', 'Bijatyka']],
        wyposazenie: 'lekki pancerz(skórzana kurta), ubranie dobrej jakości, 2k10 ulotek różnej treści'
      }];
    }

    function getPorywaczZwlok() {
      return [{
        title: 'Porywacz zwłok',
        opis: 'Przedstawiciele medycznych i czarodziejskich profesji potrzebują stałych dostaw świeżych zwłok, zarówno dla celów naukowych, jak i dla hardziej mrocznych potrzeb. Zdobycie ich w sposób zgodny z prawem jest trudne, dlatego czarodzieje i medycy muszą korzystać z usług porywaczy zwłok. Jest to niewdzięczna praca, ale dość dobrze płatna. Najlepsze, czyli najświeższe ciała są sprzedawane po bardzo wysokich cenach. Ale ich zdobycie łączy się z ogromnym ryzykiem. Strażnicy, kapłani Morra i łowcy czarownic bacznie pilnują cmentarzy i surowo karzą wszelkich intruzów.',
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
        zdolnosci: ['Chodu!', 'Odporność na choroby'],
        wyborZdolnosciProfesji: [['Łotrzyk', 'Odporność psychiczna']],
        wyposazenie: 'latarnia, olej do latarni, kilof, łopatak, worek'
      }];
    }

    function getPoslaniec() {
      return [{
        title: 'Posłaniec',
        opis: 'Wobec ogromnych odległości jakie dzielą główne miasta i zamki Imperium, konni posłańcy zapewniają najlepszy sposób przekazywania wiadomości. Z ich usług korzysta szlachta, kupcy i dowódcy wojskowi. Nieustraszeni samotnic wyruszają w drogę, wierząc, ze dzięki szybkości konia i własnemu sprytowi uda im się uniknąć zagrożeń. Często korzystają z pomocy strażników dróg, lecz nie wszędzie i nie zawsze jest to możliwe. Choć są jedynie dostarczycielami informacji, zdarza się, że po przekazaniu szczególnie złych wiadomości, nieszczęsnego posłańca spotyka smutny koniec.',
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
        zdolnosci: ['Obieżyświat', 'Wyczucie kierunku'],
        wyposazenie: 'lekki pancerz(skórzana kurta), tarcza, koń z siodłem i uprzężą(albo kuc dla niziołków), tuba do mapy'
      }];
    }

    function getPrzemytnik() {
      return [{
        title: 'Przemytnik',
        opis: 'Działalność handlowa w portach i miastach Starego Świata podlega rozmaitym regulacjom prawnym i podatkowym. Imperialni poborcy podatkowi, mytnicy, miejscowi władcy. gildie rzemieślnicze i kupieckie, a nawet rozbójnicy i gildie złodziejskie - wszyscy próbują zarobić na kupcach. Podatki i tak są wysokie, a jeszcze trzeba płacić haracz piratom lub grasującym po drogach rozbójnikom. W wielkich portach zwłaszcza w Marienburgu, opodatkowane jest prawie wszystko, włącznie z ludźmi, czasem nawet po kilka razy. Nic więc dziwnego, że działalność przemytnicza rozwija się na coraz szerszą skalę. Przemyt towarów i ludzi jest zakazany prawem, ale dla większości mieszkańców imperium nie stanowi to znaczącej przeszkody. W ich opinii prawdziwymi złodziejami są miejscy urzędnicy i poborcy podatkowi.',
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
        wyborZdolnosciProfesji: [['Żyłka handlowa', 'Łotrzyk']],
        wyposazenie: 'lekki pancerz(skórzana kurta), koń pociągowy i wóz albo łódź wiosłowa, 2 pochodnie'
      }];
    }

    function getPrzepatrywacz() {
      return [{
        title: 'Przepatrywacz',
        opis: 'Przepatrywacze są doświadczonymi przewodnikami, którzy przeszukują teren dla potrzeb podróżujących oddziałów wojskowych i karawan kupieckich. Przez cały czas trwania podróży muszą utrzymywać stan wzmożonej czujności, nasłuchując i wypatrując zasadzek oraz zagrożeń. Ponieważ zazwyczaj działają w pojedynkę, muszą być samowystarczalni opanowani. Przepatrywacze wierzą swojemu instynktowi i samodzielnie podejmują decyzje, gdyż na szlaku nie mają do kogo zwrócić się o pomoc. Większość działa na dobrze im znanym obszarze, w pełni wykorzystując doskonałą orientacje w terenie. Nieliczni zajmują się. przepatrywaniem nieznanych szlaków i badaniem dzikich krain. Ich wynagrodzenie jest zazwyczaj dość wysokie, ale narażają się na duże ryzyko.',
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
        zdolnosci: ['Broń specjalna(unieruchamiająca)', 'Wyczucie kierunku'],
        wyborZdolnosciProfesji: [['Opanowanie', 'Bardzo silny']],
        wyposazenie: 'łuk i 10 strzał, albo kusza i 10 bełtów, bicz albo arkan, sieć, lekki pancerz(skórzana kurta), tarcza, koń z siodłem i uprzężą, 10 metrów liny'
      }];
    }

    function getPrzewoznik() {
      return [{
        title: 'Przewoźnik',
        opis: 'W Starym Świecie wiele osiedli leży nad brzegami rzek, przecinające kraj szlaki wodne są tak sama ważne dla handlu i komunikacji, jak drogi na lądzie. Przewoźnicy za drobną opłatą przeprawiają przez rzeki pasażerów i towary. Zazwyczaj korzystają z płaskodennych promów lub barek, które z łatwością przepływają nad mieliznami i mają sporą ładowność. Przewoźnicy którzy działają w mniej cywilizowanych terenach, zawsze trzymają pod ręką nabite garłacze, ze względu na stałe zagrożenie ze strony rozbójników i piratów. Wielu z nich to zwykli naciągacze, którzy zmieniają cenę za przeprawę, zależnie od szacowanej majętności podróżnych i od tego, jak desperacko chcą oni przedostać się na drugi brzeg. Ucieczka przed pościgiem może oznaczać nawet podwójną albo potrójną stawkę. ',
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
        wyborZdolnosciProfesji: [['Broń specjalna(palna)', 'Bijatyka'], ['Strzelec wyborowy', 'Charyzmatyczny']],
        wyposazenie: 'kusza i 10 bełtów albo garłacz z zapasem amunicji na 10 strzałów, lekki pancerz(skórzany kaftan)'
      }];
    }

    function getRybak() {
      return [{
        title: 'Rybak',
        opis: 'Rybacy utrzymują się z połowów Mieszkają w niewielkich wioskach, głównie na wybrzeżu Nordlandu. skąd wypływają na Morze Szponów w niedużych łodziach, nie zważając na nieustające ryzyko ze strony piratów. Rybacy żyją równie w głębi lądu, w małych osadach nad brzegami rzek. Są to osobnicy z natury samotni i nienależni. Na wodzie decyzja szypra jest ostateczna. Temperament i niezależność rybaków są jednym z powodów, dla których portowe tawerny należą do naprawdę niebezpiecznych miejsc. Uwagi: Jeśli w trakcie tworzenia Bohatera Gracza wybierzesz umiejętność wiedza Jałowa Kraina), Twój Bohater  może pochodzić z okolic wielkiego portu w Marienburgu.',
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
        umiejetnosci: ['Pływanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Wioślarstwo', 'Żeglarstwo'],
        wyborUmiejetnosciProfesji: [['Mocna głowa', 'Targowanie'], ['Nawigacja', 'Rzemiosło(handel)'], ['Wiedza(imperium)', 'Wiedza(jałowa kraina)'], ['Znajomość języka(staroświatowy)', 'Znajomość języka(norski)']],
        wyborZdolnosciProfesji: [['Twardziel', 'Błyskotliwość'], ['Wyczucie kierunku', 'Bijatyka']],
        wyposazenie: 'włócznia, sieć, lina z kotwiczką'
      }];
    }

    function getRzecznikRodu() {
      return [{
        title: 'Rzecznik rodu',
        opis: 'Władcy wielkich elfich rodów kupieckich nie orientują się zbytnio w realiach codziennego życia w Starym Świecie. Z ich punktu widzenia, ludzie żyją i umierają tak szybko, że trudno jest śledzić na bieżąco aktualne wydarzenia i zmiany w polityce Imperium, Jeśli potrzebują jakiejś informacji, zwracają się więc do rzeczników swoich rodów. Są to młode elfy, które reprezentują interesy rodów kupieckich w kontaktach z resztą świata. Zawierają transakcje, podpisują kontrakty i odpowiadają za całokształt kontaktów handlowych z ludźmi, szczególnie w największych ośrodkach handlowych w Altdorfie, Nuln i Marienburgu. Jednak nawet cierpliwość elfów ma swoje granice. Nic zatem dziwnego, że tak wielu rzeczników rezygnuje ze swojego stanowiska i wybiera znacznie ciekawsze życie poszukiwacza przygód.',
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
        wyborZdolnosciProfesji: [['Obieżyświat', 'Żyłka handlowa']],
        wyposazenie: 'lekki pancerz(skórzana kurta), 2 komplety ubrań dobrej jakości, przybory do pisania'
      }];
    }

    function getRzemieslnik() {
      return [{
        title: '',
        opis: 'Rzemieślnicy to fachowcy w jednej z wielu dziedzin rzemiosła, jakie znane są w Imperium. W miastach skupiają się w cechy rzemieślnicze, natomiast w wioskach cieszą się monopolem na swoje usługi. Zajmują się produkcją dóbr sprzedawanych przez kupców w całym kraju. Rzemieślnicy stanowią ważne ogniwo w gospodarce Imperium. Spośród różnych dziedzin rzemiosła najważniejsze to:  aptekarstwo, bednarstwo, garbarstwo, gotowanie, górnictwo, handel, jubilerstwo, kaligrafia, kamieniarstwo, kartografia, kowalstwo, krawiectwo, młynarstwo, piwowarstwo, płatnerstwo, rusznikarstwo, rymarstwo, stolarstwo, szkutnictwo, szewstwo, sztuka, świecarstwo, uprawa ziemi, wyrób luków, zielarstwo oraz złotnictwo. Rzemieślnicy zazwyczaj organizują się w cechy i gildie rzemieślnicze, które dziabią samodzielnie w poszczególnych miastach.',
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
        wyborZdolnosciProfesji: [['Żyłka handlowa', 'Błyskotliwość']],
        wyposazenie: 'lekki pancerz(skórzany kaftan), 1k10 zk'
      }];
    }

    function getRzezimieszek() {
      return [{
        title: 'Rzezimieszek',
        opis: 'Rzezimieszek to zabijaka do wynajęcia. Za odpowiednią cenę może pobić albo nastraszyć każdego, kogo wskaże mu zleceniodawca. W większości przypadków rzezimieszki ukrywają, że zostali wynajęci, wynajdując najbardziej nieprawdopodobne preteksty, by wszcząć bójkę z wyznaczoną ofiarą, Zleceniodawca zazwyczaj dyskretnie obserwuje upokorzenie swojego rywala lub wroga, czerpiąc zadowolenie z jego cierpienia. Poturbowanie kilku mieszczuchów jest stosunkowo tanie. Cena może wzrosnąć w zależności od umiejętności rzezimieszka, a także od wpływów ofiary oraz wymaganego przez zleceniodawcę stopnia w uszkodzenia jej ciała. większość rzezimieszków nie para się zabójstwem, zostawiając to gildii skrytobójców, ale za odpowiednią cenę można zamówić również i taką usługę. Nie trzeba dodawać, że strażnicy uważnie obserwują najbardziej znanych rzezimieszków, którzy z tego powodu zazwyczaj nie pozostają długo w jednym miejscu.',
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
        zdolnosci: ['Bijatyka', 'Morderczy atak', 'Ogłuszanie', 'Silny cios'],
        wyborZdolnosciProfesji: [['Groźny', 'Charyzmatyczny'], ['Rozbrajanie', 'Szybkie wyciągnięcie']],
        wyposazenie: 'średni pancerz(kaftan kolczy i skórzana kurta), tarcza, koń z siodłem i uprzężą'
      }];
    }

    function getSkryba() {
      return [{
        title: 'Skryba',
        opis: 'Znaczna część obywateli Imperium nie potrafi czytać ani pisać. Profesja skryby cieszy się więc dużym poważaniem. Prawie każdy ośrodek władzy, jednostka wojskowa lub zakon religijny potrzebuje znacznej liczby skrybów do prowadzenia ksiąg i rachunków. Istnieją także skrybowie, którzy pracują dla potrzeb zwykłych ludzi, pisząc za nich listy lub odczytując otrzymane wiadomości. Skrybowie są ludźmi wykształconymi i oczytanymi. Wielu z nich decyduje się na bardziej zaszczytną karierę prawnika albo uczonego. Niektórzy, znużeni czytaniem o przygodach innych ludzi, wyruszają na szlak, by zapisać w kronikach ludzkości rozdział o własnych wyczynach. Zazwyczaj znają kilka języków obcych, są zatem doskonałymi towarzyszami dalekich wypraw poza granice imperium.',
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
        zdolnosci: ['Poliglota'],
        wyposazenie: 'nóż, dwie świece woskowe, 5 zapałek, ilustrowana księga, przybory do pisania, wosk do pieczęci'
      }];
    }

    function getSluga() {
      return [{
        title: 'Sługa',
        opis: 'Niewiele osób w Imperium zajmuje niższe miejsce w hierarchii społecznej od sług. Ich praca, choć potrzebna, zazwyczaj jest traktowana z pogardą przez bogatszych ludzi. Dla posługacza, stajennego albo dziewki służebnej. ucieczka od ciężkiego życia wydaje się niemożliwością. Cały dzień, a często tez i noc, spędzają na znojnej pracy. Słudzy znajdują zatrudnienie głównie u szlachciców; karczmarzy i mistrzów gildii. Nieliczni potrafią wywalczyć sobie lepszą pozycję, ale jest to bardzo trudne. Nikt przecież nie zwraca uwagi na stajennego lub dziewkę w karczmie. Wielu służących ucieka więc od gnębiących ich pracodawców, wybierając pozornie łatwiejsze życie na szlaku.',
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
        wyborZdolnosciProfesji: [['Niezwykle odporny', 'Szybki refleks'], ['Czuły słuch', 'Chodu!'], ['Etykieta', 'Twardziel']],
        wyposazenie: 'ubranie dobrej jakości, manierka, krzesiwo i hubka, latarnia sztormowa, olej do latarni'
      }];
    }

    function getStraznik() {
      return [{
        title: 'Strażnik',
        opis: 'Początkowo obowiązek utrzymania porządku w mieście spoczywał na władzach cywilnych, które w tym celu korzystały z oddziałów straży i gwardii miejskiej, jednak gdy poziom korupcji przekroczył wszelkie granice przyzwoitości, Imperator powierzył to zadanie władzom wojskowym. Obecnie obowiązki straży miejskiej pełnią Żołnierze z garnizonów wojskowych. Dzięki temu zmalało łapownictwo, choć w armii również zdarzają się przypadki przekupstwa. Strażnicy są odpowiedzialni za utrzymywanie porządku i przestrzeganie prawa, mogą także aresztować podejrzanych. W mniejszych osadach służą również jako straż pożarna. Dla niektórych żołnierzy służba garnizonowa jest tylko tymczasowym przydziałem. Dla innych to zajęcie na cale życie.',
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
        zdolnosci: ['Ogłuszanie', 'Silny cios'],
        wyborZdolnosciProfesji: [['Opanowanie', 'Błyskotliwość'], ['Rozbrajanie', 'Błyskotliwość']],
        wyposazenie: 'lekki pancerz(skórzana kurta), mudnur, latarnia na drągu, olej do latarni'
      }];
    }

    function getStraznikDrog() {
      return [{
        title: 'Strażnik Dróg',
        opis: 'Imperium wciąż pokrywają rozległe połacie dzikich obszarów. Chociaż miasta i porty łączy sieć dróg szlaków wodnych, to jednak większość ziem porastają gęste lasy, w których kryją się rozbójnicy, zwierzoludzie, mutanci i gobliny, Mimo Ciągłej czujności strażników dróg, nawet zwykła podróż z jednego miasta do drugiego może być niebezpieczną przygodą. Owi konni stróże prawa patrolują drogi i ścieżki leśne na terenie całego Imperium, strzegąc bezpieczeństwa podróżnych i kupieckich karawan. Z uwagi na swoją niewidką liczebność, strażnicy dróg współpracują z miejscowymi ochotnikami i żołnierzami, zwłaszcza gdy napotkają ślady liczniejszego wroga. Jednak w większości przypadków niewielkie grupy strażników dróg muszą samodzielnie eliminować zagrożenia dla komunikacji między miastami imperium.',
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
        zdolnosci: ['Broń specjalna(palna)'],
        wyborZdolnosciProfesji: [['Szybkie wyciągnięcie', 'Błyskawiczne przeładowanie']],
        wyposazenie: 'pistolet z 10 kulami i zapasem prochu, średni pancerz(kaftan kolczy i skórzana kurta), tarcza, lekki koń bojowy z siodłem i uprzężą(albo kuc dla niziołka), 10 metrów liny'
      }];
    }

    function getStraznikPol() {
      return [{
        title: 'Strażnik pól',
        opis: 'Kraina Zgromadzenia jawi się przybyszom jako kraj bezpieczny i spokojny. Jest to zasługa przede wszystkim strażników pól. Niziołki patrolują granice Krainy Zgromadzenia, odpędzającą potwory i niepożądanych intruzów. Są świetnymi zwiadowcami, w pełni wykorzystując znajomość tego obszaru. Preferują atak z zaskoczenia lub z dystansu, by zniwelować przewagę wzrostu przeciwników. Kraina Zgromadzenia graniczy z Sylvanią, więc strażnicy pól mają doświadczenie w walce z ożywieńcami. Salwy kamieni miotanych przez nieustraszonych niziołków przegoniły już niejedną bandę zombi.',
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
        wyborZdolnosciProfesji: [['Bardzo szybki', 'Błyskotliwość'], ['Strzał precyzyjny', 'Błyskawiczne przeładowanie'], ['Wędrowiec', 'Szybkie wyciągnięcie']],
        wyposazenie: 'proca z amunicją, kuc z siodłem i uprzężą, latarnia, olej do latarni, łopata'
      }];
    }

    function getStraznikWiezienny() {
      return [{
        title: 'Strażnik więzienny',
        opis: 'Imperium jest krajem, w którym prawo jest respektowane. A to oznacza, miedzy innymi ogromną liczbę więzień. Pomimo wysiłków kapłanów Vereny, bogini sprawiedliwości, do więzień trafiają nie tylko przestępcy, także osoby niewinne. W mniemaniu sędziów lepsza jest nadmierna surowość niż przesadna pobłażliwość. Wiezienia w miastach to brudne, wilgotne lochy, które śmierdzą strachem, krwią i odchodami. Porządek w tych miejscach utrzymują strażnicy więzienni, którzy upokarzają i brutalnie karzą więźniów za wszelkie przejawy nieposłuszeństwa. Obce jest im poczucie sprawiedliwościowi lub uczucie litości i rzadko wysłuchują próśb bądź gróźb więźniów (choć chętnie przyjmują łapówki). Wielu z nich to brutale i sadyści którzy lubują się w zadawaniu cierpienia oddanym pod ich opiekę skazańcom.',
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
        zdolnosci: ['Broń specjalna(unieruchamiająca)', 'Odporność na choroby', 'Odporność na trucizny', 'Zapasy'],
        wyposazenie: 'jedna broń do wyboru: bolas, sieć albo arkan, butelka podłego wina, manierka'
      }];
    }

    function getSzczurolap() {
      return [{
        title: 'Szczurołap',
        opis: 'Szczurołap to profesja często spotykana w Imperium. Żyją w wioskach, miastach i portach, zajmują się eliminowaniem szczurów, prawdziwej plagi obecnych czasów. Często podróżują od osady do osady, choć większe miasta mają swoje własne drużyny szczurołapów. Polują głównie na szczury, chociaż zwalczają też inne szkodniki. Mieszkający w mieście szczurołap większość czasu spędza w kanałach, brnąc przez ścieki w poszukiwaniu szczurów. To ciężka i śmierdząca robota, ale pomaga zapobiegać wybuchom zarazy.',
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
        zdolnosci: ['Broń specjalna(proca)', 'Grotołaz', 'Odporność na choroby', 'Odporność na trucizny'],
        wyposazenie: 'proca z amunicją, 4 pułapki na szczury, drąg z martwymi szczurami(1k10), mały ale zajadły pies'
      }];
    }

    function getSzermierzEstalijski() {
      return [{
        title: 'Szermierz estalijski',
        opis: 'Królestwo Estalii leży na południowy zachód od Imperium. Pustkowia Chaosu są tylko legendą wśród mieszkańców tej słonecznej krainy, która nigdy nie zaznała grozy ataku krwiożerczych bestii, jak stało się to udziałem Imperium Kisleva. Mieszkańcy Estalii mają więc zupełnie inne zainteresowania, od nauki i studiów przyrodniczych, aż po rozboje i zatargi rodowe. Wszyscy Estalijczycy uwielbiają szermierkę. W każdym dużym mieście jest kilka szkól fechtunku, z których każda naucza własnego stylu walki. Większość z nich wywodzi się z nauk Mistrza Figueroa, legendarnego szermierza, który wykorzystał w szermierce najnowsze osiągnięcia nauki oraz znajomości anatomii. Kontynuatorzy jego dzieła podróżują po całym świecie, uczestnicząc w walkach i pojedynkach. Niektórzy, znudzeni własnym krajem, szukają przygód w Bretonii i Tilei. Najodważniejsi podróżują na północ, na ziemie Imperium, by skrzyżować szpady z tamtejszymi szermierzami, a także by ujrzeć kraj, który stoi na pierwszej linii walki z hordami Chaosu.',
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
        zdolnosci: ['Broń specjalna(szermiercza)', 'Silny cios'],
        wyborZdolnosciProfesji: [['Brawura', 'Szybki refleks'], ['Szybkie wyciągnięcie', 'Morderczy atak']],
        wyposazenie: 'szpada albo rapier, ubranie najlepszej jakości, perfumy, mikstura leczenia'
      }];
    }

    function GetSzlachcic() {
      return [{
        title: 'Szlachcic',
        opis: 'Szlachta stanowi najwyższą warstwę społeczną w Imperium. Utrzymuje władze, ustanawia prawa i rządzi prowincjami. Najważniejszymi rodami szlacheckimi są rodziny elektorów, a wśród nich, oczywiście, ród Imperatora. Są także setki innych, bardziej lub mniej znaczących rodzin szlacheckich, które bez przerwy rywalizują ze sobą o władze i bogactwo. Jedni próbują zbić majątek na wojnie, inni zaś parają się polityką lub handlem. Żaden ze szlachciców nie zniży się do wykonywania zwykłej, w ich oczach nikczemnej, pracy. Najbogatsi szlachcice żyją na koszt swego rodu, spędzając dnie na polowaniach, a noce na bankietach, uroczystych balach i zabawach. Jednak młodsi potomkowie rodzin szlacheckich nie mają równie łatwego życia. Zgodnie z prawem, cały majątek dziedziczy najstarszy potomek, więc pozostali sami muszą wywalczyć sobie pozycję w świecie. Czasem oznacza to konieczność zadawania się z pospólstwem i wspólnej podróży z różnego rodzaju poszukiwaczami przygód.',
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
        zdolnosci: ['Etykieta'],
        wyborZdolnosciProfesji: [['Błyskotliwość', 'Broń specjalna(szermiercza)'], ['Broń specjalna(parująca)', 'Intrygant'], ['Szczęście', 'Przemawianie']],
        wyposazenie: 'szpada, lewak, strój szlachecki z herbem rodu, koń z siodłem i uprzężą, 1k10zk, biżuteria o wartości 6k10zk'
      }];
    }

    function getSmieciarz() {
      return [{
        title: 'Śmieciarz',
        opis: 'Śmieciarze są zbieraczami odpadków. Bywają nazywani szmaciarzami lub druciarzami i są częstym widokiem w wielkich miastach Imperium, które wytwarzają najwięcej odpadów. Śmieciarze żyją z tego, co wyrzucają inni. Ciągną swoje wózki przez wioski i miasteczka, zbierając stare kości, szmaty oraz inne odpadki i wywożą je w zamian za kilka pensów lub  trochę jedzenia. Zajmują się też drobnym handlem. To, co jest śmieciem dla bogatego mieszczanina, może być skarbem dla biedaka.',
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
        wyborZdolnosciProfesji: [['Opanowanie', 'Łotrzyk'], ['Twardziel', 'Odporność na choroby']],
        wyposazenie: 'wózek, 3 worki'
      }];
    }

    function getTarczownik() {
      return [{
        title: 'Tarczownik',
        opis: 'W ciągu minionych lat wiele krasnoludzkich twierdz padło pod zmasowanymi atakami hord Chaosu i goblinów. Do obrony pozostałych fortec krasnoludy powołały elitarne oddziały wojowników, którzy szkolą się w walce prowadzonej pod ziemią. To właśnie oddziały tarczowników, twardych i zawziętych wojowników powstrzymują napór wrogich armii i zapewniają bezpieczeństwo swoim pobratymcom. W oddziałach tarczowników służą głównie krasnoludy, choć czasem dołączają do nich przedstawiciele innych ras, skuszeni obietnicą żołdu wypłacanego w szczerym złocie. Młode krasnoludy z Imperium często zgłaszają się do służby w oddziałach tarczowników, aby dowieść swego męstwa i wykazać się solidarnością z pobratymcami z górskich twierdz.',
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
        zdolnosci: ['Morderczy atak', 'Ogłuszanie', 'Silny cios', 'Wyczucie kierunku'],
        wyborZdolnosciProfesji: [['Czuły słuch', 'Opanowanie']],
        wyposazenie: 'kusza i 10 bełtów, średni pancerz(kolczuga skórzana kurta i skórzane nogawice), tarcza, 10 metrów liny z kotwiczką, bukłak z wodą'
      }];
    }

    function getUczenCzarodzieja() {
      return [{
        title: 'Uczeń Czarodzieja',
        opis: 'Ludzie obdarzeni talentem magicznym budzą instynktowny niepokój wśród pospólstwa. Nie bez powodu. Potrafią dokonywać rzeczy, które zaprzeczają zdrowemu rozsądkowi, jednak nie jest to dar, który łatwo kontrolować, Magiczna aura takich osób, szczególnie początkujących, przyciąga demony. Aby zapobiec nieszczęściu, czarodzieje wyszukują swoich potencjalnych następców i wysyłają ich naukę do jednego z ośmiu Kolegiów Magi. Tam młodzi uczniowie praktykują magię pod uważnym okiem mistrzów, jednocześnie zastanawiając się nad wyborem Tradycji. Niektórzy z nich służą czarodziejom, którzy odkryli i ich talent. Inni imają się różnych zajęć, by zarobić na czesne w Akademii Magii. Elfy mają, wrodzone zdolności magiczne, wiec nic muszną korzystać z ludzkich organizacji, zamiast tego ucząc się od elfich mistrzów magii. Szczegółowy opis poszczególnych Tradycji Magii znajdziesz w Rozdziale Magia.',
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
        zdolnosci: ['Magia prosta(tajemna)'],
        wyborZdolnosciProfesji: [['Błyskotliwość', 'Niezwykle odporny'], ['Zmysł magii', 'Dotyk mocy']],
        wyposazenie: 'kij, plecak, księga wiedzy tajemnej'
      }];
    }

    function getWeglarz() {
      return [{
        title: 'Węglarz',
        opis: 'Węglarzy można spotkać w prawie każdej wiosce Imperium. Zajmują się wypalaniem drewna, uzyskując w ten sposób węgieł drzewny, opał zużywany w czasie długich, zimowych miesięcy. To brudne i niebezpieczne zajęcie, więc węglarze mieszkają zazwyczaj na odludziu. Najlepszym miejscem, ze względu na obfitość drewna, są obrzeża lasów. Bliskość puszczy sprawia, że życie węglarza nie jest zbyt bezpieczne, gdyż odosobnione chaty często padają łupem plugawych leśnych stworów. Węglarze zawsze noszą przy sobie broń, choć zwykle jest to tylko ciężka dębowa pałka lub prosta siekiera.',
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
        zdolnosci: ['Chodu!'],
        wyborZdolnosciProfesji: [['Błyskotliwość', 'Bardzo silny']],
        wyposazenie: 'broń jednoręczna(topór albo pałka), 3 pochodnie, krzesiwo i hubka'
      }];
    }

    function getWloczykij() {
      return [{
        title: 'Włóczykij',
        opis: 'Włóczykij uwielbia życie na szlaku. Zwyczajny osiadły tryb życia chłopa lub mieszczanina postrzega jako więzienie. Któż chciałby codziennie budzić się w tym samym miejscu i codziennie robić to samo? Dla włóczykija każdy dzień jest nową przygodą na szlaku życia. Czasami podejmuje się prostych prac, by zarobić kilka szylingów, ale rzadko wytrzymuje długo w jednym miejscu. Wkrótce znów rusza na szlak, zwabiony wizją przygody. Mimo iż uwielbiają podróżować, włóczykije zdają sobie sprawy z niebezpieczeństw, jakie czyhają na drodze. Dla wspólnego bezpieczeństwa podróżują więc w większych grupach. W wielu miastach i osadach włóczęgostwo jest traktowane jak przestępstwo.',
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
        zdolnosci: ['Obieżyświat'],
        wyborZdolnosciProfesji: [['Bardzo szybki', 'Wędrowiec'], ['Strzelec wyborowy', 'Wyczucie kierunku']],
        wyposazenie: 'plecak, prowiant(1 tydzień), namiot, bukłak z wodą'
      }];
    }

    function getWojownikKlanowy() {
      return [{
        title: 'Wojownik Klanowy',
        opis: 'Elfy od wieków zamieszkiwały odosobnione osady w wielkich puszczach Imperium. Wraz z rosnącym zagrożeniem ze strony Chaosu, obszarom tym zaczęła grozić zagłada. W Imperium pozostało już niewiele osad elfów. Największa z nich znajduje się w lesie Laurelorn. W cieniu olbrzymich drzew elfy toczą cichą lecz zażartą wojnę ze zwierzoludźmi i innymi potworami. Niewielkie drużyny wojowników, zwane klanami, walczą w obronie swoich ziem, próbując uchronić przed zniszczeniem ostatnie osady elfów w Imperium. Drużyny składają się ze spokrewnionych ze sobą elfów, które noszą na ubraniach godło swojego klanu. Wojownicy klanowi są świetnie wyszkolonymi łucznikami. Najczęściej atakują z dystansu lub urządzają zasadzki.',
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
        wyborZdolnosciProfesji: [['Błyskawiczne przeładowanie', 'Urodzony wojownik'], ['Strzelec wyborowy', 'Wędrowiec']],
        wyposazenie: 'elfi łuk i 10 strzał, lekki pancerz(skórzana kurta)'
      }];
    }

    function getWoznica() {
      return [{
        title: 'Woźnica',
        opis: 'Chociaż Imperium jest potężnym krajem z liczną armią, tereny leżące poza zasięgiem cywilizacji nie są bezpieczne. Olbrzymie połacie kraju pozostają dzikie i nigdy nie były zamieszkane. Wioski, miasta i porty łączy gęsta sieć dróg, którymi podróżują powozy imperialnych kompanii przewoźniczych. Kierujący nimi woźnice muszą radzić sobie nie tylko z opłakanym stanem rzadko naprawianych traktów, ale także z częstymi napadami rozbójników, goblinów lub zwierzoludzi. Woźnice ryzykują życiem, by bezpiecznie przewieźć pasażerów  i towary do miejsca przeznaczenia, Każdy dzień jest wyścigiem z czasem, by przed zmierzchem dotrzeć do wioski lub przydrożnej karczmy. Nikt nie chce, by noc zastała go na szlaku, zwłaszcza gdy na niebie świeci księżyc Chaosu.',
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
        zdolnosci: ['Broń specjalna(palna)'],
        wyborZdolnosciProfesji: [['Szybkie wyciągnięcie', 'Obieżyświat']],
        wyposazenie: 'garłacz z zapasem amunicji na 10 strzałów, średni pancerz(kaftan kolczy i skórzana kurta), instrument muzyczny(róg woźnicy)'
      }];
    }

    function getZabojcaTrolli() {
      return [{
        title: 'Zabójca trolli',
        opis: 'Krasnoludy, które zostały wygnane lub okryły się hańba, porzucają swój klan, by szukać śmierci. Polują na najstraszniejsze potwory, aby chwalebną śmiercią w walce zmazać popełnione zbrodnie. Większość dość szybko osiąga swój cel, jednak ci, którym udało się przeżyć, dołączają do niezwykłego bractwa zabójców trolli. Szukają najstraszniejszych przeciwników, a za idealnych wrogów uważane są trolle, gdyż spotkanie z nimi zazwyczaj kończy się śmiercią znacznie niniejszego i słabszego krasnoluda. Zabójcy troilli odróżniają się od innych krasnoludów. Barwią włosy na pomarańczowo, stawiają je i przycinają w czub. Noszą dziwaczne bransolety kolczyki, a ciało pokrywają wymyślnymi tatuażami. Głośno i często rozprawiają o swoich wyczynach, szczególnie przy obfitym jadle i mocnym napitku.',
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
        zdolnosci: ['Bijatyka', 'Broń specjalna(dwuręczna)', 'Silny cios', 'Twardziel'],
        wyborZdolnosciProfesji: [['Rozbrajanie', 'Szybkie wyciągnięcie'], ['Szybki refleks', 'Niezwykle odporny']],
        wyposazenie: 'broń dwuręczna(topór), lekki pancerz(skórzany kaftan), butelka spirytusu albo gorzałki kiepskiej jakości'
      }];
    }

    function getZarzadca() {
      return [{
        title: 'Zarządca',
        opis: 'Zarządcy opiekują się majątkami arystokratów i wyższej szlachty. Ich głównym zadaniem jest gospodarowanie posiadłością oraz terenami wokół niej, przede wszystkim wioskami i lasami. Wśród podległego im chłopstwa zwykle znani są z niezwykle surowego egzekwowania należności wobec ich pana, głównie podatków i opłat. Obowiązki zarządców sprawiają, że są to osoby niezbyt popularne wśród poddanych, szczególnie w czasie żniw, Jako przedstawiciele ciemiężycieli, znienawidzeni zarządcy zwykle pierwsi padają ofiarą chłopskich niepokojów i buntów.',
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
        zdolnosci: ['Przemawianie'],
        wyborZdolnosciProfesji: [['Etykieta', 'Geniusz arytmetyczny']],
        wyposazenie: 'lekki pancerz(skórzana kurta i skórzany hełm), ubranie dobrej jakości, koń z siodłem i uprzężą'
      }];
    }

    function getZlodziej() {
      return [{
        title: 'Złodziej',
        opis: 'W Imperium mieszka wielu uczciwych, ciężko pracujących ludzi. Złodzieje, którzy regularnie uszczuplają ich majątek, stawiają sobie za punkt honoru dopilnowanie, by zacni obywatele stale musieli pracować tak ciężko jak zwykle. Złodzieje są wyjątkowo wszechstronni. Podejmują się każdego zlecenia, które może im zapewnić zysk. Wśród złodziejów trafiają się szantażyści, malwersanci, defraudanci, porywacze, kieszonkowcy, skrawkarze, bydło- i koniokrady oraz początkujący włamywacze. W większości miast działają gildie złodziei, które kontrolują działalność przestępczą na swoim terenie. W dużych miastach działa zwykle kilka gildii złodziei, zaciekle rywalizujących o strefy wpływów. Czasem prowadzi to do wybuchu wojny w podziemiu przestępczym i wyeliminowaniu jednej ze stron konfliktu. Najbogatsze i najbardziej wpływowe gildie złodziei zajmują się także prowadzeniem legalnych interesów, które wykorzystują jako przykrywkę dla działalności przestępczej. Z czasem porzucają nielegalne interesy, gdy zgromadzą dostatecznie duży kapitał by wejść w szereg gildii kupieckich.',
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
        wyborZdolnosciProfesji: [['Geniusz arytmetyczny', 'Wykrywanie pułapek'], ['Ulicznik', 'Łotrzyk']],
        wyposazenie: 'lekki pancerz(skórzany kaftan), worek, wytrychy, 10 metrów liny'
      }];
    }

    function getZak() {
      return [{
        title: 'Żak',
        opis: 'W każdym wielkim mieście Imperium znajduje się przynajmniej jeden uniwersytet. Większość z nich, między innymi Imperialna Akademia Inżynierii w Altdorfie, jest finansowana przez władze prowincji. Pierwszy imperialny uniwersytet powstał w Nuln, który do dziś jest głównym ośrodkiem szkolnictwa w Imperium, znany przede wszystkim z Imperialnej Akademii Artylerii. Żacy mogą wybierać spośród wielu kierunków studiów: od anatomii i historii, aż po inżynierię i astronomię. Wielu żaków woli jednak spędzać czas na pijatykach i zabawie w karczmach.  Zazwyczaj kończą naukę już po pierwszym roku, gdy z hukiem wylatują z uczelni. Młode elfy nie uczęszczają na ludzkie uniwersytety, zamiast tego pobierając nauki u własnych mistrzów wiedzy. Niziołki są dopuszczane do nauki na uniwersytetach, zgodnie z zapisem w Prawie Imperium, który wprowadzono pod naciskiem Starszego Krainy Zgromadzenia.',
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
        wyborZdolnosciProfesji: [['Błyskotliwość', 'Charyzmatyczny'], ['Etykieta', 'Poliglota'], ['Obieżyświat', 'Geniusz arytmetyczny']],
        wyposazenie: 'dwie księgi związane z wybraną dziedziną nauki, przybory do pisania'
      }];
    }

    function getZeglarz() {
      return [{
        title: 'Żeglarz',
        opis: 'Żeglarze pochodzą głównie z prowincji Imperium zwanej Nordlandem, położonej na wybrzeżu Morza Szponów. Liczne floty, składające się z wielkich galeonów, szkunerów zwanych wilczymi oraz galer wojennych, patrolują wody na północ od Imperium, broniąc je przed atakami piratów z Norski i Bretoni oraz przerażających flotylli Chaosu. Na pokładach imperialnych żaglowców służą wyłącznie najlepsi żeglarze. Pozostali wchodzą w skład załóg statków kupieckich, pirackich łodzi lub niewolniczych galer. Po wodach Morza Szponów pływają też statki elfów, zazwyczaj pod banderą wielkich rodów kupieckich. Największym portem Starego Świata jest Marienburg. Miasto i otaczający je obszar (zwany Jałową Krainą) już od wielu lat cieszy się niezależnością, mimo iż niegdyś stanowiły Westerland, jedną z prowincji Imperium. Morze Szponów jest miejscem bezustannej walki. Na zbryzganych krwią deskach pokładów żeglarze pracują w pocie czoła, by zarobić na żołd i kolejną porcję rumu.Uwagi: Jeśli w trakcie tworzenia BG wybierzesz umiejętność wiedza (Jałowa Kraina), twój Bohater będzie mógł pochodzić z okolic wielkiego portu w Marienburgu.',
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
        zdolnosci: ['Obieżyświat'],
        wyborZdolnosciProfesji: [['Silny cios', 'Brawura'], ['Twardziel', 'Bijatyka']],
        wyposazenie: 'lekki pancerz(skórzany kaftan), butelka gorzałki kiepskiej jakości'
      }];
    }

    function getZolnierz() {
      return [{
        title: 'Żołnierz',
        opis: 'Każda prowincja Imperium wystawia własną armię, wyszkoloną i wyposażoną na koszt miejscowych władców. Połączone wojska wszystkich prowincji tworzą Armię Imperium, którą wspomagają wojska ochotnicze i kompanię najemników. Żołnierze są zawodowymi wojownikami wywodzącymi się zazwyczaj z chłopstwa lub mieszczaństwa. Służą w garnizonach miejskich i fortach na terenie całego Imperium. Oddziały wojskowe patrolują też granice kraju, odpierając ataki najeźdźców. Większość żołnierzy szkoli się w walce halabardą lub w strzelaniu z rusznicy. Stanowiska dowódcze są zdominowane przez szlachtę, mimo iż w Armii Imperium obowiązuje system awansu oparty na zdolnościach żołnierza. Prosty chłop albo mieszczanin może więc dosłużyć się wysokiej rangi, choć taki przebieg kariery utrudnia nieprzychylne nastawienie klasy panującej. Niziołki i krasnoludy służą w odrębnych jednostkach Armii Imperium.',
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
        wyborZdolnosciProfesji: [['Broń specjalna(palna)', 'Broń specjalna(dwuręczna)'], ['Morderczy atak', 'Błyskawiczne przeładowanie'], ['Ogłuszanie', 'Strzał precyzyjny'], ['Rozbrajanie', 'Szybkie wyciągnięcie'], ['Strzał mierzony', 'Silny cios']],
        wyposazenie: 'broń dwuręczna(halabarda), albo rusznica z amunicją na 10 strzałów, lekki pancerz(skórznia) mundur, tarcza'
      }];
    }

    function getZolnierzOkretowy() {
      return [{
        title: 'Żołnierz okrętowy',
        opis: 'Żołnierze okrętowi to wojownicy, którzy służą na okrętach floty Imperium i dużych statkach kupieckich. W odróżnieniu od żeglarzy, których zadaniem jest obsługa żagli i sterowaniem okrętem, jedynym obowiązkiem żołnierzy okrętowych jest obrona przed atakami wrogich jednostek i statków pirackich. Na lądzie często polują na pijanych żeglarzy, których siłą werbują do służby na statku. Niejeden marynarz obudził się na statku z dala od portu, pamiętając jedynie ostatni łyk alkoholu, a potem mocne uderzenie w tył głowy. Żołnierze okrętowi nie są mile widzianymi gośćmi w nadmorskich osadach, głównie ze względu na skłonność do nadużywania rumu i wszczynania burd. Jednak, gdy na horyzoncie pojawiają się żagle piratów, ci sami przyjmują pomoc zahartowanych w boju żołnierzy okrętowych. Uwagi: Jeśli w trakcie tworzenia BG wybierzesz umiejętność wiedza (Jałowa Kraina), Twój Bohater może pochodzić z okoli wielkiego portu w Marienburgu.',
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
        zdolnosci: ['Ogłuszanie', 'Silny cios'],
        wyborZdolnosciProfesji: [['Rozbrajanie', 'Szybkie wyciągnięcie']],
        wyposazenie: 'łuk i 10 strzał, albo kusza i 10 bełtów, lekki pancerz(skórzana kurta), tarcza, 10 metrów liny z kotwiczką'
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
        opis: 'Wykorzystanie tej umiejętności pozwala BG maskować jego prawdziwy wygląd i udawać kogoś innego. Często potrzebne są dodatkowe rekwizyty, właściwe ubranie lub peruka. Dzięki tej umiejętności Bohater może przebrać się za przedstawiciela innej rasy, osobę płci przeciwnej, a nawet kogoś sławnego i znanego w całym kraju, choć tego rodzaju charakteryzacja jest znacznie trudniejsza. Przeciwko Charakteryzacji często wykorzystuje się test Spostrzegawczości przeciwnika.',
        zdolnoscipokrewne: 'naśladowca.'
      }];
    }

    function getCzytanieiPisanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Czytanie i Pisanie',
        cecha: 'Inteligencja',
        opis: 'Bohater umie czytać i pisać w dowolnym języku, którym umie się posługiwać W większości przypadków czytania i pisania nie trzeba testować. MG może jednak zdecydować, że test umiejętności jest potrzebny przy odcyfrowywaniu rękopisy spisanego w starożytnym języku lub zawierającym niezrozumiałe wyrażenia albo archaiczne słownictwo.',
        zdolnoscipokrewne: 'poliglota.'
      }];
    }

    function getCzytaniezWarg() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Czytanie z warg',
        cecha: 'Inteligencja',
        opis: 'Dzięki tej umiejętności Bohater może zrozumieć rozmowy prowadzone poza zasięgiem jego słuchu lub gdy rozmowa jest zagłuszana przez jakieś odgłosy. Musi widzieć usta obserwowanej osoby, jak również znać język, w którym prowadzona jest rozmowa.',
        zdolnoscipokrewne: 'bystry wzrok.'
      }];
    }

    function getDowodzenie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Dowodzenie',
        cecha: 'Ogłada',
        opis: 'Korzystający z tej umiejętności Bohater cieszy się posłuchem u podwładnych. Po udanym teście umiejętności podwładni dokładnie wypełniają jego polecenia. Nieudany test powoduje, że rozkaz zostaje wypełniony błędnie lub też nie zostaje wykonany w ogóle. Dowodzenie nie ma wpływu na zachowanie osób postronnych, umożliwia posłuszeństwo osób podlegających władzy Bohatera.',
        zdolnoscipokrewne: 'brak'
      }];
    }

    function getGadanina() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Gadanina',
        cecha: 'Ogłada',
        opis: 'Bohaterowie posiadający tę umiejętność mogą próbować zagadać osobę, zasypując ją potkiem słów. Korzystający z tej umiejętności Bohater zazwyczaj nie próbuje na nikogo wpływać (do tego służy przekonywanie), chce po prostu zyskać na czasie. Po udanym teście umiejętności ofiara ma prawo do testu Siły Woli, który określa, czy zorientowała się w tym, co się naprawdę dzieje. Nieudany test oznacza, że zagadana osoba nic nie robi przez całą rundę, zastanawiając się czy ma do czynienia z osobnikiem pijanym czy zwykłym idiotą, a może jedno i drugie. Gadanina nie przynosi rezultatu, jeśli ofiara bierze udział w walce lub stoi w obliczu ewidentnego zagrożenia życia. Bohater może próbować zagadać kilka osób (jedna osoba za każde 10pkt jego Ogłady), pod warunkiem, że wszystkie te osoby rozumieją język, którym się posługuje.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getHazard() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Hazard',
        cecha: 'Inteligencja',
        opis: 'Umiejętność zwiększa szansę Bohatera na wygraną w grach losowych, takich jak karty lub kości. Każda uczestnicząca w grze postać wpłaca stawkę, a potem wszyscy grający równocześnie wykonują test Hazardu. Najniższy wynik rzutu (oczywiście po udanym teście) oznacza wygranie puli.',
        zdolnoscipokrewne: 'geniusz arytmetyczny.'
      }];
    }

    function getHipnoza() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Hipnoza',
        cecha: 'Siła Woli',
        opis: 'Używając hipnozy Bohater może wprowadzić inną osobę w trans. Uwaga hipnotyzowanej osoby musi być przez minutę skupiona na jednej rzeczy. Potem należy wykonać test umiejętności. Osoby próbujące opierać się hipnozie mogą wykonać test Siły Woli. Osoba udziela odpowiedzi szczerze, zgodnie ze swoją wiedzą. Jeśli głęboko w coś wierzy, to udzieli takiej właśnie informacji. Po udzieleniu odpowiedzi na ostatnie pytanie osoba wychodzi z transu.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getJezdziectwo() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Jeździectwo',
        cecha: 'Zręczność',
        opis: 'Bohater potrafi jeździć konno lub na innych wierzchowcach. Zwykle jeżdżenie w normalnych warunkach nie wymaga wykonywania testu umiejętności. Jednakże może on być konieczny w przypadku jazdy galopem, wyścigu, wskakiwania na konia w biegu, itp.',
        zdolnoscipokrewne: 'woltyżerka.'
      }];
    }

    function getJezykTajemnyMagiczny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Język Tajemny(magiczny)',
        cecha: 'Inteligencja',
        opis: 'Dzięki tej umiejętności Bohater może rzucać zaklęcia. Znajomość języka tajemnego jest konieczna przy używaniu magicznych formuł. W odróżnieniu od innych języków, język tajemny nie jest używany w codziennych rozmowach, a wyłącznie do manipulowania mocą magiczną. Wszystkie magiczne pergaminy i księgi zapisane są w określonym języku tajemnym. Istnieje wiele takich języków. Najczęściej używane to: demoniczny, magiczny i tajemny elfi.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getKuglarstwoAkrobatyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(akrobatyka)',
        cecha: 'Ogłada',
        opis: 'Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoAktorstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(aktorstwo)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoBlaznowanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(błaznowanie)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoGawedziarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(gawędziarstwo)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoKomedianctwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(komedianctwo)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoMimika() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(mimika)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoMuzykalnosc() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(muzykalność)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoPolykanieOgnia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(połykanie ognia)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoSpiew() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(śpiew)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoTaniec() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(taniec)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoWrozenieZDloni() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(wróżenie z dłoni)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getKuglarstwoZonglerka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Kuglarstwo(żonglerka)',
        cecha: 'Ogłada',
        opis: ' Wykorzystywane jest do zabawiania publiczności.',
        zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
      }];
    }

    function getLeczenie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Leczenie',
        cecha: 'Inteligencja',
        opis: 'Dzięki tej umiejętności Bohater może zapewnić opiekę medyczną rannej osobie. Udany test leczenia przywraca 1k10 punktów Żywotności w przypadku osoby lekko rannej lub 1 punkt Żywotności w przypadku osoby ciężko rannej. Ranna osoba może być leczona tylko raz podczas sytuacji krytycznej (bitwa, zasadzka, pułapka, upadek, itp.), która spowodowała utratę punktów Żywotności, lub zaraz po niej. Test leczenia można ponowić następnego dnia, jak również każdego kolejnego dnia.',
        zdolnoscipokrewne: 'chirurgia.'
      }];
    }

    function getMocnaGlowa() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Mocna Głowa',
        cecha: 'Zręczność',
        opis: 'Ta umiejętność zwiększa odporność Bohatera na alkohol. Doświadczeni poszukiwacze przygód potrafią sporo wypić i jednocześnie zachować względną trzeźwość. Test umiejętności wykonuje się po każdej porcji wypitego alkoholu.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaAlchemia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(alchemia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaAnatomia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(anatomia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaAstronomia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(astronomia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaDemonologia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(demonologia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaFilozofia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(filozofia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaGenealogiaHeraldyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(genealogia/heraldyka)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaHistoria() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(historia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaInzynieria() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(inżynieria)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaMagia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(magia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaMatematyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(matematyka)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaNekromancja() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(nekromancja)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaPrawo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(prawo)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaRuny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(runy)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaStrategiaTaktyka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(strategia/taktyka)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaSztuka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(sztuka)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNaukaTeologia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nauka(teologia)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getNawigacja() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Nawigacja',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta wykorzystywana jest do orientowania się na lądzie i na wodzie. W zależności od wiedzy i możliwości, Bohater może nawigować według mapy albo gwiazd lub posługując się wrodzonym wyczuciem kierunku. Dzięki tej umiejętności może również ocenić długość podróży, biorąc pod uwagę topografię okolicy, porę roku i pogodę. W normalnych warunkach, utrzymanie stałego kursu wymaga jednego udanego testu dziennie.',
        zdolnoscipokrewne: 'geniusz arytmetyczny, wyczucie kierunku.'
      }];
    }

    function getOpiekaNadZwierzetami() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Opieka Nad Zwierzętami',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta wykorzystywana jest podczas doglądania zwierząt domowych i hodowlanych (konie, woły, świnie, psy, itd.). Codzienne czynności i karmienie zwierząt nie wymagają testu umiejętności. Może być jednak potrzebny przy próbie wykrycia objawów choroby lub zastosowaniu specjalnych zabiegów (na przykład zaplatanie grzywy, czesanie, przygotowanie konia do parady wojskowej, itp.).',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getOswajanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Oswajanie',
        cecha: 'Ogłada',
        opis: 'Wyorzystywanie tej umiejętności umożliwia oswajanie zwierząt. Zwierzęta domowe i hodowlane zawsze zachowują się przyjaźnie wobec Bohatera, który posiada tę umiejętność. Zwierzęta dzikie lub tresowane (na przykład psy gończe lub bojowe) mogą dać się oswoić przy udanym teście umiejętności. MG może przydzielić modyfikatory przy próbie oswajania zwierząt wyjątkowo agresywnych lub wiernych innej osobie. Umiejętność ta nie działa na potwory.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getOtwieranieZamkow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Otwieranie Zamków',
        cecha: 'Zręczność',
        opis: 'Bohater potrafi otwierać wszelakiego rodzaju zamki i kłódki. Zazwyczaj do otwiercia zamka wystarczy jeden udany test umiejętności, ale przy próbach otworzenia szczególnie skomplikowanego mechanizmu Mistrz Gry może zażądać dodatkowych testów umiejętności.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getPlotkowanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Plotkowanie',
        cecha: 'Ogłada',
        opis: 'Wykorzystanie tej umiejętności pozwala na zbieranie informacji w czasie zwykłej rozmowy. Obejmuje wymianę najświeższych nowin, plotek o ważnych osobach oraz ogólnych informacji o wydarzeniach w okolicy.',
        zdolnoscipokrewne: 'etykieta, łotrzyk.'
      }];
    }

    function getPlywanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Pływanie',
        cecha: 'Krzepa',
        opis: 'Bohater umie pływać oraz nurkować. Pływanie w spokojnej wodzie nie wymaga testu. Test może być potrzebny przy próbie nurkowania, pływania w wartkim lub zdradliwym nurcie lub podczas próby przepłynięcia dłuższego dystansu. W czasie pływania Szybkość Bohatera spada o połowę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getPowozenie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Powożenie',
        cecha: 'Krzepa',
        opis: 'Bohater potrafi kierować wozem, powozem, a nawet rydwanem. Powożenie w normalnych warunkach nie wymaga testu umiejętności. Test może być potrzebny w przypadku jazdy w trudnym terenie, z dużą prędkością lub przy wykonywaniu niebezpiecznych manewrów.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getPrzekonywanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Przekonywanie',
        cecha: 'Ogłada',
        opis: 'Ta umiejętność pozwala Bohaterowi wpływać na zachowanie innych osób. Może przekonywująco kłamać, blefować, a nawet skutecznie żebrać. Przekonywanie wykorzystuje się też podczas prób uwodzenia. W przypadku zastosowania tej umiejętności w celu nakłonienia kogoś do zrobienia czegoś niezwykłego lub niebezpiecznego, MG może pozwolić nakłanianej postaci na test Siły Woli. Bohater może próbować przekonać kilka osób (jedna osoba za każde 10pkt jego Ogłady), pod warunkiem że wszystkie te osoby rozumieją język, którym posługuje się bohater.',
        zdolnoscipokrewne: 'etykieta, intrygant, krasomówstwo, łotrzyk, przemawianie.'
      }];
    }

    function getPrzeszukiwanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Przeszukiwanie',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność jest wykorzystywana przy przeszukiwaniu obszaru lub pomieszczenia, w nadziei znalezienia wskazówek, ukrytych przejść, skarbów lub pułapek. Dokładne przeszukanie pomieszczenia lub niewielkiego obszaru wymaga jednego udanego testu umiejętności.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getRzemiosloAptekarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(aptekarstwo)',
        cecha: 'Inteligencja',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloBednarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(bednarstwo)',
        cecha: 'Krzepa',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGarbarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(garbarstwo)',
        cecha: 'Krzepa',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGotowanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(gotowanie)',
        cecha: 'Inteligencja',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGornictwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(górnictwo)',
        cecha: 'Krzepa',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloGornictwoOdkrywkowe() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(górnictwo odkrywkowe)',
        cecha: 'Krzepa',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloHandel() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(handel)',
        cecha: 'Ogłada',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloJubilerstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(jubilerstwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKaligrafia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kaligrafia)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKamieniarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kamieniarstwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKartografia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kartografia)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKowalstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(kowalstwo)',
        cecha: 'Krzepa',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloKrawiectwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(krawiectwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloMlynarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(młynarstwo)',
        cecha: 'Krzepa',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloPiwowarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(piwowarstwo)',
        cecha: 'Inteligencja',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloPlatnerstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(płatnerstwo)',
        cecha: 'Krzepa',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloRusznikarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(rusznikarstwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloRymarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(rymarstwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloStolarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(stolarstwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSzkutnictwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(szkutnictwo)',
        cecha: 'Inteligencja',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSzewstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(szewstwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSztuka() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(sztuka)',
        cecha: 'Zręszność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloSwiecarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(świecarstwo)',
        cecha: 'Zręszność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloUprawaZiemi() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(uprawa ziemi)',
        cecha: 'Siła',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloWyrobLukow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(wyrób łuków)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloZielarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(zielarstwo)',
        cecha: 'Inteligencja',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getRzemiosloZlotnictwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Rzemiosło(złotnictwo)',
        cecha: 'Zręczność',
        opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
        zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
      }];
    }

    function getSekretneZnakiLowcow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(łowców)',
        cecha: 'Inteligencja',
        opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretneZnakiRycerzyZakonnych() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(rycerzy zakonnych)',
        cecha: 'Inteligencja',
        opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretneZnakiZwiadowcow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(zwiadowców)',
        cecha: 'Inteligencja',
        opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretneZnakiZlodziei() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretne Znaki(złodziei)',
        cecha: 'Inteligencja',
        opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykBitewny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(bitewny)',
        cecha: 'Inteligencja',
        opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' + 'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykGildii() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(gildii)',
        cecha: 'Inteligencja',
        opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' + 'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykLowcow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(łowców)',
        cecha: 'Inteligencja',
        opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' + 'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSekretnyJezykZlodziejski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Sekretny język(złodziejski)',
        cecha: 'Inteligencja',
        opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' + 'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSkradanieSie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Skradanie się',
        cecha: 'Zręczność',
        opis: 'Umiejętność ta umożliwia Bohaterowi ciche poruszanie się w prawie każdym terenie. Skradając się, Bohater może wykonywać najwyżej jedną akcję „ruch” w rundzie. Test skradania się jest często wykonywany w przeciwstawnym teście przeciwko Spostrzegawczości przeciwnika',
        zdolnoscipokrewne: 'grotołaz, ulicznik, wędrowiec.'
      }];
    }

    function getSplatanieMagii() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Splatanie magii',
        cecha: 'Siła Woli',
        opis: 'Wykorzystywanie tej umiejętności ułatwia Bohaterowi kontrolowanie Wiatrów Magii. Każde rzucenie zaklęcia wymaga manipulacji nimi, jednak splatanie magii wykorzystuje się wtedy, gdy wymagana jest większa kontrola nad czarem lub jego precyzyjne przygotowanie.',
        zdolnoscipokrewne: 'zmysł magii.'
      }];
    }

    function getSpostrzegawczosc() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Spostrzegawczość',
        cecha: 'Inteligencja',
        opis: 'BG, który posiada tę umiejętność, dokładniej obserwuje otoczenie, często zauważając szczegóły przeoczone przez innych. Dzięki temu ma większe szanse na zauważenie pułapki, zapadni lub ukrytego przejścia. Spostrzegawczość jest używana głównie do ustalania tego co Bohater widzi, choć obejmuje także pozostałe zmysły. Może być więc użyta do określania doznań smakowych, zapachowych, słuchowych i dotykowych. Spostrzegawczość bywa często stosowana w przeciwstawnych testach umiejętnościom takim jak Charakteryzacja, Skradanie się, i Ukrywanie się. Udany test umiejętności pozwala Bohaterowi na określenie liczebności, odległości, wielkości obserwowanego obiektu, itp. Nieudany test może oznaczać uzyskanie niedokładnych informacji.',
        zdolnoscipokrewne: 'bystry wzrok, czuły słuch, geniusz arytmetyczny.'
      }];
    }

    function getSztukaPrzetrwania() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Sztuka Przetrwania',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta może zapewnić przeżycie w dziczy. Obejmuje znajomość technik łowienia ryb, polowania, oprawiania zwierzyny, rozpalania ognia, znajdowania pożywienia, konstruowania szałasów, itp.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getSledzenie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Śledzenie',
        cecha: 'Zręczność',
        opis: 'Wykorzystując tę umiejętność, bohater może podążać za kimś, samemu pozostając niezauważonym. Test śledzenia jest często wykorzystywany w przeciwstawnym teście umiejętności przeciwko Spostrzegawczości przeciwnika.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getTargowanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Targowanie',
        cecha: 'Ogłada',
        opis: 'Umiejętność ta umożliwia negocjowanie cen towarów i usług. W przypadku towarów codziennego użytku wystarczy zwykły test umiejętności. Jeśli bohater targuje się o cenny przedmiot, MG może zarządzić przeciwstawny test Targowania (z ewentualnymi modyfikacjami trudności).',
        zdolnoscipokrewne: 'żyłka handlowa.'
      }];
    }

    function getTorturowanie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Torturowanie',
        cecha: 'Ogłada',
        opis: 'Dzięki zastosowaniu rozmaitych działań i środków przymusu Bohater potrafi wydobyć interesujące go informacje od osoby niechętnej do współpracy. Umiejętność obejmuje zarówno psychiczne znęcanie się, jak i fizyczne tortury. Ofiara może opierać się torturom, wykonując test Siły Woli.',
        zdolnoscipokrewne: 'groźny.'
      }];
    }

    function getTresura() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Tresura',
        cecha: 'Ogłada',
        opis: 'Bohater potrafi uczyć zwierzęta wykonywania różnych sztuczek i słuchania prostych poleceń. Zwykle tresurze poddaje się psy, konie i sokoły, choć MG może pozwolić na tresowanie bardziej niezwykłych zwierząt. Wyuczenie zwierzęcia zajmuje sporo czasu. Test umiejętności należy wykonać raz na tydzień tresury. Nauczenie prostej sztuczki wymaga pojedynczego, udanego testu, średnio trudna sztuczka wymaga trzech udanych testów umiejętności, natomiast bardzo trudna – dziesięciu.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getTropienie() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Tropienie',
        cecha: 'Inteligencja',
        opis: 'Bohater potrafi wyszukiwać ślady zwierząt, a także ludzi i innych stworzeń. Podążanie wyraźnym tropem nie wymaga testu umiejętności i nie spowalnia tempa poruszania się. Test umiejętności może być jednak potrzebny w trudnych warunkach terenu lub pogody. Odpowiedni poziom skuteczności może dostarczyć dodatkowych informacji (o liczebności grupy, odległości od tropionego stworzenia, a nawet jego cechach osobniczych).',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getUkrywanieSie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Ukrywanie się',
        cecha: 'Zręszność.',
        opis: 'Wykorzystanie tej umiejętności umożliwia bohaterowi ukrywanie się w niemal dowolnym terenie, pod warunkiem, że istnieje realna szansa schowania się za jakimś obiektem (mur, drzewo, budynek, itp.). Przy próbie ukrycia się na otwartej, pustej przestrzeni (na przykład na środku ulicy) test umiejętności automatycznie jest nieudany. Ukrywanie się bywa często wykorzystywane przeciwko testowi Spostrzegawczości przeciwnika.',
        zdolnoscipokrewne: 'grotołaz, ulicznik, wędrowiec.'
      }];
    }

    function getUnik() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Unik',
        cecha: 'Zręczność',
        opis: 'Wykorzystanie tej umiejętności umożliwia bohaterowi uniknięcie ataku podczas walki wręcz. Unik można stosować najwyżej raz na rundę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWarzenieTrucizn() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Warzenie Trucizn',
        cecha: 'Inteligencja',
        opis: 'Bohater potrafi przyrządzać rozmaite trucizny pochodzenia zwierzęcego lub roślinnego, a także trucizny uzyskiwane alchemicznie.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWiedzaBretonia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(bretonia)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaEstalia() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(estalia)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaImperium() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(imperium)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaJalowaKraina() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(jałowa kraina)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaKislev() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(kislev)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaKsiestwaGraniczne() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(księstwa graniczne)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaNorska() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(norska)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaTilea() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(tilea)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaElfy() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(elfy)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaKrasnoludy() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(krasnoludy)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaNiziolki() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(niziołki)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWiedzaOgry() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wiedza(ogry)',
        cecha: 'Inteligencja',
        opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
        zdolnoscipokrewne: 'obieżyświat.'
      }];
    }

    function getWioślarstwo() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Wioślarstwo',
        cecha: 'Krzepa',
        opis: 'Bohater potrafi sterować tratwami, barkami i innymi łodziami wiosłowymi. Utrzymanie kursu w normalnych warunkach nie wymagają testu umiejętności. MG może uznać za stosowne wykonanie testu w przypadku kiepskiej pogody, wysokiej fali, pokonywania progów rzecznych lub omijania mielizn.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWspinaczka() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Wspinaczka',
        cecha: 'Krzepa',
        opis: ' Twój bohater potrafi wspinać się na drzewa, mury, skalne ściany i inne pionowe przeszkody. W normalnych warunkach test umiejętności wykonuje się raz na rundę. Wspinanie się w czasie walki wymaga poświęcenia akcji podwójnej. Udany test oznacza, że bohater wspiął się na wysokość równą połowie jego Szybkości, mierzonej w metrach.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getWycena() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Wycena',
        cecha: 'Inteligencja',
        opis: 'Bohater potrafi szacować wartość rzeczy codziennego użytku, jak również przedmiotów wartościowych, takich jak biżuteria, klejnoty i dzieła sztuki. Udany test umiejętności pozwala określić rynkową wartość przedmiotu. Ponieważ nieudany test umiejętności może spowodować błędne oszacowanie wartości przedmiotu, MG powinien wykonać rzut w tajemnicy i zależnie od wyniku poinformować gracza o ustalonej w ten sposób wartości przedmiotu.',
        zdolnoscipokrewne: 'telent artystyczny, żyłka handlowa.'
      }];
    }

    function getWykrywanieMagii() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Wykrywanie Magii',
        cecha: 'Siła Woli',
        opis: 'Umiejętność tak umożliwia bohaterowi wykrywanie subtelnych zawirowań, jakie towarzyszą magicznej aurze. Czarodzieje opisują to jako szósty, siódmy i ósmy zmysł człowieka. Wśród chłopstwa to zjawisko jest znane pod nazwą „wiedźmi wzrok”. Udany test umiejętności pozwala określić, czy przedmiot, postać lub obszar pozostaje pod wpływem czaru. Wykorzystując tę umiejętność, czarodziej może ustalić siłę Wiatrów Magii w najbliższej okolicy.',
        zdolnoscipokrewne: 'zmysł magii.'
      }];
    }

    function getZastawaniePulapek() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Zastawianie Pułapek',
        cecha: 'Zręczność',
        opis: 'Bohater potrafi konstruować różnego rodzaju pułapki na zwierzęta. W Imperium używa się pułapek unieruchamiających, jak też uśmiercających złapane zwierzę. Za każdą założoną pułapkę wykonuje się jeden test umiejętności na dzień. Udany test oznacza, że w pułapkę złapało się zwierzę.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getZastraszanie() {
      return [{
        typ: 'Podstawowa',
        umiejetnosc: 'Zastraszanie',
        cecha: 'Krzepa',
        opis: 'Dzięki tej umiejętności bohater może zastraszać lub zmuszać do uległości inne osoby. Ofiary, które nie chcą ugiąć się przed groźbami, mogą wykonać test SW. Reakcja postaci zależy całkowicie od decyzji MG, który bierze pod uwagę jej osobowość oraz wynik testu Zastraszania. W niektórych sytuacjach (szantaż, itp.), MG może uznać, że bardziej odpowiednią cechą do testu Zastraszania może być Ogłada.',
        zdolnoscipokrewne: 'groźny.'
      }];
    }

    function getZnajomoscJezykaBretonski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(bretoński)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaEltharin() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(eltharin)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaEstalisjki() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(estalijski)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaKhazaldin() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(khazaldin)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaKislevski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(kislevski)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaNorski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(norski)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaTileanski() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(tileanski)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscJezykaStaroswiatowy() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(staroświatowy)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscJezykaKlasyczny() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(klasyczny)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZnajomoscjezykaNiziolkow() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Znajomość Języka(niziołków)',
        cecha: 'Inteligencja',
        opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
        zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
      }];
    }

    function getZwinnePalce() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Zwinne palce',
        cecha: 'Zręczność',
        opis: 'Dzięki tej użytecznej umiejętności bohater potrafi ukryć w dłoni małe przedmioty lub wykonywać sztuczki z kartami i monetami. Zwinne palce przydają się również przy ukradkowym sięganiu do cudzych sakiewek. Test zwinnych palców jest często wykonywany w przeciwstawnym teście umiejętności przeciwko Spostrzegawczości przeciwnika.',
        zdolnoscipokrewne: 'brak.'
      }];
    }

    function getZeglarstwo() {
      return [{
        typ: 'Zaawansowana',
        umiejetnosc: 'Żeglarstwo',
        cecha: 'Zręczność',
        opis: 'Dzięki tej umiejętności bohater potrafi sterować statkami żaglowymi. Dodatkowo bohater dysponuje wiedzą o budowie okrętów, różnych rodzajach żagli, a także umiejętnością przewidywania pogody na morzu. Żeglowanie po spokojnych wodach nie wymaga testu umiejętności. Trudne warunki pogodowe, wysokie fale lub wykonywanie manewrów w czasie bitwy mogą wymagać testu umiejętności o odpowiednim stopniu trudności.',
        zdolnoscipokrewne: 'brak.'
      }];
    } // zdolnosci


    function getArtylerzysta() {
      return [{
        zdolnosc: 'Artylerzysta',
        opis: 'Bohater zostaje świetnie wyszkolony w obsłudze broni palnej. Dzięki tej zdolności może przeładować broń palną w czasie krótszym o akcję. Jeśli bohater posiada również zdolność błyskawiczne przeładowanie, może korzystać naraz z obu zdolności(skracając czas przeładowania broni palnej o akcję podwójną).'
      }];
    }

    function getBardzoSilny() {
      return [{
        zdolnosc: 'Bardzo silny',
        opis: 'Bohater obdarzony jest wyjątkową siła. Otrzymuje +5 do Krzepy, dodawane do początkowej wartości cechy. Może to zmienić wartość Siły BG.'
      }];
    }

    function getBardzoSzybki() {
      return [{
        zdolnosc: 'Bardzo szybki',
        opis: 'Bohater potrafi poruszać się znacznie szybciej niż inni. Otrzymuje +1 do Szybkości, dodawane do początkowej wartości cechy.'
      }];
    }

    function getBijatyka() {
      return [{
        zdolnosc: 'Bijatyka',
        opis: 'Bohater nauczył się walczyć w karczemnych burdach i miejskich rozróbach. Otrzymuje modyfikator +10 do Walki Wręcz podczas ataku bez broni. Dodatkowo otrzymuje modyfikator +1 do obrażeń zadawanych podczas takiego ataku.'
      }];
    }

    function getBlyskawicznePrzeladowanie() {
      return [{
        zdolnosc: 'Błyskawiczne przeładowanie',
        opis: 'Bohater jest doświadczonym strzelcem. Dzięki tej zdolności może przeładować broń strzelecką w czasie krótszym o akcje. Bohater używający błyskawicznego przeładowania może napiąć kuszę w czasie jednej akcji zwykłej, podczas gdy normalnie wymaga to akcji podwójnej. Jeśli przeładowanie broni normalnie zajmuje akcje. korzystając z tej zdolności można to wykonać w ramach akcji natychmiastowej. Dzięki temu Bohater może przeładować taką broń praktycznie w mgnieniu oka, co pozwała na wykonanie ataku wielokrotnego" z broni strzeleckiej.'
      }];
    }

    function getBlyskawicznyBlok() {
      return [{
        zdolnosc: 'Błyskawiczny Blok',
        opis: 'Bohater, który wykonuje „atak wielokrotny", może poświęcić jeden z ataków, otrzymując w zamian możliwość sparowania ataku przeciwnika. Na przykład Bohater mający 3 Ataki i deklarujący atak wielokrotny, mógłby wykonać dwa ataki i raz sparować atak przeciwnika. Bohater nadal może parować najwyżej jeden atak na rundę. '
      }];
    }

    function getBlyskotliwosc() {
      return [{
        zdolnosc: 'Błyskotliwość',
        opis: 'Bohater obdarzony jest wyjątkową inteligencją. Otrzymuje +5 do Inteligencji, dodawane do początkowej wartości cechy.'
      }];
    }

    function getBrawura() {
      return [{
        zdolnosc: 'Brawura',
        opis: 'Obdarzony tą zdolnością Bohater wykazuje się wyjątkową śmiałością i ruchliwością w walce. Może wykonać akcję "skok" poświęcając na to akcję zwykłą(zamiast akcji podwójnej). Zdolność zwiększa też maksymalny zasięg wszystkich skoków o 1 metr.'
      }];
    }

    function getBronNaturalna() {
      return [{
        zdolnosc: 'Broń naturalna',
        opis: 'Postać dysponuje ostrymi kłami lub pazurami, których z powodzeniem może używać w walce. W czasie walki bez broni jest traktowana, jak gdyby używała broni jednoręcznej. Broń naturalna nie pozwala na parowanie ciosów. W przypadku broni naturalnej nie można stosować rozbrajania.'
      }];
    }

    function getBronSpecjalnaDwureczna() {
      return [{
        zdolnosc: 'Broń specjalna(dwuręczna)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaKawaleryjska() {
      return [{
        zdolnosc: 'Broń specjalna(kawaleryjska)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaMechaniczna() {
      return [{
        zdolnosc: 'Broń specjalna(mechaniczna)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaPalna() {
      return [{
        zdolnosc: 'Broń specjalna(palna)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaParujaca() {
      return [{
        zdolnosc: 'Broń specjalna(parująca)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaRzucana() {
      return [{
        zdolnosc: 'Broń specjalna(rzucana)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaSzermiercza() {
      return [{
        zdolnosc: 'Broń specjalna(szermiercza)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaUnieruchamiajaca() {
      return [{
        zdolnosc: 'Broń specjalna(unieruchamiająca)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaKorbacze() {
      return [{
        zdolnosc: 'Broń specjalna(korbacze)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaKusze() {
      return [{
        zdolnosc: 'Broń specjalna(kusze)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaLuki() {
      return [{
        zdolnosc: 'Broń specjalna(łuk)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBronSpecjalnaProce() {
      return [{
        zdolnosc: 'Broń specjalna(proce)',
        opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.'
      }];
    }

    function getBystryWzrok() {
      return [{
        zdolnosc: 'Bystry wzrok',
        opis: 'Bohater obdarzony jest doskonałym wzrokiem. Otrzymuje modyfikator +10 do testów spostrzegawczości podczas rozglądania się oraz do testów czytania z warg.'
      }];
    }

    function getCharyzmatyczny() {
      return [{
        zdolnosc: 'Charyzmatyczny',
        opis: 'Bohater obdarzony jest zniewalającym urokiem osobistym. Otrzymuje +5 do Ogłady, dodawane do początkowej wartości cechy.'
      }];
    }

    function getChirurgia() {
      return [{
        zdolnosc: 'Chirurgia',
        opis: 'Bohater poznał tajniki najnowszej wiedzy medycznej. Otrzymuje modyfikator +10 do testów leczenia. W przypadku leczenia ciężko rannego pacjenta udany test przywraca 2 punkty Żywotności zamiast, jak normalnie, tylko 1. Jeśli w wyniku trafienia krytycznego istnieje ryzyko utraty kończyny, pacjent leczony przez Chirurga otrzymuje modyfikator +20 do Odporności podczas testów związanych z ryzykiem utraty kończyny.'
      }];
    }

    function getChodu() {
      return [{
        zdolnosc: 'Chodu!',
        opis: 'W chwili zagrożenia Bohater odkrywa w sobie zadziwiające możliwości fizyczne. Uciekając z pola walki lub z miejsca zagrożenia, na 1k10 rund otrzymuje +1 do Szybkości.'
      }];
    }

    function getCzarnoksieswto() {
      return [{
        zdolnosc: 'Czarnoksięstwo',
        opis: 'Bohater poznał sekret Czarnej Magii Dhar i potrafi jej używać do wspomożenia siły swoich zaklęć. Korzystanie z czarnoksięstwa umożliwia zdobycie większej mocy, ale jest także bardziej ryzykowne. Za każdym razem, gdy Bohater rzuca czar, może wykorzystać energię Dhar do jego wzmocnienia. Wykonując rzut na poziom mocy czaru, możesz rzucić dodatkową kostką k10 i zignorować najmniejszy z uzyskanych wyników, który jednak liczy się przy sprawdzaniu Przekleństwa Tzeentcha. Na przykład czarodziej z Magią 2, który rzuca zaklęcie z wykorzystaniem czarnoksięstwa, rzuca 3k10 i wybiera dwa najwyższe wyniki. Wszystkie trzy kostki są używane do sprawdzania Przekleństwa Tzeentcha. Gdyby na kostkach wypadło 6, 6 i 6, poziom mocy czaru wyniósłby 12 (6+6), jednak czar wywołałby Poważną Manifestację Chaosu. Znajomość czarnoksięstwa jest wymagana przy rzucaniu czarów z magii czarnoksięskiej.'
      }];
    }

    function getCzlowiekGuma() {
      return [{
        zdolnosc: 'Człowiek-guma',
        opis: 'Bohater potrafi wyginać swoje ciało w sposób nieosiągalny dla zwykłych osób. Otrzymuje modyfikator +10 do testów kuglarstwa(akrobatyka) oraz modyfikator +20 do Zręczności podczas testów wyzwalania się z więzów, przeciskania przez szczeliny, itp.'
      }];
    }

    function getCzulySluch() {
      return [{
        zdolnosc: 'Czuły słuch',
        opis: 'Bohater obdarzony jest wyjątkowo czułym słuchem. Otrzymuje modyfikator +20 do testów spostrzegawczości podczas nasłuchiwania. '
      }];
    }

    function getDotykMocy() {
      return [{
        zdolnosc: 'Dotyk mocy',
        opis: 'Niektóre czary używane w walce wymagają dotknięcia przeciwnika. Bohater, który posiada zdolność dotyk mocy, otrzymuje modyfikator +20 do Walki Wręcz przy testach związanych z rzucaniem czarów dotykowych. '
      }];
    }

    function getEtykieta() {
      return [{
        zdolnosc: 'Etykieta',
        opis: 'Bohater potrafi odpowiednio zachowywać się we wszelkich sytuacjach towarzyskich. Otrzymuje modyfikator +10  do testów plotkowania i przekonywania podczas rozmów z przedstawicielami szlachty i arystokracji. Modyfikator stosuje się również w sytuacjach gdy wymagana jest znajomość etykiety (na przykład podszywanie się pod szlachcica z wykorzystaniem charakteryzacji).'
      }];
    }

    function getGeniuszArytmetyczny() {
      return [{
        zdolnosc: 'Geniusz arytmetyczny',
        opis: 'Bohater potrafi błyskawicznie rachować w umyśle oraz, mając do dyspozycji dostatecznie dużo czasu, może rozwiązać niemal dowolny problem matematyczny. Otrzymuje modyfikator +10 do testów hazardu i nawigacji oraz modyfikator +20 do testów spostrzegawczości związanych z oceną odległości, ciężaru, itd. '
      }];
    }

    function getGrotolaz() {
      return [{
        zdolnosc: 'Grotołaz',
        opis: 'Bohater wychował się w jaskiniach bądź często po nich wędrował. Bez trudu potrafi poruszać się w podziemiach. Otrzymuje modyfikator +10 do testów skradania się i ukrywania się wykonywanych pod powierzchnią ziemi lub w jaskiniach. '
      }];
    }

    function getGrozny() {
      return [{
        zdolnosc: 'Groźny',
        opis: 'Wygląd, wzrost lub zachowanie Bohatera wzbudzają respekt i instynktowny niepokój wśród obserwatorów. Otrzymuje modyfikator +10 do testów zastraszania i torturowania. '
      }];
    }

    function getGusla() {
      return [{
        zdolnosc: 'Gusła',
        opis: 'Bohater odkrył w sobie dziki talent magiczny, który udoskonala metodą prób i błędów, nie mając dostępu do magicznych studiów. Bohater potrafi rzucać czary magii prostej (gusła) bez konieczności posiadania umiejętności język tajemny. Do rzucania czarów nadal wymagana jest zdolność magia prosta (gusła). Za każdym razem, gdy Bohater korzysta z zaklęć magii prostej (gusła), musisz rzucić dodatkową kostką k10. Wynik rzutu nie dodaje się do poziomu mocy czaru, lecz jest używany do sprawdzania Przekleństwa Tzeentcha. Jeśli Twój BG nauczy się umiejętności język tajemny, nie będziesz musiał rzucać dodatkową kostką.'
      }];
    }

    function getIntrygant() {
      return [{
        zdolnosc: 'Intrygant',
        opis: 'Bohater jest mistrzem rozgrywek politycznych i intryg. Otrzymuje modyfikator +10 do testów przekonywania związanych z intrygami oraz do Siły Woli podczas testów przeciwko przekonywaniu ze strony innych osób.'
      }];
    }

    function getKrasnoludzkiFach() {
      return [{
        zdolnosc: 'Krasnoludzki fach',
        opis: 'Krasnoludy są urodzonymi rzemieślnikami. Bohater otrzymuje modyfikator +10 do testów rzemiosła: górnictwo, kamieniarstwo, kowalstwo, jubilerstwo, piwowarstwo, płatnerstwo i rusznikarstwo.'
      }];
    }

    function getKrasomowstwo() {
      return [{
        zdolnosc: 'Krasomówstwo',
        opis: 'Bohater potrafi przemawiać tak pięknie i przekonywująco, że może poderwać do działania całe tłumy. Wykorzystując przekonywanie BG może oddziaływać na grupę osób 100 razy liczniejszą niż normalnie. Zdolność krasomówstwo wymaga uprzedniego opanowania zdolności przemawianie.'
      }];
    }

    function getKrzepki() {
      return [{
        zdolnosc: 'Krzepki',
        opis: 'Bohater, który posiada tę zdolność, w czasie wielu przygód nabrał niesamowitej krzepy. Może nosić ciężki pancerz lub zbroję płytową bez zmniejszenia Szybkości. Bohater może zignorować Obciążenie noszonej zbroi, jednak nadal musi uwzględnić modyfikator -10 do Zręczności wynikający z faktu noszenia średniego pancerza.'
      }];
    }

    function getLatanie() {
      return [{
        zdolnosc: 'Latanie',
        opis: 'Postać potrafi latać.'
      }];
    }

    function getLewitacja() {
      return [{
        zdolnosc: 'Lewitacja',
        opis: 'Postać potrafi unosić się nisko nad ziemią.'
      }];
    }

    function getLotrzyk() {
      return [{
        zdolnosc: 'Łotrzyk',
        opis: 'Bohater jest blisko związany ze światem przestępczym. Otrzymuje modyfikator +10 do testów plotkowania i przekonywania w kontaktach z przedstawicielami przestępczego półświatka.'
      }];
    }

    function getMagiaCzaroksieska() {
      return [{
        zdolnosc: 'Magia Czarnoksięska',
        opis: 'Twój Bohater poznał tajniki jednej z zakazanych tradycji magicznych. Podobnie jak w przypadku magii tajnej, zgłębianie sekretów magii czarnoksięskiej wymaga poświęcenia i wyboru jednej z dostępnych mrocznych tradycji. Każda magia czarnoksięska jest oddzielną zdolnością.'
      }];
    }

    function getMagiaKaplanska() {
      return [{
        zdolnosc: 'Magia Kapłańska',
        opis: 'Bohater jest tak żarliwym wyznawcą jakiegoś bóstwa, że dzięki jego modlitwom zdarzają się rzeczy nadprzyrodzone. Zgłębianie tajemnic boga wymaga fanatycznego poświecenia i zaangażowania. Bohater musi wybrać jednego boga, a w konsekwencji także jedną z magii kapłańskich. Każda magia kapłańska jest oddzielną zdolnością magiczną, pozwalającą na rzucanie czarów z dziedziny określonego bóstwa.'
      }];
    }

    function getMagiaPowrzechna() {
      return [{
        zdolnosc: 'Magia powrzechna',
        opis: 'Bohater potrafi rzucać zaklęcia, które są powszechnie używane przez czarodziejów i kapłanów. Magia powszechna obejmuje wybór czarów, z których każdy jest osobną zdolnością.'
      }];
    }

    function getMagiaProsta() {
      return [{
        zdolnosc: 'Magia prosta',
        opis: 'Bohater poznał podstawowe tajniki rzucania czarów. Magia prosta, podobnie jak magia tajemna, obejmuje kilka zdolności. Każdy rodzaj magii prostej jest traktowany jako oddzielna zdolność magiczna.'
      }];
    }

    function getMagiaProstaTajemna() {
      return [{
        zdolnosc: 'Magia prosta(tajemna)',
        opis: 'Bohater poznał podstawowe tajniki rzucania czarów. Magia prosta, podobnie jak magia tajemna, obejmuje kilka zdolności. Każdy rodzaj magii prostej jest traktowany jako oddzielna zdolność magiczna.'
      }];
    }

    function getMagiaProstaGusla() {
      return [{
        zdolnosc: 'Magia prosta(gusła)',
        opis: 'Bohater poznał podstawowe tajniki rzucania czarów. Magia prosta, podobnie jak magia tajemna, obejmuje kilka zdolności. Każdy rodzaj magii prostej jest traktowany jako oddzielna zdolność magiczna.'
      }];
    }

    function getMagiaTajemna() {
      return [{
        zdolnosc: 'Magia tajemna',
        opis: 'Bohater poznał tajniki jednej z kilku tradycji magicznych znanych w Imperium. Magia tajemna wymaga absolutnego poświecenia i długotrwałych studiów. W konsekwencji Bohater musi dokonać wyboru jednej z dostępnych tradycji i nie będzie mógł uczyć się innych. Każdy rodzaj magii tajemnej jest oddzielną zdolnością.'
      }];
    }

    function getMedytacja() {
      return [{
        zdolnosc: 'Medytacja',
        opis: 'Bohater potrafi skupić się na własnym wnętrzu i wejść w głęboki trans, ignorując doznania ze świata zewnętrznego. 	Podczas odprawiania rytuału BG otrzymuje modyfikator do poziomu mocy czarów równy wartości jego cechy Magia.'
      }];
    }

    function getMorderczyAtak() {
      return [{
        zdolnosc: 'Morderczy atak',
        opis: 'Dzięki znajomości podstaw anatomii Bohater potrafi wymierzyć atak w newralgiczną część ciała przeciwnika. Zwiększa to o 1 Wartość Krytyczną wszystkich trafień krytycznych zadanych przez BG.'
      }];
    }

    function getMorderczyPocisk() {
      return [{
        zdolnosc: 'Morderczy pocisk',
        opis: 'Bohater specjalizuje się w czarach typu "magiczny pocisk". Otrzymuje modyfikator +1 do rzutów na obrażenia, gdy atakuje czarami tego typu.'
      }];
    }

    function getNasladowca() {
      return [{
        zdolnosc: 'Naśladowca',
        opis: 'Bohater potrafi bezbłędnie naśladować różne odgłosy. Otrzymuje modyfikator +10 do testów: kuglarstwa (aktorstwo, błaznowanie, gawędziarstwo i komedianctwo), charakteryzacji (jeśli jednym z elementów przebrania jest naśladowanie głosu lub dźwięków) oraz znajomości języka, gdy próbuje udawać, że to jego język ojczysty.'
      }];
    }

    function getNiepokojacy() {
      return [{
        zdolnosc: 'Niepokojący',
        opis: 'Bohater ma w swoim wyglądzie coś takiego, że przeciwnicy stają się niespokojni. Widząc go, wrogowie muszą wykonać test Siły Woli. Nieudany test oznacza, że otrzymują modyfikator -10 do testów Walki Wręcz i Umiejętności Strzeleckich w czasie walki z Bohaterem. Podczas każdej kolejnej rundy mogą próbować przełamać swój lęk (wykonując kolejny test Siły Woli). Efekt mija, gdy jedna ze stron ucieknie z pola walki.'
      }];
    }

    function getNieustraszony() {
      return [{
        zdolnosc: 'Nieustraszony',
        opis: 'Bohater nie odczuwa strachu. Może jest naprawdę odważny, a może po prostu szalony. Bez względu na przyczynę jest odporny na Strach i w mniejszym stopniu ulega Grozie (wykonujesz rzut przeciw Grozie jako rzut przeciw Strachowi). Bohater jest również odporny na działanie umiejętności zastraszanie i zdolności niepokojący.'
      }];
    }

    function getNiezwykleOdporny() {
      return [{
        zdolnosc: 'Niezwykle odporny',
        opis: 'Bohater obdarzony jest wyjątkową odpornością. Otrzymuje +5 do Odporności, dodawane do początkowej wartości cechy. Może to zmienić wartość Wytrzymałości.'
      }];
    }

    function getObiezyswiat() {
      return [{
        zdolnosc: 'Obieżyświat',
        opis: 'Bohater w swoim życiu wiele podróżował, zdobywając rozległą wiedzę. Otrzymuje modyfikator +10 do testów wiedzy i znajomości języka.'
      }];
    }

    function getOburecznosc() {
      return [{
        zdolnosc: 'Oburęczność',
        opis: 'Bohater może używać obu rąk z jednakową sprawnością, nie otrzymując modyfikatora -20 do Walki Wręcz, gdy trzyma broń w słabszej ręce.'
      }];
    }

    function getOdpornoscNaChaos() {
      return [{
        zdolnosc: 'Odporność na chaos',
        opis: 'Bohater obdarzony jest naturalną odpornością na wpływ Chaosu. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko magii i efektom Chaosu. Jest również całkowicie odporny na mutacje Chaosu. Jednak nigdy nie będzie mógł rzucać czarów.'
      }];
    }

    function getOdpornoscNaChoroby() {
      return [{
        zdolnosc: 'Odporność na choroby',
        opis: 'Bohater jest obdarzony końskim zdrowiem. Otrzymuje modyfikator +10 do Odporności podczas testów przeciwko chorobom.'
      }];
    }

    function getOdpornoscNaMagie() {
      return [{
        zdolnosc: 'Odporność na magię',
        opis: 'Bohater w naturalny sposób opiera się działaniu czarów. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko magii.'
      }];
    }

    function getOdpornoscNaTrucizny() {
      return [{
        zdolnosc: 'Odporność na trucizny',
        opis: 'Wyjątkowa odporność organizmu pozwala Bohaterowi osłabiać działania trucizny. Otrzymuje modyfikator +10 do Odporności podczas testów przeciwko truciznom.'
      }];
    }

    function getOdpornoscPsychiczna() {
      return [{
        zdolnosc: 'Odporność psychiczna',
        opis: 'Bohater jest podatny na efekt szokujących i przerażających wydarzeń. Do momentu uzbierania 8 Punktów Obłędu nie musisz testować, czy Bohater nabawił się choroby umysłu.'
      }];
    }

    function getOdwaga() {
      return [{
        zdolnosc: 'Odwaga',
        opis: 'Bohater odznacza się wyjątkową odwagą. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko Strachowi i Grozie oraz zastraszaniu.'
      }];
    }

    function getOgluszenie() {
      return [{
        zdolnosc: 'Ogłuszenie',
        opis: 'Po udanym ataku bronią biała Bohater może zadeklarować próbę ogłuszenia przeciwnika, zamiast zadawać mu obrażenia. W takiej sytuacji należy wykonać przeciwstawny test Krzepy. Jeśli Bohater wygra, jego przeciwnik musi natychmiast wykonać test Odporności, dodając modyfikator +10 za każdy Punkt Zbroi hełmu lub osłony noszonej na głowie. Jeśli ten test będzie nieudany, przeciwnik zostaje ogłuszony na 1k10 rund. W tym czasie nie może podejmować żadnych akcji i nie może stosować umiejętności unik.'
      }];
    }

    function getOpanowanie() {
      return [{
        zdolnosc: 'Opanowanie',
        opis: 'Bohater nigdy nie traci zimnej krwi. Otrzymuje +5 do Siły Woli, dodawane do początkowej wartości cechy.'
      }];
    }

    function getOzywieniec() {
      return [{
        zdolnosc: 'Ożywieniec',
        opis: 'Postać jest nieumarłym stworem, przywróconym do życia za pomocą magii nekromanckiej. Jest odporna na Strach, Grozę, trucizny, choroby oraz wszystkie czary, umiejętności i zdolności, które wpływają na emocje i umysł.'
      }];
    }

    function getPancerzWiary() {
      return [{
        zdolnosc: 'Pancerz wiary',
        opis: 'Dzięki żarliwej modlitwie Bohater potrafi skutecznie rzucać czary, nawet nosząc pancerz. Zdolność umożliwia dodanie +3 do ujemnego modyfikatora do poziomu mocy czaru, który związany jest noszeniem zbroi. Na przykład rzucanie czarów i jednoczesne zasłanianie się ciężką tarczą jest obciążone modyfikatorem -3. Zdolność pancerz wiary redukuje ten modyfikator do 0.'
      }];
    }

    function getPoliglota() {
      return [{
        zdolnosc: 'Poliglota',
        opis: 'Bohater posiada naturalną zdolność uczenia się i zapamiętywania obcych języków. Otrzymuje modyfikator +10 do testów czytania i pisania oraz znajomości języka.'
      }];
    }

    function getPrzemawianie() {
      return [{
        zdolnosc: 'Przemawianie',
        opis: 'Gdy Bohater przemawia, potrafi skupić uwagę większej grupy słuchaczy. Wykorzystując przekonywanie, może oddziaływać na grupę osób 10 razy liczniejszą niż normalnie. '
      }];
    }

    function getPrzerazajacy() {
      return [{
        zdolnosc: 'Przerażający',
        opis: 'Wygląd postaci wywołuje przerażenie wśród obserwatorów. Swoim zachowaniem wzbudza Grozę.'
      }];
    }

    function getRozbrajanie() {
      return [{
        zdolnosc: 'Rozbrajanie',
        opis: 'Po udanym ataku bronią białą, Bohater może podjąć próbę rozbrojenia przeciwnika, zamiast zadawać mu obrażenia. W takiej sytuacji należy wykonać przeciwstawny test Zręczności. Jeśli Bohater wygra, jego przeciwnik zostaje rozbrojony i upuszcza broń. Broń można podnieść, wykonując akcję "użycie przedmiotu". Jeśli przeciwnik wygra, utrzymuje broń w ręce. Nie można rozbrajać przeciwnika, który walczy bronią naturalną (kły, pazury, itp.).'
      }];
    }

    function getSilnyCios() {
      return [{
        zdolnosc: 'Silny cios',
        opis: 'Dzięki doświadczeniu nabytemu w wielu walkach Bohater potrafi precyzyjnie wymierzyć ciosy w walce wręcz. Otrzymuje modyfikator +1 do obrażeń zadawanych bronią białą.'
      }];
    }

    function getStraszny() {
      return [{
        zdolnosc: 'Straszny',
        opis: 'Wygląd postaci wywołuje przestrach wśród obserwatorów. Swoim zachowaniem wzbudza Strach.'
      }];
    }

    function getStrzalMierzony() {
      return [{
        zdolnosc: 'Strzał mierzony',
        opis: 'Wykonując atak bronią strzelecką, Bohater potrafi skoncentrować się i znacznie lepiej wycelować. Po zadeklarowaniu akcji "wycelowanie" otrzymuje modyfikator +20 do Umiejętności Strzeleckich przy rzucie na trafienie zamiast normalnego modyfikatora +10.'
      }];
    }

    function getStrzalPrecyzyjny() {
      return [{
        zdolnosc: 'Strzał precyzyjny',
        opis: 'Wykonując atak bronią strzelecką, Bohater potrafi precyzyjnie wymierzyć strzał, który zadaje dodatkowe obrażenia. Otrzymuje modyfikator +1 do rzutów na obrażenia podczas ataku z użyciem broni strzeleckiej.'
      }];
    }

    function getStrzalPrzebijajacy() {
      return [{
        zdolnosc: 'Strzał przebijający',
        opis: 'Bohater potrafi znaleźć odsłoniętą szczelinę w pancerzu przeciwnika. Po udanym ataku bronią strzelecką może zignorować 1 Punkt Zbroi przeciwnika. Jeśli przeciwnik nie nosi zbroi, ta zdolność jest nieskuteczna.'
      }];
    }

    function getStrzelecWyborowy() {
      return [{
        zdolnosc: 'Strzelec wyborowy',
        opis: 'Bohater potrafi wyjątkowo celnie strzelać. Otrzymuje +5 do Umiejętności Strzeleckich , dodawane do początkowej wartości cechy.'
      }];
    }

    function getSzalBojowy() {
      return [{
        zdolnosc: 'Szał bojowy',
        opis: 'W trakcie walki Bohater potrafi wpaść w szał bojowy. Przez jedną rundę musi się doprowadzić do wściekłości (wyjąc, gryząc tarczę, bijąc w piersi, itd.). W następnej rundzie jego pierwotna natura bierze górę, modyfikator +10 do testów Siły Woli i Krzepy, (także +1 do Siły, czyli zadawanych obrażeń), przy jednoczesnym modyfikatorze -10 do testów Inteligencji i Walki Wręcz. Podczas walki zawsze atakuje najbliższego przeciwnika, wykonując "atak wielokrotny", "szarżę" lub "szaleńczy atak", nie może uciekać ani wykonywać akcji "odwrót". BG zostaje pod wpływem szału bojowego do końca starcia.'
      }];
    }

    function getSzczescie() {
      return [{
        zdolnosc: 'Szczęście',
        opis: 'Bohater jest nieprawdopodobnym szczęściarzem. Wydaje się wychodzić obronną ręką z najgorszych opresji. Każdego dnia dostaje dodatkowy Punkt Szczęścia.'
      }];
    }

    function getSzostyZmysl() {
      return [{
        zdolnosc: 'Szósty zmysł',
        opis: 'Bohater jest niezwykle czujny i niemal instynktownie wyczuwa zagrożenie. W przypadku zasadzki lub innego zagrożenia Mistrz Gry może wykonać tajny test Siły Woli Bohatera. Jeśli test okaże się udany, Mistrz Gry powinien Cię poinformować, że Twój Bohater ma złe przeczucie albo wrażenie, że jest obserwowany. Dzięki temu BG obdarzony szóstym zmysłem może uniknąć zaskoczenia w początkowej fazie walki.'
      }];
    }

    function getSzybkiRefleks() {
      return [{
        zdolnosc: 'Szybki refleks',
        opis: 'Bohater jest obdarzony wspaniałym refleksem. Otrzymuje +5 do Zręczności, dodawane do początkowej wartości cechy.'
      }];
    }

    function getSzybkieWyciagniecie() {
      return [{
        zdolnosc: 'Szybkie wyciągnięcie',
        opis: 'Dzięki tej zdolności Bohater potrafi szybko zareagować, błyskawicznie dobywając broni lub wyciągając inny przedmiot zza pasa lub z kieszeni. Raz na rundę może użyć akcji "użycie przedmiotu" jako akcji natychmiastowej.'
      }];
    }

    function getTalentArtystyczny() {
      return [{
        zdolnosc: 'Talent artystyczny',
        opis: 'Bohater potrafi tworzyć dzieła sztuki. Otrzymuje modyfikator +20 do testów rzemiosła (sztuka) oraz modyfikator +10 do testów wyceny przy szacowaniu wartości dzieła sztuki.'
      }];
    }

    function getTwardziel() {
      return [{
        zdolnosc: 'Twardziel',
        opis: 'Bohater jest wyjątkowo odporny na ból i zranienia. Otrzymuje +1 do Żywotności, dodawane do początkowej wartości cechy.'
      }];
    }

    function getUlicznik() {
      return [{
        zdolnosc: 'Ulicznik',
        opis: 'Bohater wychował się w mieście i z łatwością orientuje się w terenie zabudowanym. Otrzymuje modyfikator +10 do testów skradania się i ukrywania w mieście.'
      }];
    }

    function getUrodzonyWojownik() {
      return [{
        zdolnosc: 'Urodzony wojownik',
        opis: 'Bohater wyjątkowo sprawnie posługuje się bronią białą. Otrzymuje +5 do Walki Wręcz, dodawane do początkowej wartości cechy.'
      }];
    }

    function getWedrowiec() {
      return [{
        zdolnosc: 'Wędrowiec',
        opis: 'Bohater wychował się na wsi i z łatwością orientuje się w terenie wiejskim. Otrzymuje modyfikator+10 do testów skradania się i ukrywania na terenach poza miastem.'
      }];
    }

    function getWidzenieWCiemnosci() {
      return [{
        zdolnosc: 'Widzenie w ciemności',
        opis: 'Bohater dysponuje zdolnością wyraźnego widzenia przy oświetleniu porównywalnym ze światłem gwiazd. Zasięg wzroku w takich warunkach wynosi 30 metrów. Zdolność jest bezużyteczna w całkowitej ciemności.'
      }];
    }

    function getWoltyzerka() {
      return [{
        zdolnosc: 'Woltyżerka',
        opis: 'Bohater potrafi dokonywać niewiarygodnych czynów podczas jazdy konnej. Potrafi stać na rękach na grzbiecie galopującego wierzchowca, przeskakiwać z jednego konia na drugiego, zeskakiwać w pełnym biegu, itp. Bohater wykonuje testy jeździectwa tylko w najbardziej ekstremalnych sytuacjach, a i wtedy otrzymuje modyfikator +10 do testów tej umiejętności.'
      }];
    }

    function getWyczucieKierunku() {
      return [{
        zdolnosc: 'Wyczucie kierunku',
        opis: 'Bohater instynktownie potrafi określać strony świata i orientować się w przestrzeni. Prawie nigdy się nie gubi i bez wahania potrafi wskazać kierunek północny. Dodatkowo otrzymuje modyfikator +10 do testów nawigacji.'
      }];
    }

    function getWykrywaniePulapek() {
      return [{
        zdolnosc: 'Wykrywanie pułapek',
        opis: 'Bohater jest ekspertem w wykrywaniu i rozbrajaniu pułapek. Otrzymuje modyfikator +10 do testów spostrzegawczości i otwierania zamków związanych z wykrywaniem i unieszkodliwieniem pułapek.'
      }];
    }

    function getWyostrzonezmysly() {
      return [{
        zdolnosc: 'Wyostrzone zmysły',
        opis: 'Bohater posiada wyjątkowo wyczulone zmysły. Otrzymuje modyfikator +20 do wszystkich testów spostrzegawczości.'
      }];
    }

    function getZapasy() {
      return [{
        zdolnosc: 'Zapasy',
        opis: 'Bohater wyjątkowo dobrze walczy bez broni. Wykonując chwyt, otrzymuje modyfikator +10 do Walki Wręcz. Dodatkowo otrzymuje modyfikator +10 do Krzepy, gdy chwyta przeciwnika lub gdy wyzwala się z uścisku.'
      }];
    }

    function getZapieklaNienawisc() {
      return [{
        zdolnosc: 'Zapiekła nienawiść',
        opis: 'Bohater podziela głęboko zakorzenioną wśród jego ludu wrogość wobec wszystkich zielonoskórych. Ta wiekowa już tradycja napełnia go taką nienawiścią, że otrzymuje modyfikator +5 do Walki Wręcz, gdy atakuje gobliny, orki i hobgobliny.'
      }];
    }

    function getZmyslMagii() {
      return [{
        zdolnosc: 'Zmysł magii',
        opis: 'Bohater potrafi umiejętnie manipulować Wiatrami Magii. Otrzymuje modyfikator +10 do testów splatania magii oraz wykrywania magii.'
      }];
    }

    function getZylkaHandlowa() {
      return [{
        zdolnosc: 'Żyłka handlowa',
        opis: 'Bohater potrafi sprzedać niemal wszystko. Otrzymuje modyfikator +10 do testów targowania i wyceny.'
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _bohater_logika_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var SharedService = /*#__PURE__*/function () {
      function SharedService(db, logika, authService) {
        _classCallCheck(this, SharedService);

        this.db = db;
        this.logika = logika;
        this.authService = authService;
        this.exportDisabler = true;
        this.wyborUmiejetnosciRasaDisabler = true;
        this.wyborZdolnosciRasaDisabler = true;
        this.wyborUmiejetnosciProfesjaDisabler = true;
        this.wyborZdolnosciProdesjaDisabler = true; // statystyki początkowe rasy

        this.poczatkoweStatystykiRasowe = {
          imie: '',
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
          wyborUmiejetnosciRasy: [[]],
          zdolnosci: [],
          wyborZdolnosciRasy: [[]],
          wyposazenie: ''
        }; // rasa bez wyborow do exportu

        this.postacDoExportu = {
          imie: '',
          rasatitle: '',
          profesjatitle: '',
          // statystyki rasy
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
          // statystyki profesji
          WW1: 0,
          US1: 0,
          K1: 0,
          Odp1: 0,
          Zr1: 0,
          Int1: 0,
          SW1: 0,
          Ogd1: 0,
          A1: 0,
          Zyw1: 0,
          Sz1: 0,
          Mag1: 0,
          // maxymalne statystyki profesji
          WW2: 0,
          US2: 0,
          K2: 0,
          Odp2: 0,
          Zr2: 0,
          Int2: 0,
          SW2: 0,
          Ogd2: 0,
          A2: 0,
          Zyw2: 0,
          Sz2: 0,
          Mag2: 0,
          // sumowane statystyki
          WW3: 0,
          US3: 0,
          K3: 0,
          Odp3: 0,
          Zr3: 0,
          Int3: 0,
          SW3: 0,
          Ogd3: 0,
          A3: 0,
          Zyw3: 0,
          S3: 0,
          Wt3: 0,
          Sz3: 0,
          Mag3: 0,
          PO3: 0,
          PP3: 0,
          // statystyki ze zdolnosci rasy
          WW4: 0,
          US4: 0,
          K4: 0,
          Odp4: 0,
          Zr4: 0,
          Int4: 0,
          SW4: 0,
          Ogd4: 0,
          A4: 0,
          Zyw4: 0,
          Sz4: 0,
          // statystyki ze zdolnosci profesji
          WW5: 0,
          US5: 0,
          K5: 0,
          Odp5: 0,
          Zr5: 0,
          Int5: 0,
          SW5: 0,
          Ogd5: 0,
          A5: 0,
          Zyw5: 0,
          Sz5: 0,
          umiejetnosciRasowe: [],
          umiejetnosciProfesji: [],
          zdolnosciRasowe: [],
          zdolnosciProfesji: [],
          wyposazenie: ''
        }; // statystyki wykupionego schematu rozwoju

        this.wykupionyRozwoj = {
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
        }; // statystyki początkowe profesji

        this.schematRozwojuProfesja = {
          rasatitle: '',
          profesjatitle: '',
          doswiadczenie: 0,
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
          wyborZdolnosciProfesji: [[]],
          wyposazenie: ''
        }; // suma statystyk rasowych i klasowych

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
        }; // punkty statystyk ze zdolnosci

        this.zdolnosciStatystykiRasowe = {
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
        this.zdolnosciStatystykiProfesji = {
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
        }; // ścieżka do db

        this.dbPath = '/postacie/';
        this.postacRef = null;
        this.postacRef = db.collection(this.dbPath);
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
          this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy = [[]];
          this.poczatkoweStatystykiRasowe.zdolnosci = [];
          this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy = [[]];
          this.poczatkoweStatystykiRasowe.wyposazenie = '';
          this.zdolnosciStatystykiRasowe.WW = 0;
          this.zdolnosciStatystykiRasowe.US = 0;
          this.zdolnosciStatystykiRasowe.K = 0;
          this.zdolnosciStatystykiRasowe.Odp = 0;
          this.zdolnosciStatystykiRasowe.Zr = 0;
          this.zdolnosciStatystykiRasowe.Int = 0;
          this.zdolnosciStatystykiRasowe.SW = 0;
          this.zdolnosciStatystykiRasowe.Ogd = 0;
          this.zdolnosciStatystykiRasowe.Zyw = 0;
          this.zdolnosciStatystykiRasowe.Sz = 0;
          this.wyborUmiejetnosciRasaDisabler = true;
          this.wyborZdolnosciRasaDisabler = true;
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
          this.wykupionyRozwoj.WW = 0;
          this.wykupionyRozwoj.US = 0;
          this.wykupionyRozwoj.K = 0;
          this.wykupionyRozwoj.Odp = 0;
          this.wykupionyRozwoj.Zr = 0;
          this.wykupionyRozwoj.Int = 0;
          this.wykupionyRozwoj.SW = 0;
          this.wykupionyRozwoj.Ogd = 0;
          this.wykupionyRozwoj.A = 0;
          this.wykupionyRozwoj.Zyw = 0;
          this.wykupionyRozwoj.Sz = 0;
          this.wykupionyRozwoj.Mag = 0;
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
          this.zdolnosciStatystykiProfesji.WW = 0;
          this.zdolnosciStatystykiProfesji.US = 0;
          this.zdolnosciStatystykiProfesji.K = 0;
          this.zdolnosciStatystykiProfesji.Odp = 0;
          this.zdolnosciStatystykiProfesji.Zr = 0;
          this.zdolnosciStatystykiProfesji.Int = 0;
          this.zdolnosciStatystykiProfesji.SW = 0;
          this.zdolnosciStatystykiProfesji.Ogd = 0;
          this.zdolnosciStatystykiProfesji.Zyw = 0;
          this.zdolnosciStatystykiProfesji.Sz = 0;
          this.schematRozwojuProfesja.umiejetnosci = [];
          this.schematRozwojuProfesja.wyborUmiejetnosciProfesji = [[]];
          this.schematRozwojuProfesja.zdolnosci = [];
          this.schematRozwojuProfesja.wyborZdolnosciProfesji = [[]];
          this.wyborZdolnosciProdesjaDisabler = true;
          this.wyborUmiejetnosciProfesjaDisabler = true; // resetowanie +10 +20 z umiejetnosci rasy

          for (var n = 0; n < this.poczatkoweStatystykiRasowe.umiejetnosci.length; n++) {
            if (this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc10 === true) {
              this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc10 = false;

              if (this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc20 === true) {
                this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc20 = false;
              }
            }
          }

          if (this.schematRozwojuProfesja.profesjatitle !== '') {
            console.log('zresetowano statystyki dla', this.schematRozwojuProfesja.profesjatitle);
          }

          this.schematRozwojuProfesja.profesjatitle = '';
        } // przypisanie imienia

      }, {
        key: "changeImie",
        value: function changeImie(string) {
          this.poczatkoweStatystykiRasowe.imie = string;
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
          var _this8 = this;

          // pobranie poczatkowych statystyk rasowych
          this.logika.getListaRasy().subscribe(function (items) {
            return _this8.statystykiRasowe = items;
          }); // przypisanie nazwy rasy do aktualnych statystyk

          this.poczatkoweStatystykiRasowe.rasatitle = rasa; // losowanie statystyk poczatkowych dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek

          for (var n = 0; n < 4; n++) {
            if (this.statystykiRasowe[n].rasatitle === this.poczatkoweStatystykiRasowe.rasatitle) {
              this.poczatkoweStatystykiRasowe.WW = this.statystykiRasowe[n].WW + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.US = this.statystykiRasowe[n].US + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.K = this.statystykiRasowe[n].K + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.Odp = this.statystykiRasowe[n].Odp + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.Zr = this.statystykiRasowe[n].Zr + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.Int = this.statystykiRasowe[n].Int + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.SW = this.statystykiRasowe[n].SW + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.Ogd = this.statystykiRasowe[n].Ogd + this.randomNumber(1, 10) + this.randomNumber(1, 10);
              this.poczatkoweStatystykiRasowe.A = 1;
              this.poczatkoweStatystykiRasowe.Zyw = this.zywotnosc(n);
              this.poczatkoweStatystykiRasowe.S = Math.floor(this.poczatkoweStatystykiRasowe.K / 10);
              this.poczatkoweStatystykiRasowe.Wt = Math.floor(this.poczatkoweStatystykiRasowe.Odp / 10);
              this.poczatkoweStatystykiRasowe.Sz = this.statystykiRasowe[n].Sz;
              this.poczatkoweStatystykiRasowe.Mag = 0;
              this.poczatkoweStatystykiRasowe.PO = 0;
              this.poczatkoweStatystykiRasowe.PP = this.przeznaczenie(n); //łaska shallyi

              this.poczatkoweStatystykiRasowe.shallya = true; // dodanie listy umiejetnosci rasowych

              for (var m = 0; m < this.statystykiRasowe[n].umiejetnosci.length; m++) {
                this.logika.getUmiejetnosci(this.statystykiRasowe[n].umiejetnosci[m]).subscribe(function (items) {
                  return _this8.umiejetnosciRasowe = items;
                });
                this.poczatkoweStatystykiRasowe.umiejetnosci[m] = this.umiejetnosciRasowe;
              } // dodanie umiejetnosci do wyboru


              if (this.statystykiRasowe[n].wyborUmiejetnosciRasy !== undefined) {
                for (var _m2 = 0; _m2 < this.statystykiRasowe[n].wyborUmiejetnosciRasy.length; _m2++) {
                  // zainicjalizowanie pustej tablicy jezeli nieistnieje
                  if (!this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[_m2]) {
                    this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[_m2] = [];
                  }

                  for (var p = 0; p < this.statystykiRasowe[n].wyborUmiejetnosciRasy[_m2].length; p++) {
                    this.logika.getUmiejetnosci(this.statystykiRasowe[n].wyborUmiejetnosciRasy[_m2][p]).subscribe(function (items) {
                      return _this8.umiejetnosciProfesji = items;
                    });
                    this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[_m2][p] = this.umiejetnosciProfesji;
                  }
                }
              } // pozwolenie na eksport gdy brak umiejetnosci do wybory
              else {
                  this.wyborUmiejetnosciRasaDisabler = false;
                } // dodanie listy zdolnosci rasowych


              for (var _m3 = 0; _m3 < this.statystykiRasowe[n].zdolnosci.length; _m3++) {
                this.logika.getZdolnosc(this.statystykiRasowe[n].zdolnosci[_m3]).subscribe(function (items) {
                  return _this8.zdolnosciRasowe = items;
                });
                this.poczatkoweStatystykiRasowe.zdolnosci[_m3] = this.zdolnosciRasowe;
                this.zdolnosciDoCechyPoczatkowych(this.poczatkoweStatystykiRasowe.zdolnosci[_m3][0].zdolnosc, true);
              } // dodanie zdolnosci do wyboru


              if (this.statystykiRasowe[n].wyborZdolnosciRasy !== undefined) {
                for (var _m4 = 0; _m4 < this.statystykiRasowe[n].wyborZdolnosciRasy.length; _m4++) {
                  // zainicjalizowanie pustej tablicy jezeli nieistnieje
                  if (!this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[_m4]) {
                    this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[_m4] = [];
                  }

                  for (var _p = 0; _p < this.statystykiRasowe[n].wyborZdolnosciRasy[_m4].length; _p++) {
                    this.logika.getZdolnosc(this.statystykiRasowe[n].wyborZdolnosciRasy[_m4][_p]).subscribe(function (items) {
                      return _this8.zdolnosciRasowe = items;
                    });
                    this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[_m4][_p] = this.zdolnosciRasowe;
                  }
                }

                console.log('pobrano zdolnosci do wyboru dla', rasa);
              } // pozwolenie na eksport gdy brak umiejetnosci do wybory
              else {
                  this.wyborZdolnosciRasaDisabler = false;
                  this.exportAbler();
                }
            }
          }
        } // zmiana profesji dodanie schematu rozwoju statystyk

      }, {
        key: "changeProfesja",
        value: function changeProfesja(profesja) {
          var _this9 = this;

          this.logika.getProfesja(profesja).subscribe(function (items) {
            return _this9.statystkiProfesji = items;
          });
          this.schematRozwojuProfesja.profesjatitle = profesja;
          this.poczatkoweStatystykiRasowe.profesjatitle = profesja;
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
          this.schematRozwojuProfesja.PP = this.statystkiProfesji[0].PP;
          this.schematRozwojuProfesja.doswiadczenie = 100;
          this.schematRozwojuProfesja.opis = this.statystkiProfesji[0].opis;
          this.schematRozwojuProfesja.wyposazenie = this.statystkiProfesji[0].wyposazenie; // dodanie umiejetnosci do listy umiejetnosci profesji

          for (var n = 0; n < this.statystkiProfesji[0].umiejetnosci.length; n++) {
            this.logika.getUmiejetnosci(this.statystkiProfesji[0].umiejetnosci[n]).subscribe(function (items) {
              return _this9.umiejetnosciProfesji = items;
            }); // sprawdzanie czy istnieje taka sama umiejetnosc rasy, jezeli tak dodanie specjjalizacji +10

            for (var m = 0; m < this.poczatkoweStatystykiRasowe.umiejetnosci.length; m++) {
              if (this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc === this.umiejetnosciProfesji[0].umiejetnosc) {
                if (this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc10 === true) {
                  this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc20 = true;
                }

                this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc10 = true;
              }
            }

            this.schematRozwojuProfesja.umiejetnosci.push(this.umiejetnosciProfesji);
          } // dodanie umiejetnosci do wyboru


          if (this.statystkiProfesji[0].wyborUmiejetnosciProfesji !== undefined) {
            for (var _n3 = 0; _n3 < this.statystkiProfesji[0].wyborUmiejetnosciProfesji.length; _n3++) {
              // zainicjalizowanie pustej tablicy jezeli nieistnieje
              if (!this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[_n3]) {
                this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[_n3] = [];
              }

              for (var p = 0; p < this.statystkiProfesji[0].wyborUmiejetnosciProfesji[_n3].length; p++) {
                this.logika.getUmiejetnosci(this.statystkiProfesji[0].wyborUmiejetnosciProfesji[_n3][p]).subscribe(function (items) {
                  return _this9.umiejetnosciProfesji = items;
                });
                this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[_n3][p] = this.umiejetnosciProfesji;
              }
            }
          } // pozwolenie na eksport gdy brak umiejetnosci do wybory
          else {
              this.wyborUmiejetnosciProfesjaDisabler = false;
            } // dodanie listy zdolnosci profesji


          if (this.statystkiProfesji[0].zdolnosci !== undefined) {
            for (var _m5 = 0; _m5 < this.statystkiProfesji[0].zdolnosci.length; _m5++) {
              this.logika.getZdolnosc(this.statystkiProfesji[0].zdolnosci[_m5]).subscribe(function (items) {
                return _this9.zdolnosciProfesji = items;
              });
              this.schematRozwojuProfesja.zdolnosci[_m5] = this.zdolnosciProfesji;
            }
          } // dodanie zdolnosci profesji do wyboru


          if (this.statystkiProfesji[0].wyborZdolnosciProfesji !== undefined) {
            for (var _m6 = 0; _m6 < this.statystkiProfesji[0].wyborZdolnosciProfesji.length; _m6++) {
              // zainicjalizowanie pustej tablicy jezeli nieistnieje
              if (!this.schematRozwojuProfesja.wyborZdolnosciProfesji[_m6]) {
                this.schematRozwojuProfesja.wyborZdolnosciProfesji[_m6] = [];
              }

              for (var _p2 = 0; _p2 < this.statystkiProfesji[0].wyborZdolnosciProfesji[_m6].length; _p2++) {
                this.logika.getZdolnosc(this.statystkiProfesji[0].wyborZdolnosciProfesji[_m6][_p2]).subscribe(function (items) {
                  return _this9.zdolnosciProfesji = items;
                });
                this.schematRozwojuProfesja.wyborZdolnosciProfesji[_m6][_p2] = this.zdolnosciProfesji;
              }
            }
          } // pozwolenie na eksport gdy brak umiejetnosci do wybory
          else {
              this.wyborZdolnosciProdesjaDisabler = false;
              this.exportAbler();
            }
        } // sumowanie aktualnych statystyk

      }, {
        key: "changeAktualne",
        value: function changeAktualne() {
          this.sumowaneStatystyki.WW = this.poczatkoweStatystykiRasowe.WW + this.zdolnosciStatystykiRasowe.WW + this.zdolnosciStatystykiProfesji.WW + this.wykupionyRozwoj.WW;
          this.sumowaneStatystyki.US = this.poczatkoweStatystykiRasowe.US + this.zdolnosciStatystykiRasowe.US + this.zdolnosciStatystykiProfesji.US + this.wykupionyRozwoj.US;
          this.sumowaneStatystyki.K = this.poczatkoweStatystykiRasowe.K + this.zdolnosciStatystykiRasowe.K + this.zdolnosciStatystykiProfesji.K + this.wykupionyRozwoj.K;
          this.sumowaneStatystyki.Odp = this.poczatkoweStatystykiRasowe.Odp + this.zdolnosciStatystykiRasowe.Odp + this.zdolnosciStatystykiProfesji.Odp + this.wykupionyRozwoj.Odp;
          this.sumowaneStatystyki.Zr = this.poczatkoweStatystykiRasowe.Zr + this.zdolnosciStatystykiRasowe.Zr + this.zdolnosciStatystykiProfesji.Zr + this.wykupionyRozwoj.Zr;
          this.sumowaneStatystyki.Int = this.poczatkoweStatystykiRasowe.Int + this.zdolnosciStatystykiRasowe.Int + this.zdolnosciStatystykiProfesji.Int + this.wykupionyRozwoj.Int;
          this.sumowaneStatystyki.SW = this.poczatkoweStatystykiRasowe.SW + this.zdolnosciStatystykiRasowe.SW + this.zdolnosciStatystykiProfesji.SW + this.wykupionyRozwoj.SW;
          this.sumowaneStatystyki.Ogd = this.poczatkoweStatystykiRasowe.Ogd + this.zdolnosciStatystykiRasowe.Ogd + this.zdolnosciStatystykiProfesji.Ogd + this.wykupionyRozwoj.Ogd;
          this.sumowaneStatystyki.A = this.poczatkoweStatystykiRasowe.A + this.wykupionyRozwoj.A;
          this.sumowaneStatystyki.Zyw = this.poczatkoweStatystykiRasowe.Zyw + this.zdolnosciStatystykiRasowe.Zyw + this.zdolnosciStatystykiProfesji.Zyw + this.wykupionyRozwoj.Zyw;
          this.sumowaneStatystyki.S = Math.floor((this.poczatkoweStatystykiRasowe.K + this.zdolnosciStatystykiRasowe.K + this.zdolnosciStatystykiProfesji.K) / 10);
          this.sumowaneStatystyki.Wt = Math.floor((this.poczatkoweStatystykiRasowe.Odp + this.zdolnosciStatystykiRasowe.Odp + this.zdolnosciStatystykiProfesji.Odp) / 10);
          this.sumowaneStatystyki.Sz = this.poczatkoweStatystykiRasowe.Sz + this.zdolnosciStatystykiRasowe.Sz + this.zdolnosciStatystykiProfesji.Sz + this.wykupionyRozwoj.Sz;
          this.sumowaneStatystyki.Mag = this.poczatkoweStatystykiRasowe.Mag + this.wykupionyRozwoj.Mag;
          this.sumowaneStatystyki.PO = this.poczatkoweStatystykiRasowe.PO;
          this.sumowaneStatystyki.PP = this.poczatkoweStatystykiRasowe.PP;
        } // zdolnosci, które powodują zmiane cech poczatkowych, rasa=true - zdolnosci rasy, rasa=false - zdolnosci profesji, dwie po to, żeby można było resetować pojedynczo

      }, {
        key: "zdolnosciDoCechyPoczatkowych",
        value: function zdolnosciDoCechyPoczatkowych(zdolnosc, rasa) {
          if (rasa === true) {
            if (zdolnosc === "Bardzo silny") {
              this.zdolnosciStatystykiRasowe.K = this.zdolnosciStatystykiRasowe.K + 5;
            } else if (zdolnosc === "Urodzony wojownik") {
              this.zdolnosciStatystykiRasowe.WW = this.zdolnosciStatystykiRasowe.WW + 5;
            } else if (zdolnosc === "Błyskotliwość") {
              this.zdolnosciStatystykiRasowe.Int = this.zdolnosciStatystykiRasowe.Int + 5;
            } else if (zdolnosc === "Charyzmatyczny") {
              this.zdolnosciStatystykiRasowe.Ogd = this.zdolnosciStatystykiRasowe.Ogd + 5;
            } else if (zdolnosc === "Niezwykle odporny") {
              this.zdolnosciStatystykiRasowe.Odp = this.zdolnosciStatystykiRasowe.Odp + 5;
            } else if (zdolnosc === "Opanowanie") {
              this.zdolnosciStatystykiRasowe.SW = this.zdolnosciStatystykiRasowe.SW + 5;
            } else if (zdolnosc === "Strzelec wyborowy") {
              this.zdolnosciStatystykiRasowe.US = this.zdolnosciStatystykiRasowe.US + 5;
            } else if (zdolnosc === "Szybki refleks") {
              this.zdolnosciStatystykiRasowe.Zr = this.zdolnosciStatystykiRasowe.Zr + 5;
            } else if (zdolnosc === "Twardziel") {
              this.zdolnosciStatystykiRasowe.Zyw = this.zdolnosciStatystykiRasowe.Zyw + 1;
            } else if (zdolnosc === "Bardzo szybki") {
              this.zdolnosciStatystykiRasowe.Sz = this.zdolnosciStatystykiRasowe.Sz + 1;
            }
          }

          if (rasa === false) {
            if (zdolnosc === "Bardzo silny") {
              this.zdolnosciStatystykiProfesji.K = this.zdolnosciStatystykiProfesji.K + 5;
            } else if (zdolnosc === "Urodzony wojownik") {
              this.zdolnosciStatystykiProfesji.WW = this.zdolnosciStatystykiProfesji.WW + 5;
            } else if (zdolnosc === "Błyskotliwość") {
              this.zdolnosciStatystykiProfesji.Int = this.zdolnosciStatystykiProfesji.Int + 5;
            } else if (zdolnosc === "Charyzmatyczny") {
              this.zdolnosciStatystykiProfesji.Ogd = this.zdolnosciStatystykiProfesji.Ogd + 5;
            } else if (zdolnosc === "Niezwykle odporny") {
              this.zdolnosciStatystykiProfesji.Odp = this.zdolnosciStatystykiProfesji.Odp + 5;
            } else if (zdolnosc === "Opanowanie") {
              this.zdolnosciStatystykiProfesji.SW = this.zdolnosciStatystykiProfesji.SW + 5;
            } else if (zdolnosc === "Strzelec wyborowy") {
              this.zdolnosciStatystykiProfesji.US = this.zdolnosciStatystykiProfesji.US + 5;
            } else if (zdolnosc === "Szybki refleks") {
              this.zdolnosciStatystykiProfesji.Zr = this.zdolnosciStatystykiProfesji.Zr + 5;
            } else if (zdolnosc === "Twardziel") {
              this.zdolnosciStatystykiProfesji.Zyw = this.zdolnosciStatystykiProfesji.Zyw + 1;
            } else if (zdolnosc === "Bardzo szybki") {
              this.zdolnosciStatystykiProfesji.Sz = this.zdolnosciStatystykiProfesji.Sz + 1;
            }
          }

          this.changeAktualne();
        }
      }, {
        key: "exportPostaci",
        value: function exportPostaci() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var n, _n4, _n5, _n6;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.postacDoExportu.imie = this.poczatkoweStatystykiRasowe.imie;
                    this.postacDoExportu.rasatitle = this.poczatkoweStatystykiRasowe.rasatitle;
                    this.postacDoExportu.profesjatitle = this.schematRozwojuProfesja.profesjatitle;
                    this.postacDoExportu.opis = this.schematRozwojuProfesja.opis;
                    this.postacDoExportu.wyposazenie = this.schematRozwojuProfesja.wyposazenie; // statystyki rasy

                    this.postacDoExportu.WW = this.poczatkoweStatystykiRasowe.WW;
                    this.postacDoExportu.US = this.poczatkoweStatystykiRasowe.US;
                    this.postacDoExportu.K = this.poczatkoweStatystykiRasowe.K;
                    this.postacDoExportu.Odp = this.poczatkoweStatystykiRasowe.Odp;
                    this.postacDoExportu.Zr = this.poczatkoweStatystykiRasowe.Zr;
                    this.postacDoExportu.Int = this.poczatkoweStatystykiRasowe.Int;
                    this.postacDoExportu.SW = this.poczatkoweStatystykiRasowe.SW;
                    this.postacDoExportu.Ogd = this.poczatkoweStatystykiRasowe.Ogd;
                    this.postacDoExportu.A = this.poczatkoweStatystykiRasowe.A;
                    this.postacDoExportu.Zyw = this.poczatkoweStatystykiRasowe.Zyw;
                    this.postacDoExportu.S = this.poczatkoweStatystykiRasowe.S;
                    this.postacDoExportu.Wt = this.poczatkoweStatystykiRasowe.Wt;
                    this.postacDoExportu.Sz = this.poczatkoweStatystykiRasowe.Sz;
                    this.postacDoExportu.Mag = this.poczatkoweStatystykiRasowe.Mag;
                    this.postacDoExportu.PO = this.poczatkoweStatystykiRasowe.PO;
                    this.postacDoExportu.PP = this.poczatkoweStatystykiRasowe.PP; // statystyki profesji wykupione

                    this.postacDoExportu.WW1 = this.wykupionyRozwoj.WW;
                    this.postacDoExportu.US1 = this.wykupionyRozwoj.US;
                    this.postacDoExportu.K1 = this.wykupionyRozwoj.K;
                    this.postacDoExportu.Odp1 = this.wykupionyRozwoj.Odp;
                    this.postacDoExportu.Zr1 = this.wykupionyRozwoj.Zr;
                    this.postacDoExportu.Int1 = this.wykupionyRozwoj.Int;
                    this.postacDoExportu.SW1 = this.wykupionyRozwoj.SW;
                    this.postacDoExportu.Ogd1 = this.wykupionyRozwoj.Ogd;
                    this.postacDoExportu.A1 = this.wykupionyRozwoj.A;
                    this.postacDoExportu.Zyw1 = this.wykupionyRozwoj.Zyw;
                    this.postacDoExportu.Sz1 = this.wykupionyRozwoj.Sz;
                    this.postacDoExportu.Mag1 = this.wykupionyRozwoj.Mag; // maxymalne statystyki profesji

                    this.postacDoExportu.WW2 = this.schematRozwojuProfesja.WW;
                    this.postacDoExportu.US2 = this.schematRozwojuProfesja.US;
                    this.postacDoExportu.K2 = this.schematRozwojuProfesja.K;
                    this.postacDoExportu.Odp2 = this.schematRozwojuProfesja.Odp;
                    this.postacDoExportu.Zr2 = this.schematRozwojuProfesja.Zr;
                    this.postacDoExportu.Int2 = this.schematRozwojuProfesja.Int;
                    this.postacDoExportu.SW2 = this.schematRozwojuProfesja.SW;
                    this.postacDoExportu.Ogd2 = this.schematRozwojuProfesja.Ogd;
                    this.postacDoExportu.A2 = this.schematRozwojuProfesja.A;
                    this.postacDoExportu.Zyw2 = this.schematRozwojuProfesja.Zyw;
                    this.postacDoExportu.Sz2 = this.schematRozwojuProfesja.Sz;
                    this.postacDoExportu.Mag2 = this.schematRozwojuProfesja.Mag; // sumowane statystyki

                    this.postacDoExportu.WW3 = this.sumowaneStatystyki.WW;
                    this.postacDoExportu.US3 = this.sumowaneStatystyki.US;
                    this.postacDoExportu.K3 = this.sumowaneStatystyki.K;
                    this.postacDoExportu.Odp3 = this.sumowaneStatystyki.Odp;
                    this.postacDoExportu.Zr3 = this.sumowaneStatystyki.Zr;
                    this.postacDoExportu.Int3 = this.sumowaneStatystyki.Int;
                    this.postacDoExportu.SW3 = this.sumowaneStatystyki.SW;
                    this.postacDoExportu.Ogd3 = this.sumowaneStatystyki.Ogd;
                    this.postacDoExportu.A3 = this.sumowaneStatystyki.A;
                    this.postacDoExportu.Zyw3 = this.sumowaneStatystyki.Zyw;
                    this.postacDoExportu.S3 = this.sumowaneStatystyki.S;
                    this.postacDoExportu.Wt3 = this.sumowaneStatystyki.Wt;
                    this.postacDoExportu.Sz3 = this.sumowaneStatystyki.Sz;
                    this.postacDoExportu.Mag3 = this.sumowaneStatystyki.Mag;
                    this.postacDoExportu.PO3 = this.sumowaneStatystyki.PO;
                    this.postacDoExportu.PP3 = this.sumowaneStatystyki.PP; // statystyki ze zdolnosci rasy

                    this.postacDoExportu.WW4 = this.zdolnosciStatystykiRasowe.WW;
                    this.postacDoExportu.US4 = this.zdolnosciStatystykiRasowe.US;
                    this.postacDoExportu.K4 = this.zdolnosciStatystykiRasowe.K;
                    this.postacDoExportu.Odp4 = this.zdolnosciStatystykiRasowe.Odp;
                    this.postacDoExportu.Zr4 = this.zdolnosciStatystykiRasowe.Zr;
                    this.postacDoExportu.Int4 = this.zdolnosciStatystykiRasowe.Int;
                    this.postacDoExportu.SW4 = this.zdolnosciStatystykiRasowe.SW;
                    this.postacDoExportu.Ogd4 = this.zdolnosciStatystykiRasowe.Ogd;
                    this.postacDoExportu.A4 = this.zdolnosciStatystykiRasowe.A;
                    this.postacDoExportu.Zyw4 = this.zdolnosciStatystykiRasowe.Zyw;
                    this.postacDoExportu.Sz4 = this.zdolnosciStatystykiRasowe.Sz; // statystyki ze zdolnosci profesji

                    this.postacDoExportu.WW5 = this.zdolnosciStatystykiProfesji.WW;
                    this.postacDoExportu.US5 = this.zdolnosciStatystykiProfesji.US;
                    this.postacDoExportu.K5 = this.zdolnosciStatystykiProfesji.K;
                    this.postacDoExportu.Odp5 = this.zdolnosciStatystykiProfesji.Odp;
                    this.postacDoExportu.Zr5 = this.zdolnosciStatystykiProfesji.Zr;
                    this.postacDoExportu.Int5 = this.zdolnosciStatystykiProfesji.Int;
                    this.postacDoExportu.SW5 = this.zdolnosciStatystykiProfesji.SW;
                    this.postacDoExportu.Ogd5 = this.zdolnosciStatystykiProfesji.Ogd;
                    this.postacDoExportu.A5 = this.zdolnosciStatystykiProfesji.A;
                    this.postacDoExportu.Zyw5 = this.zdolnosciStatystykiProfesji.Zyw;
                    this.postacDoExportu.Sz5 = this.zdolnosciStatystykiProfesji.Sz;

                    for (n = 0; n < this.poczatkoweStatystykiRasowe.umiejetnosci.length; n++) {
                      this.postacDoExportu.umiejetnosciRasowe[n] = this.poczatkoweStatystykiRasowe.umiejetnosci[n][0];
                    }

                    for (_n4 = 0; _n4 < this.schematRozwojuProfesja.umiejetnosci.length; _n4++) {
                      this.postacDoExportu.umiejetnosciProfesji[_n4] = this.schematRozwojuProfesja.umiejetnosci[_n4][0];
                    }

                    for (_n5 = 0; _n5 < this.poczatkoweStatystykiRasowe.zdolnosci.length; _n5++) {
                      this.postacDoExportu.zdolnosciRasowe[_n5] = this.poczatkoweStatystykiRasowe.zdolnosci[_n5][0];
                    }

                    for (_n6 = 0; _n6 < this.schematRozwojuProfesja.zdolnosci.length; _n6++) {
                      this.postacDoExportu.zdolnosciProfesji[_n6] = this.schematRozwojuProfesja.zdolnosci[_n6][0];
                    }

                    this.postacDoExportu.doswiadczenie = this.schematRozwojuProfesja.doswiadczenie;
                    this.postacDoExportu.shalya = this.poczatkoweStatystykiRasowe.shallya;
                    this.postacDoExportu.wyposazenie = this.schematRozwojuProfesja.wyposazenie;
                    _context.next = 92;
                    return this.authService.afAuth.currentUser;

                  case 92:
                    this.postacDoExportu.kto = _context.sent.email;
                    this.postacDoExportu.data = new Date().toString();
                    this.exportPostac(this.postacDoExportu);

                  case 95:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "exportPostac",
        value: function exportPostac(postac) {
          var param = JSON.parse(JSON.stringify(postac));
          this.postacRef.add(param);
        }
      }, {
        key: "importPostac",
        value: function importPostac() {
          return this.postacRef;
        }
      }, {
        key: "exportAbler",
        value: function exportAbler() {
          if (this.wyborUmiejetnosciRasaDisabler === false && this.wyborUmiejetnosciProfesjaDisabler === false && this.wyborZdolnosciRasaDisabler === false && this.wyborZdolnosciProdesjaDisabler === false) {
            this.exportDisabler = false;
          }
        }
      }]);

      return SharedService;
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_bohater_logika_service__WEBPACK_IMPORTED_MODULE_3__["BohaterLogikaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _bohater_logika_service__WEBPACK_IMPORTED_MODULE_3__["BohaterLogikaService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
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
      consts: [[1, "container", "color5"], [1, "row"], ["id", "outlet"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zaloguj, aby zapisa\u0107 wynik!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AsideComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var score_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", score_r2.who, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, score_r2.czas, "1.2-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, score_r2.date, "short"), " ");
      }
    }

    var AsideComponent = /*#__PURE__*/function () {
      function AsideComponent(scoreService, authService) {
        _classCallCheck(this, AsideComponent);

        this.scoreService = scoreService;
        this.authService = authService;
        this.highest = 0;
        this.arrayNumber = 0;
      }

      _createClass(AsideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getScoreList();
        }
      }, {
        key: "getScoreList",
        value: function getScoreList() {
          var _this10 = this;

          this.scoreService.getScoreList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.doc.id
              }, c.payload.doc.data());
            });
          })).subscribe(function (score) {
            _this10.score = score;

            if (score.length > 20) {
              for (var n = 0; n < score.length; n++) {
                for (var m = 0; m < score.length; m++) {
                  if (score[m].czas >= score[n].czas) {
                    if (score[m].czas > _this10.highest) {
                      _this10.highest = score[m].czas;
                      _this10.arrayNumber = m;
                    }
                  } else {
                    if (score[n].czas > _this10.highest) {
                      _this10.highest = score[n].czas;
                      _this10.arrayNumber = n;
                    }
                  }
                }

                return _this10.scoreService.highscoreRef.doc(score[_this10.arrayNumber].key)["delete"]();
              }
            }

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
      decls: 15,
      vars: 6,
      consts: [[4, "ngIf"], [1, "text-center", "pick-one-title"], [1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "row", "border-bottom"], [1, "col-1", "ml-1"], [1, "col-4", "ml-1"], [1, "col", "ml-1"], ["class", "row border-bottom", 4, "ngFor", "ngForOf"], ["routerLink", "/sign-in"]],
      template: function AsideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AsideComponent_p_0_Template, 3, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tablica wynik\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Czas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kiedy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AsideComponent_div_13_Template, 11, 10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 2, ctx.score, 0, 20));
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
        this.ostatniWynik = 0;
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

          for (var _i3 = 0; _i3 < this.tabOdpowiedzi1.length; _i3++) {
            this.tab1[_i3] = this.randomNumber(0, 3);

            for (var j = _i3; j !== 0; j--) {
              if (this.tab1[_i3] === this.tab1[j - 1]) {
                _i3--;
              }
            }

            this.tabOdpowiedzi2[this.tab1[_i3]] = this.tabOdpowiedzi1[_i3];
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
          var _this11 = this;

          this.clearTimer();
          this.intervalId = window.setInterval(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.seconds += 0.01;

                      if (!(this.dobreodpowiedzi === this.iloscPotrzebnychOdpowiedzi)) {
                        _context2.next = 14;
                        break;
                      }

                      this.czas = this.seconds;
                      this.stopTimer();
                      this.submitted = true;
                      this.score.date = new Date().toString();
                      this.score.ileOdpowiedzi = this.dobreodpowiedzi;
                      this.score.czas = this.czas;
                      _context2.next = 10;
                      return this.authservice.afAuth.currentUser;

                    case 10:
                      this.score.who = _context2.sent.email;
                      this.scoreservice.addScore(this.score);
                      _context2.next = 15;
                      break;

                    case 14:
                      this.czas = this.seconds;

                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
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
  "./src/app/import-bohatera/import-bohatera.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/import-bohatera/import-bohatera.component.ts ***!
    \**************************************************************/

  /*! exports provided: ImportBohateraComponent */

  /***/
  function srcAppImportBohateraImportBohateraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImportBohateraComponent", function () {
      return ImportBohateraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _bohater_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../bohater/service/shared.service */
    "./src/app/bohater/service/shared.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ImportBohateraComponent_div_16_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportBohateraComponent_div_16_div_17_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var postac_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.probaUsun(postac_r1.key, postac_r1.imie);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Usun");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImportBohateraComponent_div_16_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImportBohateraComponent_div_16_div_17_div_1_Template, 3, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var postac_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.authService.userData.email === postac_r1.kto);
      }
    }

    function ImportBohateraComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportBohateraComponent_div_16_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var postac_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.importujPostac(postac_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Importuj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ImportBohateraComponent_div_16_div_17_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var postac_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](postac_r1.imie);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](postac_r1.rasatitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](postac_r1.profesjatitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](postac_r1.kto);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, postac_r1.data, "short"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn === true);
      }
    }

    var ImportBohateraComponent = /*#__PURE__*/function () {
      function ImportBohateraComponent(shared, authService) {
        _classCallCheck(this, ImportBohateraComponent);

        this.shared = shared;
        this.authService = authService;
        this.key = '';
        this.imie = '';
      }

      _createClass(ImportBohateraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.importListyPostaci();
        }
      }, {
        key: "importujPostac",
        value: function importujPostac(postac) {
          this.shared.resetStatystyk();
          this.shared.poczatkoweStatystykiRasowe.imie = postac.imie;
          this.shared.poczatkoweStatystykiRasowe.rasatitle = postac.rasatitle;
          this.shared.poczatkoweStatystykiRasowe.profesjatitle = postac.profesjatitle;
          this.shared.schematRozwojuProfesja.profesjatitle = postac.profesjatitle;
          this.shared.schematRozwojuProfesja.opis = postac.opis; // statystyki rasy

          this.shared.poczatkoweStatystykiRasowe.WW = postac.WW;
          this.shared.poczatkoweStatystykiRasowe.US = postac.US;
          this.shared.poczatkoweStatystykiRasowe.K = postac.K;
          this.shared.poczatkoweStatystykiRasowe.Odp = postac.Odp;
          this.shared.poczatkoweStatystykiRasowe.Zr = postac.Zr;
          this.shared.poczatkoweStatystykiRasowe.Int = postac.Int;
          this.shared.poczatkoweStatystykiRasowe.SW = postac.SW;
          this.shared.poczatkoweStatystykiRasowe.Ogd = postac.Ogd;
          this.shared.poczatkoweStatystykiRasowe.A = postac.A;
          this.shared.poczatkoweStatystykiRasowe.Zyw = postac.Zyw;
          this.shared.poczatkoweStatystykiRasowe.S = postac.S;
          this.shared.poczatkoweStatystykiRasowe.Wt = postac.Wt;
          this.shared.poczatkoweStatystykiRasowe.Sz = postac.Sz;
          this.shared.poczatkoweStatystykiRasowe.Mag = postac.Mag;
          this.shared.poczatkoweStatystykiRasowe.PO = postac.PO;
          this.shared.poczatkoweStatystykiRasowe.PP = postac.PP; // statystyki profesji wykupione

          this.shared.wykupionyRozwoj.WW = postac.WW1;
          this.shared.wykupionyRozwoj.US = postac.US1;
          this.shared.wykupionyRozwoj.K = postac.K1;
          this.shared.wykupionyRozwoj.Odp = postac.Odp1;
          this.shared.wykupionyRozwoj.Zr = postac.Zr1;
          this.shared.wykupionyRozwoj.Int = postac.Int1;
          this.shared.wykupionyRozwoj.SW = postac.SW1;
          this.shared.wykupionyRozwoj.Ogd = postac.Ogd1;
          this.shared.wykupionyRozwoj.A = postac.A1;
          this.shared.wykupionyRozwoj.Zyw = postac.Zyw1;
          this.shared.wykupionyRozwoj.Sz = postac.Sz1;
          this.shared.wykupionyRozwoj.Mag = postac.Mag1; // maxymalne statystyki profesji

          this.shared.schematRozwojuProfesja.WW = postac.WW2;
          this.shared.schematRozwojuProfesja.US = postac.US2;
          this.shared.schematRozwojuProfesja.K = postac.K2;
          this.shared.schematRozwojuProfesja.Odp = postac.Odp2;
          this.shared.schematRozwojuProfesja.Zr = postac.Zr2;
          this.shared.schematRozwojuProfesja.Int = postac.Int2;
          this.shared.schematRozwojuProfesja.SW = postac.SW2;
          this.shared.schematRozwojuProfesja.Ogd = postac.Ogd2;
          this.shared.schematRozwojuProfesja.A = postac.A2;
          this.shared.schematRozwojuProfesja.Zyw = postac.Zyw2;
          this.shared.schematRozwojuProfesja.Sz = postac.Sz2;
          this.shared.schematRozwojuProfesja.Mag = postac.Mag2; // sumowane statystyki

          this.shared.sumowaneStatystyki.WW = postac.WW3;
          this.shared.sumowaneStatystyki.US = postac.US3;
          this.shared.sumowaneStatystyki.K = postac.K3;
          this.shared.sumowaneStatystyki.Odp = postac.Odp3;
          this.shared.sumowaneStatystyki.Zr = postac.Zr3;
          this.shared.sumowaneStatystyki.Int = postac.Int3;
          this.shared.sumowaneStatystyki.SW = postac.SW3;
          this.shared.sumowaneStatystyki.Ogd = postac.Ogd3;
          this.shared.sumowaneStatystyki.A = postac.A3;
          this.shared.sumowaneStatystyki.Zyw = postac.Zyw3;
          this.shared.sumowaneStatystyki.S = postac.S3;
          this.shared.sumowaneStatystyki.Wt = postac.Wt3;
          this.shared.sumowaneStatystyki.Sz = postac.Sz3;
          this.shared.sumowaneStatystyki.Mag = postac.Mag3;
          this.shared.sumowaneStatystyki.PO = postac.PO3;
          this.shared.sumowaneStatystyki.PP = postac.PP3; // statystyki ze zdolnosci rasy

          this.shared.zdolnosciStatystykiRasowe.WW = postac.WW4;
          this.shared.zdolnosciStatystykiRasowe.US = postac.US4;
          this.shared.zdolnosciStatystykiRasowe.K = postac.K4;
          this.shared.zdolnosciStatystykiRasowe.Odp = postac.Odp4;
          this.shared.zdolnosciStatystykiRasowe.Zr = postac.Zr4;
          this.shared.zdolnosciStatystykiRasowe.Int = postac.Int4;
          this.shared.zdolnosciStatystykiRasowe.SW = postac.SW4;
          this.shared.zdolnosciStatystykiRasowe.Ogd = postac.Ogd4;
          this.shared.zdolnosciStatystykiRasowe.A = postac.A4;
          this.shared.zdolnosciStatystykiRasowe.Zyw = postac.Zyw4;
          this.shared.zdolnosciStatystykiRasowe.Sz = postac.Sz4; // statystyki ze zdolnosci profesji

          this.shared.zdolnosciStatystykiProfesji.WW = postac.WW5;
          this.shared.zdolnosciStatystykiProfesji.US = postac.US5;
          this.shared.zdolnosciStatystykiProfesji.K = postac.K5;
          this.shared.zdolnosciStatystykiProfesji.Odp = postac.Odp5;
          this.shared.zdolnosciStatystykiProfesji.Zr = postac.Zr5;
          this.shared.zdolnosciStatystykiProfesji.Int = postac.Int5;
          this.shared.zdolnosciStatystykiProfesji.SW = postac.SW5;
          this.shared.zdolnosciStatystykiProfesji.Ogd = postac.Ogd5;
          this.shared.zdolnosciStatystykiProfesji.A = postac.A5;
          this.shared.zdolnosciStatystykiProfesji.Zyw = postac.Zyw5;
          this.shared.zdolnosciStatystykiProfesji.Sz = postac.Sz5;
          this.shared.schematRozwojuProfesja.doswiadczenie = postac.doswiadczenie;
          this.shared.poczatkoweStatystykiRasowe.shallya = postac.shalya; // znacznik zimportowanej postaci

          this.shared.poczatkoweStatystykiRasowe.importowane = true;

          for (var n = 0; n < postac.umiejetnosciRasowe.length; n++) {
            if (!this.shared.poczatkoweStatystykiRasowe.umiejetnosci[n]) {
              this.shared.poczatkoweStatystykiRasowe.umiejetnosci[n] = [];
            }

            this.shared.poczatkoweStatystykiRasowe.umiejetnosci[n][0] = postac.umiejetnosciRasowe[n];
          }

          for (var _n7 = 0; _n7 < postac.umiejetnosciProfesji.length; _n7++) {
            if (!this.shared.schematRozwojuProfesja.umiejetnosci[_n7]) {
              this.shared.schematRozwojuProfesja.umiejetnosci[_n7] = [];
            }

            this.shared.schematRozwojuProfesja.umiejetnosci[_n7][0] = postac.umiejetnosciProfesji[_n7];
          }

          for (var _n8 = 0; _n8 < postac.zdolnosciRasowe.length; _n8++) {
            if (!this.shared.poczatkoweStatystykiRasowe.zdolnosci[_n8]) {
              this.shared.poczatkoweStatystykiRasowe.zdolnosci[_n8] = [];
            }

            this.shared.poczatkoweStatystykiRasowe.zdolnosci[_n8][0] = postac.zdolnosciRasowe[_n8];
          }

          for (var _n9 = 0; _n9 < postac.zdolnosciProfesji.length; _n9++) {
            if (!this.shared.schematRozwojuProfesja.zdolnosci[_n9]) {
              this.shared.schematRozwojuProfesja.zdolnosci[_n9] = [];
            }

            this.shared.schematRozwojuProfesja.zdolnosci[_n9][0] = postac.zdolnosciProfesji[_n9];
          }

          this.shared.schematRozwojuProfesja.wyposazenie = postac.wyposazenie;
          this.shared.exportDisabler = false;
          this.shared.exportAbler();
        }
      }, {
        key: "usunPostac",
        value: function usunPostac(key) {
          return this.shared.postacRef.doc(key)["delete"]();
        }
      }, {
        key: "probaUsun",
        value: function probaUsun(key, imie) {
          this.key = key;
          this.imie = imie;
        }
      }, {
        key: "importListyPostaci",
        value: function importListyPostaci() {
          var _this12 = this;

          this.shared.importPostac().snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) {
              return Object.assign({
                key: c.payload.doc.id
              }, c.payload.doc.data());
            });
          })).subscribe(function (postac) {
            _this12.postac = postac;
            return postac;
          });
        }
      }]);

      return ImportBohateraComponent;
    }();

    ImportBohateraComponent.ɵfac = function ImportBohateraComponent_Factory(t) {
      return new (t || ImportBohateraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bohater_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ImportBohateraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImportBohateraComponent,
      selectors: [["app-import-bohatera"]],
      decls: 28,
      vars: 2,
      consts: [[1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title"], [1, "row", "border-bottom", "cursorDefault"], [1, "col-sm", "ml-1"], ["class", " row border-bottom cursorDefault", 4, "ngFor", "ngForOf"], ["id", "usunPostacConfirm", "tabindex", "-1", "role", "dialog", "aria-labelledby", "usunPostacConfirm", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "col-sm", "ml-1", "container"], [1, "row"], ["routerLink", "/bohater", 1, "btn-sm", "btn-primary", "m-1", 3, "click"], [4, "ngIf"], ["data-toggle", "modal", "data-target", "#usunPostacConfirm", 1, "btn-sm", "btn-danger", "m-1", 3, "click"]],
      template: function ImportBohateraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Import");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Imi\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rasa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profesja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ImportBohateraComponent_div_16_Template, 18, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Anuluj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportBohateraComponent_Template_button_click_26_listener() {
            return ctx.usunPostac(ctx.key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Usu\u0144");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postac);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Czy na pewno usun\u0105\u0107: ", ctx.imie, "?");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydC1ib2hhdGVyYS9pbXBvcnQtYm9oYXRlcmEuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportBohateraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-import-bohatera',
          templateUrl: './import-bohatera.component.html',
          styleUrls: ['./import-bohatera.component.css']
        }]
      }], function () {
        return [{
          type: _bohater_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
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
      consts: [[1, "container", "text-center"], [1, "displayTableCell"], [1, "authBlock"], [1, ""], [1, "formGroup"], ["type", "email", "placeholder", "Adres e-mail", "required", "", 1, "formControl"], ["passwordResetEmail", ""], ["type", "submit", "value", "Zresetuj has\u0142o", 1, "btn", "btn-primary", "m-1", 3, "click"], ["routerLink", "/sign-in", 1, "btn", "btn-primary", "m-1"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Podaj sw\xF3j e-mail, aby zresetowa\u0107 has\u0142o.");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wr\xF3\u0107 do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zaloguj");

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
      consts: [[1, "container"], [1, "container", "text-center"], [1, ""], [1, "formGroup"], ["type", "text", "placeholder", "Login", "required", "", 1, "formControl"], ["userName", ""], ["type", "password", "placeholder", "Has\u0142o", "required", "", 1, "formControl"], ["userPassword", ""], ["type", "button", "value", "Zaloguj", 1, "btn", "btn-primary", "m-1", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "btn", "btn-danger", "m-1", 3, "click"], [1, "fab", "fa-google-plus-g"], ["routerLink", "/forgot-password", 1, "btn", "btn-primary", "m-1"], ["routerLink", "/register-user", 1, "btn", "btn-primary", "m-1"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zaloguj");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_18_listener() {
            return ctx.authService.GoogleAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Zaloguj z Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Zapomnia\u0142e\u015B has\u0142a?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nie masz konta?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Stw\xF3rz konto");

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
      consts: [[1, "container", "text-center"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], ["type", "email", "placeholder", "Adres e-mail", "required", "", 1, "formControl", "m-1"], ["userEmail", ""], ["type", "password", "placeholder", "Has\u0142o", "required", "", 1, "formControl", "m-1"], ["userPwd", ""], ["type", "button", "value", "Stw\xF3rz konto", 1, "btn", "btn-primary", "m-1", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "btn", "btn-danger", "m-1", 3, "click"], [1, "fab", "fa-google-plus-g"], [1, "redirectToLogin"], ["routerLink", "/sign-in", 1, "btn", "btn-primary", "m-1"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Stw\xF3rz konto");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_18_listener() {
            return ctx.authService.GoogleAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Zaloguj z Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Masz konto? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Zaloguj");

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

    function NavComponent_a_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r4 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.email);
      }
    }

    function NavComponent_li_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wyloguj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zaloguj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
      decls: 38,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-md", "bg-primary", "navbar-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#mainmenu", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mainmenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["routerLink", "import", 1, "nav-link"], ["routerLink", "bohater", 1, "nav-link"], ["routerLink", "profesje", 1, "nav-link"], ["routerLink", "zdolnosci", 1, "nav-link"], ["routerLink", "umiejetnosci", 1, "nav-link"], ["routerLink", "dodawanie", 1, "nav-link"], ["class", "nav-link", "routerLink", "dashboard", 4, "ngIf"], ["class", "nav-item ", 4, "ngIf", "ngIfElse"], ["login", ""], ["id", "logoutConfirmModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "logoutConfirmModal", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "routerLink", "sign-in", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "dashboard", 1, "nav-link"], ["routerLink", "", "data-toggle", "modal", "data-target", "#logoutConfirmModal", 1, "nav-link"], ["routerLink", "sign-in", 1, "nav-link"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Import Postaci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bohater");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Profesje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zdolno\u015Bci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Umiej\u0119tno\u015Bci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dodawanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavComponent_a_24_Template, 2, 1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavComponent_li_25_Template, 3, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavComponent_ng_template_26_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Czy na pewno wylogowa\u0107? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Anuluj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_36_listener() {
            return ctx.authService.SignOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Wyloguj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData)("ngIfElse", _r2);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
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
  "./src/app/profesje/profesje.component.ts":
  /*!************************************************!*\
    !*** ./src/app/profesje/profesje.component.ts ***!
    \************************************************/

  /*! exports provided: ProfesjeComponent */

  /***/
  function srcAppProfesjeProfesjeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfesjeComponent", function () {
      return ProfesjeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../bohater/service/bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function ProfesjeComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wybierz profesj\u0119, aby wy\u015Bwietli\u0107 opis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfesjeComponent_div_11_div_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var umiejetnosc_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", umiejetnosc_r7, " ");
      }
    }

    function ProfesjeComponent_div_11_div_107_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var umiejetnosc_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", umiejetnosc_r11, " ");
      }
    }

    function ProfesjeComponent_div_11_div_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfesjeComponent_div_11_div_107_div_1_Template, 4, 1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r9 = ctx.index;

        var schemat_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", schemat_r2.wyborUmiejetnosciProfesji[i_r9]);
      }
    }

    function ProfesjeComponent_div_11_div_113_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var zdolnosc_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", zdolnosc_r13, " ");
      }
    }

    function ProfesjeComponent_div_11_div_119_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var zdolnosc_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", zdolnosc_r17, " ");
      }
    }

    function ProfesjeComponent_div_11_div_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfesjeComponent_div_11_div_119_div_1_Template, 4, 1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r15 = ctx.index;

        var schemat_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", schemat_r2.wyborZdolnosciProfesji[i_r15]);
      }
    }

    function ProfesjeComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profesja: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Opis: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Statystyki: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cechy g\u0142\xF3wne");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "WW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "US");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "K");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Odp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Zr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Int");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "SW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Ogd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Schemat Rozwoju");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cechy drugorz\u0119dne");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u017Byw");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Wt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Sz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Mag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "PP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Schemat Rozwoju");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Umiej\u0119tno\u015Bci: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, ProfesjeComponent_div_11_div_101_Template, 4, 1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Umiej\u0119tno\u015Bci do wyboru: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, ProfesjeComponent_div_11_div_107_Template, 2, 1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Zdolnosci: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, ProfesjeComponent_div_11_div_113_Template, 4, 1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Zdolno\u015Bci do wyboru: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, ProfesjeComponent_div_11_div_119_Template, 2, 1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Wyposa\u017Cenie: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.opis, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.WW);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.US);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.K);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.Odp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.Zr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.Int);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.SW);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.Ogd);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.A);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.Zyw);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.Sz);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schemat_r2.Mag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", schemat_r2.umiejetnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", schemat_r2.wyborUmiejetnosciProfesji);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", schemat_r2.zdolnosci);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", schemat_r2.wyborZdolnosciProfesji);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.wyposazenie, " ");
      }
    }

    var ProfesjeComponent = /*#__PURE__*/function () {
      function ProfesjeComponent(db) {
        _classCallCheck(this, ProfesjeComponent);

        this.db = db;
        this.selectedProfesjaId = '';
        this.profesje = ['Akolita', 'Banita', 'Berserker z Norski', 'Chłop', 'Ciura obozowa', 'Cyrkowiec', 'Cyrulik', 'Fanatyk', 'Flisak', 'Giermek', 'Gladiator', 'Goniec', 'Górnik', 'Guślarz', 'Hiena cmentarna', 'Kanciarz', 'Kozak kislevski', 'Leśnik', 'Łowca', 'Łowca nagród', 'Mieszczanin', 'Mytnik', 'Najemnik', 'Ochotnik', 'Ochroniarz', 'Oprych', 'Paź', 'Podżegacz', 'Porywacz zwłok', 'Posłaniec', 'Przemytnik', 'Przepatrywacz', 'Przewoźnik', 'Rybak', 'Rzecznik rodu', 'Rzemieślnik', 'Rzezimieszek', 'Skryba', 'Sługa', 'Strażnik', 'Strażnik dróg', 'Strażnik pól', 'Strażnik więzienny', 'Szczurołap', 'Szermierz estalijski', 'Szlachcic', 'Śmieciarz', 'Tarczownik', 'Uczeń czarodzieja', 'Węglarz', 'Włóczykij', 'Wojownik klanowy', 'Woźnica', 'Zabójca trolli', 'Zarządca', 'Złodziej', 'Żak', 'Żeglarz', 'Żołnierz', 'Żołnierz okrętowy'];
      }

      _createClass(ProfesjeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "update",
        value: function update(selectedProfesjaId) {
          var _this13 = this;

          this.db.getProfesja(selectedProfesjaId).subscribe(function (items) {
            return _this13.profesja = items;
          });
        }
      }]);

      return ProfesjeComponent;
    }();

    ProfesjeComponent.ɵfac = function ProfesjeComponent_Factory(t) {
      return new (t || ProfesjeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]));
    };

    ProfesjeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfesjeComponent,
      selectors: [["app-profesje"]],
      decls: 12,
      vars: 4,
      consts: [[1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title", "text-center"], ["placeholder", "Wybierz", 1, "custom", "text-center", 3, "items", "ngModel", "ngModelChange", "change"], [1, "m-1"], ["class", "m-1", 4, "ngIf"], [1, "cursorDefault"], ["class", "container bohater  p-0 m-0", 4, "ngFor", "ngForOf"], [1, "container", "bohater", "p-0", "m-0"], [1, "border-bottom", "border-dark"], [1, "row"], [1, "col-2", "col-sm-2", "m-1"], [1, "col-auto", "m-1"], [1, "col", "m-1"], [1, "col", "m-1", "text-center"], [1, "container", "text-center", "cechy-container", "p-0", "m-0"], [1, "col-3", "ml-1"], ["ngbTooltip", "Walka Wr\u0119cz", 1, "col-1"], ["ngbTooltip", "Umiej\u0119tno\u015Bci Strzeleckie", 1, "col-1"], ["ngbTooltip", "Krzepa", 1, "col-1"], ["ngbTooltip", "Odporno\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Zr\u0119czno\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Inteligencja", 1, "col-1"], ["ngbTooltip", "Si\u0142a Woli", 1, "col-1"], ["ngbTooltip", "Og\u0142ada", 1, "col-1"], [1, "col-1"], ["ngbTooltip", "Ataki", 1, "col-1"], ["ngbTooltip", "\u017Bywotno\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Si\u0142a", 1, "col-1"], ["ngbTooltip", "Wytrzyma\u0142o\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Szybko\u015B\u0107", 1, "col-1"], ["ngbTooltip", "Magia", 1, "col-1"], ["ngbTooltip", "Punkty Ob\u0142\u0119du", 1, "col-1"], ["ngbTooltip", "Punkty Przeznaczenia", 1, "col-1"], [1, "border-dark"], [1, "col"], [4, "ngFor", "ngForOf"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "col-11"], [1, "border-bottom"]],
      template: function ProfesjeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profesje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfesjeComponent_Template_ng_select_ngModelChange_7_listener($event) {
            return ctx.selectedProfesjaId = $event;
          })("change", function ProfesjeComponent_Template_ng_select_change_7_listener() {
            return ctx.update(ctx.selectedProfesjaId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfesjeComponent_div_9_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfesjeComponent_div_11_Template, 125, 19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.profesje)("ngModel", ctx.selectedProfesjaId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProfesjaId === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profesja);
        }
      },
      directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc2plL3Byb2Zlc2plLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfesjeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profesje',
          templateUrl: './profesje.component.html',
          styleUrls: ['./profesje.component.css']
        }]
      }], function () {
        return [{
          type: _bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]
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
      consts: [[1, "container"], [1, "row"], [1, "col-md-5", "my-1", "text-center"], [1, "col-md-7", "bg-light", "my-1", "text-center"]],
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
        var _this14 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this14.userData = user;
            localStorage.setItem('user', JSON.stringify(_this14.userData));
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
          var _this15 = this;

          return this.afAuth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this15.ngZone.run(function () {
              _this15.router.navigate(['dodawanie']);
            });

            _this15.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          var _this16 = this;

          return this.afAuth.createUserWithEmailAndPassword(email, password).then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this16.SendVerificationMail();

            _this16.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Send email verfificaiton when new user sign up

      }, {
        key: "SendVerificationMail",
        value: function SendVerificationMail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.currentUser;

                  case 2:
                    return _context3.abrupt("return", _context3.sent.sendEmailVerification().then(function () {
                      _this17.router.navigate(['verify-email-address']);
                    }));

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
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
          var _this18 = this;

          return this.AuthLogin(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).then(function () {
            _this18.router.navigate(['bohater']);
          });
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this19 = this;

          return this.afAuth.signInWithPopup(provider).then(function (result) {
            _this19.ngZone.run(function () {
              _this19.router.navigate(['bohater']);
            });

            _this19.SetUserData(result.user);
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
          var _this20 = this;

          return this.afAuth.signOut().then(function () {
            localStorage.removeItem('user');

            _this20.router.navigate(['sign-in']);

            _this20.refresh();
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
  "./src/app/umiejetnosci/umiejetnosci.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/umiejetnosci/umiejetnosci.component.ts ***!
    \********************************************************/

  /*! exports provided: UmiejetnosciComponent */

  /***/
  function srcAppUmiejetnosciUmiejetnosciComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UmiejetnosciComponent", function () {
      return UmiejetnosciComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../bohater/service/bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UmiejetnosciComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wybierz umiej\u0119tno\u015B\u0107, aby wy\u015Bwietli\u0107 opis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UmiejetnosciComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Umiej\u0119tno\u015B\u0107: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Opis: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cecha: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Zdolno\u015Bci pokrewne: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.umiejetnosc, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.opis, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.cecha, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.zdolnoscipokrewne, " ");
      }
    }

    var UmiejetnosciComponent = /*#__PURE__*/function () {
      function UmiejetnosciComponent(db) {
        _classCallCheck(this, UmiejetnosciComponent);

        this.db = db;
        this.umiejetnosci = ['Brzuchomówstwo', 'Charakteryzacja', 'Czytanie i pisanie', 'Czytanie z warg', 'Dowodzenie', 'Gadanina', 'Hazard', 'Hipnoza', 'Jeździectwo', 'Język tajemny(magiczny)', 'Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)', 'Leczenie', 'Mocna głowa', 'Nauka(alchemia)', 'Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)', 'Nawigacja', 'Opieka nad zwierzętami', 'Oswajanie', 'Otwieranie zamków', 'Plotkowanie', 'Pływanie', 'Powożenie', 'Przekonywanie', 'Przeszukiwanie', 'Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)', 'Sekretne znaki(łowców)', 'Sekretne znaki(rycerzy zakonnych)', 'Sekretne znaki(złodziei)', 'Sekretne znaki(zwiadowców)', 'Sekretny język(bitewny)', 'Sekretny język(gildii)', 'Sekretny język(łowców)', 'Sekretny język(złodziejski)', 'Skradanie się', 'Splatanie magii', 'Spostrzegawczość', 'Sztuka przetrwania', 'Śledzenie', 'Targowanie', 'Torturowanie', 'Tresura', 'Tropienie', 'Ukrywanie się', 'Unik', 'Warzenie trucizn', 'Wiedza(bretonia)', 'Wiedza(estalia)', 'Wiedza(imperium)', 'Wiedza(jałowa kraina)', 'Wiedza(kislev)', 'Wiedza(księstwa graniczne)', 'Wiedza(norska)', 'Wiedza(tilea)', 'Wiedza(elfy)', 'Wiedza(krasnoludy)', 'Wiedza(niziołki)', 'Wiedza(ogry)', 'Wioślarstwo', 'Wspinaczka', 'Wycena', 'Wykrywanie magii', 'Zastawianie pułapek', 'Zastraszanie', 'Znajomość języka(bretoński)', 'Znajomość języka(eltharin)', 'Znajomość języka(estalijski)', 'Znajomość języka(khazalid)', 'Znajomość języka(kislevski)', 'Znajomość języka(norski)', 'Znajomość języka(tileański)', 'Znajomość języka(klasyczny)', 'Znajomość języka(staroświatowy)', 'Znajomość języka(niziołków)', 'Zwinne palce', 'Żeglarstwo'];
        this.selectedUmiejetnosciId = '';
      }

      _createClass(UmiejetnosciComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "update",
        value: function update(selectedUmiejetnosciId) {
          var _this21 = this;

          this.db.getUmiejetnosci(selectedUmiejetnosciId).subscribe(function (items) {
            return _this21.umiejetnosc = items;
          });
        }
      }]);

      return UmiejetnosciComponent;
    }();

    UmiejetnosciComponent.ɵfac = function UmiejetnosciComponent_Factory(t) {
      return new (t || UmiejetnosciComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]));
    };

    UmiejetnosciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UmiejetnosciComponent,
      selectors: [["app-umiejetnosci"]],
      decls: 11,
      vars: 4,
      consts: [[1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title", "text-center"], ["bindLabel", "umiejetnoscititle", "bindValue", "umiejetnoscititle", "placeholder", "Wybierz", 1, "custom", "text-center", 3, "items", "ngModel", "ngModelChange", "change"], ["class", "m-1", 4, "ngIf"], [1, "border-bottom", "cursorDefault"], ["class", "container bohater  p-0 m-0", 4, "ngFor", "ngForOf"], [1, "m-1"], [1, "container", "bohater", "p-0", "m-0"], [1, "row"], [1, "col-2", "col-sm-2", "m-1"], [1, "col-auto", "m-1"], [1, "col", "m-1"]],
      template: function UmiejetnosciComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Umiej\u0119tno\u015Bci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UmiejetnosciComponent_Template_ng_select_ngModelChange_7_listener($event) {
            return ctx.selectedUmiejetnosciId = $event;
          })("change", function UmiejetnosciComponent_Template_ng_select_change_7_listener() {
            return ctx.update(ctx.selectedUmiejetnosciId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UmiejetnosciComponent_div_8_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UmiejetnosciComponent_div_10_Template, 22, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.umiejetnosci)("ngModel", ctx.selectedUmiejetnosciId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUmiejetnosciId === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.umiejetnosc);
        }
      },
      directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VtaWVqZXRub3NjaS91bWllamV0bm9zY2kuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UmiejetnosciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-umiejetnosci',
          templateUrl: './umiejetnosci.component.html',
          styleUrls: ['./umiejetnosci.component.css']
        }]
      }], function () {
        return [{
          type: _bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/zdolnosci/zdolnosci.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/zdolnosci/zdolnosci.component.ts ***!
    \**************************************************/

  /*! exports provided: ZdolnosciComponent */

  /***/
  function srcAppZdolnosciZdolnosciComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZdolnosciComponent", function () {
      return ZdolnosciComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../bohater/service/bohater-logika.service */
    "./src/app/bohater/service/bohater-logika.service.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ZdolnosciComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wybierz zdolno\u015B\u0107, aby wy\u015Bwietli\u0107 opis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ZdolnosciComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Umiej\u0119tno\u015B\u0107: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Opis: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schemat_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.zdolnosc, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schemat_r2.opis, " ");
      }
    }

    var ZdolnosciComponent = /*#__PURE__*/function () {
      function ZdolnosciComponent(db) {
        _classCallCheck(this, ZdolnosciComponent);

        this.db = db;
        this.zdolnosci = ['Artylerzysta', 'Bardzo silny', 'Bardzo szybki', 'Bijatyka', 'Błyskawiczne przeładowanie', 'Błyskawiczny blok', 'Błyskotliwość', 'Brawura', 'Broń naturalna', 'Broń specjalna(dwuręczna)', 'Broń specjalna(kawaleryjska)', 'Broń specjalna(mechaniczna)', 'Broń specjalna(palna)', 'Broń specjalna(parująca)', 'Broń specjalna(rzucana)', 'Broń specjalna(szermiercza)', 'Broń specjalna(unieruchamiająca)', 'Broń specjalna(korbacz)', 'Broń specjalna(kusza)', 'Broń specjalna(łuk)', 'Broń specjalna(proca)', 'Bystry wzrok', 'Charyzmatyczny', 'Chirurgia', 'Chodu!', 'Czarnoksięstwo', 'Człowiek-guma', 'Czuły słuch', 'Dotyk mocy', 'Etykieta', 'Geniusz arytmetyczny', 'Grotołaz', 'Groźny', 'Gusła', 'Intrygant', 'Krasnoludzki fach', 'Krasomówstwo', 'Krzepki', 'Latanie', 'Lewitacja', 'Łotrzyk', 'Magia czarnoksięska', 'Magia kapłańska', 'Magia powrzechna', 'Magia prosta', 'Magia prosta(gusła)', 'Magia prosta(tajemna)', 'Magia tajemna', 'Medytacja', 'Morderczy atak', 'Morderczy pocisk', 'Naśladowca', 'Niepokojący', 'Nieustraszony', 'Niezwykle odporny', 'Obieżyświat', 'Oburęczność', 'Odporność na chaos', 'Odporność na choroby', 'Odporność na magię', 'Odporność na trucizny', 'Odporność psychiczna', 'Odwaga', 'Ogłuszanie', 'Opanowanie', 'Ożywieniec', 'Pancerz wiary', 'Poliglota', 'Przemawianie', 'Przerażający', 'Rozbrajanie', 'Silny cios', 'Straszny', 'Strzał mierzony', 'Strzał precyzyjny', 'Strzał przebijający', 'Strzelec wyborowy', 'Szał bojowy', 'Szczęście', 'Szósty zmysł', 'Szybki refleks', 'Szybkie wyciągnięcie', 'Talent artystyczny', 'Twardziel', 'Ulicznik', 'Urodzony wojownik', 'Wędrowiec', 'Widzenie w ciemności', 'Woltyżerka', 'Wyczucie kierunku', 'Wykrywanie pułapek', 'Wyostrzone zmysły', 'Zapasy', 'Zapiekła nienawiść', 'Zmysł magii', 'Żyłka handlowa'];
        this.selectedZdolnosciId = '';
      }

      _createClass(ZdolnosciComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "update",
        value: function update(selectedZdolnosciId) {
          var _this22 = this;

          this.db.getZdolnosc(selectedZdolnosciId).subscribe(function (items) {
            return _this22.zdolnosc = items;
          });
        }
      }]);

      return ZdolnosciComponent;
    }();

    ZdolnosciComponent.ɵfac = function ZdolnosciComponent_Factory(t) {
      return new (t || ZdolnosciComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]));
    };

    ZdolnosciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ZdolnosciComponent,
      selectors: [["app-zdolnosci"]],
      decls: 11,
      vars: 4,
      consts: [[1, "container", "bohater", "text-center", "p-0", "m-0"], [1, "p-1", "title", "text-center"], ["bindLabel", "umiejetnoscititle", "bindValue", "umiejetnoscititle", "placeholder", "Wybierz", 1, "custom", "text-center", 3, "items", "ngModel", "ngModelChange", "change"], ["class", "m-1", 4, "ngIf"], [1, "border-bottom", "cursorDefault"], ["class", "container bohater  p-0 m-0", 4, "ngFor", "ngForOf"], [1, "m-1"], [1, "container", "bohater", "p-0", "m-0"], [1, "row"], [1, "col-2", "col-sm-2", "m-1"], [1, "col-auto", "m-1"], [1, "col", "m-1"]],
      template: function ZdolnosciComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zdolno\u015Bci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ZdolnosciComponent_Template_ng_select_ngModelChange_7_listener($event) {
            return ctx.selectedZdolnosciId = $event;
          })("change", function ZdolnosciComponent_Template_ng_select_change_7_listener() {
            return ctx.update(ctx.selectedZdolnosciId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ZdolnosciComponent_div_8_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ZdolnosciComponent_div_10_Template, 12, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.zdolnosci)("ngModel", ctx.selectedZdolnosciId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedZdolnosciId === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zdolnosc);
        }
      },
      directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3pkb2xub3NjaS96ZG9sbm9zY2kuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZdolnosciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-zdolnosci',
          templateUrl: './zdolnosci.component.html',
          styleUrls: ['./zdolnosci.component.css']
        }]
      }], function () {
        return [{
          type: _bohater_service_bohater_logika_service__WEBPACK_IMPORTED_MODULE_1__["BohaterLogikaService"]
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