import { Component, Output, EventEmitter } from '@angular/core';
import { Tracker } from './tracker.model';

@Component({
  selector: 'new-app',
  template: `
    <h1>Add new</h1>
    <div>
      <label>Enter New Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter New Calories:</label>
      <input #newCalories>
    <div>
      <label>Enter the New Details:</label>
      <input #newDetails>
    </div>

    <div>
     <button (click)="
        addNew(newName.value, newCalories.value, newDetails.value);
        newName.value='';
        newCalories.value='';
        newDetails.value='';
        ">Add</button>
    </div>
  `
})
export class NewTrackerComponent {
  @Output() newTrackerSender = new EventEmitter();
  addNew(name: string,calories : number,
    details: string) {
    var newTrackerToAdd: Tracker = new Tracker(name,calories,details);
    this.newTrackerSender.emit(newTrackerToAdd);
  }
}
