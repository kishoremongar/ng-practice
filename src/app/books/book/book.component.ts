import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;
  // @Output() bookEmitter = new EventEmitter<Book>();

  constructor(private cartService: CartService) {}

  addCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }
  removeCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
    // this.bookEmitter.emit(this.book);
  }

  ngOnInit(): void {}
}
