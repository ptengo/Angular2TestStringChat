import { Component, OnInit, Output, Input, EventEmitter, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
  
})
export class ChatComponent implements OnInit {
  @Input()
  chat: string;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { this.chat = 'active'; }

  ngOnInit() {
  }

  toggleChat(event) {
    console.log("valor del dashboard" + this.chat);
    this.chat = 'inactive';
    this.change.emit(this.chat);
  }
}
