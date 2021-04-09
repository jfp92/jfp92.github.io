var poems = [
    'a',
    'b',
    'c',
    'd',
    'e',
]

function rPoem() {
    var randomNumber = Math.floor(Math.random() * (poems.length))
    document.getElementById("test").innerHTML = quotes[randomNumber]
}