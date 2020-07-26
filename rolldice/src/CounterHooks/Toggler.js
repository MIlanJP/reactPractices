import React  from 'react';
import togglehook from './togglehook'
function Toggler(){
   const[isHappy,toggle]= togglehook(true)
   const[heartBroken,isBroken]=togglehook(false)
    return (
        // Another way to use toggle inline
        // <h1 onClick={()=>setIsHappy(!isHappy)}>Hey {isHappy?'Happy':"Not Happy"}</h1>
<div>
<h1 onClick={toggle}>Hey {isHappy?'Happy':"Not Happy"}</h1>
<h1 onClick={isBroken}>Hey {heartBroken?'heartBroken':"Heart"}</h1>

</div>

    )
}
 export default Toggler;