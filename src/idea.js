class Idea  {
  constructor(title, body){
    this.id = Date.now()
    this.title = title;
    this.body = body;
    this.star = false;

  };
  saveToStorage(){


  }
  deleteFromStorage(){


  }
  updateIdea(title, body, star){
    this.title = title;
    this.body = body;
    this.star = star;


  }
  createHtml(){
    var starIcon
    if(this.star){
      starIcon = "./assets/star-active.svg"
    } else {
      starIcon = "./assets/star.svg"
    }
    return `<div class="ideas">
      <div class="idea-top purple-4">
        <img src="${starIcon}" alt="star icon">
        <img src="./assets/delete.svg" alt="delete icon">
      </div>
      <div class="idea-text white-background">
        <h4 class="header-text">${this.title}</h4>
        <p class="body-text">${this.body}</p>
      </div>
      <div class="idea-bottom purple-3">
          <img src="./assets/comment.svg" alt="">
          <p class="body-text">Comment</p>
      </div>
    </div>`

  }
}
// module.exports = Idea
