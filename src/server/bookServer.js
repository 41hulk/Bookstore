const API_LINK = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cEvGDr3YaWcI5AxQ0ZLu';

const getBooks = async () => {
  const reqURL = `${API_LINK}/books`;
  const res = await fetch(reqURL);
  return res.json();
};

const addBook = async (book) => {
  const reqURL = `${API_LINK}/books`;
  await fetch(reqURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
const BookServer = {
  getBooks, addBook,
};

export default BookServer;
