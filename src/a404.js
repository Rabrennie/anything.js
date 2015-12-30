var a404 = function () {
    //Main Background
    var a404 = document.createElement('div');
    a404.style.position = 'absolute';
    a404.style.top = '0';
    a404.style.left = '0';
    a404.style.width = '100%';
    a404.style.height = '100%';
    a404.style.background = 'url("http://assets-9gag-fun.9cache.com/s/fab0aa49/9513ffa5939495f655f7ab8edb7f40ce59feb032/static/dist/web6/img/404/bg.gif") center center no-repeat';
    a404.style.backgroundSize = 'cover';
    a404.style.zIndex = '1500';
    a404.style.opacity = '.2';

    document.body.appendChild(a404);

    //Texts Container
    var a404MessageContainer = document.createElement('div');
    a404MessageContainer.style.position = 'absolute';
    a404MessageContainer.style.textAlign = 'center';
    a404MessageContainer.style.width = '100%';
    a404MessageContainer.style.top = '50%';
    a404MessageContainer.style.transform = 'translateY(-50%)';
    a404MessageContainer.style.zIndex = '1501';

    //Texts
    //H1
    var a404H1 = document.createElement('h1');
    a404H1.innerHTML = '404';
    a404H1.style.fontSize = '144px';
    a404H1.style.fontWeight = '100';
    a404H1.style.marginBottom = '16px';
    a404H1.style.color = '#ffffff';
    a404MessageContainer.appendChild(a404H1);

    //H2
    var a404H2 = document.createElement('h2');
    a404H2.innerHTML = 'There\'s Nothing Here.';        
    a404H2.style.marginBottom = '24px';
    a404H2.style.color = '#ffffff';
    a404H2.style.fontSize = '30px';
    a404H2.style.fontWeight = '100';
    a404MessageContainer.appendChild(a404H2);

    document.body.appendChild(a404MessageContainer);
};

anything.prototype.a404 = a404;