import React from 'react'
import BookCard from "@/components/BookCard";

// Add the books
interface Props {
    title: string;
    books: Book[];
    containerClassName?: string;
}

const BookList = ({title, books, containerClassName}: Props) => {
    return (
        // Add list of books
        <section className={containerClassName}>
            <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
            <ul className="book-list">
                {/*Add Book Card for each book*/}
                {books.map((book) => (
                    <BookCard key={book.title} {...book} />
                ))}
            </ul>
        </section>
    );
}
export default BookList
