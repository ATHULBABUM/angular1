import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
import {GetusersService} from '../getusers.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 constructor( public serviceobject:GetusersService ) { 
  }

  ngOnInit() {
  }

usersdata;

  getUsers(){
    // this.http.get("http://jsonplaceholder.typicode.com/users")
    this.serviceobject.getUserService()
    .subscribe((users)=>{
      this.usersdata=users;
      console.log(this.usersdata)

    })
  }

}
