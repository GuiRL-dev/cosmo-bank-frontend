import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserResponseType} from '../../types/user-response.type';
import {UserService} from '../../services/user';
import {Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-score',
  imports: [
    AsyncPipe
  ],
  templateUrl: './score.html',
  styleUrl: './score.scss'
})
export class Score implements OnInit{

  public user$: Observable<UserResponseType | null>

  constructor(private userService: UserService,
              private router: Router) {
    this.user$ = this.userService.user$;
  }

  ngOnInit() {
    this.userService.loadUser();
  }

  navigate(){
    this.router.navigate(['dashboard'])
  }
}
