<?php
/**
 * Plugin Name:       Sc Text Overlay
 * Description:       Gutenberg Block - Adds a section with a background image and a text overlay box
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Myles Taylor
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sc-text-overlay
 *
 * @package           create-block
 */


// Enqueue editor assets
function enqueue_editor_assets() {

  wp_enqueue_script(
    'my-image-overlay-block',
    plugins_url('build/index.js', __FILE__),
    array('wp-blocks', 'wp-element', 'wp-editor'),
    filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
  );

  wp_enqueue_style(
    'my-image-overlay-block-editor-style',
    plugins_url('build/index.css', __FILE__),
    array(),
    filemtime(plugin_dir_path(__FILE__) . 'build/index.css')
  );
  
}
add_action('enqueue_block_editor_assets', 'enqueue_editor_assets');



// Enqueue front end assets
function enqueue_front_end_assets() {

	wp_enqueue_style(
    'my-image-overlay-block-front-end-style',
    plugins_url('build/style-index.css', __FILE__),
    array(),
    filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
  );

}
add_action('wp_enqueue_scripts', 'enqueue_front_end_assets');


