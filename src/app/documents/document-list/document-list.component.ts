import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document} from '../document.model';
import {DocumentService} from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  //@Output() documentWasSelected = new EventEmitter<Document>()

  documents: Document[] = [];

  constructor(private documentService: DocumentService) { }

  ngOnInit()  {
    this.documents = this.documentService.getDocuments();
  }

  onDocumentSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document)
  }
}
