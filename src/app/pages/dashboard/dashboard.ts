import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user';
import {Observable} from 'rxjs';
import {UserResponseType} from '../../types/user-response.type';
import {AsyncPipe} from '@angular/common';
import {FormatNamePipe} from '../../pipes/format-name-pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    AsyncPipe,
    FormatNamePipe
  ],
  providers: [
    UserService
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  public user$: Observable<UserResponseType | null>

  constructor(private userService: UserService,
              private router: Router) {
    this.user$ = this.userService.user$;
  }

  ngOnInit() {
    this.userService.loadUser();
  }

  navigateToPix() {
    this.router.navigate(["transfer/amount"]);
  }

  navigateToScore() {
    this.router.navigate(["score"]);
  }
}
