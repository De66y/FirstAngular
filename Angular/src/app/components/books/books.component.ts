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
  books: Book[] = this.bookService.getAllBooks;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.booksUpdated$ //Subscriben op de geupdated books
      .subscribe(b => {
        this.books = b;
      });
    this.bookService.getBooks();  //Meteen de boeken ophalen
  }

}
