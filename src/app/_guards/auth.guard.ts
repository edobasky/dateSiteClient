import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

// export class AuthGuard implements CanActivate {
//   constructor(private accountService : AccountService, private toastr : ToastrService) {}
//   canActivate(): Observable<boolean> {
//     return this.accountService.currentUser$.pipe(
//       map(user => {
//         if(user) return true;
//         else {
//           this.toastr.error("You shall not pass!");
//           return false;
//         }
//       })
//     )
//   }

// }

export const authGuard = () => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true;
      else {
        toastr.error('You shall nort pass !')
        return false;
      }
    })
  )
}
