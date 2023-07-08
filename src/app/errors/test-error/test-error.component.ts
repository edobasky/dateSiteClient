import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent {
  baseUrl = "https://localhost:5001/api/";

  validationErrors : string[] = [];

  constructor(private http: HttpClient) {}


   get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error : error => console.log(error)

    })
   }


   get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)

    })
   }

   get500Error() {
    this.http.get('https://localhost:5001/api/Buggy/server-error').subscribe({
      next: response => console.log(response),
      error : error => console.log(error)

    })
   }

   get401Error() {
    this.http.get('https://localhost:5001/api/Buggy/auth').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
   }

   get400ValidationError() {
    this.http.post('https://localhost:5001/api/account/register', {}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors = error;
      }
    })
   }
}
