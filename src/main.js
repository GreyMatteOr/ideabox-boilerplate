var ideaArray = [];

var buttonSave = document.querySelector('#save-button');
var ideaCards = document.querySelector('.idea-cards');
var inputTitle = document.querySelector('#title-input');
var inputBody = document.querySelector('#body-input');
var imgHamburgerIcon = document.querySelectorAll('.drop-down-toggle');
var sectionDefaultMenu = document.querySelector('.menu');
var sectionDropDownMenu = document.querySelector('.drop-down');
var divOverlay = document.querySelector('.overlay');

buttonSave.addEventListener('click', getUserIdea)
imgHamburgerIcon[0].addEventListener('click', toggleDropDown);
imgHamburgerIcon[1].addEventListener('click', toggleDropDown);
inputTitle.addEventListener('keyup', checkButtonStatus);
inputBody.addEventListener('keyup', checkButtonStatus);
ideaCards.addEventListener('click', checkClick);

window.onload = doOnLoad;

function doOnLoad(){
  ideaArray = localStorage.getItem('ideaArray')
  ideaArray = json.parse(ideaArray);
  for (var i = 0; i < ideaArray.length; i++){
    ideaArray[i] = new Idea(ideaArray[i].title, ideaArray[i].body, ideaArray[i].star)
  }
  checkButtonStatus();
  displayIdeas();
}

function displayIdeas(){
  ideaCards.innerHTML = '';
  for (var i = 0; i < ideaArray.length; i++){
    ideaCards.innerHTML += ideaArray[i].createHtml();
  }
}

;function getUserIdea() {
  var newTitle = inputTitle.value;
  var newBody = inputBody.value;
  if(newTitle !== '' && newBody !== '') {
    inputTitle.value = '';
    inputBody.value = '';
    checkButtonStatus();
    createIdea(newTitle, newBody);
  };
};

function createIdea(newTitle, newBody){
  var idea = new Idea(newTitle, newBody);
  ideaCards.innerHTML += idea.createHtml(ideaArray.length);
  ideaArray.push(idea);
  var ideasGrid = document.querySelectorAll('.ideas');
}

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

;function checkClick(event) {
  if (event.target.dataset.type === "delete") {
    deleteIdea(event);
  }
  if (event.target.dataset.type === "star") {
    starIdea(event);
  }
};

;function deleteIdea(event) {
  var ideaNode = event.target.closest('.ideas');
  ideaArray.splice(findIndex(ideaNode), 1);
  ideaNode.parentNode.removeChild(ideaNode);
  console.log('Succes!')
}

;function findIndex(ideaNode){
  var nodeList = document.querySelectorAll('.ideas');
  nodeList = Array.from(nodeList);
  return nodeList.indexOf(ideaNode);
}

;function starIdea(event) {
  var ideaNode = event.target.closest('.ideas');
  var idea = ideaArray[findIndex(ideaNode)];
  idea.star = !idea.star;
  idea.updateIdea(ideaNode);
};

var idea = new Idea ("example", "bret")
