const variant = 3;
const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`;
const commentsContainer = document.querySelector("#comments-container");

function createComment(comment) {
  return `
  <div class="comment">
    <h4>${comment.name}</h4>
    <small>${comment.email}</small>
    <p>${comment.body}</p>
  </div>
  `;
}

async function fetchComments(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    result.map(
      (comment) => (commentsContainer.innerHTML += createComment(comment)),
    );
  } catch (error) {
    console.error(error.message);
  }
}

fetchComments(commentsUrl);
