import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    authenticated: boolean = false;
    private auThenState: any;
    private user: Observable<firebase.User>;
    
    constructor(private db: AngularFireDatabase, private auThen: AngularFireAuth, private router: Router) {
     }



    // authentification 
    authenticate(credentials, callback) {

        return this.auThen.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((user) => {
          this.auThenState = user;
          this.authenticated=true;
          this.router.navigateByUrl('/home');
          console.log(' l authentification est bien fait ' );
        }).catch(error=>{console.log(error)});


        

         // pour test 
            /*if (credentials && credentials.username == 'user' && credentials.password == 'password') {
                this.authenticated = true;
                return callback && callback();
            }
            else {
                this.authenticated = false;
                return '';
            }*/
        }


        // service de creer un nouveau utilisateur 
        ajouterNouveauAuthen(nom:string, prenom:string, email: string, password: string) {
            return this.auThen.auth.createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                      this.auThenState = user;
                      this.ajouterUserData(nom, prenom, email, password);
                      console.log(' l ajout d un nouveau utilisateur est bien fait ' );
                    }).catch(error => console.log(error));
          }
        
        // service d'ajouter d'autre donnée  au base de donnée
          ajouterUserData(nom:string, prenom:string, email: string, password: string): void {
              this.auThenState.user
            const path = `/users/${this.currentUserId}`;
           console.log(' ajout les infos : ' + path)
            const data = {
              status: status
            };
        
            this.db.object(path).update(data)
                          .catch(error => console.log(error));
          }
        

          // extraire le uid de user authentifié ou enregistré
          get currentUserId(): string {
            return this.auThenState !== null ? this.auThenState.uid : '';
          }


          
        /*
        getUSers(){

            this.db.list('/users').valueChanges().subscribe(d=>{
                this.users.push(d);
                return this.users;
            });

        }*/

}
