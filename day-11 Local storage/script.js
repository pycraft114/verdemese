const addItems = document.querySelector('.add-items');
const itemLists = document.querySelector('.lists');
let items = JSON.parse(sessionStorage.getItem("items")) || [];
const clearButton = document.querySelector('[name=clear-button]')


function addItemsToItemLists(event) {
    event.preventDefault();
    const item = {
        text: this.querySelector('input[type=text]').value,
        checked: false
    }
    items.push(item);
    sessionStorage.setItem('items', JSON.stringify(items));
    itemsForAnyElements(items, itemLists);
}

function itemsForAnyElements(contents, element) {
    if (contents == false) {
        return element.innerHTML = "<li>Loading...</li>"
    }
    element.innerHTML = contents.map((content, index) => {
        return `
        <li>
            <input type="checkbox" data-index=${index} id="item${index}" ${!content.checked ? "" : "checked"}>
            <label for="item${index}">${content.text}</label>
        </li>
        `
    }).join('');
} 

function stayChecked(event) {
    if (!event.target.matches('input')) return;
    const elemIndex = event.target.dataset.index;
    items[elemIndex].checked = !items[elemIndex].checked;
    sessionStorage.setItem('items', JSON.stringify(items));
    itemsForAnyElements(items, itemLists);
}

function clearLists() {
    sessionStorage.clear();
    items.splice(0);
    itemsForAnyElements(items, itemLists);
}

itemsForAnyElements(items, itemLists);
addItems.addEventListener('submit', addItemsToItemLists);
itemLists.addEventListener('click', stayChecked);
clearButton.addEventListener('click', clearLists);