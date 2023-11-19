import React from 'react'
import Card from '../Card'
import "./index.css"

const BooksList = ({searchBooksList, setIsModalOpen, isModalOpen, setModalItem}) => {
  return (
    <div class="responsive-cards">
        {searchBooksList.map((item)=>{
            return <Card item={item} key={item.id} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setModalItem={setModalItem}/>
        })}
    </div>
  )
}

export default BooksList