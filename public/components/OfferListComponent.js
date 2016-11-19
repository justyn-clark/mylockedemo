var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var $ = require ('jquery');

const REST_API_URL = "/api/offer";

/****************************  OfferListComp  ******************************/
module.exports.OfferListComp = React.createClass({
  loadDataFromServer: function() {
    $.ajax({
      url: REST_API_URL,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data) {
        this.setState({serverData: data});
        //console.log(JSON.stringify(data));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadDataFromServer();
  },
  getInitialState: function() {
    return {serverData: [] };
  },

  render: function() {
      var htmlElementArray = this.state.serverData.map(function(anObject) {
        return (<tr>
                  <td>{anObject.key}</td>
                  <td>{anObject.offerName}</td>
                  <td>{anObject.amount}</td>
                  <td>{anObject.maximumRides}</td>
                  <td><ReactRouter.Link to={'/editOffer/' + anObject.key}>
                    <span className="glyphicon glyphicon-pencil"></span>
                  </ReactRouter.Link></td>
                <td><ReactRouter.Link to={'/deleteOffer/' + anObject.key}>
                    <span className="glyphicon glyphicon-remove"></span>
                  </ReactRouter.Link></td>
                </tr>);
      });
      return (
          <div>
              <ReactRouter.Link to={'/addOffers'}>
                  <span className="glyphicon glyphicon-plus"></span>Add Offer
              </ReactRouter.Link>

              <table className="table table-striped table-condensed table-hover">
                  <thead className="success">
                  <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>Amount</td>
                    <td>MaximumRides</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                  </thead>
                  <tbody>
                  {htmlElementArray}
                  </tbody>
              </table>
          </div>
      );
  }
});
