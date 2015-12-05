shunDev = function(){

    var self = this;

    self.shunPhrases = [
        'Your code fucking sucks',
        'Your code is such garbage',
        'You can\'t even fucking catch errors!',
        'You can\'t fix stupid',
        'Hide that one from the boss, dipshit.',
        'Fuck documenting code, my code is the documentation',
        'Perl would have got the job done better',
        'You are currently typing 20 typos per minute',
        'You successful compliation to failed complilation rate is 1/50',
        'Smile! The codes due in 24 hours',
        'You would be better off trying to read brail than this code',
        'Are you sure your a programmer...',
        'You are currently fucking up 4 times a minute'
        ];

    self.interval = null;

    self.addPhrase = function(phrase){
        self.shunPhrases.push(phrase);
    }//addPhrase

    self.shun = function(phrase){
        console.warn(phrase);
    }//shun

    self.enough = function(){
        clearTimeout(self.interval);
    }//enough

    self.randomlyShun = function(){
        self.randomShun();
        self.interval = setInterval(self.randomShun,15000);
    }//randomlyShun

    self.randomShun = function(){
        var i = Math.floor((Math.random() * 10) + 1) % self.shunPhrases.length;
        self.shun(self.shunPhrases[i]);
    }//randomShun

    self.randomlyShun();

    return self;

};

anything.prototype.shunDev = shunDev;
