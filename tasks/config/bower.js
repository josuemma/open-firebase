/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */
module.exports = function(grunt) {

	grunt.config.set('bower', {
		install: {
			options: {
				targetDir: './assets/vendor',
				install: true,
				copy: true,
				verbose: true,
				cleanTargetDir: true,
				cleanBowerDir: false,
				bowerOptions: {}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');
};
