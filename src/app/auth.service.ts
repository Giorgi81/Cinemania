import { Injectable, OnInit } from '@angular/core';
import { AnyTypeAnnotation } from '@babel/types';
import { Person } from './authInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  users : Person[] = [
    
  ]



  constructor() { }

  validUsername : any = 'Giorgi'
  validPassword : any = 'Giorgi2005'

  logIn : any[] = [
    {username : this.validUsername, password : this.validPassword}
  ]

  newUsername : any = ''
  newPassword : any = ''

  






 

}
