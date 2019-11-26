import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../getusers.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public serviceobject:GetusersService) { }

usersdata

  ngOnInit() {
    this.serviceobject.getUserService()
    .subscribe((users)=>{
      this.usersdata=users;
      console.log(this.usersdata)
    })
  }

}
