var buttonSave = document.querySelector('#save-button');
var ideaCards = document.querySelector('.idea-cards');
var inputTitle = document.querySelector('#title-input');
var inputBody = document.querySelector('#body-input');
var imgHamburgerIcon = document.querySelectorAll('.drop-down-toggle');
var sectionDefaultMenu = document.querySelector('.menu');
var sectionDropDownMenu = document.querySelector('.drop-down');
var divOverlay = document.querySelector('.overlay');

buttonSave.addEventListener('click', insertIdea)
imgHamburgerIcon[0].addEventListener('click', toggleDropDown);
imgHamburgerIcon[1].addEventListener('click', toggleDropDown);
inputTitle.addEventListener('keyup', checkButtonStatus);
inputBody.addEventListener('keyup', checkButtonStatus);

window.onload = checkButtonStatus;

;function insertIdea() {
  var newTitle = inputTitle.value;
  var newBody = inputBody.value;
  if( newTitle !== '' && newBody !== '' ) {
    inputTitle.value = '';
    inputBody.value = '';
    ideaCards.innerHTML += new Idea(newTitle, newBody).createHtml();
    checkButtonStatus();
  };
};

;function checkButtonStatus() {
  if (inputTitle.value === '' || inputBody.value === '') {
    buttonSave.disabled = true;
  } else {
    buttonSave.disabled = false;
  }
}

;function toggleDropDown() {
  sectionDefaultMenu.classList.toggle('hidden');
  sectionDropDownMenu.classList.toggle('hidden');
  divOverlay.classList.toggle('hidden');
};

var idea = new Idea ("example", "bret")
