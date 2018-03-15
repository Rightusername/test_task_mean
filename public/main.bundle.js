webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-family: \"Comic Sans MS\"\r\n}\r\n\r\n.container{\r\n    margin: 0 auto;\r\n    max-width: 900px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div style=\"text-align:center\">\n    <h1>\n      Workers\n    </h1>\n  </div>\n  \n  <app-worker-list></app-worker-list>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__worker_list_worker_list_component__ = __webpack_require__("./src/app/worker-list/worker-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workers_service__ = __webpack_require__("./src/app/workers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__worker_list_worker_list_component__["c" /* WorkerListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__worker_list_worker_list_component__["a" /* AddWorkerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_3__worker_list_worker_list_component__["b" /* EditWorkerDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__worker_list_worker_list_component__["c" /* WorkerListComponent */], __WEBPACK_IMPORTED_MODULE_3__worker_list_worker_list_component__["a" /* AddWorkerDialogComponent */], __WEBPACK_IMPORTED_MODULE_3__worker_list_worker_list_component__["b" /* EditWorkerDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__workers_service__["a" /* WorkersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/worker-list/add-worker-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n    Worker's information\r\n</h2>\r\n\r\n<form class=\"example-form\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"65px\">\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Age\" [(ngModel)]=\"age\" name=\"age\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Experience\" [(ngModel)]=\"experience\" name=\"experience\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Salary\" [(ngModel)]=\"salary\" name=\"salary\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <button mat-raised-button color=\"link\" class=\"full-width\" (click)=\"close()\">Close</button>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <button mat-raised-button color=\"primary\" class=\"full-width\" (click)=\"addWorker()\">OK</button>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/worker-list/edit-worker-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n    Edit worker\r\n</h2>\r\n\r\n<form class=\"example-form\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"65px\">\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Age\" [(ngModel)]=\"age\" name=\"age\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Experience\" [(ngModel)]=\"experience\" name=\"experience\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Salary\" [(ngModel)]=\"salary\" name=\"salary\">\r\n            </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <button mat-raised-button color=\"link\" class=\"full-width\" (click)=\"close()\">Close</button>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <button mat-raised-button color=\"primary\" class=\"full-width\" (click)=\"editWorker()\">OK</button>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/worker-list/worker-list.component.css":
/***/ (function(module, exports) {

module.exports = ".section{\r\n    margin: 5px;\r\n    font-family: \"Comic Sans MS\";\r\n}\r\n\r\n.full-width{\r\n    width: 98%;\r\n}"

/***/ }),

/***/ "./src/app/worker-list/worker-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"section\">\n  <button mat-raised-button color=\"primary\" (click)=\"openDialogToAdd()\">Add worker</button>\n</mat-card>\n\n<p class=\"section\">\n  Here is a workers list\n</p>\n<mat-card class=\"section\">\n  <mat-grid-list cols=\"6\" rowHeight=\"50px\">\n    <mat-grid-tile><b>Name</b></mat-grid-tile>\n    <mat-grid-tile><b>Age</b></mat-grid-tile>\n    <mat-grid-tile><b>Experience</b></mat-grid-tile>\n    <mat-grid-tile><b>Salary</b></mat-grid-tile>\n    <mat-grid-tile></mat-grid-tile>\n    <mat-grid-tile></mat-grid-tile>\n  </mat-grid-list>\n  <mat-grid-list cols=\"6\" rowHeight=\"50px\" *ngFor=\"let worker of this.workersService.workers\">\n    <mat-grid-tile>{{worker.name}}</mat-grid-tile>\n    <mat-grid-tile>{{worker.age}}</mat-grid-tile>\n    <mat-grid-tile>{{worker.experience}}</mat-grid-tile>\n    <mat-grid-tile>{{worker.salary}}</mat-grid-tile>\n    <mat-grid-tile>\n      <button mat-raised-button color=\"warn\" (click)=\"this.workersService.delete(worker._id)\">Delete</button>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <button mat-raised-button color=\"primary\" (click)=\"openDialogToEdit(worker)\">Edit</button>\n    </mat-grid-tile>\n  </mat-grid-list>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/worker-list/worker-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WorkerListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkerDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditWorkerDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workers_service__ = __webpack_require__("./src/app/workers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var WorkerListComponent = /** @class */ (function () {
    function WorkerListComponent(workersService, dialog) {
        this.workersService = workersService;
        this.dialog = dialog;
    }
    WorkerListComponent.prototype.ngOnInit = function () {
        this.workersService.getWorkers();
    };
    WorkerListComponent.prototype.openDialogToAdd = function () {
        var dialogRef = this.dialog.open(AddWorkerDialogComponent, {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    WorkerListComponent.prototype.openDialogToEdit = function (worker) {
        this.workersService.edited = worker;
        var dialogRef = this.dialog.open(EditWorkerDialogComponent, {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    WorkerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-worker-list',
            template: __webpack_require__("./src/app/worker-list/worker-list.component.html"),
            styles: [__webpack_require__("./src/app/worker-list/worker-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__workers_service__["a" /* WorkersService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */]])
    ], WorkerListComponent);
    return WorkerListComponent;
}());

var AddWorkerDialogComponent = /** @class */ (function () {
    function AddWorkerDialogComponent(workersService, dialogRef, data) {
        this.workersService = workersService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddWorkerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddWorkerDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddWorkerDialogComponent.prototype.addWorker = function () {
        this.workersService.add({
            name: this.name,
            age: this.age,
            experience: this.experience,
            salary: this.salary
        });
        this.dialogRef.close();
    };
    AddWorkerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-worker-dialog',
            template: __webpack_require__("./src/app/worker-list/add-worker-dialog.html"),
            styles: [__webpack_require__("./src/app/worker-list/worker-list.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__workers_service__["a" /* WorkersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */], Object])
    ], AddWorkerDialogComponent);
    return AddWorkerDialogComponent;
}());

var EditWorkerDialogComponent = /** @class */ (function () {
    function EditWorkerDialogComponent(workersService, dialogRef, data) {
        this.workersService = workersService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.name = this.workersService.edited.name;
        this.age = this.workersService.edited.age;
        this.salary = this.workersService.edited.salary;
        this.experience = this.workersService.edited.experience;
    }
    EditWorkerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditWorkerDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditWorkerDialogComponent.prototype.editWorker = function () {
        this.workersService.edit({
            name: this.name,
            age: this.age,
            experience: this.experience,
            salary: this.salary,
            _id: this.workersService.edited._id
        });
        this.dialogRef.close();
    };
    EditWorkerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-worker-dialog',
            template: __webpack_require__("./src/app/worker-list/edit-worker-dialog.html"),
            styles: [__webpack_require__("./src/app/worker-list/worker-list.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__workers_service__["a" /* WorkersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */], Object])
    ], EditWorkerDialogComponent);
    return EditWorkerDialogComponent;
}());



/***/ }),

/***/ "./src/app/workers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }),
    method: 'DELETE'
};
var WorkersService = /** @class */ (function () {
    function WorkersService(http) {
        this.http = http;
        this.url = 'http://localhost:3000/workers';
    }
    WorkersService.prototype.getWorkers = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (data) { _this.workers = data; }, function (err) { return console.error(err); });
    };
    WorkersService.prototype.delete = function (id) {
        var _this = this;
        this.http.delete(this.url + '/' + id).subscribe(function (res) {
            _this.workers = _this.workers.filter(function (worker) { return worker._id !== id; });
        });
    };
    WorkersService.prototype.edit = function (worker) {
        var _this = this;
        this.http.put(this.url, worker).subscribe(function (res) {
            _this.workers.find(function (el, index) {
                if (el._id === worker._id) {
                    _this.workers[index] = worker;
                    return;
                }
            });
        });
    };
    WorkersService.prototype.add = function (worker) {
        var _this = this;
        worker = this.validate(worker);
        this.http.post(this.url, {
            worker: worker
        })
            .subscribe(function (res) {
            _this.getWorkers();
        }, function (err) {
            console.log('Error occured');
        });
    };
    WorkersService.prototype.validate = function (worker) {
        if (!worker.name) {
            worker.name = '';
        }
        if (!worker.age) {
            worker.age = '';
        }
        if (!worker.salary) {
            worker.salary = '';
        }
        if (!worker.experience) {
            worker.experience = '';
        }
        return worker;
    };
    WorkersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WorkersService);
    return WorkersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map