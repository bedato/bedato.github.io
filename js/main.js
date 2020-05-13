function pageLoaded() {
    document.querySelector("body").style.opacity = 1;
}
window.onload = pageLoaded;


//scroll animation

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    $('.project').each(function() {
        if ($(this).isInViewport()) {
            const tl1 = gsap.timeline();
            tl1.to('.project', {
                duration: 1,
                autoAlpha: 1,
                x: 10
            })
        }
    });

    if ($('.aboutimg').isInViewport()) {
        const tl2 = gsap.timeline();
        tl2.to('.aboutimg', {
            duration: 0.2,
            autoAlpha: 1,
            x: 20
        }).to('.sae', {
            duration: 0.2,
            autoAlpha: 1,
            x: 20
        })
    }

    if ($('#portfolio > h1').isInViewport()) {
        $('.ptfitem').addClass('active')
    } else {
        $('.ptfitem').removeClass('active')
    }

    if ($('#about > div.col-md-7 > h2').isInViewport()) {
        $('.abtitem').addClass('active')
    } else {
        $('.abtitem').removeClass('active')
    }

    if ($('#contact > div.col-md-7 > h2').isInViewport()) {
        $('.cntitem').addClass('active')
    } else {
        $('.cntitem').removeClass('active')
    }
});