$(document).ready(function () {
    foo = $('#typewriter');
    foo.typer(['HTML, CSS, JAVASCRIPT, JQUERY', 'PHP, MYSQL, LARAVEL']);
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 250,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();
});