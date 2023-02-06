const form = document.querySelector('#form1');
const input = document.querySelector('input[name="username"]');
const ul = document.querySelector('.ul');
const error = document.querySelector('#error');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    error.textContent = '';
    if(input.value.trim()) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const li = document.createElement('li');
        li.appendChild(checkbox);
        li.textContent = input.value;
        ul.appendChild('li');

        input.value = '';
        input.focus();
    }
    else {
        error.textContent = 'Empty Value Provided';
    }
})