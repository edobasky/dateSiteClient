import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getMembers() {
   // return this.http.get<Member[]>(this.baseUrl + 'users',this.getHttpOptions())
    return this.http.get<Member[]>(this.baseUrl + 'users')
  }

  getMember(username : string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
   // return this.http.get<Member>(this.baseUrl + 'users/' + username, this.getHttpOptions());
  }

  //this will be commented out to use interceptors to send our token
  // the below centralise all request of fmembers with jwt for authorization
  // use interceptors with caution and understanding
    // getHttpOptions() {

    //     const userString = localStorage.getItem('user');
    //     if (!userString) return;

    //     const user =  JSON.parse(userString);

    //     return {
    //       headers : new HttpHeaders({
    //         Authorization : 'Bearer ' + user.token
    //       })
    //     }
    // }
  }
