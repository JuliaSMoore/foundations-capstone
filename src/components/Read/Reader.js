import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './Reader.css'
import axios from "axios";

const Reader = (props) => {
    const [book, setBook] = useState('')
    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/books/${id}`).then(res => {
          setBook(res.data) 
          console.log(res.data)
        })
    }, [])

return (
    <div className="wrapper">
        <div className="reader-title">{book.title}</div>
        <div className="reader-cover"><img className="cover" src={book.cover} ></img></div>
        <div className="reader-description">{book.description}</div>
        <div className="reader-tags">{book.tags}</div>
        <div className="reader-content">{book.content}</div>
    </div>
)
}

export default Reader