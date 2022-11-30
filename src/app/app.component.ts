import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app-angular-with-spring';
  myVettData : any[];

  constructor(private userService: ApiServiceService){

    this.myVettData = [];
  }
 
  ngOnInit(): void {
    
    this.userService.getPublicContent().subscribe(data =>{
      console.log(data)
      this.myVettData = data;
    }, err => {
      console.log("e' avvenuto un errore ")
    })


    /*
    this.userService.getPublicContent().subscribe(data =>{

    })

    /*
    this.userService.deleteAusilio(uuid).subscribe(data => {
      //this.refresh();
      this.showSuccessDeleteAusilio();
    },
    err => {
      
    })
    */

  }



  




}
