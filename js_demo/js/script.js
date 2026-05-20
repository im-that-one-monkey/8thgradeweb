alert('My script sheet is linked, hooray!')
function askName(){
    var nameReturn = document.getElementById('ask-name');
    var  name = prompt('Please enter your name in the box below');
    if (name == ''){
        alert('Please try again.');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you'
    }
    nameReturn.style.fontSize = '30px';
    nameReturn.style.color = 'pink';
}

function askQuestion() {
    var p = prompt ('How much wood would a woodchuck chuck if a woodchuck could chuck wood?')
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'Yikes! '  + p + ' is a lot of wood'
    }
}
