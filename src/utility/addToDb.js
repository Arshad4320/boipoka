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

const getWishlistIntoDb = () => {
  const wishList = localStorage.getItem("wishlist");
  if (wishList) {
    const parseData = JSON.parse(wishList);
    return parseData;
  } else {
    return [];
  }
};
const setWishlistIntoDb = (id) => {
  const parseData = getWishlistIntoDb();
  if (parseData.includes(id)) {
    alert("wishList id is already exits");
  } else {
    parseData.push(id);
    const setData = JSON.stringify(parseData);
    localStorage.setItem("wishlist", setData);
  }
};
export { setItemIntoDb, getItemIntoDb, getWishlistIntoDb, setWishlistIntoDb };
