import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Book from "./Book.jsx";

function App() {
	return (
		<div className="app-container">
			<header>
				<h1>Book Store</h1>
			</header>
			<main>
				<Book />
			</main>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);