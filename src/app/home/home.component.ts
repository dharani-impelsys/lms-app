import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses: any[] = [];
  showLoader: boolean = true;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data.slice(0, 3);
        console.log('handling next notification', this.courses);
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
        setTimeout(() => this.showLoader = false, 2000);
      },
      complete: () => {
        console.log('handling complete notification');
        setTimeout(() => this.showLoader = false, 2000);
      }
    });

  }


}
