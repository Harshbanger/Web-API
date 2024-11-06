// src/app/student-list/student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <h2>Student List</h2>
    <ul>
      <li *ngFor="let student of students">
        {{ student.name }} (Age: {{ student.age }})
      </li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule] // Add CommonModule here to enable *ngFor
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (data) => (this.students = data),
      (error) => console.error('There was an error fetching students!', error)
    );
  }
}
