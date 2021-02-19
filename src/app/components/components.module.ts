import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { UsersComponent } from './users/users.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
    declarations: [NotesComponent, UsersComponent, HomepageComponent],
    exports: [
        HomepageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
