"use strict";
(self["webpackChunkng_bolby"] = self["webpackChunkng_bolby"] || []).push([["src_app_view_view_module_ts"],{

/***/ 1597:
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRoutingModule": () => (/* binding */ ViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.component */ 517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _view_component__WEBPACK_IMPORTED_MODULE_0__.ViewComponent
}];
class ViewRoutingModule {}
ViewRoutingModule.ɵfac = function ViewRoutingModule_Factory(t) {
  return new (t || ViewRoutingModule)();
};
ViewRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ViewRoutingModule
});
ViewRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 517:
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config */ 5529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.service */ 821);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/scroll-spy/scroll-spy.directive */ 4293);
/* harmony import */ var _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections/home/home.component */ 8879);
/* harmony import */ var _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/about/about.component */ 3040);
/* harmony import */ var _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/services/services.component */ 925);
/* harmony import */ var _components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/experience/experience.component */ 3747);
/* harmony import */ var _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/contact/contact.component */ 1225);











const _c0 = function () {
  return ["SECTION"];
};
const _c1 = function (a0) {
  return {
    light: a0
  };
};
class ViewComponent {
  constructor(scrollSpy, activatedRoute) {
    this.scrollSpy = scrollSpy;
    this.activatedRoute = activatedRoute;
    this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_0__.Config.config;
  }
  ngOnInit() {}
  onSectionChange(sectionId) {
    this.currentSection = sectionId;
    this.scrollSpy.nextCount(sectionId);
  }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) {
  return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__.ScrollSpyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
ViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ViewComponent,
  selectors: [["app-view"]],
  decls: 12,
  vars: 6,
  consts: [["id", "parentDiv", "scrollSpy", "", 1, "main-content", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "home", "d-flex", "align-items-center", 3, "ngClass"], [1, "w-100", 3, "themeType"], ["id", "about"], ["id", "services"], ["id", "experience"], ["id", "contact"], [1, "spacer-96"]],
  template: function ViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sectionChange", function ViewComponent_Template_div_sectionChange_0_listener($event) {
        return ctx.onSectionChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-home", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-about");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-services");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c1, ctx.themeConfig.themeType === "light"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("themeType", ctx.themeConfig.themeType);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollSpyDirective, _components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _components_sections_services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent, _components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceComponent, _components_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3070:
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModule": () => (/* binding */ ViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-routing.module */ 1597);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.component */ 517);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);





class ViewModule {}
ViewModule.ɵfac = function ViewModule_Factory(t) {
  return new (t || ViewModule)();
};
ViewModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ViewModule
});
ViewModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewRoutingModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ViewModule, {
    declarations: [_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewRoutingModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_view_view_module_ts.js.map