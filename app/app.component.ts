import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tracker } from './tracker.model';

@Component({
 selector: 'my-app',
 moduleId: module.id,
 template: `

 <h3> My Meal Tracker app </h3>

 <select (change)="onChange($event.target.value)">
      <option value="morethan500">Food containing more than 500 calories</option>
      <option value="lessthan500" >Food containing less
      than 500 calories</option>
      <option value="All" selected="selected">All</option>
</select>

 <div *ngFor="let eachTracker of masterTrackerList | completeness: selectedCompleteness">
   <li> {{eachTracker.name}},{{eachTracker.calories}},{{eachTracker.details}} </li>
   <button (click)="onEdit(eachTracker)">Edit</button>
 </div>

 <edit-app [childTracker]="selectedTracker"></edit-app>
 <new-app  (newTrackerSender)="newTrackertoAdd($event)"> </new-app>

 `

})

 export class AppComponent {
   public masterTrackerList: Tracker[] = [
   new Tracker("Nuts",700,"Only nuts without any drinks"),
   new Tracker("Avocado",300,"Only a small portion"),
   new Tracker("Beef",900,"Beef and fries"),
   ];

   public selectedTracker: Tracker;
   onEdit(xxx: Tracker){
     this.selectedTracker = xxx;
   }
   newTrackertoAdd(newTaskFromTracker: Tracker) {
     this.masterTrackerList.push(newTaskFromTracker);
     }

  public selectedCompleteness: string = "lessthan500";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    // console.log(this.selectedCompleteness);
  }

}
