import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import Form from './Form';
import { getBookList } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList());
  }, []);
  const bookList = useSelector((state) => state.books);
  return (
    <>
      <ul className="book-list">
        {bookList.map((bookItem) => (
          <Book key={bookItem.item_id} bookItem={bookItem} />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BookList;
