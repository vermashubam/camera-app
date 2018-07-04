import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';

import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata;
  constructor(private http: HttpClient
  ) 
{ 


 this.formdata = new FormGroup({
        email: new FormControl("", Validators.compose([
           Validators.required,
           Validators.pattern("[^ @]*@[^ @]*")
        ])),
        name : new FormControl(""),
       
        password: new FormControl("", this.passwordvalidation),
       
        phone: new FormControl("" ,Validators.compose([
            Validators.required,
           Validators.minLength(10),
           Validators.maxLength(12),
         ])),
     });



}






callApi(x){

    alert(JSON.stringify(x));
 
        let email =  x.email;
        let name = x.name;
      
        let password = x.password;
       
        let phone =x.phone;
 

    console.log(x.phone);

    const req = this.http.post('http://localhost:3000/registernew', {email,name,password,phone})
      .subscribe(
        res => {
          console.log(res);
         
        },
        err => {
            console.log(err);
          console.log("Error occured");
        });
 }

passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
}



onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
 }
  ngOnInit() {
  }

}


