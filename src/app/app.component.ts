import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ApplicationChat';

  constructor(private appservice: AppService, private router: Router){}

  ngOnInit() {
    if(!this.appservice.authenticated){
    this.router.navigateByUrl('/home');
 }
 else {
     this.router.navigateByUrl('/login');
 }
}

}
