(function ($) {

/**
 * The recommended way for producing HTML markup through JavaScript is to write
 * theming functions. These are similiar to the theming functions that you might
 * know from 'phptemplate' (the default PHP templating engine used by most
 * Drupal themes including Omega). JavaScript theme functions accept arguments
 * and can be overriden by sub-themes.
 *
 * In most cases, there is no good reason to NOT wrap your markup producing
 * JavaScript in a theme function.
 */
Drupal.theme.prototype.mcfExampleButton = function (path, title) {
  // Create an anchor element with jQuery.
  return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
};

/**
 * Behaviors are Drupal's way of applying JavaScript to a page. The advantage
 * of behaviors over simIn short, the advantage of Behaviors over a simple
 * document.ready() lies in how it interacts with content loaded through Ajax.
 * Opposed to the 'document.ready()' event which is only fired once when the
 * page is initially loaded, behaviors get re-executed whenever something is
 * added to the page through Ajax.
 *
 * You can attach as many behaviors as you wish. In fact, instead of overloading
 * a single behavior with multiple, completely unrelated tasks you should create
 * a separate behavior for every separate task.
 *
 * In most cases, there is no good reason to NOT wrap your JavaScript code in a
 * behavior.
 *
 * @param context
 *   The context for which the behavior is being executed. This is either the
 *   full page or a piece of HTML that was just added through Ajax.
 * @param settings
 *   An array of settings (added through drupal_add_js()). Instead of accessing
 *   Drupal.settings directly you should use this because of potential
 *   modifications made by the Ajax callback that also produced 'context'.
 */
Drupal.behaviors.mcfExampleBehavior = {
  attach: function (context, settings) {
    // By using the 'context' variable we make sure that our code only runs on
    // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
    // we don't run the same piece of code for an HTML snippet that we already
    // processed previously. By using .once('foo') all processed elements will
    // get tagged with a 'foo-processed' class, causing all future invocations
    // of this behavior to ignore them.
    $('.some-selector', context).once('foo', function () {
      // Now, we are invoking the previously declared theme function using two
      // settings as arguments.
      var $anchor = Drupal.theme('mcfExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

      // The anchor is then appended to the current element.
      $anchor.appendTo(this);
    });
  }
};

/*
* In-Field Label jQuery Plugin
* http://fuelyourcoding.com/scripts/infield.html
*
* Copyright (c) 2009 Doug Neiner
* Dual licensed under the MIT and GPL licenses.
* Uses the same license as jQuery, see:
* http://docs.jquery.com/License
*
* @version 0.1
*/
(function($) { $.InFieldLabels = function(label, field, options) { var base = this; base.$label = $(label); base.$field = $(field); base.$label.data("InFieldLabels", base); base.showing = true; base.init = function() { base.options = $.extend({}, $.InFieldLabels.defaultOptions, options); base.$label.css('position', 'absolute'); var fieldPosition = base.$field.position(); base.$label.css({ 'left': fieldPosition.left, 'top': fieldPosition.top }).addClass(base.options.labelClass); if (base.$field.val() != "") { base.$label.hide(); base.showing = false; }; base.$field.focus(function() { base.fadeOnFocus(); }).blur(function() { base.checkForEmpty(true); }).bind('keydown.infieldlabel', function(e) { base.hideOnChange(e); }).change(function(e) { base.checkForEmpty(); }).bind('onPropertyChange', function() { base.checkForEmpty(); }); }; base.fadeOnFocus = function() { if (base.showing) { base.setOpacity(base.options.fadeOpacity); }; }; base.setOpacity = function(opacity) { base.$label.stop().animate({ opacity: opacity }, base.options.fadeDuration); base.showing = (opacity > 0.0); }; base.checkForEmpty = function(blur) { if (base.$field.val() == "") { base.prepForShow(); base.setOpacity(blur ? 1.0 : base.options.fadeOpacity); } else { base.setOpacity(0.0); }; }; base.prepForShow = function(e) { if (!base.showing) { base.$label.css({ opacity: 0.0 }).show(); base.$field.bind('keydown.infieldlabel', function(e) { base.hideOnChange(e); }); }; }; base.hideOnChange = function(e) { if ((e.keyCode == 16) || (e.keyCode == 9)) return; if (base.showing) { base.$label.hide(); base.showing = false; }; base.$field.unbind('keydown.infieldlabel'); }; base.init(); }; $.InFieldLabels.defaultOptions = { fadeOpacity: 0.5, fadeDuration: 300, labelClass: 'infield' }; $.fn.inFieldLabels = function(options) { return this.each(function() { var for_attr = $(this).attr('for'); if (!for_attr) return; var $field = $("input#" + for_attr + "[type='text']," + "input#" + for_attr + "[type='password']," + "input#" + for_attr + "[type='tel']," + "input#" + for_attr + "[type='email']," + "textarea#" + for_attr); if ($field.length == 0) return; (new $.InFieldLabels(this, $field[0], options)); }); }; })(jQuery);

 $("#webform-client-form-15").inFieldLabels();


})(jQuery);
