import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BookIdTitlePipe} from './pipes/book-id-title-pipe';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {BooksComponent} from './pages/books/books.component';
import {JsonComponent} from './components/json/json.component';
import {LoginComponent} from './components/login/login.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {AllBooksComponent} from './components/all-books/all-books.component';

const routes: Route[] = [
  {path: 'home', component: HomepageComponent},
  {
    path: 'books', component: BooksComponent,
    children: [{
      path: 'addbook', component: AddBookComponent
    }, {
      path: 'allbooks', component: AllBooksComponent
    }]
  },
  {path: 'json', component: JsonComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookIdTitlePipe,
    HomepageComponent,
    BooksComponent,
    JsonComponent,
    LoginComponent,
    AddBookComponent,
    AllBooksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
