import React from 'react'
import logo from './logo.svg'
import './App.css'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import {Route, Link, Switch, Redirect } from 'react-router-dom'
import BlogPost from './BlogPost'
import PostList from './PostList'
import PostDetaile from './PostDetaile'

const App = () => {
  const [data, setData] = React.useState({d: '', loadData: false, showList: true})
  const fetchData = () => {
      fetch('http://localhost:8080/api/posts')
      .then(res => res.json())
      .then(result => {
      setData({d: result, loadData: true})
  })
  }
  
  React.useEffect(() => {
      if(data.loadData === false){
      fetchData()
      }
      console.log("App.js")
  })
  
  const mydetaile = (detailePost) => {
    console.log(detailePost)
    setData({dPost: detailePost, showList: false, link: <Redirect to={`/${detailePost.creationTime}`}/>})
  }
  const sList = (show) => {
    console.log(show)
    setData({showList: show})
  }
  return(
    <div className="App">
      <h1>ShadowHunter Blogging App</h1>  
      <p>Work in progress!</p>
      
      {console.log("render " + data.showList)}
      {console.log("render check " + data.d)}
      {data.showList ? <Redirect to="/posts"/> : data.link}
      <Switch>
        <Route path="/posts" children={<PostList mydetaile={mydetaile} sList={sList} list={data.d}/>}/>
        <Route path="/:id" render={(routeProps) => (<PostDetaile myPost={data.dPost} sList={sList} {...routeProps}/>)}/>
      </Switch>
    </div>)
}

export default App;
