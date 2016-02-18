/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `DashboardController.open()`
   */
  open: function (req, res) {
  	App.find({
  		'owner': req.user.id
  	}).exec(function findAllAppsByUser(err, AllAppsByUser){
  		if(err){
  			console.log("Error occured while finding all apps by current user");
  			res.send("Failed");
  		} else{
  			//console.log(req.user);
  			//console.log(AllAppsByUser);
			return res.view('dashboard', {user: req.user, apps: AllAppsByUser});
  		}
  	})
  	
  }
};