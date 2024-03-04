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

const book = getBook(2);
book


const updatedBook = {
    ...book,
    //adding new propertie
    moviePublicationDate: '2001-12-19',
    //overwriting an exesting property
    pages: 1929,
    hasMovieAdaptation: true
}
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = updatedBook;

const [primary, secondary, ...others] = genres

const newGanrages = ['epic Fantacy', ...genres]

const getYear = (str, symbole) => str.split(symbole)[0];

const summary = `this is the ${title} Book. it was written by ${author}, its pages are ${pages} its genres are ${genres}. it was published in ${getYear(publicationDate, "-")}.
The book has ${hasMovieAdaptation ? '' : "Note"} been adapted as a movie 
`
summary

const pagesRange = pages > 1000 ? 'Over a thousand' : 'Less than one Thousand';

pagesRange

const test = hasMovieAdaptation && 'has a movie'

// flasy : 0, '', null , undefined
console.log('yo' && 'hey')
console.log('' && 'hey')

console.log('yo' || 'hey')
console.log('' || 'hey')

console.log(updatedBook.translations.spanish && updatedBook.translations.spanish)

const spanishTranslation = updatedBook.translations.spanish || "NOT TRANSLTED"

spanishTranslation

console.log(book.reviews.librarything?.reviewsCount ?? 0);
const countWrong = book.reviews.librarything?.reviewsCount || "NO DATA"
countWrong
const count = book.reviews.librarything?.reviewsCount ?? "NO DATA"

// chainging operator

// const getTotallReviewCount = (book) => {
//     const goodreads = book.reviews?.goodreads?.reviewsCount;
//     const librarythings = book.reviews.librarything?.reviewsCount ?? 0;
//     return goodreads + librarythings;
// }
const getTotallReviewCount = (book) => {
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const librarythings = book.reviews.librarything?.reviewsCount ?? 0;
    return goodreads + librarythings;
}

console.log(getTotallReviewCount(book))

const books = getBooks();

const mapping = [1,2,3,4].map(el => el*2)

mapping

const titles = books.map(book => book.title)
titles

const essentialData = books.map(book => ({title : book.title, author : book.author, reviewsCount: getTotallReviewCount(book) }));
essentialData

const longBooks = books.filter(book => book.pages > 200 && book.hasMovieAdaptation)
console.log(longBooks.length) 

const adventureBooks = books.filter(book => book.genres.includes("adventure"))
adventureBooks

const pagesToRead = books.reduce((acc, book) => acc + book.pages ,0)
pagesToRead

const x = [3,7,1,9,5]
 
const srted  = x.slice().sort((a,b) => a - b)

srted
x

const sortedByPages = books.slice().sort((a,b) => b.pages-a.pages)
sortedByPages

//1 - add book to array

const newBook ={
    id : 6,
    title: "wja3 trab",
    author:"said",
};

const booksAfterAdd = [...books, newBook]
booksAfterAdd

// 2 - delete a book form array

const bookAfterRemove = booksAfterAdd.filter(book=> book.id !== 3)
bookAfterRemove

// 3 - update book in the array

const bookAfterUpdate = bookAfterRemove.map((book) => book.id === 1 ? {...book,title : "wja3 trab"} : book)

bookAfterUpdate

// fetching API

//fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then(data=> console.log(data))

const getToDos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
}

getToDos();