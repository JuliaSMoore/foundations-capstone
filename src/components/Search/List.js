import React from "react";
import './List.css'

const List = ({bookList}) => {
    return (
        <div>
            { bookList &&
                bookList.map((element) => {
                    return <div key={element.id} className="book-container">
                        <img className="cover" src={element.cover} ></img>
                        <div className="search-info">
                        <div className="search-title">{element.title}</div>
                        <div>{element.description}</div>
                        <div>{element.tags}</div>
                        </div>
                    </div> 
                })
                
            }
        </div>
    )
}

export default List