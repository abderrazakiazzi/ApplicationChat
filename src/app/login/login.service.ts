import {Injectable } from '@angular/core';

import { AppService } from '../app.service';



@Injectable()
export class Loginservice {
   
   authenticatelogin:boolean=false;
    constructor(private appservice: AppService){}

    getauthenticate(){
      this.authenticatelogin = this.appservice.authenticated;
    }

}