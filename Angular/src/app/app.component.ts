import {Component, OnInit} from '@angular/core';
import {Book} from './models/book';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  title: 'titelll';
  books: Book[] = this.bookService.getAllBooks;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {

  }
  addBookForm = new FormGroup({
    //id: new FormControl('', Validators.pattern('[0-9]*')),
    title: new FormControl(''),
    author: new FormControl(''),
    genre: new FormControl('')
    //email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
  });

  addBook(): void {
    this.bookService.addBook(this.addBookForm.value);
  }


}
