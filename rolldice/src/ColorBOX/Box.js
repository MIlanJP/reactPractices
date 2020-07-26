import React, { Component } from 'react'
import {choose} from '../coinflipper/Utility'
class Box extends Component{

    static defaultProps={
        colors:['purple','red','black','white','green','yellow','violet']
    }

    constructor(props){
        super(props);
        this.state={
            color:choose(this.props.colors),
        };
        this.onClick=this.onClick.bind(this);
    }

    setColor(){
        let newcolor=choose(this.props.colors)
        while(this.state.color===newcolor){
            newcolor=choose(this.props.colors);
        }
        this.setState({color:newcolor});
    }

    onClick(){
       this.setColor()
    }

    render(){
        return (
            <div className='Box' style={{ backgroundColor:this.state.color}} onClick={this.onClick}  >
            
            </div>
        )
    }
}
export default Box;