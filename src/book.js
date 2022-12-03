function createTitle(title) {
return `The ${title}` 
  
}

function buildMainCharacter(n, a, p) {
return {
  name: n,
  age: a,
  pronouns: p
} 

}

function saveReview(comment, array) {
if (array.includes(comment)) {  
return array;
} else { 
  return array.push(comment);
}
  
}  

function calculatePageCount(string) {
  return string.length * 20;
  
}


function writeBook(title, character, genre) {

var object = {
  title: title,
  mainCharacter: character,
  genre: genre,
  pageCount: calculatePageCount(title)
}
return object
}  


function editBook(object){
return object.pageCount = object.pageCount *.75
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}