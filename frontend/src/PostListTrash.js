import React from 'react'
import BlogPost from './BlogPost'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

const PostList = (props) => {
    const [myList, setMyList] = React.useState({list: null, load: true})
    React.useEffect(() => {
        if(props.list && myList.load){
            setMyList({list: props.list, cBack: props.mydetaile, load: false, sList: props.sList})
        }
        console.log(myList)
        
    })
    return(
        <div>
            <ul>
                {myList.list && 
                    myList.list.map(value => (
                    <li key={value.id}><Link to={`/${value.creationTime}`}onClick={() => {
                        myList.cBack(value)
                        //myList.sList(true)
                    }}>{value.postHeading} | {value.creationTime}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default PostList