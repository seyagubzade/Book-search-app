import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import BooksList from './components/BooksList';
import Modal from './components/Modal';
import axios from 'axios';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState([]);
  const [searchBooksList, setSearchBooksList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [modalItem, setModalItem] = useState(null)

  const apiKey = 'AIzaSyCwvHEXnWBHpiVmed6ezjoYVjwQjOxzFCI';
  const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

  useEffect(() => {
    axios.get(baseUrl, {
      params: {
        q: 'time',
        printType: 'books',
        key: apiKey,
      },
    })
      .then(res => {
        setBooks(res.data.items);
        setSearchBooksList(res.data.items);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const searchBooks = (value) => {
    axios.get(baseUrl, {
      params: {
        q: value,
        projection: 'lite',
        key: apiKey,
      },
    })
      .then(res => {
        setSearchBooksList(res.data.items);
      })
      .catch(error => {
        console.error('Error searching books:', error);
      });
      setSearchValue("")
  };


  return (
    <div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} searchBooks={searchBooks} />
      <BooksList searchBooksList={searchBooksList} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setModalItem={setModalItem}/>
      {
        !isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} modalItem={modalItem}/> : null
      }
    </div>
  );
}

export default App;
