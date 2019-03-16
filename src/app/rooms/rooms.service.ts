import {Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';




@Injectable()
export class RoomsService {
   
    rooms:any;
    constructor(private db: AngularFireDatabase){}

    getAllRooms(){
      this.db.list('/rooms').valueChanges().subscribe(d=>{
          this.rooms = d;
          console.log(' all rooms are arrived');
      })
    }

}