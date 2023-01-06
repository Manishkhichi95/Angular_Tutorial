import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; //import formcontrol for using reactive form
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  scrollIntoView() {
    throw new Error('Method not implemented.');
  }

  @Input()show:any;
  hides:boolean=false;
  naam = new FormControl(''); // declaring inputs using angular FormControl        
  adhaar = new FormControl('');  // declaring inputs using angular FormControl
  @Input() result: any;
  user_data: { id: number, first_name: string } | undefined;
  arr: any = []
  constructor() {

   }

  ngOnInit(): void {
  }
  btn_clickSignUp() {

    //function to push obj inside array of obj on click of SIGN-UP
    this.result.data.forEach((res: any) => {
      console.log(res.id)
      this.arr.push(res.id, res.first_name)
      if (this.arr.includes(this.adhaar.value) || this.arr.includes(this.naam.value)) {
        // console.log(typeof (res.id), "Input Id is=", typeof (this.adhaar.value))
        this.hides = true
        console.log("ID or name already exists", this.naam.value)
      }

      else if (!this.arr.includes('this.adhaar.value') && !this.arr.includes(this.naam.value)) {
        console.log(this.arr)
        if (this.adhaar.value == '' || this.naam.value == '') {
          console.log('Please enter both the values')
          this.hides = false

        }
        else {
          let id: any = this.adhaar.value
          let first_name: any = this.naam.value
          this.user_data = { id, first_name }
          this.result.data.push(this.user_data) //pushing the id and first_name into the array of object when the user entered id 
          //and name doesn't match with id and firs_name in Result.data array of obj  
          console.log(this.user_data)
          this.hides = false
        }
      }
    }
    )
  }
}

