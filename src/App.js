import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import Shop from './pages/Shop/Shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './pages/Orderd/Order';
import Notfound from './pages/notFound/Notfound';
import Manage from './pages/Manage/Manage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
     <Header></Header>
     <Router>
     <Switch>
        <Route exact path="/">
         <Shop></Shop>
        </Route>
        <Route path="/shop">
           <Shop></Shop>
        </Route>
        <Route path='/order'>
        <Order></Order>
        </Route>
        <Route path="/manage">
        <Manage></Manage>
        </Route>
        <Route path="/:key">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path='/*'>
          <Notfound></Notfound>
        </Route>
     </Switch>
     </Router>
 
          
    </div>
  );
}

export default App;
