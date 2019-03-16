import { Component, OnInit } from '@angular/core';
import { User } from '../User/user.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {


private rooms:User[]=[];

  constructor() { }

  ngOnInit() {
    let u1: User = new User('iazzi1', 'abdou1', 'iazzi1@gmail.com', '1234');
    let u2: User = new User('iazzi2', 'abdou2', 'iazzi2@gmail.com', '1234');
    let u3: User = new User('iazzi3', 'abdou3', 'iazzi3@gmail.com', '1234');
    let u4: User = new User('iazzi4', 'abdou4', 'iazzi4@gmail.com', '1234');
    this.rooms.push(u1);
    this.rooms.push(u2);
    this.rooms.push(u3);
    this.rooms.push(u4);
  }

}
