import { Component, OnInit } from '@angular/core';
import { TeacherListDataService } from '../../services/teacher-list-data.service';
import { Teacher } from '../../services/teacher-list-data.service'
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
teachers: Teacher[];

  constructor(private teacherListDataService:TeacherListDataService) {
    console.log('Teacher constructor executed');
   }

  ngOnInit() {
    this.teacherListDataService.getTeachers().subscribe((teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
  }
  isToDisplayTeachers: boolean = false;

  toggleToDisplayTeachers(){
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }
}