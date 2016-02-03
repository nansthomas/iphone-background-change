var body        = document.querySelector('body'),
    screen      = document.querySelector('.screen');

setInterval(function(){

    if (body.classList == 'viewing-page-1') {
        screen.src = 'assets/img/screen1.png';
    } else {
        screen.src = 'assets/img/screen2.png'
    }

}, 100);
