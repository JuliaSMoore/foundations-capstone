import React from "react";
import './List.css'

const List = ({bookList}) => {
    return (
        <div>
            { bookList &&
                bookList.map((element) => {
                    return <div key={element.id} className="book-container">
                        <img className="cover" src={element.cover} ></img>
                        {element.title}
                        {element.description}
                        {element.tags}
                    </div> 
                })
                
            }
        </div>
    )
}

export default List