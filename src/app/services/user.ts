import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {UserResponseType} from '../types/user-response.type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<UserResponseType | null>(null);
  private user2Subject = new BehaviorSubject<UserResponseType | null>(null);

  public user$: Observable<UserResponseType | null> = this.userSubject.asObservable();
  public user2$: Observable<UserResponseType | null> = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  public loadUser(): void {
    if (this.userSubject .value) return;

    const id = sessionStorage.getItem('email');

    this.httpClient.get<UserResponseType>('http://localhost:8080/user/get/' + id).pipe(
      tap(userData => {
        this.userSubject.next(userData);
      })
    ).subscribe()
  }

  public loadUserByPix(keyPix: string): void {
    if (this.userSubject .value) return;

    this.httpClient.get<UserResponseType>('http://localhost:8080/user/getbypix'+ keyPix).pipe(
      tap(userData => {
        this.user2Subject.next(userData);
      })
    ).subscribe()
  }
}
