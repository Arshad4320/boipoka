const getItemIntoDb = () => {
  const getBookId = localStorage.getItem("book");
  if (getBookId) {
    const parseData = JSON.parse(getBookId);
    return parseData;
  } else {
    return [];
  }
};
const setItemIntoDb = (id) => {
  const getBook = getItemIntoDb();
  if (getBook.includes(id)) {
    alert("id is already exits");
  } else {
    getBook.push(id);
    const strBook = JSON.stringify(getBook);
    localStorage.setItem("book", strBook);
  }
};
export { setItemIntoDb, getItemIntoDb };
