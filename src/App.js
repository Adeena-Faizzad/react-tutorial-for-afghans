import { Routes, Route } from 'react-router-dom';

import './App.css';


import Greet from './Components/Greet';
import UseStateHook from './Components/UseStateHook';
import EventHandlingParent from './Components/EventHandlingParent';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import Stylesheet from './Components/Stylesheet';
import InlineStyle from './Components/InlineStyle';
import ModuleStyle from './Components/ModuleStyle';
import FormHandling from './Components/FormHandling';
import Home from './Components/RoutingFiles/Home';
import About from './Components/RoutingFiles/About';
import Navbar from './Components/RoutingFiles/Navbar';
import OrderSummary from './Components/RoutingFiles/OrderSummary';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
