import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../models/Book.model';
import {Subscription} from 'rxjs';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;

  constructor(
    private bookService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.booksSubscription = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

  onNewBook(): any {
    this.router.navigate(['/books', 'new']).then();
  }

  onDeleteBook(book: Book): any {
      this.bookService.removeBook(book);
  }

  onViewBook(id: number): any {
    this.router.navigate(['/books', 'view', id]).then();
  }


  ngOnDestroy(): any {
    this.booksSubscription.unsubscribe();
  }


}
