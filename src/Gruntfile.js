module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	var phpMiddleware = require('connect-php');
	//configuração de incialização 
	grunt.initConfig({

		/*pkg: grunt.file.readJSON('package.json'),*/
		//plugins, referencia para arquivos
		concat: {
			js: {
				src: ['../assets/_js/*.js'],
				dest: '../assets/js/scripts.js',
			},
			css: {
				src: ['../assets/_css/*.css'],
				dest: '../style.css'
			}
		},

		//comprimi o arquivo js
		uglify: {
			js: {
				files:[{
					src: '../assets/js/scripts.js',
					dest: '../assets/js/scripts.min.js'
				}]
			}
		},

		//comprimi o css
		cssmin: {
			target: {
				files: [{
					expand: true,
					src: ['../style.css'],
					dest: '../assets/css/style',
					ext: '.min.css'
				}]
			}
		},
		
		connect: {
			server: {
				options: {
					port: 3000,
					livereload: 35729,
					hostname: 'localhost',
					open: true,
					base: '../',
				/*	middleware: function(connect, options) {
					   // Same as in grunt-contrib-connect
					   var middlewares = [];
					   var directory = options.directory ||
					   options.base[options.base.length - 1];
					   if (!Array.isArray(options.base)) {
					   	options.base = [options.base];
					   }

					  // Here comes the PHP middleware
					  middlewares.push(phpMiddleware(directory));

					    // Same as in grunt-contrib-connect
					    options.base.forEach(function(base) {
					    	middlewares.push(connect.static(base));
					    });

					    middlewares.push(connect.directory(directory));
					    return middlewares;
					}*/
				}
			}
		},
		// watch
		watch : {
			options: {
				livereload: true,
			},

			js: {
				files: '../assets/_js/*.js',
				tasks: ['concat', 'uglify']
			},

			css: {
				files: '../assets/_css/*.css',
				tasks: ['concat', 'cssmin']
			},

			html: {
				files: '../*.html'
			}
		},

		

	}); // End of initial config of grunt


	//carregando os plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');


	//registrando as tarefas em comandos
	grunt.registerTask('default', ['uglify', 'concat', 'cssmin']);
	grunt.registerTask('w', ['connect', 'watch']);

};