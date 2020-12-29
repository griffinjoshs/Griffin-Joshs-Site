//nav bar background-color change on scroll 

$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

//hamburger color change on click
$(document).ready(function () {
    $('.navbar-dark .navbar-toggler').click(function () {
        $(this).toggleClass('active');
    });
});

//change color of navbar when hamburger is clicked
$(document).ready(function () {
    $('.navbar-dark .navbar').click(function () {
        $(this).css("background-color", "black");
        $(this).toggleClass('active');
    });
});

$(".myBox").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});

