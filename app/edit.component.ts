import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tracker } from './tracker.model';

@Component({
 selector: 'edit-app',
 moduleId: module.id,
 template: `
 <div *ngIf="childTracker">
 <input [(ngModel)]="childTracker.name" placeholder="Name">
 <input [(ngModel)]="childTracker.details" placeholder="Details">
 <input [(ngModel)]="childTracker.calories" placeholder="Calories">
 </div>
 `

})

 export class EditComponent {
 @Input() childTracker: Tracker;
 }
