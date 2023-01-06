import { Component, Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input()show:any;
@Input()hide:any;
@Output() display = new EventEmitter();    //display will be sent to parent using EventEmitter
@Input() id:any;
@Input() name:any;
@Input() result:any;
content:any="This is two way binding"
  constructor() { }

  ngOnInit(): void {
  }
  btn_clickLogin() {
    this.result.data.forEach((elem: any) => {  //function to login called on click of LOGIN
      console.log(elem.id)
      if (elem.id == this.id.value && elem.first_name == this.name.value) {  //comparing the id and name got from user data 
                                                                             //using Subscribe with the user entered name and id
        console.log("Successfull", elem.id, elem.first_name)
        this.show = true;
        this.display.emit()                ;
        this.hide=false 
      }
      else {
        this.hide = true
      }
    }
    )
  }
}
