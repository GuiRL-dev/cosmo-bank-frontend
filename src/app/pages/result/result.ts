import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserResponseType} from '../../types/user-response.type';
import {UserService} from '../../services/user';
import {Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [
    AsyncPipe
  ],
  templateUrl: './result.html',
  styleUrl: './result.scss'
})
export class Result implements OnInit{

  amountValue: string | null = null;
  numberCookie: string = '';

  public user$: Observable<UserResponseType | null>
  public user2$: Observable<UserResponseType | null>

  constructor(private userService: UserService,
              private router: Router) {
    this.user$ = this.userService.user$;
    this.user2$ = this.userService.user2$;

  }

  ngOnInit() {
    this.userService.loadUser();

    this.numberCookie = JSON.stringify(sessionStorage.getItem('number'));

    if(this.numberCookie){
      this.userService.loadUserByPix(this.numberCookie)
    }

    const storedData = sessionStorage.getItem('amount-value');

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      this.amountValue = parsedData.value;
    }
  }

}
