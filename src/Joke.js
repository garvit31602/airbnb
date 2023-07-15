import React from "react";
import { ReactDOM } from "react";

function Joke(){
  var names=["garvit","alice","bob"];
  const element=names.map(item=>{
    return (<p>{names}</p>);
  })
  return(
    {element}
  )
}

export default Joke;

