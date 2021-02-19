import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {UsersComponent} from './components/users/users.component';
import {NotesComponent} from './components/notes/notes.component';
import {LoginComponent} from './shared/login/login.component';
import {RegistrationComponent} from './shared/registration/registration.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuardService] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
