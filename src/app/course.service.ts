import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = "http://localhost:3000/courses";

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<any> {    
    return this.httpClient.get(this.apiUrl);
    /* return new Observable((subscriber) => {
      subscriber.error('Error fetching courses mimicking network error');
    }); */
  }
  getCourseById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }
  addCourse(course: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, course);
  }
  updateCourse(id: number, course: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, course);
  }
  deleteCourse(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
