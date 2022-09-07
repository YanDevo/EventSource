import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // create a property that points to the backend register url
  private registerURL = "http://localhost:3000/api/register";
  // create a property that points the the backeng login url
  private loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient) { }


// methods that actually makes the http call to backend

//Register call
postUser(user: {}) {
  return this.http.post(this.registerURL, user);
}

//Login call
getLoggedInUser(user: {}) {
  return this.http.post(this.loginUrl, user);
}






}
