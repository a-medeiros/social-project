import React, { useState } from "react";
import "./style.scss";
import Navbar from "../../components/Navbar/Navbar";
import api from "../../Api";

const CreateNewPost = () => {
    const [newPost, setNewPost] = useState({
        userId: "",
        title: "",
        body: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setNewPost({
            ...newPost,
            [name]: value
        })
    }   

    const handleSubmit = e => {
        e.preventDefault();

        api.post("/", {
            body: newPost,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
          .then(res => {
              console.log(res);
              alert("Post was created!");
              setNewPost({
                userId: "",
                title: "",
                body: ""
              })
          })
          .catch(err => {
              console.log(err)
          })
    }

    return(
        <div>
            <Navbar />
            <div>
                <div className="title-page-div">
                    <h2>Create New Post</h2>
                </div>                
                <form onSubmit={handleSubmit} className="new-post-form">
                    <div className="input-field-div">
                        <label>UserId</label>
                        <input id="userid" name="userId" value={newPost.userId} onChange={handleChange} />
                    </div>
                    <div className="input-field-div">
                        <label>Título</label>
                        <input id="title" name="title" value={newPost.title} onChange={handleChange}/>
                    </div>
                    <div className="input-field-div">
                        <label>Texto</label>
                        <input id="body" name="body" value={newPost.body} onChange={handleChange}/>
                    </div>
                    <div className="new-post-form-submit-button-div">
                        <button type="submit" className="btn btn-info">Add post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNewPost;