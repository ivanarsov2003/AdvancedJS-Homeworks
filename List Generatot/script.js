function generateList() {
    let color = document.getElementById('color').value;
    let fontSize = document.getElementById('fontSize').value;
    let itemsInput = document.getElementById('items').value;
    let items = itemsInput.split(',');
    let ul = document.createElement('ul');
    ul.style.color = color;
    ul.style.fontSize = fontSize;
    items.forEach(function(item){
        let li = document.createElement ('li');
        li.textContent = item.trim();
        ul.appendChild(li);
    });
    let div = document.getElementById ('div');
    div.innerHTML = '';
    div.appendChild(ul);
}

 