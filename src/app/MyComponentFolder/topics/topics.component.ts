import { Component, OnInit,Input} from '@angular/core';
import { OnChanges } from '@angular/core';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  sa_name:string="{{sa.name}}"
@Input()id:any;
@Input()name:any;
@Input()show:any;
@Input() result:any;
content:any="Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.<br><b>Angular is a development platform, built on TypeScript. As a platform, Angular includes:</b><li>A component-based framework for building scalable web applications</li><li>A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.</li><li>A suite of developer tools to help you develop, build, test, and update your code.</li><li>With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications.</li><li>Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with minimal effort.</li> <li>Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.</li></p>";
  visible:boolean=false;
  save:boolean=false;
  para:any;
  redo: boolean=false;
  data:any;
  save2:boolean=false;
  constructor() { 
    // console.log(this.content)
    this.data = localStorage.getItem("ParagraphContent");
    console.log("This is - ::::::::::::::::::::::::::::::::::::::::::::::::::",this.data);
    if(this.data!=null){
      this.save=true
    }

  }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  scroll2(el:HTMLElement){
    el.scrollIntoView();
  }
  scroll3(el:HTMLElement){
    el.scrollIntoView();
  }
  saveBtn(){
    this.visible=true
  }
  saveContent(){
    this.save2=true
    this.para=document.getElementById('paragrph')?.innerHTML
    localStorage.setItem("ParagraphContent",this.para);
    this.data = localStorage.getItem("ParagraphContent");
  }
  undo(){
    this.save=false
    this.redo=true
    localStorage.removeItem("ParagraphContent");
  }
}
