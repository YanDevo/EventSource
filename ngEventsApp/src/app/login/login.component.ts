import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedInUser = {
    email: "",
    password: ""
  }

  constructor(private loginAuth: AuthServiceService) { }

  ngOnInit(): void {
  }

  logUserIn() {
    this.loginAuth.getLoggedInUser(this.loggedInUser)
      .subscribe ({
        next: (res) => {
          console.log(res)},
          
        error: (err) => {
          console.log(err)
        },
      })
  }


}
