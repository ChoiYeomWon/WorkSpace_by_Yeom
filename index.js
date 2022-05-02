const hi = document.createElement('div');

document.body.appendChild(hi);

const list = document.createElement('ul');
const item = document.createElement('li');
const inputbox = document.createElement('input');
const addButton = document.createElement('button');

item.innerText = "리스트";
addButton.innerText = "추가";

list.append(item);
document.body.append(inputbox, addButton, list);

inputbox.addEventListener('keydown', (event) => {
    if(event.key==='Enter'){
        addButton.click()
    }
});


addButton.addEventListener('click', () => {
    const inputValue = inputbox.value;
    const item = document.createElement('li');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');
    const divText = document.createElement('span');
    deleteButton.innerText = '삭제';
    completeButton.innerText = '완료 후 체크';

    divText.append(inputValue);
    item.append(divText, deleteButton, completeButton);
    list.append(item);

    inputbox.value = '';

    deleteButton.addEventListener('click', () => {
        item.remove()
    });

    completeButton.addEventListener('click', () => {
        divText.style.color='red';
    });

    divText.addEventListener('click', () => {
        const changeInput = document.createElement('input');
        changeInput.value = divText.innerText;
        item.replaceChild(changeInput, divText);
        
        changeInput.addEventListener('keydown', (event) => {
            if(event.key==='Enter'){
                divText.innerText = changeInput.value;
                item.replaceChild(divText, changeInput);
            }
        });
    });
});