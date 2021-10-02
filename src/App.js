

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import OrderReview from './component/OrderReview/OrderReview';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';


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
        <Route exact path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route exact path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
