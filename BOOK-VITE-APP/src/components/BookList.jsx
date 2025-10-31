import './BookList.css'
import Book from './Book'

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: '$14.99',
    image:
      'https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '$12.99',
    image:
      'https://m.media-amazon.com/images/I/81OthjkJBuL.jpg',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: '$11.99',
    image:
      'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: '$9.99',
    image:
      'https://m.media-amazon.com/images/I/81vgGJ-bB9L.jpg',
  },
]

const BookList = () => {
  return (
    <div className="book-grid">
      {books.map((b) => (
        <Book key={b.id} title={b.title} author={b.author} price={b.price} image={b.image} />
      ))}
    </div>
  )
}

export default BookList
