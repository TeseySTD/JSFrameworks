import { Library } from './library';
import { Book, User } from './models';
import { LibraryService } from './services';
import { Storage } from './storage';
import { Validation } from './validation';
import '../libs/Bootstrap.css'
import '../style/style.css'

class App {
    private library: Library<Book>;
    private libraryService: LibraryService;
    private storage: Storage;
    private readonly itemsPerPage:number = 2;
    private currentPage: number = 1;
    constructor() {
        this.storage = new Storage();
        this.library = new Library<Book>();
        this.libraryService = new LibraryService(this.library, this.storage);
    }

    init() {
        this.loadInitialData();
        this.renderApp();
    }

    private loadInitialData() {
        const savedBooks = this.storage.getBooks();
        savedBooks.forEach(book => this.library.addItem(new Book(book.id, book.title, book.author, book.year, book.available)));
    }

    private renderApp() {
        document.body.innerHTML = `
            <div class="container mt-4" id="app">
                <h1 class="mb-4">Library Management System</h1>
                <div class="input-group">
                    <div class="form-outline" data-mdb-input-init>
                        <input type="search" id="search" class="form-control" />
                        <label class="form-label" for="form1">Search</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        ${this.renderBookForm()}
                    </div>
                    <div class="col-md-6">
                        ${this.renderUserForm()}
                    </div>
                    <div class="col-md-6" id="bookList">
                        ${this.libraryService.renderPaginatedBookList(this.currentPage,2)}
                    </div>
                    <div class="col-md-6" id="userList">
                        ${this.libraryService.renderUserList()}
                    </div>
                </div>
            </div>
        `;
        document.body.innerHTML += 
        `<footer class="bg-body-tertiary text-center text-lg-start">
            <!-- Copyright -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2024 Copyright:
                <a class="text-body" href="localhost:9000">My Library</a>
            </div>
            <!-- Copyright -->
        </footer>`;
        this.attachEventListeners();
    }
    private renderBookForm(): string {
        return `
            <h2>Add New Book</h2>
            <form id="bookForm" class="border rounded">
                <div class="mb-3">
                    <label for="bookTitle" class="form-label">Title</label>
                    <input type="text" class="form-control" id="bookTitle" required>
                </div>
                <div class="mb-3">
                    <label for="bookAuthor" class="form-label">Author</label>
                    <input type="text" class="form-control" id="bookAuthor" required>
                </div>
                <div class="mb-3">
                    <label for="bookYear" class="form-label">Year</label>
                    <input type="number" min="1924" max="2024" class="form-control" id="bookYear" required>
                </div>
                <button type="submit" class="btn btn-primary">Add Book</button>
            </form>
        `;
    }
    private renderUserForm(): string {
        return `
            <h2>Add New User</h2>
            <form id="userForm" class="border rounded">
                <div class="mb-3">
                    <label for="userName" class="form-label">User name</label>
                    <input type="text" class="form-control" id="userName" required>
                </div>
                <div class="mb-3">
                    <label for="userEmail" class="form-label">Email</label>
                    <input type="text" class="form-control" id="userEmail" required>
                </div>
                <div class="mb-3">
                    <label for="userBooks" class="form-label">User books</label>
                    <ul class="list-group" id="userBooksList"></ul>
                    <select class=" form-select" id="userBooks">
                        ${this.library.getItems().filter(book => book.available).length === 0 ? '<option disabled="disabled" selected=true>No books found</option>' : 
                            '<option class="form-select-placeholder" disabled selected hidden>Select a book</option>' + this.library.getItems()
                            .filter(book => book.available)
                            .map(book => `<option value="${book.id}">Book: ${book.title} by ${book.author}</option>`)}
                    </select>
                    <button class="btn btn-primary btn-sm" id="addBookForUserButton">Add Book</button>
                </div>
                <button type="submit" class="btn btn-primary">Add User</button>
            </form>
        `;
    }

    private attachEventListeners() {
        this.attachEventListenersToBooksForm();
        this.attachEventListenersToUsersForm();
        this.attachEventListenersToAddUserBookButton();
        this.attachEventListenerToDeleteBookButtons();
        this.attachEventListenerToDeleteUserButtons();
        this.attachEventListenerToReturnBookButtons();
        this.attachEventListenerToSearchButton();
        this.attachEventListenerToBorrowButtons();
        this.attachEventListenerToCopyUserId();
        this.attachEventListenerToPaginationButtons();
    }
    private attachEventListenersToBooksForm() {
        const bookForm = document.getElementById('bookForm') as HTMLFormElement;
        if (bookForm) {
            bookForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const titleInput = document.getElementById('bookTitle') as HTMLInputElement;
                const authorInput = document.getElementById('bookAuthor') as HTMLInputElement;
                const yearInput = document.getElementById('bookYear') as HTMLInputElement;
                const year = parseInt(yearInput.value);

                if (Validation.validateBookInput(titleInput.value, authorInput.value, year)) {
                    const newBook = new Book(
                        Date.now(), 
                        titleInput.value,
                        authorInput.value,
                        year
                    );
                    this.libraryService.addBook(newBook);
                    this.renderApp();
                } else {
                    alert('Please enter valid book details');
                }
            });
        }

    }
    private attachEventListenersToUsersForm() {
        const userForm = document.getElementById('userForm');
        if (userForm) {
            userForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const nameInput = document.getElementById('userName') as HTMLInputElement;
                const emailInput = document.getElementById('userEmail') as HTMLInputElement;
                if (Validation.validateUserInput(nameInput.value, emailInput.value)) {
                    let newUser = new User(
                        Date.now(),
                        nameInput.value,
                        emailInput.value
                    );
                    Array.from(document.getElementById('userBooksList')
                                        .getElementsByTagName('li'))
                                        .map(el => this.storage.getBookById(+el.id) as Book)
                                        .forEach(el => this.libraryService.borrowBook(newUser, el));
                    
                    this.libraryService.addUser(newUser);
                    this.renderApp();
                } else {
                    alert('Please enter valid user details');
                }
            });
        }
    }   
    private attachEventListenersToAddUserBookButton() {
        const addBookForUserButton = document.getElementById('addBookForUserButton');
        if (addBookForUserButton) {
            addBookForUserButton.addEventListener('click', (e) => {
                e.preventDefault();
                const userBooks = document.getElementById('userBooks') as HTMLSelectElement;
                const userBooksList = document.getElementById('userBooksList') as HTMLUListElement;
                const bookId = userBooks.value;
                const book = this.library.getItems().find(b => b.id === +bookId);
                

                if (book && userBooksList.querySelectorAll(`li`).length < 3) {
                    const array = Array.from(userBooks.selectedOptions);
                    array.forEach(option => {
                        userBooks.remove(option.index);
                    })
                    document.getElementById('userBooksList').innerHTML += `
                        <li class="list-group-item d-flex justify-content-between align-items-center" id="${book.id}">
                            ${book.title} by ${book.author}
                        </li>
                    `;
                }
                if(userBooks.querySelectorAll(`option`).length === 1) {
                    userBooks.innerHTML += '<option disabled="disabled" selected>No books found</option>';
                }
            });
        }
    }
    private attachEventListenerToDeleteBookButtons() {
        const deleteBookButtons = document.getElementsByClassName('bookList');
        Array.from(deleteBookButtons).forEach(el => el.addEventListener('click', (e) => {
            this.libraryService.removeBook(this.storage.getBookById(+el.getAttribute('bookid')) as Book);
            this.renderApp();
            console.log("delete operation with book", el.getAttribute('bookid'));
        }))
    }
    private attachEventListenerToReturnBookButtons() {
        const deleteBookButtons = document.getElementsByClassName('userBook');
        Array.from(deleteBookButtons).forEach(el => el.addEventListener('click', (e) => {
            e.stopPropagation();
            this.libraryService.returnBook(this.storage.getUserById(+el.parentElement.parentElement.getAttribute('userid')) as User, this.storage.getBookById(+el.getAttribute('bookid')) as Book);
            this.renderApp();
            console.log("return operation with user", this.storage.getUserById(+el.parentElement.parentElement.getAttribute('userid')));
        }))
    }
    private attachEventListenerToDeleteUserButtons() {
        const deleteBookButtons = document.getElementsByClassName('userList');
        Array.from(deleteBookButtons).forEach(el => el.addEventListener('click', (e) => {
            this.libraryService.removeUser(this.storage.getUserById(+el.getAttribute('userid')) as User);
            this.renderApp();
            console.log("delete operation with user", el.getAttribute('userid'));
        }))
    }
    private attachEventListenerToSearchButton() {
        const searchInput = document.getElementById('search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                e.preventDefault();
                const searchInput = document.getElementById('search') as HTMLInputElement;
                const books = searchInput.value === '' ? [] : this.libraryService.searchBooks(searchInput.value);
                document.getElementById('bookList').innerHTML = this.libraryService.renderBookList(books, this.itemsPerPage);
                if(searchInput.value === '') {
                    this.attachEventListenerToPaginationButtons();
                }
            });
        }
    }
    private attachEventListenerToBorrowButtons() {
        const borrowButtons = document.getElementsByClassName('borrowButton');
        Array.from(borrowButtons).forEach(el => el.addEventListener('click', (e) => {
            e.stopPropagation();
            if(el.innerHTML.replace(/\s/g, '') == 'Available') {
                this.showPopup(this.storage.getBookById(+el.parentElement.getAttribute('bookid')) as Book);
                console.log("borrow operation");
            }
        }))
    }
    private showPopup(book : Book) {
        const popup = document.createElement('div');
        popup.innerHTML = `
            <form class="popup border rounded ">
                <div class="mb-3">
                    <h3 for="user-id">Enter User ID</h3>
                    <input required class="form-control" type="number" id="user-id">
                </div>
                <button type="submit" class="btn btn-primary">Borrow</button>
                <button id="close-popup" class="btn btn-secondary">Close</button>
            </form>
        `;

        document.body.appendChild(popup);

        const closeButton = document.getElementById('close-popup');
        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.removeChild(popup);
            });
        }

        const form = popup.querySelector('form') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = (document.getElementById('user-id') as HTMLInputElement).value;
                const user = this.storage.getUserById(+id) as User;
                if(user) {
                    if(user.borrowedBooks.length >= 3) {
                        alert("User cannot borrow more than 3 books");
                        return;
                    }
                    this.libraryService.borrowBook(user, book);
                    this.libraryService.updateUser(this.storage.getUserById(+id) as User, user);
                    this.renderApp();
                    popup.remove();
                }
                else{
                    alert("User not found");
                }
            });
        }
    }
    private attachEventListenerToCopyUserId() {
        Array.from(document.getElementsByClassName('userNameSpan')).forEach(el => el.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = el.parentElement.parentElement.getAttribute('userid');
            navigator.clipboard.writeText(id);
        }));
    }
    private attachEventListenerToPaginationButtons() {
        document.querySelector('.pagination').querySelectorAll('a').forEach(el => 
            el.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('bookList').innerHTML = this.libraryService.renderPaginatedBookList(+el.getAttribute('data-page'), this.itemsPerPage);
                this.currentPage = +el.getAttribute('data-page');
                console.log("pagination operation with page", el.getAttribute('data-page'));
                this.attachEventListenerToPaginationButtons();
                this.attachEventListenerToBorrowButtons();
                this.attachEventListenerToDeleteBookButtons();
        }))
    }
}

const app = new App();
app.init();