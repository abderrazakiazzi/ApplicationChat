import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AppService } from '../app.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  registerform: FormGroup;

  credentials= {
    username:'',
    password:''
  };
    user = {
      nom:'',
      prenom:'',
      mail:'',
      password:''

    }

  registers=[]
 
  resultat:Boolean;
    constructor(private fb: FormBuilder,  private router: Router, private appservice: AppService) { }
  
    ngOnInit() {
      this.loginform = this.fb.group({
  username:['', Validators.required],
  password:['', Validators.required]
  });

  this.registerform = this.fb.group({
    nom:['', Validators.required],
    prenom:['', Validators.required],
    mail:['', Validators.required],
    password:['', Validators.required]
    });
    }
  
  
    login(){
      console.log(' login using appservice / ' + `/${this.credentials.username}`);
    // look if the input users data are in database to be authenticate
       this.appservice.authenticate(this.credentials, 
        ()=>{
         console.log('hello');
       this.router.navigateByUrl('/home');
     });
    }

 
    // enregistrement en utilisant le service authentification de firebase
    register(){
  
    console.log(' Nouvelle inscription' + `/${this.user.nom}`);
    this.appservice.ajouterNouveauAuthen(this.user.nom, this.user.prenom, this.user.mail, this.user.password); 
    
    }
}
