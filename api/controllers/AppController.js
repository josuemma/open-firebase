/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var sails = require('sails');
var fs = require('fs');
var url = require('url');

module.exports = {
	open: function(req, res){
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		if(query['id']){
			App.find({
				'id': query['id']
			}).exec(function(err, AppWithId){
				if(err){
					console.log("App not found");
						console.log(err);
						res.send("failed");
				} else{
					console.log("App opened with id: " + query['id']);
					console.log(AppWithId);
					res.view('app', {app: AppWithId[0]});
				}
			});
		}
	},
	create: function(req, res){
		if(req.body['data']){
			 App.create({
			 	data: req.body['data'],
			 	name: req.body['name'],
			 	url: req.body['url'],
			 	owner: req.user
			 }).exec(function createApp(err, created){
			 	if(err){
			 		console.log(err);
			 		return res.send("failed");
			 	} else{
			 		console.log('Successfully created App!');
			 		return res.send("success");	
			 	}
			 });
		}
	}
	// all: function(req, res){
	// 	if(req.params['id']){
	// 		App.find({
	// 			'owner': 
	// 		})
	// 	}
	// }
};