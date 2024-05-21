import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: { id: number, content: string }[] = [];

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  ngDoCheck() {
    this.notes = this.noteService.getNotes();
  }

  notifyParent(message: string) {
    this.notify.emit(message);
  }
}
