window.onscroll = function showHeader() {
    var header = document.querySelector ('.header');
    if(window.pageYOffset > window.innerHeight) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
};

// window.onscroll = function showHeader() - данная функция выполняется при скроллинге страницы
// onscroll - когда экран прокручивается
// document.querySelector - находит первый элемент на странице с таким классом
// window.pageYOffset - количество пикселей, на которое прокручен документ по вертикали (вниз или вверх)
// header.classList.add('header_fixed') - добавляет элменту header класс header_fixed
// remove - удаляет от элемента класс
// window - объект, хранит всю информацию о нашем окне

