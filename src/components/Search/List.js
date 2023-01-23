import React, {useState, useEffect} from "react";
import './List.css'
import axios from "axios";

const List = () => {

    const [listOfBooks, setListOfBooks] = useState (null)

    useEffect(() => {
        console.log('hey')
        axios.get("http://localhost:4000/api/books").then(res => {
            console.log(res.data)
          setListOfBooks(res.data) 
        })
    }, [])
    
    
    return (
        <div>
            { listOfBooks &&
                listOfBooks.map((element) => {
                    return <div>
                        {element.title}
                    </div> 
                })
                
            }
        </div>
    )
}

export default List