import { Component } from '@angular/core';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent {
  noteContent: string = '';

  constructor(private noteService: NoteService) {}

  adjustTextareaHeight(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  addNote() {
    if (this.noteContent.trim() !== '') {
      this.noteService.addNote(this.noteContent.trim());
      this.noteContent = '';
    }
  }
}