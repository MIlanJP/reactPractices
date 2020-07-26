import React, { Component } from 'react'
import PokeCard from './PokeCard'



class PokeCards extends Component {

    static defaultProps = {
        users: [
            {user:'milan' ,firstname:'milan', lastname:'gowda',emailid:'milan@gmail.com'},
            {user:'Amy', firstname:'Amy', lastname:'Jackson',emailid:'engieneer@gmail.com'},
            {user:'George', firstname:'Goergopoel', lastname:'Smith',emailid:'doctor@gmail.com'},
            {user:'Poo', firstname:'Pochinki', lastname:'land',emailid:'birbar@gmail.com'},
            {user:'Prison', firstname:'Prison', lastname:'gowda',emailid:'rahil@gmail.com'},
            {user:'milan' ,firstname:'milan', lastname:'gowda',emailid:'rahul@gmail.com'},
        ]}

    render(){
        return (
           <div  className="PokeCards">
           <h1>PokeCards!!!!!!!</h1>
          {
              this.props.users.map((user)=>(
            <PokeCard username={user.user} firstname={user.firstname} lastname={user.lastname}
            email={user.emailid}
            />
              ))

          }  
           </div>
        )
    }
}

export default PokeCards

