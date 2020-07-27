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

  updateIdea(node){
    node.children[0].children[0].src = this.getCorrectStar();
  }

  createHtml(indexInArray){
    return `
    <div class="ideas">
      <div class="idea-top purple-4">
        <img data-type="star" src="${this.getCorrectStar()}" alt="star icon">
        <img data-type="delete" src="./assets/delete.svg" alt="delete icon">
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

  getCorrectStar() {
    return (this.star) ? "./assets/star-active.svg" : "./assets/star.svg";
  }
}
// module.exports = Idea
