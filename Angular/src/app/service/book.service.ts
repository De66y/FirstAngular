import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from '../../environments/environment';
import {Book} from '../models/book';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  uri = serverUrl + '/books';
  // tslint:disable-next-line:variable-name
  private _getAllBooks: Book[] = [];

  // tslint:disable-next-line:variable-name
  private _booksDataUpdated$ = new Subject<Book[]>();

  constructor(private http: HttpClient) {
  }

  getBooks(): void {
    this.http.get<Book[]>(this.uri)
      .subscribe(books => this._booksDataUpdated$.next(books));
  }


  get getAllBooks(): Book[] {
    return this._getAllBooks;
  }

  addBook(b: Book) {
    this.http.post<Book>(this.uri, b).subscribe(() => this.getBooks());
  }

  get booksUpdated$(): Subject<Book[]>{
    return this._booksDataUpdated$;
  }
}
