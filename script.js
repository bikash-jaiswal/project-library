// for dev tool testing
console.log("testing")

function Book(title, author, pageNo, status) {
  // constructor for Book objects
  this.title = title
  this.author = author
  this.pagesNo = pageNo
  this.readStatus = status

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pagesNo} pages, ${this.readStatus}.`
  }
}

const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")

const myLibray = []

function addBookToLibrary() {
  // takes the user's input and store the new book objects into array
  const title = "The Hobbit"
  const author = "J.R.R. Tolkien"
  const pageNo = 295
  const status = "not read yet"
  for (i = 0; i < 10; i++) {
    myLibray.push(new Book(title, author, pageNo, status))
  }
}

function display() {
  addBookToLibrary()
  // dispaly each book on the page
  for (let i = 0; i < myLibray.length; i++) {
    console.log(myLibray[i].info())
  }
}

display()
