import BookServer from '../../server/bookServer';

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKLIST = 'GET_BOOKLIST';
// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_BOOKLIST:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

// Action creators
export const addBookAction = (book) => async (dispatch) => {
  await BookServer.addBook({
    ...book,
    category: '',
  });
  dispatch({
    type: ADD_BOOK,
    payload: {
      ...book,
    },
  });
};
export const getBookList = () => async (dispatch) => {
  const bookList = await BookServer.getBooks();

  const payload = Object.keys(bookList).map((key) => {
    const { title, author } = bookList[key][0];
    return {
      item_id: key,
      title,
      author,
    };
  });

  dispatch({
    type: GET_BOOKLIST,
    payload,
  });
};
export const removeBookAction = (id) => async (dispatch) => {
  await BookServer.removeBook(id);

  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};
