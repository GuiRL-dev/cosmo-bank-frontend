import { Routes } from '@angular/router';
import {Login} from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Authguard } from './services/authguard';
import {Dashboard} from './pages/dashboard/dashboard';
import {Transfer} from './pages/transfer/transfer';
import {Score} from './pages/score/score';
import {Amount} from './pages/amount/amount';
import {Result} from './pages/result/result';

export const routes: Routes = [
  {
    path:"login",
    component: Login
  },
  {
    path:"registro",
    component: Signup
  },
  {
    path:"dashboard",
    component: Dashboard,
    canActivate: [Authguard]
  },
  {
    path:"transfer/contact",
    component: Transfer,
    canActivate: [Authguard]
  },
  {
    path:"transfer/amount",
    component: Amount,
    canActivate: [Authguard]
  },
  {
    path:"score",
    component: Score,
    canActivate: [Authguard]
  },
  {
    path:"result",
    component: Result,
    canActivate: [Authguard]
  }
];
