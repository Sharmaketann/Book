import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import BooksContainer from './components/BooksContainer'
import DetailPanel from './components/DetailPanel'
import Header from './components/Header'
import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'
import Search from './components/Search'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  //Fetch data of all books.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
        setFilteredBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }
    fetchData()
  }, [])

  // Helper function when user clicks on a book

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())
    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )
      )
    }
  }

  const hasFiltered = filteredBooks.length !== books.length

  return (
    <div>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'All books'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </div>
  )
}

export default App
