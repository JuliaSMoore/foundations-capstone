import React from "react";
import Header from "../Header/Header";
import LinkBlock from "../Footer/LinkBlock";
import AddForm from "../AddStory/AddForm";
import Reader from "../AddStory/Reader";

const Add = () => {
    return (
        <div>
        <div className="wrapper">
            <Header />
        <AddForm />
        <Reader />
        </div>
        <LinkBlock />
        </div>
    )
}

export default Add