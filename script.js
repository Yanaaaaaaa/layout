window.onscroll = function showheader() {
    var header = document.querySelector ('.header');
    if(window.pageYOffset > 700) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
};
