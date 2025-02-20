// Add Book Cover
import React from 'react'
// import class names
import {cn} from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "@/components/BookCoverSvg";

type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide'
// Add Book cover sizes
const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: 'book-cover_extra_small',
    small: 'book-cover_small',
    medium: 'book-cover_medium',
    regular: 'book-cover_regular',
    wide: 'book-cover_wide',
}

interface Props {
    className?: string;
    variant?: BookCoverVariant;
    coverColor: string;
    coverImage: string;
}

// Add Book Cover properties
const BookCover = ({
                       className,
                       variant = 'regular',
                       coverColor = '#012B48',
                       coverImage = "https://placehold.co/400x600.png",
                   }: Props) => {
    return (
        // Provide the book cover size
        <div className={cn(
            'relative transition-all duration-300',
            variantStyles[variant],
            className,
        )}>
            <BookCoverSvg coverColor={coverColor} />

            <div className="absolute z-10"
                 style={{left: '12%', width: '87.5%', height: '88%'}}>
                <Image
                    src={coverImage}
                    alt="Book cover"
                    fill
                    className="rounded-sm object-fill"/>
            </div>
        </div>
    )
}
export default BookCover
