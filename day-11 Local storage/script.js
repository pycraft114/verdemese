const addItems = document.querySelector('.add-items');
// form element, form 양식의 제출을 막는 것 이기 때문에 버튼이 아닌 form에 이벤트를 등록해두어야 함.
const lists = document.querySelector('.lists');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearButton = document.querySelector('button[name=clear-button]');

function addItem(event) {
  event.preventDefault();
  const itemValue = (this.querySelector('input[name=item]')).value;
  //this는 add-item(form element);
  const item = {
    text: itemValue,
    checked: false
  };

  items.push(item);
  //map()은 두번째 parameter로 index를 받는다.
  updateListForAnyElement(items, lists);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
  // form element 안의 모든 요소들을 초기화함
}

function updateListForAnyElement(contents, element) {
  element.innerHTML = contents.map((content, index) => {
      return `
      <li>
      <input type="checkbox" data-index=${index} id=item${index} ${!content.checked ? "":"checked"}>
      <label for="item${index}">${content.text}</label>
      </li>
      `
  }).join('');
}

function toggleChecked(event) {
  if (!event.target.matches('input')) return;
  const getTargetElement = event.target;
  const index = getTargetElement.dataset.index;
  items[index].checked = !items[index].checked;
  localStorage.setItem('items', JSON.stringify(items));
  updateListForAnyElement(items, lists);
}

function clearLists() {
  lists.innerHTML = '<li>Loading...</li>';
  localStorage.clear();
}

updateListForAnyElement(items, lists);
addItems.addEventListener('submit', addItem);
lists.addEventListener('click', toggleChecked);
clearButton.addEventListener('click', clearLists);
//submit event는 form 제출에 대한 모든 특정한 이벤트가 발생(enter나 submit 버튼 클릭 포함)할 때 이벤트 핸들러를 발동시킴.
