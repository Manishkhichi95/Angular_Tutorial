import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; //import for using formcontrol or reactive form
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsComponent } from './MyComponentFolder/buttons/buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './MyComponentFolder/login/login.component';
import { SignupComponent } from './MyComponentFolder/signup/signup.component';
import { TopicsComponent } from './MyComponentFolder/topics/topics.component'; //import for using subscribe
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    LoginComponent,
    SignupComponent,
    TopicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule, //import reactive forms module for making reactive forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
