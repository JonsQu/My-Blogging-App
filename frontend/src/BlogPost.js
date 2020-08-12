import React from 'react'

const BlogPost = (props) => {
    React.useEffect(() => {
        
    })
    return (
        <div>
            <h2>{props.post.postHeading}</h2>
            <p>{props.post.creationTime}</p>
            <p>{props.post.post}</p>
        </div>
        
    )
}
export default BlogPost