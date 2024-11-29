// Add Comments
document.getElementById('add-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
    }
});

// Translation Toggle
document.getElementById('translate-btn').addEventListener('click', () => {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach((element) => {
        if (element.getAttribute('data-language') === 'en') {
            element.textContent = element.getAttribute('data-cn');
            element.setAttribute('data-language', 'cn');
        } else {
            element.textContent = element.getAttribute('data-en');
            element.setAttribute('data-language', 'en');
        }
    });
});
