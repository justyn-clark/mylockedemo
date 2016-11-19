var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var $ = require ('jquery');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

const REST_API_URL = "/api/offer";

/****************************  AddOfferComp  ******************************/
module.exports.AddOfferComp = React.createClass({
  mixins: [LinkedStateMixin], //mandatory for using linkState in current component
  addRecord: function(e) {
    e.preventDefault();
    console.log("add record");
    $.ajax({
      url: REST_API_URL,
      dataType: 'json',
      type: 'POST',
      data: {
        key:              this.state.key,
        offerName:         this.state.offerName,
        amount:      this.state.amount,
        maximumRides:  this.state.maximumRides
      },
      success: function(data) {
        if (data){
          console.log("A record has been added succesfully");
          this.props.history.push('/offers');
        }else{
          console.log("Record could not be added.");
        }
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(REST_API_URL, status, err.toString());
      }.bind(this)
    });
  },
  //the following hChange... function is no longer required. Mixin stateLink is doing the task.
  handleChangeOfferName(event) {
    //console.log("handleChangeOfferName");
    this.setState({key: event.target.value});
  },

  getInitialState: function() {
    return {
      key: '',
      offerName: '',
      amount: 0,
      maximumRides: ''
     };
  },

  render: function() {
      return (
        <div>
          <h3>Add a new record</h3>
          <form className="well" onSubmit={this.addRecord}>

          Id Name*:
          <input type="text" placeholder="Id Name" required
            valueLink={this.linkState('key')} required className="form-control"/>

          Offer Name*:
          <input type="text" placeholder="Offer Name" required
            valueLink={this.linkState('offerName')} required className="form-control"/>

          Offer amount*:
          <input type="text" placeholder="Amount" required
            valueLink={this.linkState('amount')} required className="form-control"/>

          Offer Maximum Rides*:
          <input type="text" placeholder="Maximum Rides" required
            valueLink={this.linkState('maximumRides')} required className="form-control"/>

          <input type="submit" value="Add Record" className="form-control btn btn-warning"/>
          </form>
        </div>
      );
    }
});//AddDataComp

/****************************  EditOfferComp  ******************************/
module.exports.EditOfferComp = React.createClass({
  mixins: [LinkedStateMixin],
  updateRecord: function(e) {
    e.preventDefault();

    $.ajax({
      url: REST_API_URL + "/" + this.props.params.offerID,
      dataType: 'json',
      type: 'PUT',
      data: {
        key:              this.state.key,
        offerName:         this.state.offerName,
        amount:      this.state.amount,
        maximumRides:  this.state.maximumRides
      },
      success: function(data) {
        this.props.history.push('/offers');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(REST_API_URL, status, err.toString());
      }.bind(this)
    });
  },

  getRecordFromServer: function() {
    $.ajax({
      url: REST_API_URL + "/" + this.props.params.offerID,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data) {
        this.setState(data);
        //console.log(JSON.stringify(data));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    //console.log("executing EditOfferComp:componentDidMount");
    this.getRecordFromServer();
  },

  //the following hChange... function is no longer required. Mixin stateLink is doing the task.
  hChangeOfferDescription(event) {
    this.setState({offerDescription: event.target.value});
  },

  getInitialState: function() {
    return  {
        key: '',
        offerName: '',
        amount: 0,
        maximumRides: ''
       };
  },

  render: function() {
      return (
        <div>
          <h3>Update Record</h3>
          <form className="well" onSubmit={this.updateRecord}>
            Id Name*:
            <input type="text" placeholder="Offer ID" required
              valueLink={this.linkState('key')} required className="form-control"/>
            Offer Name*:
            <input type="text" placeholder="Offer Name" required
              valueLink={this.linkState('offerName')} required className="form-control"/>

            Offer amount*:
            <input type="text" placeholder="Amount" required
              valueLink={this.linkState('amount')} required className="form-control"/>

            Offer Maximum Rides*:
            <input type="text" placeholder="Maximum Rides" required
              valueLink={this.linkState('maximumRides')} required className="form-control"/>

          <input type="submit" value="Update" className="form-control btn btn-warning"/>
          </form>
        </div>
      );
    }
});//EditOfferComp


/****************************  DeleteOfferComp  ******************************/
module.exports.DeleteOfferComp = React.createClass({
  deleteRecord: function(e) {
    e.preventDefault();

    $.ajax({
      url: REST_API_URL + "/" + this.props.params.offerID,
      dataType: 'json',
      type: 'DELETE',
      data: {key: this.state.key},
      success: function(data) {
        this.props.history.push('/offers');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(REST_API_URL, status, err.toString());
      }.bind(this)
    });
  },

  getRecordFromServer: function() {
    $.ajax({
      url: REST_API_URL + "/" + this.props.params.offerID,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data) {
        this.setState(data);
        console.log(JSON.stringify(data));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    //console.log("executing EditOfferComp:componentDidMount");
    this.getRecordFromServer();
  },

  getInitialState: function() {
    return  {
        key: '',
        offerName: '',
        amount: 0,
        maximumRides: ''
       };
  },

  render: function() {
      return (
        <div>
          <h3>Delete Record</h3>
          <form className="well" onSubmit={this.deleteRecord}>
          Offer Name:
          <input type="text" placeholder="Offer Name" readOnly
            value={this.state.offerName} required className="form-control"/>

          Offer Amount:
          <input type="text" placeholder="Offer Amount" readOnly
            value={this.state.amount} required className="form-control"/>

          Maximum Rides:
          <input type="text" placeholder="Maximum Rides" readOnly
            value={this.state.maximumRides} required className="form-control"/>

            <input type="submit" value="Delete" className="form-control btn btn-warning"/>
          </form>
        </div>
      );
    }
});//DeleteOfferComp

/****************************  HomeComp  ******************************/
module.exports.HomeComp = React.createClass({
  render: function() {
      return (
        <div>
          <h3>Admin for MyLucke</h3>
        </div>
      );
    }
});

/****************************  ContactComp  ******************************/
module.exports.ContactComp = React.createClass({
  render: function() {
      return (
        <div>
          <h3>Contact</h3>
          <p>Web World, Bhugaon, Pune </p>
        </div>
      );
    }
});
