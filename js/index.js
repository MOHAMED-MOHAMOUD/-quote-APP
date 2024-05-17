var quotes = [
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"},
    { text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" },
    { text: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”" },
    { text: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”" }
];

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    document.getElementById('quote').innerText = quote.text;
    document.getElementById('author').innerText = `— ${quote.author}`;
}
