"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var tracker_model_1 = require("./tracker.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterTrackerList = [
            new tracker_model_1.Tracker("Nuts", 700, "Only nuts without any drinks"),
            new tracker_model_1.Tracker("Avocado", 300, "Only a small portion"),
            new tracker_model_1.Tracker("Beef", 900, "Beef and fries"),
        ];
    }
    AppComponent.prototype.onEdit = function (xxx) {
        this.selectedTracker = xxx;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        template: "\n <h3> My Meal Tracker app </h3>\n <div *ngFor=\"let eachTracker of masterTrackerList\">\n   <li> {{eachTracker.name}},{{eachTracker.calories}},{{eachTracker.details}} </li>\n   <button (click)=\"onEdit(eachTracker)\">Edit</button>\n\n\n </div>\n\n <edit-app [childTracker]=\"selectedTracker\"></edit-app>\n\n "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map