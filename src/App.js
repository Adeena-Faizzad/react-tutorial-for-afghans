import './App.css';


import Greet from './Components/Greet';
import UseStateHook from './Components/UseStateHook';
import EventHandlingParent from './Components/EventHandlingParent';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import Stylesheet from './Components/Stylesheet';
import InlineStyle from './Components/InlineStyle';
import ModuleStyle from './Components/ModuleStyle';

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
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <Stylesheet /> */}
      {/* <InlineStyle /> */}
      <ModuleStyle />
    </div>
  );
}

export default App;
