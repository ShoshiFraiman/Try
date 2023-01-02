import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    template: `
    <input #name>
    <input #password>
    <button (click)="login(name.value,password.value,)">Login</button>
    `})
export class LoginComponent implements OnInit {

    constructor(private http: HttpClient, private _router: Router, private _loginService: LoginService) {
    }

    ngOnInit() {
    }
    login(name: string, password: string) {
        this._loginService.getUser(name, password).subscribe(data => {
            this._router.navigate(["agent", { token: data }])
        }, err => alert("Enter Your Details Again"))
    }
}
