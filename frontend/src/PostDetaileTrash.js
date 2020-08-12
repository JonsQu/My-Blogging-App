import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetaile = (props) => {
    const [post, setPost] = React.useState({setData: true})
    let {id} = useParams()
    console.log(props)
    React.useEffect(() => {
        if(post.setData){
            setPost({myPost: props.myPost, setData: false, sList: props.sList})
        }
        window.onpopstate = (e) => {
            console.log(e)
            post.sList(true)
        } 
        console.log(post)
    })
    return (
        <div>
            <p>Testing</p>
            <p>{id}</p>
            <p>{post.myPost && post.myPost.postHeading}</p>
            <p>{post.myPost && post.myPost.post}</p>
            <textarea id="story" name="story"
                rows="10" cols="75"/>
        </div>
        )
}
export default PostDetaile