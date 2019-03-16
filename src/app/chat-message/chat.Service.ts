import { AngularFireDatabase } from "angularfire2/database";
import { defineBase } from "@angular/core/src/render3";


export class ChatService{
    
     messagesRomm:any;
    constructor(private db:AngularFireDatabase){}


  saveMessage(message: string, roomID:string) {
    //this.sending = true;
    this.db.list('/rooms/' + roomID).push(message);
  
  }
  
  getAllMessageRooms(roomID:string){

    this.db.list('/rooms/' + roomID).valueChanges().subscribe(
      data=>{
        this.messagesRomm = data;
      }
    );

  }

}