import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './Popular.css'
import HeadContainer from "../UI/HeadContainer";
import axios from "axios";

const Popular = () => {

const [popularBooks, setPopularBooks] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        console.log('hey')
        axios.get("http://localhost:4000/api/books").then(res => {
            console.log(res.data)
          setPopularBooks(res.data) 
        })
    }, [])



    const readPageHandler = (id) => {
        navigate(`/read/${id}`)
    }

    return (
        <div className="popular">
            <HeadContainer>
                <span className="block-title">Popular</span>
                <a className="see-all" href="#">See All</a>
            </HeadContainer>
            <div className="popular-books">
            
            { popularBooks &&
                popularBooks
                .filter((books) => {return books.tags.includes("Popular")})
                .map((element) => {
                    return <div key={element.id} className="popular-container" >
                        <img className="cover" src={element.cover} onClick={() => {readPageHandler(element.id)}}></img>
                        <span className="name-description">
                            <span className="book-title">
                        {element.title}
                        </span>
                        <span className="book-description">
                        {element.description}
                        </span>
                        </span>
                    </div> 
                })
                
            }
            </div>
            
        </div>
    )
}

export default Popular