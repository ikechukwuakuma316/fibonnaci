function calculateFibonacci() {
    const numTerms = parseInt(document.getElementById('numTerms').value);
    const resultDiv = document.getElementById('result');

    const fibonacciSequence = getFibonacciSequence(numTerms);
    resultDiv.innerHTML = `<p>Fibonacci Sequence (${numTerms} terms):</p><p>${fibonacciSequence.join(', ')}</p>`;
}

function getFibonacciSequence(n) {
    let fibSequence = [];
    let a = 0, b = 1, i = 1;

    while (i <= n) {
        fibSequence.push(a);
        let next = a + b;
        a = b;
        b = next;
        i++;
    }

    return fibSequence;
}
