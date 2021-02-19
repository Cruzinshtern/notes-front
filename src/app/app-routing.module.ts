import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {UsersComponent} from './components/users/users.component';
import {NotesComponent} from './components/notes/notes.component';
import {LoginComponent} from './shared/login/login.component';
import {RegistrationComponent} from './shared/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
