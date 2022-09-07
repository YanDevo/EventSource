import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: {id: string, title: string, description: string, date: number}[] = [];


  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    
    this.eventsService.getSpecialEvents()
      .subscribe({
        next: res => this.specialEvents = res,
        error: err => console.log(err)
      })


  }

}
