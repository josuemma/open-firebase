/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	restricted: function(req, res){
		return res.ok("If you can see this you are authenticated.")
	},

	open: function(req, res){
		return res.ok("This method is open!");
	}
	
};

