import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  basePDFUrl: string;
  baseGHUrl: string;
  notesList: any[];
  constructor() {
    this.basePDFUrl = "https://swayamchube.github.io/research-interests/"
    this.baseGHUrl = "https://github.com/swayamchube/research-interests/tree/master/"
    this.notesList = [
      {
        label: 'Topology',
        url: this.basePDFUrl + 'topology/main.pdf',
        ghurl: this.baseGHUrl + 'topology'
      },
      {
        label: 'Measure Theory',
        url: this.basePDFUrl + 'measure-theory/main.pdf',
        ghurl: this.baseGHUrl + 'measure-theory'
      },
      {
        label: 'Complex Analysis',
        url: this.basePDFUrl + 'complex-analysis/main.pdf',
        ghurl: this.baseGHUrl + 'complex-analysis'
      },
      {
        label: 'Galois Theory',
        url: this.basePDFUrl + 'galois/main.pdf',
        ghurl: this.baseGHUrl + 'galois'
      },
      {
        label: 'Representation Theory',
        url: this.basePDFUrl + 'rep-theory/main.pdf',
        ghurl: this.baseGHUrl + 'rep-theory'
      },
      {
        label: 'Commutative Algebra',
        url: this.basePDFUrl + 'comm-alg/main.pdf',
        ghurl: this.baseGHUrl + 'comm-alg'
      },
      {
        label: 'Category Theory',
        url: this.basePDFUrl + 'cat-theory/main.pdf',
        ghurl: this.baseGHUrl + 'cat-theory'
      },
    ]
  }
}
