import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = [];
  constructor(cs: CourseService) {
    //let cs = new CourseService();
    this.courses = cs.getCourses();
  }

  ngOnInit() {
  }

}
