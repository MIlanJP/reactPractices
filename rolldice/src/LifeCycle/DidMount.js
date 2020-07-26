import React, { Component } from 'react'
import axios from 'axios';
class DidMount extends Component {
   
constructor(props){
    super(props);
    this.state={
        sentence:""
    };
    console.log("FRom Constructor")
}

    componentDidMount() {
        console.log("Fron ComponentDIDmount")
        // Loading Data
axios.get('https://swapi.dev/api/planets/').then(response=>{
        console.log(response.data.results[0].films[0])
        setTimeout(
            function(){
                this.setState({sentence:response.data.results[0].films[0]})
            }.bind(this)
            ,3000 )
}
        )
    }

    componentDidUpdate(){
        console.log("From COmponenet UPdate")
    }

    render(){
        console.log("From render")
        return(
            <div>
            <h1>LOADING</h1>
            <p>{this.state.sentence} </p>
            </div>
        )
    }
}

export default DidMount;