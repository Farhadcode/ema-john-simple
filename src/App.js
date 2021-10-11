

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import OrderReview from './component/OrderReview/OrderReview';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import Login from './component/Login/Login';
import Register from './component/Register/Register';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route exact path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/review">
          <OrderReview></OrderReview>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
