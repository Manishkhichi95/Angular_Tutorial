import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'; //import formcontrol for using reactive form
import { HttpClient } from '@angular/common/http'; //for Http request 
// import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  hide:boolean=false
  show: boolean = false;
  name = new FormControl(''); // declaring inputs using angular FormControl        
  id = new FormControl('');  // declaring inputs using angular FormControl
  result: any;
  user_data: { id: number, first_name: string } | undefined;
  obj: any;
  // route: ActivatedRoute | null | undefined;
  

  ngOnInit(): void {
  }
  url = 'https://reqres.in/api/users?page=2';
  constructor(private http: HttpClient) {             //api calling and storing data in result
    this.http.get(this.url).subscribe((res: any) => {
      this.result = res;
      console.log(typeof (this.result))
      console.log("This . id is:::", this.result)

    })
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
 scroll2(el: HTMLElement) {
    el.scrollIntoView();
  }
  logout(){
    // location.reload();
    this.show=false
    this.hide=false
    this.name.setValue('')
    this.id.setValue('')
    // this.router.navigate(['Login'], { relativeTo: this.route });  
  }
  }

