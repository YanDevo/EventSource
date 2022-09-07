import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  private regularEventsUrl = "http://localhost:3000/api/events";
  private specialEventsUrl = "http://localhost:3000/api/special";


  constructor(private http: HttpClient) { }




  //methods to make http call to back

  //regular Events
  getRegularEvents() {
    return this.http.get<[]>(this.regularEventsUrl);
  }

  //specialEvents
  getSpecialEvents() {
    return this.http.get<[]>(this.specialEventsUrl);
  }

}
