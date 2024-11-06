// src/app/app.component.ts
import { Component } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [StudentListComponent], 
  standalone: true
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
