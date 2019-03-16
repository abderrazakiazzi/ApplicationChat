import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataInFirebase: any=[];
  constructor(private router:Router, private db: AngularFireDatabase, private auth:AngularFireAuth) { }

  ngOnInit() {
     this.db.list('/users').valueChanges().subscribe(d => {
      this.dataInFirebase=d;
     console.log('get list of users');});
  }


  logoutAction(){
   this.auth.auth.signOut();
   this.router.navigateByUrl('/login');
  }
}
