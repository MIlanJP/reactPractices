import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            username:""
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({ username:evt.target.value});
    }

    handleSubmit(evt){
            alert(`you types ${this.state.username}`) 
    }

    render(){
        return (
            <div>
            <h1>Form</h1>
            <form onSubmit={this.handleSubmit} >
            <input type="text" value={this.state.username} 
            onChange={this.handleChange}
            />
            <button>Submit BUtton!!!!!!!! </button>
            </form>
            </div>
        )
    }
}

export default Form;