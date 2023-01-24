import React, {useState, useEffect} from "react";
import './Popular.css'
import HeadContainer from "../UI/HeadContainer";
import axios from "axios";

const Popular = () => {

const [popularBooks, setPopularBooks] = useState('')

    useEffect(() => {
        console.log('hey')
        axios.get("http://localhost:4000/api/books").then(res => {
            console.log(res.data)
          setPopularBooks(res.data) 
        })
    }, [])


    return (
        <div className="popular">
            <HeadContainer>
                <h1>Popular</h1>
                <a className="see-all" href="#">See All</a>
            </HeadContainer>
            <div>
            
            { popularBooks &&
                popularBooks
                .filter((books) => {return books.tags.includes("Popular")})
                .map((element) => {
                    return <div key={element.id} className="book-container">
                        <img className="cover" src={element.cover} ></img>
                        {element.title}
                        {element.description}
                        {element.tags}
                    </div> 
                })
                
            }
            </div>
            
        </div>
    )
}

export default Popular