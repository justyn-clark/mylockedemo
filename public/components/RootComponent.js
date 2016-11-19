var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var $ = require ('jquery');

var { Router, Route, IndexRoute, IndexLink, Link } = ReactRouter;

/****************************  RootComp  ******************************/
module.exports.RootComp = React.createClass({
  getInitialState: function() {
    console.log("executing AppComp:getInitialState");
    return {data: []};
  },

  render: function() {
    return (
      <div>
        <h1>OFFERS</h1>
        <div className="navbar">
          <ul className="nav navbar-nav" style={{marginLeft: 0}}  >
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
});
