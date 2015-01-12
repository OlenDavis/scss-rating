module.exports = (grunt) ->
	grunt.initConfig
	    sass: 
	    	dist:
	    		files:
	    			"style.css" : "style.scss"

		watch:
			css:
				files: '*.scss',
				tasks: ['sass']

		coffee:
			compile:
				files:
					'main.js' : 'main.coffee'

	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-watch'

	grunt.registerTask 'default', ['watch']
	grunt.registerTask 'dev', ['sass', 'coffee']