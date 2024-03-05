import React, {useState} from 'react'

// there are 4 ways to conditionally render
// if else
//element variable
//terinary operator 
//short circut logic &&

function ConditionalRendering() {
    const [loggedIn, setLoggedIn] = useState(false);
    
    const clickHandler = () =>{
        setLoggedIn(true);
    }

  return (
    <div>
        {
            loggedIn ? <h1>Welcome Ahmad</h1> : <h1>Welcome Guest</h1>
        }
        
        <button onClick={clickHandler}>Login</button>
    </div>
  )
}

export default ConditionalRendering