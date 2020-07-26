import React, { Component } from 'react'
 
class Random extends Component {
constructor(props){
    super(props);
    this.state={num:0};
    this.setTimer();
}

setTimer(){
    setInterval(()=>{
        let random=Math.floor(Math.random()*this.props.maxNum);
        this.setState({num:random});
    },500);
}

render(){
    return <h1>{this.state.num}</h1>
}
}
export default Random;