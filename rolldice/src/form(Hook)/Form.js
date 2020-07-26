import React from 'react'
import FormHook from './FormHook'
export default function Form(){
    // const[email,setEmail]=useState("")

    // const updateEmail=(e)=>{
    //     setEmail(e.target.value)
    // }
const [email,updateEmail,reset]=FormHook("")
return(
    <div>
    <h1>My Email is  {email}</h1>
    <input type="text"  onChange={updateEmail}  />
    <button onClick={reset}  >SubMit</button>
    </div>
)
}