import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props){
        super(props);
        this.state={
            num:1
        }
        this.genR=this.genR.bind(this);
    }

    genR(){
        let rand=Math.floor(Math.random() * 10);
        this.setState({num:rand});
    }

    render(){
        return (
            <div>
            <h1 className="Clicker" >The Number is {this.state.num}</h1>
            {this.state.num===7 ?
                 <h2>You Got your Lucky Number</h2>
           :   <button onClick={this.genR}  >Generate Random</button>    }        
            </div>
        )
    }
}

export default Clicker;