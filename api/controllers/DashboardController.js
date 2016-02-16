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
  	return res.view('dashboard', {user: req.user});
  }
};