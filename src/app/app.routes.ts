import { Routes } from '@angular/router';
import {Login} from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { Authguard } from './services/authguard';

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
    component: Dashboard
  }
];
