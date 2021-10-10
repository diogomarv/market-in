import { Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { UserRegistrationDTO } from 'src/app/DTOs/user-registrationDTO'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

    readonly BASE_URI = 'http://localhost:5000/api/';

    /* Get form values */
    formModelRegister = this.formBuilder.group({
        Username: ['', Validators.required],
        Email: ['', Validators.email],
        Passwords: this.formBuilder.group({
            Password: ['', [Validators.required, Validators.minLength(4)]],
            ConfirmPassword: ['', Validators.required]
        })
    });

    register() {

        let body: UserRegistrationDTO = {
            Username: this.formModelRegister.value.Username,
            Email: this.formModelRegister.value.Email,
            Password: this.formModelRegister.value.Passwords.Password
        }

        return this.http.post(this.BASE_URI + 'applicationuser/register', body);
    }
}