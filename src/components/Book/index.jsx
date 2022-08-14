import React from 'react'

const Book = ({book}) => (
  <figure>
    <img alt={`Book cover for ${book.title} by ${book.author}`} src={book.image} />
    <figcaption>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
    </figcaption>
  </figure>
)

export default Book
