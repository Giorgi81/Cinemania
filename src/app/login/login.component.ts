import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AnyTypeAnnotation, throwStatement } from '@babel/types';
import { retry } from 'rxjs';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private route: Router, private auth: AuthService) { }

  errorMessage: string = ''
  username : string = ''
  password : string = ''


  logIn() {

    

    if (this.username === this.auth.validUsername && this.password === this.auth.validPassword) {
      this.route.navigate(['/home'])

    }else if (this.auth.users.some(e => e.user === this.username && e.password === this.password ) === true) {
      this.route.navigate(['/home'])

    }
    
    else if (this.username === '' && this.password === '') {
      this.errorMessage = 'მომხმარებლის სახელის ან პაროლის ველი არ არის შევსებული '


    
    }else if (this.username.length < 5 && this.password.length < 8) {

      this.errorMessage = 'არასაკმარისი სიმბოლოთა რაოდენობა'



    }
     else {
      this.errorMessage = 'მომხმარებლის სახელი ან პაროლი არასწორია'
    }



  }

  signUp () {
    this.route.navigate(['/signUp'])

  }
}



