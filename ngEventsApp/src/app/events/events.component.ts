import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  regularEvents: {id: string, title: string, description: string, date: number}[] = [];



  constructor(private eventsService: EventsService) { }



  ngOnInit(): void {
    this.eventsService.getRegularEvents()
      .subscribe({
        next: res => console.log(this.regularEvents = res),
        error: err => console.log(err)
      });
  }

}
