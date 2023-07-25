/* Es gibt eine Bibliothek. Ich bin ein Nutzer dieser Bibliothek. Die Bibliothek hat eine Anzahl an verfügbaren Büchern. */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrow(book) {
    if (book.isAvailable) {
      book.borrow();
      this.borrowedBooks.push(book);
    } else {
      console.log("Das Buch ist leider nicht verfügbar.");
    }
  }

  returnBook(book) {
    book.returnBook();
    this.borrowedBooks = this.borrowedBooks.filter((b) =>
      b.title === book.title ? false : true
    );
  }
}

const firstBook = new Book("Harry Potter", "J.K. Rowling");
const secondBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const thirdBook = new Book("The Catcher in the Rye", "J.D. Salinger");

const max = new User("Max Mustermann");
max.borrow(firstBook);
max.borrow(secondBook);
max.borrow(thirdBook);

const hans = new User("Hans Klaus");
hans.borrow(firstBook);

/* console.log(max);
console.log(hans); */

console.log(secondBook);

max.returnBook(secondBook);
/* console.log(max); */

console.log(secondBook);
