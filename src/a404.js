var a404 = function () {
    $('body').prepend('<div class="a404"></div><div class="a404-message"><h1>404</h1><h2>There\'s nothing here.</h2></div> ');
    $('.a404').attr('style', 'position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: url("http://assets-9gag-fun.9cache.com/s/fab0aa49/9513ffa5939495f655f7ab8edb7f40ce59feb032/static/dist/web6/img/404/bg.gif") center center no-repeat;background-size: cover;z-index: 1500;opacity: .2;');
    $('.a404-message').attr('style', 'text-align: center;position: absolute;width: 100%;top: 50%;transform: translateY(-50%);z-index: 1501');
    $('.a404-message h1').attr('style', 'font-size: 144px;font-weight: 100;margin-bottom: 16px;color: #fff;');
    $('.a404-message h2').attr('style', 'margin-bottom: 24px;color: #fff;');
};

anything.prototype.a404 = a404;