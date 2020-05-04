import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {
  @Input() note:string;
  @Output() deleteNote:EventEmitter<string> = new EventEmitter<string>();

  handleDeleteClick(){
    this.deleteNote.emit(this.note);
  }
  constructor() { }

  ngOnInit() {
  }

}