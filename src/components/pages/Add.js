import React from "react";
import Header from "../Header/Header";
import LinkBlock from "../Footer/LinkBlock";
import AddForm from "../AddStory/AddForm";
import Reader from "../Read/Reader";

const Add = () => {
    return (
        <div>
        <div className="wrapper">
            <Header />
        <AddForm />
        </div>
        <LinkBlock />
        </div>
    )
}

export default Add