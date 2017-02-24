import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { EditComponent }   from './edit.component';
import { NewTrackerComponent }   from './new.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EditComponent,
    NewTrackerComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
