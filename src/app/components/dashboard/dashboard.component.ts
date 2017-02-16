import { Component, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import {Http} from '@angular/http';
import { customTransition } from '../../animations/transition.animation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  //animations: [customTransition()]
  animations: [
    trigger('customTransition', [
      state('active', style({
        'transform': 'translateY(-100%)'
      })),
      state('inactive', style({
        'transform': 'translateY(-100%)'
      })),
      transition('* => *', animate(500))

    ])
  ]
})
export class DashboardComponent implements OnInit {

  chats: Array<any>;
  chatState = 'inactive';

  constructor(private http:Http) {
    
    this.http.get('./datahome.json')
      .map(response => response.json().dates)
      .subscribe(res => this.chats = res);

  }
  ngOnInit() {
  }

  toggleChat() {
    this.chatState = (this.chatState === 'inactive' ? 'active' : 'inactive');
  }

  chatMood(event) {
    console.log(this.chatState);
    this.chatState = event;
  }

}
