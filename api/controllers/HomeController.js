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
  	console.log(req.subdomains);
  	if(req.session.authenticated){
  	 	res.redirect('/dashboard');
  	} else{
  	 	res.view('homepage');
  	}
  }
};

