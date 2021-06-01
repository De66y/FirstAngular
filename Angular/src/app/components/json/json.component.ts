import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../models/book';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  books: Book[] = this.bookService.books;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.booksUpdated$.subscribe((books) => this.books = books
    );
    this.bookService.getBooks();
  }

}
