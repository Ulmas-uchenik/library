import Book from '../Components/Book'
import "./pageStyles.css"
import SaveBookWindow from '../Components/BookSave'
import deleteBookWindow from '../Components/BookDelete'
import findBookWindow from '../Components/BookSearch'
import GetAllBooks from '../Components/GetAllBooksAction'

function Books() {
    const books = GetAllBooks()

    return (<div>
        <div className='flex flex-col float-right'>
            <div className="default-div">
                {SaveBookWindow()}
            </div>
            <div className="default-div">
                {deleteBookWindow()}
            </div>
            <div className="default-div">
                {findBookWindow()}
            </div>
        </div>

        <div className="flex overflow-x-auto snap-x">
            {books && books.map((book) => (
                <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    books_copies={book.books_copies}
                    author={book.author} isbn={book.isbn.toString()} />

            ))}</div>
    </div>)
}

export default Books