import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from './auth.service';
import {User} from './modal'

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  _baseURL : string;
  //Immutable set of Http headers, with lazy parsing.
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

  //constructor initialization
   constructor(private _htc:HttpClient, private authService: AuthenticationService) {
     this._baseURL = 'http://localhost:3000';
   }
 
    //Get Users Detail.
    getUsers(): Observable<User[]> {
     const headers = this._headers.append('Authorization:', 'Bearer ' + this.authService._token);
 
     //Get users from REST API
     return this._htc.get<User[]>(this._baseURL, { headers : headers });
   }
 }
