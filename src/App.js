import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './screens/Home';
import Cart from "./screens/Cart";
import Login from './screens/Login';

function App() {
  return (
    <Router>
    <Provider store={store}>

        
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
            
         
        </Routes>
        </Provider>
    
    </Router>
  //   <div className="app">
  //     <Provider store={store}>
  //     <Header/>
  //  <Body/>
  //  </Provider>
     
  
  //   </div>
  );
}

export default App;
