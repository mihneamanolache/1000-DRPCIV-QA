<?php
/*
Plugin Name: Arhiva documente PDF
Description: Create a custom page to display PDF documentes
Author: Mihnea Manolache
Author URI: https://github.com/mihneamanolache
Version: 1.0.4
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action('admin_menu', 'arhiva_documente_setup_menu');

function arhiva_documente_setup_menu(){
    add_menu_page( 'Documente PDF', 'Documente PDF', 'edit_posts', 'documente-pdf-custom-page', 'documente_pdf_custom_page' );
}
 
function documente_pdf_custom_page(){
    require( dirname( __FILE__ ) . '/arhiva-documente.php' );
};