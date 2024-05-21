import { Injectable } from '@angular/core';

interface Note {
  id: number;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private localStorageKey = 'notes';
  private notes: Note[] = [];

  constructor() {
    this.loadNotes();
  }

  addNote(content: string) {
    const newNote: Note = { id: Date.now(), content };  // Usa il timestamp come ID univoco
    this.notes.push(newNote);
    this.saveNotes();
  }

  getNotes(): Note[] {
    return this.notes;
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  private saveNotes() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.notes));
  }

  private loadNotes() {
    const savedNotes = localStorage.getItem(this.localStorageKey);
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }
}
