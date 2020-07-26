import React, { Component } from 'react';

const POKE_API
='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class PokeCard extends Component {
    render() {
        let imgsrc='${POKE_API}${this.props.id}.png';
        return (
            <div className="PokeCard">
            <h1 className='PokeCard-username' > {this.props.username}</h1>
            <div className="PokeCard-firstname"  >Type:{this.props.firstname}</div>
            <div className="PokeCard-lastname"  >Exp:{this.props.secondname}</div>
            <div className="PokeCard-email">Email-Id:{this.props.email}</div>
            </div>
            
            )

    }
}

// Expoting the class 
export default PokeCard;