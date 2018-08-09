module.exports = function(grunt){
	//configuração de incialização 
	grunt.initConfig({
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
					dest: '../assets/js/scripts.js'
				}]
			}
		},

		//comprimi o css
		cssmin: {
			target: {
				files: [{
					expand: true,
					src: ['../style.css'],
					dest: '../style',
					ext: '.min.css'
				}]
			}
		}

	});

	//carregando os plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//registrando as tarefas em comandos
};