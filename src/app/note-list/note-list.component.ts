import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  note:string;
  notes:Array<string>=[];
  constructor() { }

  ngOnInit() {
  }
  addNote(){
    this.notes.push(this.note);
    this.note='';
  }
  deleteNote(noteToDelete:string){
    const indexOfTheNoteToDelete = this.notes.indexOf(noteToDelete);
    this.notes.splice(indexOfTheNoteToDelete,1);
  }
}