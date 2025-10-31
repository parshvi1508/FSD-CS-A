import './Book.css';

const Book = ({
  title = 'Untitled',
  author = 'Unknown',
  price = '$0.00',
  image = 'https://via.placeholder.com/120x180?text=No+Image',
}) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <p className="book-price">{price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Book