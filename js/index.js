$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['Section 1', 'Section 2','Section 3','Section 4',],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
    });
});

/*window.addEventListener('scroll', function(){
    console.log('entrou');
    document.getElementById("fullpage").classList.remove('blue');
    document.getElementById("fullpage").classList.add('red');
})*/