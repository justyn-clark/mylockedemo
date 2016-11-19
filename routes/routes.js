var mongoose = require( 'mongoose' );
var UserModel = mongoose.model( 'UserModel' );
var GroceryItemsModel = mongoose.model( 'GroceryItemsModel' );
var chalk = require('chalk');

exports.authHandler = function (req, res){
	var nmReq = req.body.loginName;
	var pwdReq = req.body.loginPassword;
	var authResult;
  req.session.loggedin = false;

	UserModel.findOne({username:nmReq}, function(err, userObj){
    var authResult;
    if(userObj === null){
      authResult = false;
    } else if (pwdReq === userObj.password){
      authResult = true;
	  } else{
			authResult = false;
	  }
    res.json(authResult);
		console.log("Login Name %s, Password %s. Login outcome [%s]", nmReq, pwdReq, authResult);
	});//UserModel.findOne
}; //authHandler


exports.registerUserHandler = function(req, res){
   var newuser = new UserModel();
   newuser.username = req.body.loginName;;
   newuser.email = req.body.email;
   newuser.password = req.body.loginPassword;
   console.log("Reg " + newuser.username + "  " + newuser.email + " " + newuser.password);
   //save to db through model :: Add a record
   newuser.save(function(err, savedUser){
     if(err){
       var message = "A user already exists with that username or email";
       console.log(message);
       res.json(false);
     }else{
       req.session.newuser = savedUser.username;
       res.json(true);
     }
   }); //newuser.save
};//registerUserHandler


/* ******** ******** ******** ******** ******** ********  */
/* ******** ******** REST API HANDLERS ******** ********  */
/* ******** ******** ******** ******** ******** ********  */
exports.getAllHandler = function (req, res){
  //app.get('api//groceryitem'
  GroceryItemsModel.find({}, function(err, theArray){
    if (!err){
      res.json(theArray);
    }
  }); //GroceryItemsModel.find
}; //getAllHandler

exports.getOneHandler = function(req, res){
  //app.get('api/groceryitem/:id'
  var itemToEdit = req.params.id;
  console.log("itemToEdit="  + itemToEdit);
  GroceryItemsModel.findOne({key:itemToEdit}, function(err, aRec){
  if (!err){
    console.log(chalk.yellow("Going to edit -> [" + aRec.key + "]"));
    res.json(aRec);
  }

}); //GroceryItemsModel.findOne
}; //getOneHandler

exports.postOneHandler = function(req, res){
  //app.post('/api/groceryitem'
	var keyReq 						= req.body.key ? req.body.key: "";
	var offerNameReq 				= req.body.offerName ? req.body.offerName : "";
	var	amountReq 			= req.body.amount ? req.body.amount : 0;
	var	maximumRidesReq 	= req.body.maximumRides ? req.body.maximumRides : "";


  var message;
  var newRecord = new GroceryItemsModel();
      newRecord.key 						= keyReq;
      newRecord.offerName				= offerNameReq;
      newRecord.amount 		= amountReq;
      newRecord.maximumRides = maximumRidesReq;


   //save to db through model :: Add a record
  newRecord.save(function(err, savedUser){
	  if(err){
	     res.json(false);
	     console.log(newRecord.key + " could not be added");
	   }else{
	     res.json(true);
	     console.log(newRecord.key + " added successfully");
	   }
   }); //newRecord.save
}; //postOneHandler

exports.updateOneHandler = function(req, res){
  //app.put('/api/groceryitem'
  var keyReq 						= req.params.id ? req.params.id: "";

	var offerNameReq 				= req.body.offerName ? req.body.offerName : "";
	var	amountReq 			= req.body.amount ? req.body.amount : 0;
	var	maximumRidesReq 	= req.body.maximumRides ? req.body.maximumRides : "";


  var message;
  //update rec through model
  GroceryItemsModel.update({key:keyReq},
                    {$set: {

                        offerName: 				offerNameReq,
                        amount: 			amountReq,
                        maximumRides: 	maximumRidesReq,

										 }},
                    {multi:false}, function(err, updatedRec){
   if(err){
     res.json(false);
   }else{
     res.json(true);
   }
  });
}; //updateOneHandler

exports.deleteOneHandler = function(req, res){
  //app.delete('/api/groceryitem/:id'
  var recToEdit = req.params.id;
  GroceryItemsModel.remove({key:recToEdit}, function(err, deletedRec){
    if(err){
       res.json(false);
       console.log(recToEdit + " could not be deleted");
     }else{
       res.json(true);
       console.log(recToEdit + " deleted successfully");
     }
  }); //GroceryItemsModel.remove
}; //deleteOneHandler
