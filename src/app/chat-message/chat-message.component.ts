import { Component, OnInit, NgModule, Injectable } from '@angular/core';


@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
@Injectable()
export class ChatMessageComponent implements OnInit {

  message :string = "";
  constructor() { }
  
  messages:string[]=[];

  ngOnInit() {
    this.messages.push("message 1 ");
    this.messages.push("message 2 ");
    this.messages.push("message 3 ")
  }



  sendMessage(val:string) {
    this.message = val;

   this.messages.push(this.message);

   console.log('new message is added !!')
   console.log(val)
  }

}
 