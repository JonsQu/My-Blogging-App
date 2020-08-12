import React from 'react';
import './App.css';
import PostList from './PostList';
import {Route, Link, Redirect, Switch } from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <h1>Shadows Blogging site</h1>
                <Redirect to="/posts"/>
                <Switch>
                    <Route path="/posts" component={PostList}/>
                </Switch>
                
            </div>
        );
    }
}
export default App;