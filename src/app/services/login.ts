import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponseType} from '../types/login-response.type';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apirUlr: string = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient) {

  }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponseType>(this.apirUlr + "/login", {email, password}).pipe(
      tap((value) => {
          sessionStorage.setItem("auth-token", value.Token)
          sessionStorage.setItem("email", value.Email)
        }
      ))
  }

  register(name: string, cpf: string, number: string, email: string, password: string) {
    return this.httpClient.post<LoginResponseType>(this.apirUlr + "/register", {
      name,
      cpf,
      number,
      email,
      password
    }).pipe(
      tap((value) => {
          sessionStorage.setItem("auth-token", value.Token)
          sessionStorage.setItem("email", value.Email)
        }
      ))
  }
}
