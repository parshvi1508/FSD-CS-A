import Book from "./Book";

function MyApp() {
  const books = [
    { id: 1, title: "The Alchemist", price: "₹199", image: "https://via.placeholder.com/150" },
    { id: 2, title: "To Kill a Mockingbird", price: "₹299", image: "https://via.placeholder.com/150" },
    { id: 3, title: "1984", price: "₹249", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Book Store</h1>
      <div className="booklist">
        {books.map((b) => (
          <Book key={b.id} {...b} />
        ))}
      </div>
    </div>
  );
}

export default MyApp;