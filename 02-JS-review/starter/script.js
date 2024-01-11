const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructring

const book = getBook(1);

const { title, author, pages, genres } = book;

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

const newGenres = [...genres, "epic fantasy"];

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};
updatedBook;

const summary = `${title}, a ${pages}-page long is a book`;

const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";

// arrow function
const getYear = (str, a, b) => {
  return str.split("-")[0];
};
// const getYear = (str) => str.split("-")[0];
// function getYear(str) {
//   return str.split("-")[0];
// }

// Shortcutting
console.log(true && "Some String"); // print "Some String"
console.log(false && "some string"); // print false
console.log(0 && "some string"); // print 0
//falsy: 0, '', null, undefined

console.log(true || "Some string"); // true
console.log(false || "Some string"); // print Some string
// Convenitent for default values
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

// Be aware that 0 is a falsy, so

const count = book.reviews.librarything.reviewsCount ?? "not data";
// Falsy for ?? is only null and undefined

function getTotalReviewCount(book) {
  // Doing optional chaining
  const goodRead = book?.reviews?.goodRead?.reviewsCount ?? 0;
  const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;
  return goodRead + librarything;
}

// map, filter and reduce
const books = getBooks();
const titles = books.map((book) => book.title);
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

const longBooks = books.filter((book) => book.pages > 500);
const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
);

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);

const arr = [3, 7, 1];
const sorted = arr.slice().sort((a, b) => a - b); // asc order, b-a would be descending, slice makes a copy, otherwise change in place.

const sortByPages = books.slice().sort((a, b) => b.pages - a.pages);

// Working with immutable arrays
// Add a book object
const newBook = {
  id: 6,
  title: "Something",
  author: "Me",
};
const booksAfterAdd = [...books, newBook];
//delete a book from array => use filter
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// update a book object in the array
const bookAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 12 } : book
);

// promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
}

const toDo = await getTodo();
