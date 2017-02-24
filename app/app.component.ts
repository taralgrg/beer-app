import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tracker } from './tracker.model';

@Component({
 selector: 'my-app',
 moduleId: module.id,
 template: `
 <h3> My Meal Tracker app </h3>
 <div *ngFor="let eachTracker of masterTrackerList">
   <li> {{eachTracker.name}},{{eachTracker.calories}},{{eachTracker.details}} </li>
   <button (click)="onEdit(eachTracker)">Edit</button>


 </div>

 <edit-app [childTracker]="selectedTracker"></edit-app>

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

 }
