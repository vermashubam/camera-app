
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/first';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../auth.service';
 
@Component({
    selector: 'app',
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    formdata;
    loading = false;
    returnUrl: string;
    error = '';
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) { }
 
    ngOnInit() {
        this.formdata = new FormGroup({
          
            username : new FormControl(""),
           
            password: new FormControl(""),
           
         
         });

        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.formdata.username, this.formdata.password)
        console.log('done');
        this.loading = false;
        this.router.navigate(['/dash']);
        this.error = 'error';
            // .first()
            // .subscribe(
            //     response => {
            //         this.router.navigate([this.returnUrl]);
            //     },
            //     error => {
            //         this.error = error;
            //         this.loading = false;
            //     });
    }
}