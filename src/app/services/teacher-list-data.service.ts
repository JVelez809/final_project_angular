import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherListDataService {


  constructor(public http:Http) {console.log("Teacher-listDataService constructor executing");}
  getTeachers(){
    return this.http.get('http://localhost:9016/api/v1/teachers')
    .map( response => response.json());
  }
}
export interface Teacher{
  teacherId:string;
  name:string;
  lastName: string;
  title: string;
  age: number;
  isFullTime: boolean;
  updatedOn: Date;
}
