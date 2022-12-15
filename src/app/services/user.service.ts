import { Injectable } from '@angular/core';
import { Auth,
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        authState, 
        user} from '@angular/fire/auth';

//CRUD SERVICIOS

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  //registra
  register({ email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  //logea
  login({ email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //desconecta
  logout(){
    return signOut(this.auth);
  }

  //devuelve si esta logeado
  stateUser(){
    return authState(this.auth);
  }

}
