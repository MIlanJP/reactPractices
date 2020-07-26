import React, { Component } from 'react'

class Game extends Component {
// For stateful component we start with constructor

// constructor(props){
// super(props)
// this.state={
//     score:1,
//     gameOver:false
// }
// }

// Alternate way of initialing state 
state={
    score:12,
    gameOver:false
}

render () {
    return (
        <div className="Gmae">
        <h1>Your Score is {this.state.score}</h1>
        </div>
    )
}

}

export default Game;