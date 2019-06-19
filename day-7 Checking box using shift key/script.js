const checkBoxes = document.querySelectorAll('.item [type=checkbox]');
let inBetween = false;
let clickWithNoShift;

//체크박스를 클릭하고, 쉬프트 키를 누른 상태에서 클릭한 체크박스사이의 모든 체크박스를 체크되도록 함.
function getCheckBoxesChecked(event) {
  if (event.shiftKey && this.checked){
    checkBoxes.forEach(checkBox => {
      if (checkBox === this || checkBox === clickWithNoShift){
        inBetween = !inBetween;
      }
      if (inBetween){
        checkBox.checked = true;
      }
    })
  }
  clickWithNoShift = this;
}

// 10번 라인의 checkBox === this 와 checkBox === withOutShift 의 차이점을 이해할 수 없습니다.
// 그리고 withOutShift를 함수의 앞 부분(7번 라인보다 먼저)에 두고 event를 실행하면, withOutShift가 인식되지 않습니다.



checkBoxes.forEach(checkBox => checkBox.addEventListener('click', getCheckBoxesChecked));
