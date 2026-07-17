function BookDetails() {
  const books = [
    {
      id: 1,
      name: "React Explained",
      author: "Zac Gordon",
      price: 650
    },
    {
      id: 2,
      name: "Learning JavaScript",
      author: "Ethan Brown",
      price: 550
    },
    {
      id: 3,
      name: "Spring Boot in Action",
      author: "Craig Walls",
      price: 700
    }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <p><b>Name:</b> {book.name}</p>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Price:</b> ₹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;