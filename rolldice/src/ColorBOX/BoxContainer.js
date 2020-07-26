import React, { Component } from 'react'
import Box from './Box'
class BoxContainer extends Component{
   static defaultProps = {
       numOfBoxes:18
   }

    render(){
        return(
            Array.from({length:this.props.numOfBoxes}).map(()=>
                <Box/>
            )
        )
    }
}

export default BoxContainer;