module.exports = function (grunt) {

    grunt.initConfig({
        'update_submodules': {
            default: {
                options: {
                    params: '--init --recursive'
                }
            }
        },

        'npm-command': {
            install_client: {
                options: {
                    cwd: './src_client'
                }
            }
        },

        'shell': {
            compile_Client:{
                options:{
                    execOptions:{
                        cwd: 'src_client'
                    }
                },
                command: 'ng build --prod --aot=false -op ../dist/public'
            }
        }
    });

    grunt.loadNpmTasks("grunt-update-submodules");
    grunt.loadNpmTasks('grunt-npm-command');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('publish_client', ['update_submodules', 'npm-command', 'shell:compile_Client']);

};