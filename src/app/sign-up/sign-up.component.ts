import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { continueStatement, throwStatement } from '@babel/types';
import { Person } from '../authInterface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private route: Router, private auth: AuthService) { }

  user: any = {
    username: '',
    password: ''
  }

  errorMessage: string = ''
  popUpFlexibility: string = 'none'


  logIn() {

    if (this.user.username === '' || this.user.password === '') {
      this.errorMessage = 'მომხმარებლის სახელის ან პაროლის ველი არ არის შევსებული '
    }else if (this.user.username.length < 5 && this.user.password.length < 8) {

      this.errorMessage = 'არასაკმარისი სიმბოლოთა რაოდენობა'



    }
    
    
    else {
      this.popUpFlexibility = 'flex'
      this.auth.users.push({ user: this.user.username, password: this.user.password })
      setTimeout(() => {
        this.route.navigate(['/login'])
      }, 2000)

    }

  }


}
