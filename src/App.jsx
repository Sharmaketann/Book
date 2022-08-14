import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import BooksContainer from './components/BooksContainer'
import DetailPanel from './components/DetailPanel'
import Header from './components/Header'
import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  //Fetch data of all books.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }
    fetchData()
  }, [])

  // Helper function when user clicks on a book

  const pickBook = (book) => {
    setSelectedBook(book)
  }

  const closePanel = () => {
    setSelectedBook(null)
  }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} />
      {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />}
    </div>
  )
}

export default App
