import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: {isbn: string,title: string,description: string, author: string, price: number,url: any}[] = [];

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.bookList= this.bookservice.onBookList();
  }

  onUpdateId(id: number)
  {
    this.bookservice.onUpdateId(id);
  }

}
