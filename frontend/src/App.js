import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react';

// Screens
import HomeScreen from './Components/HomeScreen/HomeScreen'
import ProductScreen from './Components/ProductScreen/ProductScreen'
import CartScreen from './Components/CartScreen/CartScreen'

// Components
import NavBar from './Components/NavBar/NavBar';
import Backdrop from './Components/Backdrop/Backdrop'
import SideDrawer from './Components/SideDrawer/SideDrawer'
function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <NavBar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>    
    </Router>
  );
}

export default App;
