import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user : string, password : string) {
    if(user === "emeban" && password === "1234"){
      return true;
    }
    return false;
  }
}
