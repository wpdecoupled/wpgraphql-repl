<?php

/*
 * Plugin Name: WPGraphQL REPL
 * Description: Used to setup and configure WordPress for use with WPGraphQL REPL
 * Version: 0.0.1
 * Author: Alex Moon of WPDecoupled
 * Author URI: https://wpdecoupled.dev
 */

/**
 * Overrides the "public_introspection_enabled" setting field in the GraphQL Settings to be
 * checked and disabled so users can't uncheck it.
 *
 * @param array $field_config The field config for the setting
 * @param string $field_name The name of the field (unfilterable in the config)
 * @param string $section The slug of the section the field is registered to
 *
 * @return mixed
 */
function filter_graphql_introspection_setting_field($field_config, $field_name, $section)
{
	if ('graphql_general_settings' === $section && 'public_introspection_enabled' === $field_name) {
		$field_config['value'] = 'on';
		$field_config['disabled'] = true;
		$field_config['desc'] = $field_config['desc'] . ' (<strong>' . __('Force enabled by WPGraphQL REPL. WPGraphQL REPL requires WPGraphQL
	introspection to communicate with WordPress.', 'WPGraphQL REPL') . '</strong>)';
	}

	return $field_config;
}
