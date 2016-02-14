/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var sails = require('sails');
var fs = require('fs');


module.exports = {
	open: function(req, res){
		if(req.params['id']){
			App.find({
				'id': req.params['id']
			}).exec(function(err, records){
				if(err){
					console.log("App not found");
						console.log(err);
						req.send("failed");
				} else{
					console.log("App opened with id: " + req.params['id']);
					req.send("success");
				}
			});
		}
	},
	create: function(req, res){
		if(req.body['data']){
			 App.create({
			 	data: req.body['data']
			 }).exec(function (err, created){
			 	if(err){
			 		console.log(err);
			 		req.send("failed");
			 	} else{
			 		console.log('Successfully created App!');
			 		req.send("success");	
			 	}
			 });
		}
		return res.send("success");
	}
};