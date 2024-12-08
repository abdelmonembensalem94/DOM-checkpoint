var minusButtons = document.querySelectorAll('.minus');
var plusButtons = document.querySelectorAll('.plus');
var totalSum = document.querySelector('#sum');
var deleteButtons = document.querySelectorAll('.btn-primary');
var quantityButtons = document.querySelectorAll('.x');
var prices = document.querySelectorAll('.price');
var bigDivs = document.querySelectorAll('.card');

for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', function() {
        if (quantityButtons[i].innerHTML > 0) {
            quantityButtons[i].innerHTML--;
            totalSum.textContent = parseInt(totalSum.textContent) - parseInt(prices[i].innerHTML);
        }
    });
}

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', function() {
        quantityButtons[i].innerHTML++;
        totalSum.textContent = parseInt(totalSum.textContent) + parseInt(prices[i].innerHTML);
    });
}

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
        bigDivs[i].remove();
        totalSum.textContent = parseInt(totalSum.textContent) - parseInt(quantityButtons[i].textContent) * parseInt(prices[i].textContent);
    });
}