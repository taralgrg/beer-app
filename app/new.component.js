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
var NewTrackerComponent = (function () {
    function NewTrackerComponent() {
        this.newTrackerSender = new core_1.EventEmitter();
    }
    NewTrackerComponent.prototype.addNew = function (name, calories, details) {
        var newTrackerToAdd = new tracker_model_1.Tracker(name, calories, details);
        this.newTrackerSender.emit(newTrackerToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewTrackerComponent.prototype, "newTrackerSender", void 0);
    NewTrackerComponent = __decorate([
        core_1.Component({
            selector: 'new-app',
            template: "\n    <h1>Add new</h1>\n    <div>\n      <label>Enter New Name:</label>\n      <input #newName>\n    </div>\n    <div>\n      <label>Enter New Calories:</label>\n      <input #newCalories>\n    <div>\n      <label>Enter the New Details:</label>\n      <input #newDetails>\n    </div>\n\n    <div>\n     <button (click)=\"\n        addNew(newName.value, newCalories.value, newDetails.value);\n        newName.value='';\n        newCalories.value='';\n        newDetails.value='';\n        \">Add</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewTrackerComponent);
    return NewTrackerComponent;
}());
exports.NewTrackerComponent = NewTrackerComponent;
//# sourceMappingURL=new.component.js.map