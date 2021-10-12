import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router: Router) { }

  // Variables for validate password
  _password: string;
  _confirmPassword: string;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  hasEqualPasswords: boolean;
  canShowEqualPasswordsMsg: boolean;

  ngOnInit(): void {
    this.service.formModelRegister.reset();
  }

  public set password(content: string) {
    this._password = content;
  }

  public set confirmPassword(content: string) {
    this._confirmPassword = content;
  }

  public get bothPasswordsAreEqual(): boolean {
    return this._password == this._confirmPassword ? true : false;
  }

  public get validateConfirmPasswordLength(): boolean {
    // If password is >= 6, then show can show the msg
    if (this._confirmPassword?.length >= 6) {
      this.canShowEqualPasswordsMsg = true;
      return true;
    }
    return false;
  }

  validateConfirmPassword(): void {
    this.validateConfirmPasswordLength;
  }

  onSubmit() {
    this.service.register().subscribe((response: any) => {

      if (response.succeeded) {
        this.service.formModelRegister.reset();
        this.toastr.success('Successfully registered user!', "Welcome!")
        this.router.navigate(['/']);

      }

      if (!response.succeeded) {

        response.errors.forEach((error: any) => {
          
          if (error.code == 'InvalidUserName')
            this.toastr.error("Invalid username!")


        });

        this.toastr.error("Ops! E-mail already registered. Do you want to log-in?")
      }
    })
  }

}
