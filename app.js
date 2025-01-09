// Translation Functionality
document.getElementById('translate-btn').addEventListener('click', () => {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const placeholdersToTranslate = document.querySelectorAll('[data-translate-placeholder]');
    elementsToTranslate.forEach((element) => {
        if (element.getAttribute('data-language') === 'en') {
            element.textContent = element.getAttribute('data-tw');
            element.setAttribute('data-language', 'tw');
        } else {
            element.textContent = element.getAttribute('data-en');
            element.setAttribute('data-language', 'en');
        }
    });
    placeholdersToTranslate.forEach((element) => {
        if (element.getAttribute('data-language') === 'en') {
            element.placeholder = element.getAttribute('data-tw');
            element.setAttribute('data-language', 'tw');
        } else {
            element.placeholder = element.getAttribute('data-en');
            element.setAttribute('data-language', 'en');
        }
    });
});

// Comments Functionality
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');
const addCommentButton = document.getElementById('add-comment');

// Load saved comments from local storage
window.addEventListener('DOMContentLoaded', () => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(comment => addCommentToList(comment));
});

// Add new comment
addCommentButton.addEventListener('click', () => {
    const comment = commentInput.value.trim();
    if (comment) {
        addCommentToList(comment);
        saveComment(comment);
        commentInput.value = '';
    }
});

// Add comment to the list
function addCommentToList(comment) {
    const listItem = document.createElement('li');
    listItem.textContent = comment;
    commentList.appendChild(listItem);
}

// Save comment to local storage
function saveComment(comment) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.push(comment);
    localStorage.setItem('comments', JSON.stringify(savedComments));
}
