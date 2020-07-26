import React, { Component } from 'react'

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            buttonClassName:"Button-btn",
            colors:['blue','red','black','green','orange']
        }
    }

    changeButtonView(){
        if(this.buttonClassName==="Button-btn"){

        }
    }

    render(){
        return (
            <div className="Button">
            <button onclick={}  className="Button-btn">Click Here</button>
            </div>
        )
    }
}

export default Button;