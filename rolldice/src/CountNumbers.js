import React, { Component } from 'react'

class CountNumbers extends Component {
    state={
        count:0
}

constructor(props) {
    super(props)
    this.addone=this.addone.bind(this);
    this.addthree=this.addthree.bind(this);
}

addone(){
this.setState({count:this.state.count+1})
}



addthree=(e)=>{
this.setState({count:this.state.count+1})
console.log(this.state);
this.setState({count:this.state.count+1})
console.log(this.state);
this.setState({count:this.state.count+1})
}

st=sta=>{return {count:sta.count+1}}

actualAddTHree=(e)=>{
    this.setState()
console.log(this.state.count);
    this.setState(sta=>{return {count:sta.count+1}})
    console.log(this.state.count);
    this.setState(sta=>{return {count:sta.count+1}})
    console.log(this.state.count);
}

render() {
    return (
        <div>
        <h1>Your Score is {this.state.count}</h1>
        <button onClick={this.addone} >Add One</button>
        <button onClick={this.addthree} >Add Three</button>
        <button onClick={this.actualAddTHree} >Actually Add Three</button>

        </div>
    )
}

}

export default CountNumbers