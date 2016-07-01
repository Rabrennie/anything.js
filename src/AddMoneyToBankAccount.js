/**
 * Opens a transaction dialog to transfer 50 USD to a given bank account.
 * @return {Abstract} Happiness
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var addMoneyToBankAccount = function() {
    var transactionFrame = document.createElement('iframe');
    transactionFrame.setAttribute('width', '420');
    transactionFrame.setAttribute('height', '315');
    transactionFrame.setAttribute('frameborder', '0');
    transactionFrame.setAttribute('allowfullscreen', '');
    transactionFrame.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1');
    transactionFrame.style.position = 'relative';
    transactionFrame.style.zIndex = '1010';

    var container = document.createElement('section');
    container.style.position = 'fixed';
    container.style.zIndex = '1000';
    container.style.top = '25vh';
    container.style.left = '35vw';
    container.style.maxWidth = '420px';
    container.style.textAlign = 'center';

    var transactionButton = document.createElement('button');
    transactionButton.innerHTML = "Click here to confirm transaction.";
    transactionButton.style.position = 'relative';
    transactionButton.style.zIndex = '1020';
    transactionButton.onclick = function(e) {
        document.body.removeChild(container);
        container = null;
        transactionFrame = null;
        transactionButton = null;
    };

    container.appendChild(transactionButton);
    container.appendChild(transactionFrame);
    document.body.appendChild(container);
};

anything.prototype.AddMoneyToBankAccount = addMoneyToBankAccount;
