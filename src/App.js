import './App.css';

import Greet from './Components/Greet';
import UseStateHook from './Components/UseStateHook';

function App() {
  return (
    <div className="App">
      <Greet city='Kabul' />
      <Greet city='Istanbul'/>
      <Greet city='Berlin'/>
      <Greet city='California'>
        <p>Long Term Plan</p>
      </Greet>
      <UseStateHook />
    </div>
  );
}

export default App;
