import React, { Component } from 'react'
import NRB from './NumberRemoveButton'
class NumberList extends Component{

constructor(props){
    super(props);
    this.state=
    {
        numbers:[1,2,3,4,5,6,7,8,9,10]
    };
}

    remove(num){
        console.log("Printing from numbersList")
        console.log(num)
        this.setState(st=>
            ({numbers:st.numbers.filter(no => no !==num)}))
    }

    render(){
        // This is for printing the numbers from map not implemented
        let nums= this.state.numbers.map((n)=> <h1>{n}</h1> )

        let numb=this.state.numbers.map((no)=>
        <NRB n={no} remove={()=>this.remove(no)} />
        )

        return(
            <div  className="NumbersButton">
              {numb}
            </div>
        )
    }

}

export default NumberList;