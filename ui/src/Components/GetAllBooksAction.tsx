import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function GetAllBooks() {
    const navigation = useNavigate()
    const [books, setBooks] = useState<ApiData[]>([])

    const getBookApi = async () => {
        try {
            const responce = await fetch('http://localhost:9090/books/all', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            if (responce.ok) {
                setBooks(await responce.json())
            }
            else {
                navigation("/signup")

            }
        } catch (e) {
            navigation("/signup")
            console.log("Невозможно забрать данные из базы данных: " + e)
        }
    }

    useEffect(() => {
        getBookApi()
    }, [])

    return books;
}

interface ApiData {
    key: number,
    id: number,
    title: string,
    author: string,
    isbn: number,
    books_copies: number,
    available_copies: boolean
}

