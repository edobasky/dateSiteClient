import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model : any = {};
//  loggedIn = false; converting to async pipe usage instead of sub and unscribing here
  currentUser$ : Observable<User | null> = of(null);

  constructor(public accountService: AccountService){}

  ngOnInit(): void {
   //   this.getCurrentUser();
   //the below is not needed, too much noise, hence using account service direct by altering the access
   //this.currentUser$ = this.accountService.currentUser$
  }

  // check if user is currently logged In local storage and subscribe to it, but changed to async pipe
  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe({
  //     // !!user converts the object into a boolean and returns true of false indicating it exist or not
  //     next: user => this.loggedIn = !!user,
  //     error: error => console.log(error)
  //   })
  // }


  login() :void {
    this.accountService.login(this.model).subscribe({
      next : response => {
        console.log(response);
      },
      error : error => console.log(error)
    })
  }

  logout() : void {
    this.accountService.logout();
  }

}
