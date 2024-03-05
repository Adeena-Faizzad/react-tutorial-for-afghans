import './App.css';


import Greet from './Components/Greet';
import UseStateHook from './Components/UseStateHook';
import EventHandlingParent from './Components/EventHandlingParent';
import ConditionalRendering from './Components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      {/* <Greet city='Kabul' />
      <Greet city='Istanbul'/>
      <Greet city='Berlin'/>
      <Greet city='California'>
        <p>Long Term Plan</p>
      </Greet>
      <UseStateHook />
      <EventHandlingParent /> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;
