import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChooseserviceComponent } from './chooseservice/chooseservice.component';
import { FourMessageScreenComponent } from './four-message-screen/four-message-screen.component';
import { FiveAddChangePhoneNumberComponent } from './five-add-change-phone-number/five-add-change-phone-number.component';
import { SixNewUserMessageComponent } from './six-new-user-message/six-new-user-message.component';
import { SevenAddChangeCameraComponent } from './seven-add-change-camera/seven-add-change-camera.component';
import { HttpClientModule } from "@angular/common/http";
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from 'primeng/dragdrop';
import {AuthenticationService} from './auth.service';
import {WebserviceService} from './webservice.service';
import { LoginComponent } from './login/login.component';
// import { DragDropDirectiveModule} from "angular4-drag-drop";
// import { Ng2DragDropModule } from 'ng2-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    ChooseserviceComponent,
    FourMessageScreenComponent,
    FiveAddChangePhoneNumberComponent,
    SixNewUserMessageComponent,
    SevenAddChangeCameraComponent,
    LoginComponent
  ],
  imports: [
    // Ng2DragDropModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    RouterModule.forRoot([
        {
           path: '',  
           component: RegisterComponent
        },
        {
          path: 'register',  
          component: RegisterComponent
       },
        {
          path: 'dash',  
          component: DashboardComponent
       },
       {
        path: 'choose-service',  
        component: ChooseserviceComponent
        },
       {
        path: 'message',  
        component: FourMessageScreenComponent
        },
        {
          path: 'edit-phone',  
          component: FiveAddChangePhoneNumberComponent
         },
        {
          path: 'new-user-message',  
          component: SixNewUserMessageComponent
        },
        {
          path: 'add-change-camera',  
          component: SevenAddChangeCameraComponent
        },
        {
          path: 'login',  
          component: LoginComponent
        },
      ]),
  ],
  providers: [AuthenticationService,WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
