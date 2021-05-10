const quote = document.querySelector('.quote');

function quoteGenerator() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(adviceTxt => {quote.innerText = ('"' + adviceTxt.slip.advice + '"')})
}

quoteGenerator();