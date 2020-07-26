import React, { Component } from 'react'
 class BG extends Component{
static defaultProps={
    colors:['red','blue','green','yellow']
 };
constructor(props){
    super(props)
    this.state={color:'cyan'};
    this.changeBG=this.changeBG.bind(this);
}

changeBG(newcolor){
this.setState({color:newcolor})
}

render(){
    return(
        <div className='btnList'style={{backgroundColor:this.state.color}} >
        {this.props.colors.map((c)=>{
            let colorofbutton={backgroundColor:c}
            // instead you can directly use arrow fucntions (onClick=(()=>this.changeBG(c)))
            return <button style={colorofbutton}  onMouseLeave={(()=>this.changeBG(c))}  onClick={this.changeBG.bind(this,c)}  ></button>
        })}
        </div>
    )
}
 }
export default BG;

