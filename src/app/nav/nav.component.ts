import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model : any = {};
//  loggedIn = false; converting to async pipe usage instead of sub and unscribing here
  currentUser$ : Observable<User | null> = of(null);

  constructor(public accountService: AccountService, private router : Router, private toastr : ToastrService){}

  ngOnInit(): void {
  }




  login() :void {
    this.accountService.login(this.model).subscribe({
      next : _ => this.router.navigateByUrl('/members')
      ,
      error : error => this.toastr.error(error.error)
    })
  }

  logout() : void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
