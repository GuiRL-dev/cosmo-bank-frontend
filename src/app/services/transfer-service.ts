import { Injectable } from '@angular/core';
import {LoginResponseType} from '../types/login-response.type';
import {tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { }

  pixTransfer(email: string, pixType: string, pixKey: string, pixAmount: string) {
    return this.httpClient.post("http://localhost:8080/transaction/pix", {
      email,
      pixType,
      pixKey,
      pixAmount
    })
  }
}
