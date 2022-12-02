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
return array
} else { 
  return array.push(comment);
}
  
}  

function calculatePageCount() {

}

function writeBook() {

}

function editBook(){

}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}