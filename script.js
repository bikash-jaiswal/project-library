// for dev tool testing
console.log("testing")

// select div of user form
const userForm = document.querySelector("#user-form")
const addBtn = document.querySelector(".plusNewBook")
const submitBtn = document.querySelector(".submit-btn")

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

function toggle_visibillity(id) {
  const x = document.querySelector(id)
  if (x.classList.contains("hide")) {
    x.classList.add("show")
    x.classList.remove("hide")
  } else {
    x.classList.add("hide")
    x.classList.remove("show")
  }
}

addBtn.addEventListener("click", () => {
  console.log(" add btn pressed")
  toggle_visibillity("#user-form")
})

// form reset
function reset(id) {
  const frm = document.getElementById(id)
  frm.submit() // Submit the form
  frm.reset() // Reset all form data
  // return false // Prevent page refresh
}

// submitBtn.addEventListener("click", () => {
//   toggle_visibillity("#user-form")
//   reset("#user-form")
// })

function submit() {
  toggle_visibillity("#user-form")
  reset("#user-form")
  return false
}

display()
