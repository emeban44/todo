import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = 'Some Welcome Message'
  welcomeMessageFromService : string | undefined
  name = ''

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(): void {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessFulResponse(response),
      error => this.handleErrorResponse(error),
    );

    console.log('last line of get Welcome Message')
  }

  getWelcomeMessageWithParameterer(){
    this.service.executePathVariable(this.name).subscribe(
      response => this.handleSuccessFulResponse(response),
      error => this.handleErrorResponse(error),
    );
  }

  handleSuccessFulResponse(response: any){
    this.welcomeMessageFromService = response.message;
   // console.log(response);
    console.log(response.message);
  }

  handleErrorResponse(error: any){
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }

}
