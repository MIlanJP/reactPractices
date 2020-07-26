import React, { Component } from 'react'
import Ball from './Ball'
class Lottery extends Component {
static defaultProps = {
    title:'Lottery',
    maxballs:6,
    maxNum:40
}
constructor(props) {
    super(props)
    this.state={
        nums:Array.from({length:this.props.maxballs})
    };
    this.genrate=this.genrate.bind(this);
}

generate1(){
    this.setState(currarr=>({
        nums:currarr.nums.map(
            n=>Math.floor(Math.random()*this.props.maxNum+1)
        )
    }) )
}
generate2(){

}

genrate(){
this.generate1();
}

render(){
    return(
         <div className="lottery">
         <h1>{this.props.title}</h1>
         <div className="balls" >
            {this.state.nums.map(n=> <Ball num={n} />)}
         </div>
         <button onClick={this.generate}>Generate</button>
         </div>
    )
}

}

export default Lottery;