(function (jQuery) {
jQuery(document).ready(function() {
            createDropDown();

            jQuery(".dropdown dt a").click(function() {
                jQuery(".dropdown dd ul").toggle();
            });

            jQuery(document).bind('click', function(e) {
                var jQueryclicked = jQuery(e.target);
                if (! jQueryclicked.parents().hasClass("dropdown"))
                    jQuery(".dropdown dd ul").hide();
            });

            jQuery(".dropdown dd ul li a").click(function() {
                var text = jQuery(this).html();
                jQuery(".dropdown dt a").html(text);
                jQuery(".dropdown dd ul").hide();

                var source = jQuery(".domain-list select");
                source.val(jQuery(this).find("span.value").html())
            });
        });


            function createDropDown(){
            var source = jQuery(".domain-list select");
            var selected = source.find("option[selected]");
            var options = jQuery("option", source);

            jQuery(".domain-list").append('<dl id="target" class="dropdown"></dl>')
            jQuery(".domain-list select").hide();
            jQuery("#target").append('<dt><a href="#">' + selected.text() +
                '<span class="value">' + selected.val() +
                '</span></a></dt>')
            jQuery("#target").append('<dd><ul></ul></dd>')

            options.each(function(){
                jQuery("#target dd ul").append('<li><a href="#">' +
                    jQuery(this).text() + '<span class="value">' +
                    jQuery(this).val() + '</span></a></li>');
            });
        }
})(jQuery);
