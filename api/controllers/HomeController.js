/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `HomeController.open()`
   */
  open: function (req, res) {
  	console.log(req);
  	res.view('homepage');
  	// if(req.user){
  	// 	res.redirect('/dashboard');
  	// } else{
  	// 	res.render('homepage');
  	// }
  }
};

