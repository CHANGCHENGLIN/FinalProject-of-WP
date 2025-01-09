// Translation Functionality
const translations = {
    en: {
        title: "IBPI Student Association",
        activitiesTitle: "Activities",
        commentsTitle: "Comments",
    },
    zh: {
        title: "IBPI学生协会",
        activitiesTitle: "活动",
        commentsTitle: "评论",
    },
};

let currentLang = "en";

document.getElementById("translate-button").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "zh" : "en";
    translatePage();
});

function translatePage() {
    const lang = translations[currentLang];
    document.getElementById("title").textContent = lang.title;
    document.getElementById("activities-title").textContent = lang.activitiesTitle;
    document.getElementById("comments-title").textContent = lang.commentsTitle;
}

// Dynamic Activity Cards
const activities = [
    { id: 1, title: "Sports Day", description: "Join us for sports and fun!" },
    { id: 2, title: "Art Workshop", description: "Unleash your creativity." },
];

const activityCards = document.getElementById("activity-cards");

activities.forEach((activity) => {
    const card = document.createElement("div");
    card.className = "activity-card";
    card.innerHTML = `
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
        <button onclick="alert('Details coming soon!')">Learn More</button>
    `;
    activityCards.appendChild(card);
});

// Comments Section
document.getElementById("post-comment").addEventListener("click", () => {
    const commentInput = document.getElementById("comment-input");
    const comment = commentInput.value.trim();

    if (comment) {
        const commentList = document.getElementById("comment-list");
        const commentDiv = document.createElement("div");
        commentDiv.textContent = comment;
        commentList.appendChild(commentDiv);

        commentInput.value = "";
    }
});
