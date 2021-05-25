import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'emeban'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username)
    if (this.username==='emeban' && this.password==='1234'){
      //Redict to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }

}
