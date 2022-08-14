import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import BooksContainer from './components/Books'
import Header from './components/Header'
import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        console.log(`here's what our fetch response request returns`, response)

        const books = await response.json()
        console.log(`our jsonified response: `, books)
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  console.log(`the books array in our state:`, books)
  return (
    <div>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} />
    </div>
  )
}

export default App
