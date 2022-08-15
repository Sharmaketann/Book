import React from 'react'
import {BG, CloseWrapper, Em, P, Panel} from './styles'
import Book from '../Book'
import {Close} from '../../styles'

const DetailPanel = ({book, closePanel, state}) => {
  console.log(state)
  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        {book && (
          <>
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
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
