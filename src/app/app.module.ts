import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {TeacherListDataService} from '../app/services/teacher-list-data.service';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
