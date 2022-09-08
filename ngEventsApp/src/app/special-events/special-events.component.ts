import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { SpecialEvent } from '../models/special-event.model';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: SpecialEvent[] = [];


  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    
    this.eventsService.getSpecialEvents()
      .subscribe({
        next: res => this.specialEvents = res,
        error: err => console.log(err)
      })


  }
}



  // ***************************************************************************Understanding Interfaces******************************************************************

// interface Color {
//   color: string,
// }

// interface Animal {
//   name: string,
//   age: number,
//   speed: number,

// }

// class Dog implements Animal {
//   name: string = "";
//   age: number = 0;
//   color: string ='blue';
//   speed: number = 0
// }

// class Cat implements Animal {
//   name: string = "";
//   age: number = 0;
//   speed: number = 0;
//   color: string = '';
// }

// class Pig {
//   name: string = "";
//   weight: number = 100;
// }


// const tabby: Animal = new Cat()

// const cat: Cat = {
//   name: 'doggy',
//   age: 5,
//   speed: 6,

// }

// const pig: Pig = {
//   name: 'doggy',
//   weight: 100
// }
// const animal: Animal = cat


