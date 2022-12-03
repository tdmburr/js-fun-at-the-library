function shelfBook(book, shelf) {
if (shelf.length < 3)  
  return shelf.unshift(book)
}


function unshelfBook(book, shelf) {
for (var i = 0; i < shelf.length; i++) {
  if (book === shelf[i].title) {
    return shelf.splice(i, 1)
  }
}   
}

function listTitles(shelf) {
var title1 = []
for (var i = 0; i < shelf.length; i++) {
title1.push(shelf[i].title)
} return title1.join(", ")
}

function searchShelf(shelf, title) { 
for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === title) {
    return true
  }
  }
    return false
}





module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};