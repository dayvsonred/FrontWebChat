(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/my-new-component/my-new-component.component */ "./src/app/my-new-component/my-new-component.component.ts");
/* harmony import */ var _my_chat_my_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-chat/my-chat.component */ "./src/app/my-chat/my-chat.component.ts");





var routes = [
    { path: 'A', pathMatch: 'full', component: src_app_my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_3__["MyNewComponentComponent"] },
    { path: 'Chat', pathMatch: 'full', component: _my_chat_my_chat_component__WEBPACK_IMPORTED_MODULE_4__["MyChatComponent"] },
    { path: 'chat', pathMatch: 'full', component: _my_chat_my_chat_component__WEBPACK_IMPORTED_MODULE_4__["MyChatComponent"] },
    { path: '', pathMatch: 'full', component: _my_chat_my_chat_component__WEBPACK_IMPORTED_MODULE_4__["MyChatComponent"] },
    { path: '**', pathMatch: 'full', component: _my_chat_my_chat_component__WEBPACK_IMPORTED_MODULE_4__["MyChatComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'appDayvson';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-new-component/my-new-component.component */ "./src/app/my-new-component/my-new-component.component.ts");
/* harmony import */ var _my_chat_my_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-chat/my-chat.component */ "./src/app/my-chat/my-chat.component.ts");




// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _my_new_component_my_new_component_component__WEBPACK_IMPORTED_MODULE_7__["MyNewComponentComponent"],
                _my_chat_my_chat_component__WEBPACK_IMPORTED_MODULE_8__["MyChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // NgbModule,
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__["AlertModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/my-chat/my-chat.component.css":
/*!***********************************************!*\
  !*** ./src/app/my-chat/my-chat.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n    background: #27ae60;\r\n    font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.1px;\r\n    color: #32465a;\r\n    text-rendering: optimizeLegibility;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  #frame {\r\n    width: 95%;\r\n    min-width: 360px;\r\n    max-width: 1000px;\r\n    height: 92vh;\r\n    min-height: 300px;\r\n    max-height: 720px;\r\n    background: #E6EAEA;\r\n  }\r\n  \r\n  @media screen and (max-width: 360px) {\r\n    #frame {\r\n      width: 100%;\r\n      height: 100vh;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel {\r\n    float: left;\r\n    min-width: 280px;\r\n    max-width: 340px;\r\n    width: 40%;\r\n    height: 100%;\r\n    background: #2c3e50;\r\n    color: #f5f5f5;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel {\r\n      width: 58px;\r\n      min-width: 58px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile {\r\n    width: 80%;\r\n    margin: 25px auto;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile {\r\n      width: 100%;\r\n      margin: 0 auto;\r\n      padding: 5px 0 0 0;\r\n      background: #32465a;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile.expanded .wrap {\r\n    height: 210px;\r\n    line-height: initial;\r\n  }\r\n  \r\n  #frame #sidepanel #profile.expanded .wrap p {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  #frame #sidepanel #profile.expanded .wrap i.expand-button {\r\n    -webkit-transform: scaleY(-1);\r\n    transform: scaleY(-1);\r\n    -webkit-filter: FlipH;\r\n            filter: FlipH;\r\n    -ms-filter: \"FlipH\";\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap {\r\n    height: 60px;\r\n    line-height: 60px;\r\n    overflow: hidden;\r\n    transition: 0.3s height ease;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap {\r\n      height: 55px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap img {\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    padding: 3px;\r\n    border: 2px solid #e74c3c;\r\n    height: auto;\r\n    float: left;\r\n    cursor: pointer;\r\n    transition: 0.3s border ease;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap img {\r\n      width: 40px;\r\n      margin-left: 4px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap img.online {\r\n    border: 2px solid #2ecc71;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap img.away {\r\n    border: 2px solid #f1c40f;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap img.busy {\r\n    border: 2px solid #e74c3c;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap img.offline {\r\n    border: 2px solid #95a5a6;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap p {\r\n    float: left;\r\n    margin-left: 15px;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap p {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap i.expand-button {\r\n    float: right;\r\n    margin-top: 23px;\r\n    font-size: 0.8em;\r\n    cursor: pointer;\r\n    color: #435f7a;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap i.expand-button {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options {\r\n    position: absolute;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    width: 150px;\r\n    margin: 70px 0 0 0;\r\n    border-radius: 6px;\r\n    z-index: 99;\r\n    line-height: initial;\r\n    background: #435f7a;\r\n    transition: 0.3s all ease;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap #status-options {\r\n      width: 58px;\r\n      margin-top: 57px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options.active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    margin: 75px 0 0 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap #status-options.active {\r\n      margin-top: 62px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 8px solid #435f7a;\r\n    margin: -8px 0 0 24px;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap #status-options:before {\r\n      margin-left: 23px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul {\r\n    overflow: hidden;\r\n    border-radius: 6px;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li {\r\n    padding: 15px 0 30px 18px;\r\n    display: block;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li {\r\n      padding: 15px 0 35px 22px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li:hover {\r\n    background: #496886;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    margin: 5px 0 0 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n      width: 14px;\r\n      height: 14px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin: -3px 0 0 -3px;\r\n    background: transparent;\r\n    border-radius: 50%;\r\n    z-index: 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n      height: 18px;\r\n      width: 18px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li p {\r\n    padding-left: 12px;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #profile .wrap #status-options ul li p {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\r\n    background: #2ecc71;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\r\n    border: 1px solid #2ecc71;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\r\n    background: #f1c40f;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\r\n    border: 1px solid #f1c40f;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\r\n    background: #e74c3c;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\r\n    border: 1px solid #e74c3c;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\r\n    background: #95a5a6;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\r\n    border: 1px solid #95a5a6;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #expanded {\r\n    padding: 100px 0 0 0;\r\n    display: block;\r\n    line-height: initial !important;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #expanded label {\r\n    float: left;\r\n    clear: both;\r\n    margin: 0 8px 5px 0;\r\n    padding: 5px 0;\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #expanded input {\r\n    border: none;\r\n    margin-bottom: 6px;\r\n    background: #32465a;\r\n    border-radius: 3px;\r\n    color: #f5f5f5;\r\n    padding: 7px;\r\n    width: calc(100% - 43px);\r\n  }\r\n  \r\n  #frame #sidepanel #profile .wrap #expanded input:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }\r\n  \r\n  #frame #sidepanel #search {\r\n    border-top: 1px solid #32465a;\r\n    border-bottom: 1px solid #32465a;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #search {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #search label {\r\n    position: absolute;\r\n    margin: 10px 0 0 20px;\r\n  }\r\n  \r\n  #frame #sidepanel #search input {\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n    padding: 10px 0 10px 46px;\r\n    width: calc(100% - 25px);\r\n    border: none;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }\r\n  \r\n  #frame #sidepanel #search input:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }\r\n  \r\n  #frame #sidepanel #search input::-webkit-input-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  \r\n  #frame #sidepanel #search input::-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  \r\n  #frame #sidepanel #search input:-ms-input-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  \r\n  #frame #sidepanel #search input:-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts {\r\n    height: calc(100% - 177px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #contacts {\r\n      height: calc(100% - 149px);\r\n      overflow-y: scroll;\r\n      overflow-x: hidden;\r\n    }\r\n    #frame #sidepanel #contacts::-webkit-scrollbar {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #contacts.expanded {\r\n    height: calc(100% - 334px);\r\n  }\r\n  \r\n  #frame #sidepanel #contacts::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: #2c3e50;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts::-webkit-scrollbar-thumb {\r\n    background-color: #243140;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact {\r\n    position: relative;\r\n    padding: 10px 0 15px 0;\r\n    font-size: 0.9em;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #contacts ul li.contact {\r\n      padding: 6px 0 46px 8px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact:hover {\r\n    background: #32465a;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact.active {\r\n    background: #32465a;\r\n    border-right: 5px solid #435f7a;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact.active span.contact-status {\r\n    border: 2px solid #32465a !important;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap {\r\n    width: 88%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #contacts ul li.contact .wrap {\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap span {\r\n    position: absolute;\r\n    left: 0;\r\n    margin: -2px 0 0 -2px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #2c3e50;\r\n    background: #95a5a6;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap span.online {\r\n    background: #2ecc71;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap span.away {\r\n    background: #f1c40f;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap span.busy {\r\n    background: #e74c3c;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap img {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #contacts ul li.contact .wrap img {\r\n      margin-right: 0px;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n    padding: 5px 0 0 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta .name {\r\n    font-weight: 600;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\r\n    margin: 5px 0 0 0;\r\n    padding: 0 0 1px;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    transition: 1s all ease;\r\n  }\r\n  \r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\r\n    position: initial;\r\n    border-radius: initial;\r\n    background: none;\r\n    border: none;\r\n    padding: 0 2px 0 0;\r\n    margin: 0 0 0 1px;\r\n    opacity: .5;\r\n  }\r\n  \r\n  #frame #sidepanel #bottom-bar {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n  }\r\n  \r\n  #frame #sidepanel #bottom-bar button {\r\n    float: left;\r\n    border: none;\r\n    width: 50%;\r\n    padding: 10px 0;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n    cursor: pointer;\r\n    font-size: 0.85em;\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #bottom-bar button {\r\n      float: none;\r\n      width: 100%;\r\n      padding: 15px 0;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #bottom-bar button:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\r\n    border-right: 1px solid #2c3e50;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #bottom-bar button:nth-child(1) {\r\n      border-right: none;\r\n      border-bottom: 1px solid #2c3e50;\r\n    }\r\n  }\r\n  \r\n  #frame #sidepanel #bottom-bar button:hover {\r\n    background: #435f7a;\r\n  }\r\n  \r\n  #frame #sidepanel #bottom-bar button i {\r\n    margin-right: 3px;\r\n    font-size: 1em;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #bottom-bar button i {\r\n      font-size: 1.3em;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame #sidepanel #bottom-bar button span {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  #frame .content {\r\n    float: right;\r\n    width: 60%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame .content {\r\n      width: calc(100% - 58px);\r\n      min-width: 300px !important;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 900px) {\r\n    #frame .content {\r\n      width: calc(100% - 340px);\r\n    }\r\n  }\r\n  \r\n  #frame .content .contact-profile {\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background: #f5f5f5;\r\n  }\r\n  \r\n  #frame .content .contact-profile img {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin: 9px 12px 0 9px;\r\n  }\r\n  \r\n  #frame .content .contact-profile p {\r\n    float: left;\r\n  }\r\n  \r\n  #frame .content .contact-profile .social-media {\r\n    float: right;\r\n  }\r\n  \r\n  #frame .content .contact-profile .social-media i {\r\n    margin-left: 14px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  #frame .content .contact-profile .social-media i:nth-last-child(1) {\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  #frame .content .contact-profile .social-media i:hover {\r\n    color: #435f7a;\r\n  }\r\n  \r\n  #frame .content .messages {\r\n    height: auto;\r\n    min-height: calc(100% - 93px);\r\n    max-height: calc(100% - 93px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame .content .messages {\r\n      max-height: calc(100% - 105px);\r\n    }\r\n  }\r\n  \r\n  #frame .content .messages::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: transparent;\r\n  }\r\n  \r\n  #frame .content .messages::-webkit-scrollbar-thumb {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n  }\r\n  \r\n  #frame .content .messages ul li {\r\n    display: inline-block;\r\n    clear: both;\r\n    float: left;\r\n    margin: 15px 15px 5px 15px;\r\n    width: calc(100% - 25px);\r\n    font-size: 0.9em;\r\n  }\r\n  \r\n  #frame .content .messages ul li:nth-last-child(1) {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  #frame .content .messages ul li.sent img {\r\n    margin: 6px 8px 0 0;\r\n  }\r\n  \r\n  #frame .content .messages ul li.sent p {\r\n    background: #435f7a;\r\n    color: #f5f5f5;\r\n  }\r\n  \r\n  #frame .content .messages ul li.replies img {\r\n    float: right;\r\n    margin: 6px 0 0 8px;\r\n  }\r\n  \r\n  #frame .content .messages ul li.replies p {\r\n    background: #f5f5f5;\r\n    float: right;\r\n  }\r\n  \r\n  #frame .content .messages ul li img {\r\n    width: 22px;\r\n    border-radius: 50%;\r\n    float: left;\r\n  }\r\n  \r\n  #frame .content .messages ul li p {\r\n    display: inline-block;\r\n    padding: 10px 15px;\r\n    border-radius: 20px;\r\n    max-width: 205px;\r\n    line-height: 130%;\r\n  }\r\n  \r\n  @media screen and (min-width: 735px) {\r\n    #frame .content .messages ul li p {\r\n      max-width: 300px;\r\n    }\r\n  }\r\n  \r\n  #frame .content .message-input {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    z-index: 99;\r\n  }\r\n  \r\n  #frame .content .message-input .wrap {\r\n    position: relative;\r\n  }\r\n  \r\n  #frame .content .message-input .wrap input {\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n    float: left;\r\n    border: none;\r\n    width: calc(100% - 90px);\r\n    padding: 11px 32px 10px 8px;\r\n    font-size: 0.8em;\r\n    color: #32465a;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame .content .message-input .wrap input {\r\n      padding: 15px 32px 16px 8px;\r\n    }\r\n  }\r\n  \r\n  #frame .content .message-input .wrap input:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  #frame .content .message-input .wrap .attachment {\r\n    position: absolute;\r\n    right: 60px;\r\n    z-index: 4;\r\n    margin-top: 10px;\r\n    font-size: 1.1em;\r\n    color: #435f7a;\r\n    opacity: .5;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame .content .message-input .wrap .attachment {\r\n      margin-top: 17px;\r\n      right: 65px;\r\n    }\r\n  }\r\n  \r\n  #frame .content .message-input .wrap .attachment:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  #frame .content .message-input .wrap button {\r\n    float: right;\r\n    border: none;\r\n    width: 50px;\r\n    padding: 12px 0;\r\n    cursor: pointer;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }\r\n  \r\n  @media screen and (max-width: 735px) {\r\n    #frame .content .message-input .wrap button {\r\n      padding: 16px 0;\r\n    }\r\n  }\r\n  \r\n  #frame .content .message-input .wrap button:hover {\r\n    background: #435f7a;\r\n  }\r\n  \r\n  #frame .content .message-input .wrap button:focus {\r\n    outline: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2hhdC9teS1jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBEQUEwRDtJQUMxRCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsNkNBQTZDO0lBQzdDLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFO01BQ0UsV0FBVztNQUNYLGFBQWE7SUFDZjtFQUNGOztFQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRTtNQUNFLFdBQVc7TUFDWCxlQUFlO0lBQ2pCO0VBQ0Y7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixtQkFBbUI7SUFDckI7RUFDRjs7RUFDQTtJQUNFLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7O0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFHRSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFhO1lBQWIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBSWhCLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7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Qjs7RUFDQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCO0VBQ0Y7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFDQTtJQUNFO01BQ0UsZ0JBQWdCO01BQ2hCLFdBQVc7SUFDYjtFQUNGOztFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7RUFDQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbXktY2hhdC9teS1jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgY29sb3I6ICMzMjQ2NWE7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMDQpO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gICNmcmFtZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWluLXdpZHRoOiAzNjBweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFNkVBRUE7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAjZnJhbWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwge1xyXG4gICAgICB3aWR0aDogNThweDtcclxuICAgICAgbWluLXdpZHRoOiA1OHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogNXB4IDAgMCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlLmV4cGFuZGVkIC53cmFwIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUuZXhwYW5kZWQgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICBmaWx0ZXI6IEZsaXBIO1xyXG4gICAgLW1zLWZpbHRlcjogXCJGbGlwSFwiO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHtcclxuICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcub25saW5lIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5hd2F5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5idXN5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5vZmZsaW5lIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5NWE1YTY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzQzNWY3YTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiA3MHB4IDAgMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1N3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luOiA3NXB4IDAgMCAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zLmFjdGl2ZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9uczpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNDM1ZjdhO1xyXG4gICAgbWFyZ2luOiAtOHB4IDAgMCAyNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zOmJlZm9yZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAzNXB4IDIycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDk2ODg2O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIG1hcmdpbjogLTNweCAwIDAgLTNweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHAge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9ubGluZSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5IHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFjNDBmO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWF3YXkuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxYzQwZjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1idXN5IHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWJ1c3kuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3NGMzYztcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vZmZsaW5lIHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNWE2O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9mZmxpbmUuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk1YTVhNjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQgbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbjogMCA4cHggNXB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0M3B4KTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzI0NjVhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMjQ2NWE7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAyMHB4O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCAgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDQ2cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE3N3B4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTQ5cHgpO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMuZXhwYW5kZWQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMzRweCk7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzE0MDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDE1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAwIDQ2cHggOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzMyNDY1YTtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0LmFjdGl2ZSBzcGFuLmNvbnRhY3Qtc3RhdHVzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ2NWEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xyXG4gICAgYmFja2dyb3VuZDogIzk1YTVhNjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5vbmxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5hd2F5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHNwYW4uYnVzeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIGltZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwIDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5wcmV2aWV3IHtcclxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xyXG4gICAgcGFkZGluZzogMCAwIDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDJweCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwIDFweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsICBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyYzNlNTA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1OHB4KTtcclxuICAgICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM0MHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiA5cHggMTJweCAwIDlweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIC5zb2NpYWwtbWVkaWEgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDM1ZjdhO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDkzcHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gOTNweCk7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcclxuICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTA1cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBpbWcge1xyXG4gICAgbWFyZ2luOiA2cHggOHB4IDAgMDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IHAge1xyXG4gICAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnJlcGxpZXMgaW1nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogNnB4IDAgMCA4cHg7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkucmVwbGllcyBwIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgaW1nIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBwIHtcclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICAgIHBhZGRpbmc6IDExcHggMzJweCAxMHB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzMyNDY1YTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMzJweCAxNnB4IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGNvbG9yOiAjNDM1ZjdhO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgICByaWdodDogNjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/my-chat/my-chat.component.html":
/*!************************************************!*\
  !*** ./src/app/my-chat/my-chat.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"container-fluid\">\n<p>\n  <alert type=\"warning\">\n    <strong>Warning!</strong> digite seu nome de ususario.\n  </alert>\n</p>\n\n\n</div> -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"frame\">\n\t<div id=\"sidepanel\">\n\t\t<div id=\"profile\">\n\t\t\t<div class=\"wrap\">\n\t\t\t\t<img id=\"profile-img\" src=\"../../assets/log/{{USER.IMG}}\" class=\"{{USER.status}}\" alt=\"\" />\n\t\t\t\t<p>{{Nome}}</p>\n\t\t\t\t<i class=\"fa fa-chevron-down expand-button\" aria-hidden=\"true\"></i>\n\t\t\t\t<div id=\"status-options\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li id=\"status-online\" class=\"active\"><span class=\"status-circle\"></span> <p>Online</p></li>\n\t\t\t\t\t\t<li id=\"status-away\"><span class=\"status-circle\"></span> <p>Away</p></li>\n\t\t\t\t\t\t<li id=\"status-busy\"><span class=\"status-circle\"></span> <p>Busy</p></li>\n\t\t\t\t\t\t<li id=\"status-offline\"><span class=\"status-circle\"></span> <p>Offline</p></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"expanded\">\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-facebook fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"mikeross\" />\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-twitter fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"ross81\" />\n\t\t\t\t\t<label for=\"twitter\"><i class=\"fa fa-instagram fa-fw\" aria-hidden=\"true\"></i></label>\n\t\t\t\t\t<input name=\"twitter\" type=\"text\" value=\"mike.ross\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"search\">\n\t\t\t<label for=\"\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></label>\n\t\t\t<input type=\"text\" placeholder=\"Search contacts...\" />\n\t\t</div>\n\t\t<div id=\"contacts\">\n\t\t\t<ul>\n\t\t\t\t<!-- <li class=\"contact\">\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status online\"></span>\n\t\t\t\t\t\t<img src=\"../../assets/log/louislitt.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">Louis Litt</p>\n\t\t\t\t\t\t\t<p class=\"preview\">You just got LITT up, Mike.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li> -->\n\t\t\t\t<li class=\"contact \"  *ngFor=\"let item of ListaUsuarios\"  >\n\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t<span class=\"contact-status online\"></span>\n\t\t\t\t\t\t<img src=\"../../assets/log/{{item.IMG}}\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"meta\">\n\t\t\t\t\t\t\t<p class=\"name\">{{item.NOME}}</p>\n\t\t\t\t\t\t\t<p class=\"preview\">...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t</ul>\n\t\t</div>\n\t\t<div id=\"bottom-bar\">\n\t\t\t<button id=\"addcontact\"><i class=\"fa fa-user-plus fa-fw\" aria-hidden=\"true\"></i> <span>Add contact</span></button>\n\t\t\t<button id=\"settings\"><i class=\"fa fa-cog fa-fw\" aria-hidden=\"true\"></i> <span>Settings</span></button>\n\t\t</div>\n\t</div>\n\t<div class=\"content\">\n\t\t<div class=\"contact-profile\">\n\t\t\t<img src=\"../../assets/log/{{USER.IMG}}\" alt=\"\" />\n\t\t\t<p>{{Nome}}</p>\n\t\t\t<div class=\"social-media\">\n\t\t\t\t<!-- <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"messages\">\n\n\n\t\t\t<ul>\n\t\t\t\t<!-- <li class=\"sent\">\n\t\t\t\t\t<img src=\"../../assets/log/mikeross.png\" alt=\"\" />\n\t\t\t\t\t<p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"replies\">\n\t\t\t\t\t<img src=\"../../assets/log/harveyspecter.png\" alt=\"\" />\n\t\t\t\t\t<p>When you're backed against the wall, break the god damn thing down.</p>\n        </li> -->\n        \n\n        <li class=\"{{item.MsgSend}}\"  *ngFor=\"let item of ListaMenssages\"  >\n          <img src=\"../../assets/log/{{item.IMG}}\" alt=\"\" />\n          <p>{{item.MSG}}</p>\n        </li>\n\n\n\n\n      </ul>\n      \n\n\t\t</div>\n\t\t<div class=\"message-input\">\n\t\t\t<div class=\"wrap\">\n\t\t\t<input type=\"text\" placeholder=\"{{MSGIMPSENDMSG}}\"  [(ngModel)]=\"InptMessage\"  (keyup.enter)=\"doSend(InptMessage)\" />\n\t\t\t<i class=\"fa fa-paperclip attachment\" aria-hidden=\"true\"></i>\n\t\t\t<button class=\"submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/my-chat/my-chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/my-chat/my-chat.component.ts ***!
  \**********************************************/
/*! exports provided: MyChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChatComponent", function() { return MyChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyChatComponent = /** @class */ (function () {
    function MyChatComponent() {
        var _this = this;
        // let wsUri = "ws://localhost:52080/api/SokestCon/Conect";
        var wsUri = "ws://chatwebdayvson.azurewebsites.net/api/SokestCon/Conect";
        this.websocket = new WebSocket(wsUri);
        this.websocket.onopen = function (evt) { _this.onOpen(evt); };
        this.websocket.onclose = function (evt) { _this.onClose(evt); };
        this.websocket.onmessage = function (evt) { _this.onMessage(evt); };
        this.websocket.onerror = function (evt) { _this.onError(evt); };
        this.IMGDispon = [];
        this.IMGDispon.push("charlesforstman.png");
        this.IMGDispon.push("danielhardman.png");
        this.IMGDispon.push("donnapaulsen.png");
        this.IMGDispon.push("haroldgunderson.png");
        this.IMGDispon.push("harveyspecter.png");
        this.IMGDispon.push("jessicapearson.png");
        this.IMGDispon.push("jonathansidwell.png");
        this.IMGDispon.push("katrinabennett.png");
        this.IMGDispon.push("louislitt.png");
        this.IMGDispon.push("mikeross.png");
        this.IMGDispon.push("rachelzane.png");
        this.USER = {
            Nome: this.Nome,
            IMG: this.IMGDispon[Math.floor(Math.random() * 11)],
            status: 'off-online'
        };
        this.ListaMenssages = [];
        this.ListaUsuarios = [];
    }
    MyChatComponent.prototype.ngOnInit = function () {
        this.ListaMenssages = [];
        this.InptMessage = '';
        this.Nome = null;
        this.MSGIMPSENDMSG = 'Digite seu Nome';
        console.log("INICIO");
        console.log(this.USER);
    };
    MyChatComponent.prototype.IniChatConfig = function (IMG) {
        this.USER = {
            Nome: this.Nome,
            IMG: this.IMGDispon[IMG],
            status: 'online'
        };
    };
    MyChatComponent.prototype.onOpen = function (evt) {
        console.log("CONNECTED");
        // doSend("WebSocket rocks");
        var MSGADD = {
            MSG: "CONECTADO - Digite seu nome para iniciar!",
            IMG: "SERVER.PNG",
            MsgSend: "sent",
        };
        this.ListaMenssages.push(MSGADD);
        // this.IniChatConfig();
    };
    MyChatComponent.prototype.onClose = function (evt) {
        console.log("DISCONNECTED");
        console.log(evt);
    };
    MyChatComponent.prototype.onMessage = function (evt) {
        var _this = this;
        if (this.Nome != null) {
            this.MSGIMPSENDMSG = "Escreva suas messagens!";
        }
        console.log("RECEVIDE => onMessage");
        // console.log(evt);
        console.log(evt.data);
        // console.log( JSON.parse(evt.data) );
        try {
            var MSGServ = JSON.parse(evt.data);
            console.log("===========================");
            console.log("===========================");
            console.log(MSGServ);
            console.log("===========================");
            if (MSGServ.USER == "SERVER") {
                var USERADD = {
                    IMG: this.IMGDispon[MSGServ.IMG],
                    NOME: MSGServ.NOME,
                };
                if (this.Nome == MSGServ.NOME) {
                    this.IniChatConfig(MSGServ.IMG);
                }
                this.ListaUsuarios.push(USERADD);
                this.ListaUsuariosIMGs = [];
                this.ListaUsuarios.forEach(function (element) {
                    _this.ListaUsuariosIMGs[element.NOME] = element.IMG;
                });
            }
            else {
                var tipoMSG = "sent";
                if (this.Nome == MSGServ.USER) {
                    tipoMSG = "replies";
                }
                console.log(this.Nome, MSGServ.NOME);
                var MSGADD = {
                    MSG: MSGServ.MSG,
                    IMG: MSGServ.IMG,
                    MsgSend: tipoMSG,
                };
                console.log(MSGADD);
                this.ListaMenssages.push(MSGADD);
            }
        }
        catch (_a) {
        }
        //this.websocket.close(); //** para fechar web sokest  */
    };
    MyChatComponent.prototype.onError = function (evt) {
        console.log(evt.data);
    };
    MyChatComponent.prototype.doSend = function (message) {
        var MSG;
        if (this.Nome == null) {
            this.Nome = message;
            MSG = {
                'MSG': "CREATE",
                'Nome': message
            };
            console.log("C doSend => ", MSG);
            this.websocket.send(JSON.stringify(MSG));
        }
        else {
            this.MSGIMPSENDMSG = "Escreva suas messagens!";
            MSG = { 'MSG': message, 'Nome': this.Nome, 'IMG': this.USER.IMG };
            console.log("doSend => ", JSON.stringify(MSG));
            this.websocket.send(JSON.stringify(MSG));
        }
        this.InptMessage = '';
    };
    MyChatComponent.prototype.writeToScreen = function (M) {
        console.log(M);
    };
    MyChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-chat',
            template: __webpack_require__(/*! ./my-chat.component.html */ "./src/app/my-chat/my-chat.component.html"),
            styles: [__webpack_require__(/*! ./my-chat.component.css */ "./src/app/my-chat/my-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyChatComponent);
    return MyChatComponent;
}());



/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/my-new-component/my-new-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW5ldy1jb21wb25lbnQvbXktbmV3LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/my-new-component/my-new-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-new-component works!\n</p>\n\n<div>\n\n   \n     \n      <input name=\"clientMessage\"   placeholder=\"Write a message\" type=\"text\" [(ngModel)]=\"clientMessage\">\n     \n    <button   type=\"submit \"  (click)=\"send()\" >\n      <i class=\"material-icons\">send</i>\n    </button>\n    <button    type=\"button\"  >\n      <i class=\"material-icons\">speaker_phone</i>\n    </button>\n   \n\n</div>"

/***/ }),

/***/ "./src/app/my-new-component/my-new-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/my-new-component/my-new-component.component.ts ***!
  \****************************************************************/
/*! exports provided: Message, MyNewComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNewComponentComponent", function() { return MyNewComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/dom/WebSocketSubject */ "./node_modules/rxjs-compat/_esm5/observable/dom/WebSocketSubject.js");



var Message = /** @class */ (function () {
    function Message(sender, content, isBroadcast) {
        if (isBroadcast === void 0) { isBroadcast = false; }
        this.sender = sender;
        this.content = content;
        this.isBroadcast = isBroadcast;
    }
    return Message;
}());

var MyNewComponentComponent = /** @class */ (function () {
    function MyNewComponentComponent() {
        //this.socket$ = new WebSocketSubject('ws://localhost:8088');
        var _this = this;
        this.serverMessages = new Array();
        this.clientMessage = '';
        this.isBroadcast = false;
        this.sender = '';
        // this.socket$ = new WebSocketSubject('ws://localhost:8080/api/Publicador/Assinar');
        this.socket$ = new rxjs_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_2__["WebSocketSubject"]('ws://localhost:52080/api/SokestCon/Conect');
        this.socket$
            .subscribe(function (message) { _this.serverMessages.push(message); _this.OnMSG(message); /* && this.scroll() */ }, function (err) { return console.error(err); }, function () { return console.warn('Completed!'); });
    }
    MyNewComponentComponent.prototype.ngOnInit = function () {
        console.log("okok");
    };
    MyNewComponentComponent.prototype.OnMSG = function (M) {
        console.log(M);
    };
    MyNewComponentComponent.prototype.send = function () {
        var message = new Message(this.sender, this.clientMessage, this.isBroadcast);
        if (this.clientMessage == "dayvson") {
            this.socket$.next(this.clientMessage);
        }
        this.serverMessages.push(message);
        this.socket$.next("dayvson");
        this.clientMessage = '';
    };
    MyNewComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-new-component',
            template: __webpack_require__(/*! ./my-new-component.component.html */ "./src/app/my-new-component/my-new-component.component.html"),
            styles: [__webpack_require__(/*! ./my-new-component.component.css */ "./src/app/my-new-component/my-new-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyNewComponentComponent);
    return MyNewComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DESEMVOLVIMENTOS PROGRAMAS\angular\angular sokest\appDayvson\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map