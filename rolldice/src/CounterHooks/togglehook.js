import {useState} from 'react';
 function ToggleHook(initialValue=true){
const[state,setState]= useState(initialValue);
const toggle=()=>{
    setState(!state);
}
return [state,toggle]
}
export default ToggleHook;