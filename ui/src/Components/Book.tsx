import "../styles.css"

interface BookProps {
    id: number
    title: string,
    author: string,
    books_copies: number,
    isbn: string,
}

function Book({ id, title, author, books_copies, isbn }: BookProps) {

    return (
        <>
            <div className="book-container">
                <div className="book-grid">
                    <p className="book-id ">{id}</p>
                </div>
                <p className="default-text-block">Название - {title}</p>
                <p className="default-text-block">Автор - {author}</p>
                <p className="default-text-block">Номер - {isbn}</p>
                <p className="default-text-block">Копий - {books_copies}</p>

            </div >
        </>
    )
}

export default Book