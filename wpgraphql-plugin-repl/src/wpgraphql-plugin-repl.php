<?php
/**
 * Plugin Name: WPGraphQL Plugin REPL
 * Description: Various integrations for the WPGraphQL REPL
 * Version: 0.0.1
 * Author: Alex Moon
 * Author URI: https://github.com/moonmeister
 */

add_action('enqueue_graphiql_extension', function () {
	wp_enqueue_script(
		'wp-graphql-repl-graphiql', // replace this with the handle of your script
		plugin_dir_url(__FILE__) . 'graphiql.js',
		// replace this with the path to your script
		['wp-graphiql', 'wp-graphiql-app'],
		// include at least the first 2 to ensure wp-graphiql is loaded before your script
		'v0.0.1',
		// replace with your version. (v1.0.1, etc)
		true // Whether to load in the footer. Leave true
	);

});
