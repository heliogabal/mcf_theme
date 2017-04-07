<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * MCF theme.
 */

/**
 * Implements hook_preprocess_block()
 */

function mcf_theme_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    $form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    $form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    $form['search_block_form']['#size'] = 8;  // define size of the textfield
    $form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    //$form['actions']['submit']['#value'] = t('GO!'); // Change the text on the submit button
    //$form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search-button.png');

    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }
}

/**
 * Returns the html for user's file browser tab.
 */
function mcf_theme_imce_user_page($variables) {
  global $user;
  $account = $variables['account'];
  $options = array();
  //switch to account's active folder
  if ($user->uid == 1 && $account->uid != 1) {
    $imce = imce_initiate_profile($account);
    $options['query'] = array('dir' => $imce['dir']);
  }
  return '<iframe src="' . url('imce', $options) . '" frameborder="0" style="border: 1px solid #eee; width: 99%; height: 720px" class="imce-frame"></iframe>';
}

function mcf_theme_js_alter(&$js) {
    unset($js['misc/tableheader.js']);
}
