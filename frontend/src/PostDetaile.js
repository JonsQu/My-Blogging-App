import React from 'react';

class PostDetaile extends React.Component{
    
    state = {saveData: true};
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        console.log(this.props);
        if(this.state.saveData){
            this.props.loadMyData(false);
            let detaileObj = {};
            for(let item of this.props.detaileData){
                console.log(typeof item.creationTime);
                if(item.creationTime === this.props.match.params.id){
                    detaileObj = item;
                    console.log(item);
                    console.log("forLoop");
                }
            }
            this.setState({myData: detaileObj, saveData: false});
        }
        
        //const {id} = this.props.match.params;
        console.log(this.props);
    }
    shouldComponentUpdate(){
        console.log("testing update method");
        console.log(this.props);
        /*if(this.state.myData === null){
            this.setState({detaileData: this.props.state.detaileData});
        }*/
        return true;
    }
    componentWillUnmount(){
        console.log("unmount")
        this.setState({saveData: true});
        this.props.loadMyData(true);
    }
    componentDidUpdate(){

    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("willUpdate");
        return null;
    }
    render(){
        console.log(this.state);
        console.log("detaileRender" + this.state.myData);
        return (
             <div>
                { this.state.myData ? <div>
                <h2>{this.state.myData.postHeading}</h2>
                <p>{this.state.myData.creationTime}</p>
                <p>{this.state.myData.post}</p></div> : null }
            </div>
        );
    }
}
export default PostDetaile;