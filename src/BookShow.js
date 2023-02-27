import React from "react";
import './Books.css';
import BookList from "./Books/Books";
import Books from "./Books/Books";

const books = Books;


function BookShow() {

    return (
        <>                
        <BookList BookList={BookList}/>
        </>
    );
}
export default BookShow
