var body        = document.querySelector('body'),
    screen      = document.querySelector('.screen');

setInterval(function(){

    if (body.classList == 'viewing-page-1') {
        screen.src = 'assets/img/screen1.jpg';
    } else if (body.classList == 'viewing-page-2') {
        screen.src = 'assets/img/screen2.jpg';
    } else if (body.classList == 'viewing-page-3') {
        screen.src = 'assets/img/screen3.jpg';
    }

}, 100);
