import React, {useEffect, useRef, useState} from 'react'
import {Container, H2, BookList} from './styles'
import {debounce} from 'lodash-es'
import Book from '../Book'

const BooksContainer = ({books, pickBook, isPanelOpen}) => {
  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

  // function runs when isPanel value changes.
  useEffect(() => {
    const handScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)
    if (!isPanelOpen) {
      window.addEventListener('scroll', handScroll)
    }

    return () => {
      window.removeEventListener('scroll', handScroll)
    }
  }, [isPanelOpen])

  // triggers based on three different variables inside the dependency array
  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }

    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  console.log(scroll)

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>All Books</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
