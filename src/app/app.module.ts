import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteInputComponent } from './note-input/note-input.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteInputComponent,
    NoteListComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
