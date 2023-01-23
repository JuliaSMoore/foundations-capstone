import React from "react";

const AddForm = () => {
    return (
        <form>
            <div>
                <label>Title</label><br/>
            <input type="text" />
            </div>
            <div>
                 <label>Description</label><br/>
            <input type="textarea" />
            </div>
            <div>
                <label>Tags</label><br/>
                <input type="checkbox" className="tags" id="fantasy" value="Fantasy"/>
                <label for="fantasy">Fantasy</label><br/>
                <input type="checkbox" className="tags" id="si-fi" value="Si-Fi"/>
                <label for="si-fi">Si-Fi</label><br/>
                <input type="checkbox" className="tags" id="romance" value="Romance"/>
                <label for="romance">Romance</label><br/>
            </div>
            <div>
                <label>Content</label><br/>
            <input type="textarea" />
            </div>
                <button type="submit">Add</button>
        </form>
    )

}

export default AddForm