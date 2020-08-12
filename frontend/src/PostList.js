import React from 'react'
import PostDetaile from './PostDetaile';
import {Route, Link, Switch, Redirect } from 'react-router-dom';

class PostList extends React.Component{
    state = {myData: '', loadData: true};
    showMyList = true;
    constructor(props){
        super(props);
        this.loadMyDataAgain = this.loadMyDataAgain.bind(this);
    }
    myClickHandler(item){
        this.setState({showList: false, link: <Redirect to={`/posts/${item.creationTime}`} post={item}></Redirect>});
       
    }
    loadMyData(){
        fetch('http://localhost:8080/api/posts')
        .then(res => res.json())
        .then(jsonObj => {
            console.log(jsonObj);
            let list = [];
            for(let obj of jsonObj){
            list.push(<li key={obj.id}><Link onClick={() => this.myClickHandler(obj)}>{obj.postHeading}</Link></li>);
            }
            this.setState({myData: jsonObj, myPostList: list, loadData: false, showList: true})
        });
    }
    componentDidMount(){
        if(this.state.loadData){
            this.loadMyData();
        }
        
        console.log("Here")
    }
    loadMyDataAgain(loadAgain){
        console.log("Load My Data Again");
        this.showMyList = loadAgain;
        if(loadAgain){
            console.log(this.state);
            this.setState({loadData: loadAgain, showList: loadAgain});
        }
        console.log(this.showMyList);
    }
    componentWillUnmount(){
        console.log("list unmount");
    }
    componentDidUpdate(){
        console.log("list did update");
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("list will update");
        
        return null;
    }
    render(){
        console.log("list render"+this.state.showList);   
        return(
            <div>
                {this.state.showList ? <ul>{this.state.myPostList}</ul> : this.state.link}
                
                <Switch>
                {this.state.myData && this.state.myData.map(d => <Route exact={true} path="/posts/:id" render={(rProps) => (<PostDetaile detaileData={this.state.myData} loadMyData={this.loadMyDataAgain}{...rProps}/>)}/>)}
                </Switch>
            </div>
            
        );
    }
}
export default PostList;