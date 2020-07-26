import React, {Component} from 'react';

class NumberRemoveButton extends Component{

    componentWillUnmount(){
        console.log("Form Componenet Unmount")
    }

    render(){
        return (
            <button onClick={this.props.remove}  >
            Remove{this.props.n}
            </button>
        )
    }

}
export default NumberRemoveButton;