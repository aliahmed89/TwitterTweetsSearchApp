var chalk = require('chalk');
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            package: {
                options: {
                    cleancss: true,
                    ieCompat: true,
                    optimization: 5,
                    sourceMap: true,
                    sourceMapFilename: "dist/<%= pkg.version %>/<%= pkg.name %>.min.map"
                },
                files: {
                    "dist/<%= pkg.version %>/<%= pkg.name %>.css": "src/autoload.less"
                }
            },
            simple: {
                options: {
                    cleancss: true,
                    ieCompat: true
                },
                files: {
                    "dist/<%= pkg.version %>/<%= pkg.name %>.css": "src/autoload.less"
                }
            }
        },
        autoprefixer: {
            options: {
                diff: true,
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                safe: true,
                map: true
            },
            production: {
                src: "dist/<%= pkg.version %>/<%= pkg.name %>.css"
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            production: {
                files: [{
                    expand: true,
                    cwd: 'dist/<%= pkg.version %>/',
                    src: ['*.css', '!*.min.css'],
                    dest: "dist/<%= pkg.version %>/min/",
                    ext: '.min.css'
                }]
            }
        },
        compress: {
            production: {
                options: {
                    pretty: true,
                    level: 1,
                    archive: "arch/<%= pkg.name %>-<%= pkg.version %>.zip"
                },
                files: [
                    {
                        src: ['dist/<%= pkg.version %>/*'],
                        dest: 'arch/',
                        filter: 'isFile'
                    },
                    {
                        src: ['dist/<%= pkg.version %>/min/*.css'],
                        dest: 'arch/',
                        filter: 'isFile'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-compress');

    var doCompress = grunt.option('compress') || false;
    grunt.registerTask('material-design-build', 'Building material design', function() {
        var queue = [];

        if(grunt.option('full')) {
            grunt.option('no-auto-prefix', false);
            grunt.option('minify', true);
            grunt.option('compress', true);
            grunt.option('map', true);
        }

        if(grunt.option('map') === true) {
            queue.push('less:package');
        } else {
            queue.push('less:simple');
        }

        if(!(grunt.option('no-auto-prefix') === true)) {
            queue.push('autoprefixer')
        }

        if(grunt.option('minify') === true) {
            queue.push('cssmin');
        }

        if(grunt.option('no-compress') === true) {
            grunt.option('compress', false);
        }
        if(grunt.option('compress') === true) {
            queue.push('compress');
        }
        grunt.log.writeln('Executing queue:: ' + chalk.magenta(queue.join(', ')));
        try {
            grunt.task.run(queue);
        } catch(ex) {
            grunt.log.writeln(chalk.red('\nThere were some errors while building!'));
        }

    });

    grunt.registerTask('default', ['material-design-build']);
};
