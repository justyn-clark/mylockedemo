var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var comp = require('./components/GroceryComponents.js');
var rootComp = require('./components/RootComponent.js');
var ilComp = require('./components/OfferListComponent.js');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

var { Router, Route, IndexRoute, hashHistory, IndexLink, Link } = ReactRouter;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={rootComp.RootComp}>
      <IndexRoute component={comp.HomeComp}/>
      <Route path="offers" component={ilComp.OfferListComp} />
      <Route path="addOffers" component={comp.AddOfferComp} />
      <Route path="contact" component={comp.ContactComp} />
      <Route path="editOffer/:offer" component={comp.EditOfferComp} />
      <Route path="deleteOffer/:offer" component={comp.DeleteOfferComp} />
    </Route>
  </Router>,
  document.getElementById('mount-point')
);
