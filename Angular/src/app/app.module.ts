import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BookIdTitlePipe} from './pipes/book-id-title-pipe';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BooksComponent } from './components/books/books.component';
import { JsonComponent } from './components/json/json.component';
import { LoginComponent } from './components/login/login.component';

const routes: Route[] = [
  { path: 'home', component: HomepageComponent},
  { path: 'books', component: BooksComponent},
  { path: 'json', component: JsonComponent},
  { path: 'json', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookIdTitlePipe,
    HomepageComponent,
    BooksComponent,
    JsonComponent,
    LoginComponent
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
export class AppModule { }
