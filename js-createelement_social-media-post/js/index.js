console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article"); // create new article-element
article.classList.add("post"); // add class-attribute to new article-element
document.body.append(article); // implement new article-element in body

const text = document.createElement("p");
text.classList.add("post__content");
text.textContent = "New Social Media Post.";
article.append(text);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
article.append(footer);

const userName = document.createElement("span");
userName.classList.add("post__username");
userName.textContent = "@username2";
footer.append(userName);

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = " ♥ Like ";
footer.append(button);

button.addEventListener("click", handleLikeButtonClick); // add like button click function
