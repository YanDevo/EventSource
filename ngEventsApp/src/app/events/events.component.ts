import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { RegularEvent } from '../models/regular-event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  regularEvents: RegularEvent[] = [];



  constructor(private eventsService: EventsService) { }



  ngOnInit(): void {
    this.eventsService.getRegularEvents()
      .subscribe({
        next: res => console.log(this.regularEvents = res),
        error: err => console.log(err)
      });
  }

}
