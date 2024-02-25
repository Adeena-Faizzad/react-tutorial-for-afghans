import React , {useState} from 'react'


function UseStateHook() {
    const [counter, setCounter] = useState(0);

    function increaser(){
        setCounter(counter + 1);
    }
  return (
    <div>
        <p>The counter is {counter} now press the button to increase it!</p>
        <button onClick={increaser}>Increase</button>
    </div>
  )
}

export default UseStateHook