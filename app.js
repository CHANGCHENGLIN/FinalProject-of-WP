<div id="login">
    <button id="google-signin" class="btn">Sign in with Google</button>
    <div id="user-info"></div>
</div>
const comments = [];

// Add comment
document.getElementById('submit-comment').addEventListener('click', () => {
    const comment = document.getElementById('comment-input').value.trim();
    if (comment) {
        comments.push(comment);
        displayComments();
        document.getElementById('comment-input').value = '';
    }
});

// Display comments
function displayComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = comments
        .map(comment => `<li>${comment}</li>`)
        .join('');
}
