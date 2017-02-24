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
var core_1 = require('@angular/core');
var tracker_model_1 = require('./tracker.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterTrackerList = [
            new tracker_model_1.Tracker("Nuts", 700, "Only nuts without any drinks"),
            new tracker_model_1.Tracker("Avocado", 300, "Only a small portion"),
            new tracker_model_1.Tracker("Beef", 900, "Beef and fries"),
        ];
        this.selectedCompleteness = "lessthan500";
    }
    AppComponent.prototype.onEdit = function (xxx) {
        this.selectedTracker = xxx;
    };
    AppComponent.prototype.newTrackertoAdd = function (newTaskFromTracker) {
        this.masterTrackerList.push(newTaskFromTracker);
    };
    AppComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedCompleteness = optionFromMenu;
        // console.log(this.selectedCompleteness);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            template: "\n\n <h3> My Meal Tracker app </h3>\n\n <select (change)=\"onChange($event.target.value)\">\n      <option value=\"morethan500\">Food containing more than 500 calories</option>\n      <option value=\"lessthan500\" >Food containing less\n      than 500 calories</option>\n      <option value=\"All\" selected=\"selected\">All</option>\n</select>\n\n <div *ngFor=\"let eachTracker of masterTrackerList | completeness: selectedCompleteness\">\n   <li> {{eachTracker.name}},{{eachTracker.calories}},{{eachTracker.details}} </li>\n   <button (click)=\"onEdit(eachTracker)\">Edit</button>\n </div>\n\n <edit-app [childTracker]=\"selectedTracker\"></edit-app>\n <new-app  (newTrackerSender)=\"newTrackertoAdd($event)\"> </new-app>\n\n "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map