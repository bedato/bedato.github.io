function pageLoaded() {
    document.querySelector("body").style.opacity = 1;
}
window.onload = pageLoaded;

//Home Text Animation
gsap.to('.mainText', {
    duration: 2.5,
    autoAlpha: 1,
})

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
            gsap.to('.project', {
                duration: 1.5,
                autoAlpha: 1,
            })
        }
    });

    if ($('.aboutimg').isInViewport()) {
        const tl2 = gsap.timeline();
        tl2.to('.aboutimg', {
            duration: 1.2,
            autoAlpha: 1,
        }).to('.sae', {
            duration: 1.2,
            autoAlpha: 1,
        })
    }

    //Navbar highlighting
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

    if ($('.cntitem').hasClass('active')) {
        $('.abtitem').removeClass('active')
    }
});