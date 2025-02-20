import React from 'react'
import Link from "next/link";
import BookCover from "@/components/BookCover";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Button} from "@/components/ui/button";

// Pass book card details
const BookCard = ({id, title, genre, color, cover, isLoanedBook = false}: Book) =>
    //  Add book card and make it responsive on different screen sizes
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
         <Link href = {`/books/${id}`} className={cn(isLoanedBook && 'w-full flex flex-col items-center')}>
             {/*Add Book Cover*/}
             <BookCover coverColor={ color } coverImage={cover} />

             {/*Add details about each book*/}
             <div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
                 <p className="book-title">{title}</p>
                 <p className="book-genre">{genre}</p>
             </div>
             {/*Add loaned book badge*/}
             {isLoanedBook &&(
                 <div className="mt-3 w-full">
                     <div className="book-loaned">
                         <Image src="/icons/calendar.svg" alt="calendar" width={18} height={18}
                                className="object-contain"/>
                         {/*Add days left for user to return book*/}
                         <p className="text-light-100">11 days left to return</p>
                     </div>
                    {/*Add download receipt button */}
                    <Button className="book-btn">Download receipt</Button>
                 </div>
             )}
         </Link>
    </li>

export default BookCard
