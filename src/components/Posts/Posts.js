import React from 'react'
import "./style.scss";

const Posts = ({ posts }) => {
    return (
        <div className="list-group">
            {
                posts.map(post => (
                    <div className="list-group-item" key={post.id}>
                        <span className="post-title">{post.title}</span>
                        <p className="post-body">{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
 export default Posts;