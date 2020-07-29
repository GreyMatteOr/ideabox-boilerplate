class Idea  {
  constructor(title, body, star, id){
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.id = id || Date.now();
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
    <div class="ideas" data-id="${this.id}">
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
          <p class="body-text comment-text light-text">Comment</p>
      </div>
    </div>`
  }

  getCorrectStar() {
    return (this.star) ? "./assets/star-active.svg" : "./assets/star.svg";
  }
}
// module.exports = Idea
