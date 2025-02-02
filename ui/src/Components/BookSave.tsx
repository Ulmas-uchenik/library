import InputBooksAction from "./InputBooksAction"
import "../styles.css"

async function buttonAction(inputTitle: string, inputAuthor: string, inputIsbn: number, inputAvailableCopies: boolean) {
    const postBody = {
        title: inputTitle,
        author: inputAuthor,
        isbn: inputIsbn,
        available_copies: inputAvailableCopies
    }
    await fetch("http://localhost:9090/books/save", {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    window.location.reload()
}

export default function SaveBookWindow() {

    let inputTitle: any = null
    let inputAuthor: any = null
    let inputISBN: any = null
    let inputIsActive: any = null

    return (
        <>
            <InputBooksAction inputTitle='Ulmas' placeholderTitle="Название" inputAcion={(Value) => { inputTitle = Value }} />
            <InputBooksAction inputTitle='Ulmas' placeholderTitle="Автор" inputAcion={(Value) => { inputAuthor = Value }} />
            <InputBooksAction inputTitle='Ulmas' placeholderTitle="Номер" inputAcion={(Value) => { inputISBN = Value }} />
            <button className="default-button-block" onClick={() => buttonAction(inputTitle, inputAuthor, inputISBN, inputIsActive)}>Отправить</button>
        </>
    )
}

