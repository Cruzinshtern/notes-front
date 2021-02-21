import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule} from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { LogoutConfirmComponent } from './modals/logout-confirm/logout-confirm.component';
import { NoteFormComponent } from './forms/note-form/note-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NoteDeleteConfirmComponent } from './modals/note-delete-confirm/note-delete-confirm.component';
import { NoteEditConfirmComponent } from './modals/note-edit-confirm/note-edit-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutConfirmComponent,
    NoteFormComponent,
    NoteDeleteConfirmComponent,
    NoteEditConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
