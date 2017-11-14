$(document).ready(function ()
{

    "use strict";

    initbackTop();
    function initbackTop() {

        "use strict";

        var jQuerybackToTop = jQuery("#back-top");
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuerybackToTop.addClass('show');
            } else {
                jQuerybackToTop.removeClass('show');
            }
        });
        jQuerybackToTop.on('click', function (e) {
            jQuery("html, body").stop().animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        });
    }

    initStickyHeader();
    function initStickyHeader() {

        "use strict";

        var win = jQuery(window),
			stickyClass = 'sticky';

        jQuery('#header').each(function () {
            var header = jQuery(this);
            var headerOffset = header.offset().top || 0;
            var flag = true;

            function scrollHandler() {
                if (win.scrollTop() > headerOffset) {
                    if (flag) {
                        flag = false;
                        header.addClass(stickyClass);
                    }
                } else {
                    if (!flag) {
                        flag = true;
                        header.removeClass(stickyClass);
                    }
                }
            }

            scrollHandler();
            win.on('scroll resize orientationchange', scrollHandler);
        });
    }
    initAddClass();
    function initAddClass() {
        "use strict";

        jQuery('.nav-opener').on("click", function (e) {
            e.preventDefault();
            jQuery("body").toggleClass("nav-active");
        });
        jQuery('#nav .smooth').on("click", function () {
            if (jQuery("body").hasClass("nav-active")) {
                setTimeout(function () {
                    jQuery("body").removeClass("nav-active");
                }, 800);
            }
        });
    }

    $.scrollIt({
        topOffset: -65,
        scrollTime: 1500,
        easing: 'easeInOutExpo'
    });



    initResponsiveClasses();
    // *** Responsive Classes *** //
    function initResponsiveClasses() {
        "use strict";

        var $body = $("body");
        var jRes = jRespond([
			{
			    label: "smallest",
			    enter: 0,
			    exit: 479
			}, {
			    label: "handheld",
			    enter: 480,
			    exit: 767
			}, {
			    label: "tablet",
			    enter: 768,
			    exit: 991
			}, {
			    label: "laptop",
			    enter: 992,
			    exit: 1199
			}, {
			    label: "desktop",
			    enter: 1200,
			    exit: 10000
			}
        ]);
        jRes.addFunc([
			{
			    breakpoint: "desktop",
			    enter: function () { $body.addClass("device-lg"); },
			    exit: function () { $body.removeClass("device-lg"); }
			}, {
			    breakpoint: "laptop",
			    enter: function () { $body.addClass("device-md"); },
			    exit: function () { $body.removeClass("device-md"); }
			}, {
			    breakpoint: "tablet",
			    enter: function () { $body.addClass("device-sm"); },
			    exit: function () { $body.removeClass("device-sm"); }
			}, {
			    breakpoint: "handheld",
			    enter: function () { $body.addClass("device-xs"); },
			    exit: function () { $body.removeClass("device-xs"); }
			}, {
			    breakpoint: "smallest",
			    enter: function () { $body.addClass("device-xxs"); },
			    exit: function () { $body.removeClass("device-xxs"); }
			}
        ]);
    }

    initParallaxStellar();
    function initParallaxStellar() {
        "use strict";

        var $body = $("body");
        if ($body.hasClass("device-lg") || $body.hasClass("device-md")) {
            $.stellar({
                horizontalScrolling: false, // don't change this option
                // verticalScrolling: false,
                verticalOffset: 0,
                responsive: true, // false
            });
        }
    }

    initVegasSlider();
    // Vegas Slider init
    function initVegasSlider() {
        "use strict";

        jQuery("#bgvid").vegas({
            slides: [
              {
                  src: 'http://placehold.it/1920x1080',
                  video: {
                      src: [
                          'video/html.mov',
                          'video/html.mp4'
                      ],
                      loop: true,
                      timer: false,
                      mute: true
                  }
              }
            ]
        });
    }

    initTextRotator2();
    // TextRotator2 init
    function initTextRotator2() {
        "use strict";

        $('#rotating2').textillate({
            // the default selector to use when detecting multiple texts to animate
            selector: '.rotating-hold',

            // enable looping
            loop: true,

            // sets the minimum display time for each text before it is replaced
            minDisplayTime: 2000,

            // sets the initial delay before starting the animation
            // (note that depending on the in effect you may need to manually apply 
            // visibility: hidden to the element before running this plugin)
            initialDelay: 0,

            // set whether or not to automatically start animating
            autoStart: true,

            // custom set of 'in' effects. This effects whether or not the 
            // character is shown/hidden before or after an animation  
            inEffects: [],

            // custom set of 'out' effects
            outEffects: ['fadeIn'],

            // in animation settings
            in: {
                // set the effect name
                effect: 'rotateInUpRight',

                // set the delay factor applied to each consecutive character
                delayScale: 1.5,

                // set the delay between each character
                delay: 50,

                // set to true to animate all the characters at the same time
                sync: false,

                // randomize the character sequence 
                // (note that shuffle doesn't make sense with sync = true)
                shuffle: false,

                // reverse the character sequence 
                // (note that reverse doesn't make sense with sync = true)
                reverse: false,

                // callback that executes once the animation has finished
                callback: function () { }
            },

            // out animation settings.
            out: {
                effect: 'fadeOut',
                delayScale: 1.5,
                delay: 50,
                sync: true,
                shuffle: false,
                reverse: false,
                callback: function () { }
            },

            // callback that executes once textillate has finished 
            callback: function () { },

            // set the type of token to animate (available types: 'char' and 'word')
            type: 'char'
        });
    }

    initTextRotator3();
    // TextRotator3 init
    function initTextRotator3() {
        "use strict";

        jQuery("#rotating3").typed({
            strings: ["Present", "Produce", "Preview"],
            loop: true,
            typeSpeed: 100
        });
    }

    initStyleChanger();
    // style changer
    function initStyleChanger() {
        "use strict";

        var element = jQuery('#style-changer');

        if (element) {
            $.ajax({
                url: element.attr('data-src'),
                type: 'get',
                dataType: 'text',
                success: function (data) {
                    var newContent = jQuery('<div>', {
                        html: data
                    });

                    newContent.appendTo(element);
                }
            });
        }
    }

});
jQuery(window).on("load", function () {
    "use strict";

    jQuery("#loader").delay(600).fadeOut(300);
});
jQuery(window).on("resize", function () {

    initParallaxStellar();
    function initParallaxStellar() {
        "use strict";

        var $body = $("body");
        if ($body.hasClass("device-lg") || $body.hasClass("device-md")) {
            $.stellar({
                horizontalScrolling: false, // don't change this option
                // verticalScrolling: false,
                verticalOffset: 0,
                responsive: true, // false
            });
        }
    }

    initResponsiveClasses();
    // *** Responsive Classes *** //
    function initResponsiveClasses() {
        "use strict";

        var $body = $("body");
        var jRes = jRespond([
			{
			    label: "smallest",
			    enter: 0,
			    exit: 479
			}, {
			    label: "handheld",
			    enter: 480,
			    exit: 767
			}, {
			    label: "tablet",
			    enter: 768,
			    exit: 991
			}, {
			    label: "laptop",
			    enter: 992,
			    exit: 1199
			}, {
			    label: "desktop",
			    enter: 1200,
			    exit: 10000
			}
        ]);
        jRes.addFunc([
			{
			    breakpoint: "desktop",
			    enter: function () { $body.addClass("device-lg"); },
			    exit: function () { $body.removeClass("device-lg"); }
			}, {
			    breakpoint: "laptop",
			    enter: function () { $body.addClass("device-md"); },
			    exit: function () { $body.removeClass("device-md"); }
			}, {
			    breakpoint: "tablet",
			    enter: function () { $body.addClass("device-sm"); },
			    exit: function () { $body.removeClass("device-sm"); }
			}, {
			    breakpoint: "handheld",
			    enter: function () { $body.addClass("device-xs"); },
			    exit: function () { $body.removeClass("device-xs"); }
			}, {
			    breakpoint: "smallest",
			    enter: function () { $body.addClass("device-xxs"); },
			    exit: function () { $body.removeClass("device-xxs"); }
			}
        ]);
    }
});


