var prevScrollpos = window.pageYOffset;

//MENU SCROLL
$(".menu a").click(function () {
    var name = $(this).attr('name');
    var mh = $('.menu').height();
    $('body').animate({
        scrollTop: $("#" + name).offset().top - mh
    }, 700);
});

//SCROLLSPY								 
function scrollSpy() {
    var mh = $('.menu').height();
    $('#inicio').css("padding-top", mh + "px");

    $(".menu a").removeClass("active");

    var divs = [];
    $(".menu a").each(function (i) {
        var appo = $(this).attr("name");
        divs[i] = $("#" + appo).offset().top;

    });

    var pos = $(window).scrollTop();
    var off = ($(window).height()) / 2;

    pos = pos + off;

    var index = 0;

    for (index = 0; index < divs.length; index++) {
        if (pos < divs[index]) {
            break;
        }
    }
    index--;
    $(".menu li:eq(" + index + ") a").addClass("active");
    $(".menu").css("display", "inline-block");
};

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {

        document.getElementById("navbar").style.top = "0";
        $('nav').addClass('black');
    } else {
        document.getElementById("navbar").style.top = "-50px";
        $('nav').removeClass('black');
    }
    prevScrollpos = currentScrollPos;
}

$(window).scroll(function () {
    scrollFunction();
    scrollSpy();
});
$(document).ready(function () {
    scrollSpy();
});
