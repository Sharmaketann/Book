import React from 'react'
import {Em, P, Panel} from './styles'
import Book from '../Book'
const DetailPanel = ({book}) => (
  <Panel>
    <Book book={book} isLarge={true} />
    {/* <figure>
      <img alt="" src={book.image} />
      <h3>{book.title}</h3>
      <h4>by {book.author}</h4>
    </figure> */}
    <P>{book.description}</P>
    <P>
      <Em>Published in {book.published}</Em>
    </P>
  </Panel>
)

export default DetailPanel
