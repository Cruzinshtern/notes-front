import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [NavbarComponent, FooterComponent, LoginComponent, RegistrationComponent],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
