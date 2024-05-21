import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent {
  @Input() note!: { id: number, content: string };
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private noteService: NoteService) {}

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.notify.emit('Copied to clipboard!');
    });
  }

  deleteNote(event: Event) {
    event.stopPropagation();  // Previene la propagazione dell'evento al div padre
    this.noteService.deleteNote(this.note.id);
  }
}
