var getRandomNumberInsecure = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min); // NOT chosen by fair dice roll, we can't guarentee this is random!

};

anything.prototype.getRandomNumberInsecure = getRandomNumberInsecure;