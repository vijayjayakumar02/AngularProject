import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  bookList: {isbn: string,title: string,description: string, author: string, price: number,url: any}[] =
  [
    {
      isbn: '412417105048',
      title: 'Anna Karenina',
      description: 'Any fan of stories that involve juicy subjects like adultery, gambling, marriage plots, and, well, Russian feudalism, would instantly place Anna Karenina at the peak of their “greatest novels” list',
      author: 'Greta Garbo',
      price: 250,
      url: ''
    },
    {
      isbn: '412417105078',
      title: 'To Kill a Mockingbird!',
      description: 'Harper Lee, believed to be one of the most influential authors to have ever existed, famously published only a single novel (up until its controversial sequel was published in 2015 just before her death).',
      author: 'Harper Lee ',
      price: 450,
      url: ''

    },
    {
      isbn: '412417105098',
      title: 'The Great Gatsby',
      description: ' The Great Gatsby is distinguished as one of the greatest texts for introducing students to the art of reading literature critically (which means you may have read it in school).',
      author: 'F. Scott Fitzgerald’s',
      price: 360,
      url: ''
    }
  ];

  id: number = 0;

  onBookAdded(isbn: string,title: string,description: string, author: string, price: number)
  {
    this.bookList.push({isbn:isbn, title:title, description:description, author:author, price:price,url:''});
    localStorage.setItem('books',JSON.stringify(this.bookList));
    console.log(this.bookList);
  }

  onBookList(){
    return this.bookList; 
  }

  onBookUpdate(id: number,url: any, description: string, price: number)
  {
    this.bookList[id].description = description;
    this.bookList[id].price = price;
    this.bookList[id].url = url;
    localStorage.setItem('books',JSON.stringify(this.bookList));
  }

  onUpdateId(id: number)
  {
    this.id=id;
  }

  onId()
  {
    return this.id
  }
}
