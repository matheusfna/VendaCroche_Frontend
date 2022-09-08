import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  isAuthenticated(): boolean {
    return ((localStorage.getItem('CzarLogin')) != null &&  (localStorage.getItem('CzarLogin') !== undefined)) ;
  }



}
