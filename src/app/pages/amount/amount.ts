import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user';
import {Observable} from 'rxjs';
import {UserResponseType} from '../../types/user-response.type';
import {Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {PrimaryInput} from '../../components/primary-input/primary-input';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TransferService} from '../../services/transfer-service';

interface TransferForm{
  value: FormControl
}

@Component({
  selector: 'app-amount',
  imports: [
    AsyncPipe,
    PrimaryInput,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  templateUrl: './amount.html',
  styleUrl: './amount.scss'
})
export class Amount implements OnInit {

  transferForm!: FormGroup<TransferForm>

  public user$: Observable<UserResponseType | null>

  constructor(private userService: UserService,
              private router: Router) {
    this.user$ = this.userService.user$;

    this.transferForm = new FormGroup({
      value: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    this.userService.loadUser();
  }

  submit() {
    const formValueString = JSON.stringify(this.transferForm.value);

    sessionStorage.setItem("amount-value", formValueString);
    this.router.navigate(['transfer/contact']);
  }

  navigate() {
    this.router.navigate(["dashboard"])
  }
}
