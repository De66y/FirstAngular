import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../models/book';

@Pipe ({name: 'bookIdTitlePipe'})
export class BookIdTitlePipe implements PipeTransform{
    transform(book: Book): string{
      return `${book.id} ${book.title}`;
    }

}
