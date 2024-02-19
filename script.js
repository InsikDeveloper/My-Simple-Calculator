let answer;

    document.querySelector('#add').onclick = function(){
        answer = parseInt(document.querySelector('#number1').value) + parseInt(document.querySelector('#number2').value);
        document.querySelector('h2').innerText = "MISS U😞";
    }

    document.querySelector('#subtract').onclick = function(){
        answer = parseInt(document.querySelector('#number1').value) - parseInt(document.querySelector('#number2').value);
        document.querySelector('p').innerText = "Hello World!😃";
    }

    document.querySelector('#multiply').onclick = function(){
        answer = parseInt(document.querySelector('#number1').value) * parseInt(document.querySelector('#number2').value);
        document.querySelector('p').innerText = "Hello World!😃";
    }

    document.querySelector('#divide').onclick = function(){
        answer = parseInt(document.querySelector('#number1').value) / parseInt(document.querySelector('#number2').value);
        document.querySelector('p').innerText = "Hello World1😃";
    }

    document.querySelector('#clear').onclick = function(){
        window.location.reload();
    }



// document.querySelector('button').onclick = function(){
//     answer = int(document.querySelector('input').value);
//     window.alert(`Hello, ${username}`);
// }
