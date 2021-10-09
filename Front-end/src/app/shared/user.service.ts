import { Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

    readonly BASE_URI = 'http://localhost:5000/api/';

    /* Get form values */
    formModel = this.formBuilder.group({
        UserName: ['', Validators.required],
        Email: ['', Validators.email],
        Passwords: this.formBuilder.group({
            Password: ['', [Validators.required, Validators.minLength(4)]],
            ConfirmPassword: ['', Validators.required]
        })
    });


    register() {
        debugger;
        return this.http.post(this.BASE_URI + 'applicationuser/register', this.formModel.value);
    }

}