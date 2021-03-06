var ideaArray = [];
var showStarred = false;
var showSearched = false;

var buttonSave = document.querySelector('#save-button');
var buttonShowStar = document.querySelector('#show-star');
var divOverlay = document.querySelector('.overlay');
var ideaCards = document.querySelector('.idea-cards');
var inputTitle = document.querySelector('#title-input');
var inputBody = document.querySelector('#body-input');
var imgHamburgerIcon = document.querySelectorAll('.drop-down-toggle');
var sectionDefaultMenu = document.querySelector('.menu');
var sectionDropDownMenu = document.querySelector('.drop-down');
var inputSearch = document.querySelector("#search-input");
var buttonSearch = document.querySelector('#search-button')

buttonSave.addEventListener('click', getUserIdea)
buttonShowStar.addEventListener('click', function showOnlyStars() {
  showStarred = !showStarred;
  buttonShowStar.classList.toggle('active-starring')
  displayIdeas();
  toggleDropDown();
})
imgHamburgerIcon[0].addEventListener('click', toggleDropDown);
imgHamburgerIcon[1].addEventListener('click', toggleDropDown);
inputTitle.addEventListener('keyup', checkButtonStatus);
inputBody.addEventListener('keyup', checkButtonStatus);
ideaCards.addEventListener('click', checkClick);
buttonSearch.addEventListener('click', toggleSearch);
inputSearch.addEventListener('keyup', function updateDisplay() {
  displayIdeas();
});
divOverlay.addEventListener('click', toggleDropDown);
window.onload = doOnLoad;

;function toggleSearch() {
  showSearched = !showSearched;
  buttonSearch.classList.toggle('active')
  displayIdeas();
}

;function doOnLoad() {
  var storedData = localStorage.getItem('ideaArray')
  storedData = JSON.parse(storedData);
  if(storedData) {
    for (var i = 0; i < storedData.length; i++) {
      ideaArray[i] = new Idea(storedData[i].title, storedData[i].body, storedData[i].star, storedData[i].id)
    }
  }
  checkButtonStatus();
  displayIdeas();
}

;function displayIdeas() {
  var toDisplay = [];
  if (!showStarred) {
    toDisplay = ideaArray.concat();
  } else {
    for (var i = 0; i < ideaArray.length; i++) {
      if(ideaArray[i].star) {
        toDisplay.push(ideaArray[i])
      }
    }
  } if(showSearched) {
    removeNotStarred(toDisplay);
  }
  generateDisplay(toDisplay);
};

;function removeNotStarred(toDisplay){
  for (var i = 0; i < toDisplay.length; i++) {
    if(!(toDisplay[i].title.includes(inputSearch.value) || toDisplay[i].body.includes(inputSearch.value))) {
      toDisplay.splice(i, 1);
      i--;
    }
  }
};

;function generateDisplay(toDisplay){
  ideaCards.innerHTML = '';
  for (var i = 0; i < toDisplay.length; i++) {
    ideaCards.innerHTML += toDisplay[i].createHtml();
  }
};

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

;function createIdea(newTitle, newBody) {
  var idea = new Idea(newTitle, newBody);
  ideaCards.innerHTML += idea.createHtml();
  ideaArray.push(idea);
  localStorage.setItem('ideaArray', JSON.stringify(ideaArray));
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
  ideaNode.remove();
  localStorage.setItem('ideaArray', JSON.stringify(ideaArray));
}

;function findIndex(ideaNode) {
  for (var i=0; i < ideaArray.length; i++) {
    if (ideaArray[i].id === +ideaNode.dataset.id) {
      return i;
    }
  }
  return -1;
}

;function starIdea(event) {
  var ideaNode = event.target.closest('.ideas');
  var idea = ideaArray[findIndex(ideaNode)];
  idea.star = !idea.star;
  idea.updateIdea(ideaNode);
  localStorage.setItem('ideaArray', JSON.stringify(ideaArray));
  if(showStarred) {
    displayIdeas()
  }
};
