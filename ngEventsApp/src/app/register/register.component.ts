import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: "",
    username: "",
    password: ""
  };

  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
  }



  registerUser() {
    this.auth.postUser(this.registerUserData)
    .subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
 })
  }


}
