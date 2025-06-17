import { Component } from '@angular/core';
import {DefaultLoginLayout} from '../../components/default-login-layout/default-login-layout';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInput} from '../../components/primary-input/primary-input';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login';
import { ToastrService } from 'ngx-toastr';

interface SignupForm{
  name: FormControl,
  cpf: FormControl,
  number: FormControl,
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-signup',
  imports: [DefaultLoginLayout, ReactiveFormsModule, PrimaryInput],
  providers:[
    LoginService
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {

  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      number: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){

    this.loginService.register(this.signupForm.value.name, this.signupForm.value.cpf, this.signupForm.value.number, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => {
        this.router.navigate(["dashboard"]);
      },
      error: () => this.toastr.error("Erro")
    })

  }
  navigate(){
    this.router.navigate(["login"]);
  }
}
