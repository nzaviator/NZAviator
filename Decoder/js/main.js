// Abbreviation all capital letters must be entered here
// AcFD will not work 
const lists = {
'//': 'Weather not detected due sensor temporarily inoperative',
'///': 'Cloud is detected (unable to determine TCU/CB)',
'////': 'Visibility not reported due faulty sensor',
  '/////////': 'Cloud not reported due faulty sensor',
  '/////////': 'Cloud not reported due faulty sensor',
  'WRITE THE ABBREVIATION HERE IN ALL CAPS': 'Here is an explanation of what it means',
};

let textareaRead = document.querySelector('.js-textarea-read');
let textareaWrite = document.querySelector('.js-textarea-write');
let buttonDecode = document.querySelector('.button-decode');
let buttonClear = document.querySelector('.button-clear');
buttonDecode.onclick = function () {
  const abbreviation = textareaRead.value.toUpperCase();
  const list = lists[abbreviation] || testFunction();
  let list_data = '';
  for (let key in list) {
    list_data += `${list[key]}`;
    textareaWrite.innerHTML = list_data;
    textareaWrite.classList.remove('red');

  }
}
function testFunction() {
  textareaWrite.innerHTML = 'No result available for this code';
  textareaWrite.classList.add('red');
}
buttonClear.onclick = function () {
  textareaWrite.innerHTML = '';
  textareaRead.value = '';
}
function checkForEnter(e) {
  if (e.keyCode == 13) {
    event.preventDefault();
    buttonDecode.click();
  } else if ((e.keyCode == 8) || (e.keyCode == 46)) {
    textareaWrite.innerHTML = '';
  }

}
