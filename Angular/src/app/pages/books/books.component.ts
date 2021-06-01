import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book';
import {BookService} from '../../service/book.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
