// Translation Functionality
const translations = {
    en: {
        title: "IBPI Student Association",
        navActivities: "Activities",
        navAnnouncements: "Announcements",
        navNews: "News",
        navSignup: "Sign Up",
        activitiesTitle: "Activities",
        activity1Title: "Activity 1: Sports Day",
        activity1Description: "Join us for a fun sports day event with games and prizes!",
        activity2Title: "Activity 2: Art Workshop",
        activity2Description: "Unleash your creativity in our art workshop!",
        commentsTitle: "Comments",
    },
    zh: {
        title: "IBPI学生协会",
        navActivities: "活动",
        navAnnouncements: "公告",
        navNews: "新闻",
        navSignup: "注册",
        activitiesTitle: "活动",
        activity1Title: "活动1：运动日",
        activity1Description: "加入我们有趣的运动日活动，包括游戏和奖品！",
        activity2Title: "活动2：艺术工作坊",
        activity2Description: "在我们的艺术工作坊中释放您的创造力！",
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
    document.getElementById("nav-activities").textContent = lang.navActivities;
    document.getElementById("nav-announcements").textContent = lang.navAnnouncements;
    document.getElementById("nav-news").textContent = lang.navNews;
    document.getElementById("nav-signup").textContent = lang.navSignup;
    document.getElementById("activities-title").textContent = lang.activitiesTitle;
    document.getElementById("activity1-title").textContent = lang.activity1Title;
    document.getElementById("activity1-description").textContent = lang.activity1Description;
    document.getElementById("activity2-title").textContent = lang.activity2Title;
    document.getElementById("activity2-description").textContent = lang.activity2Description;
    document.getElementById("comments-title").textContent = lang.commentsTitle;
}

// Comment Section with Persistence
document.getElementById("post-comment").addEventListener("click", () => {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(commentText);
        localStorage.setItem("comments", JSON.stringify(comments));
        displayComments();
        commentInput.value = "";
    }
});

function displayComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const commentList = document.getElementById("comment-list");
    commentList.innerHTML = "";

    comments.forEach((comment) => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.textContent = comment;
        commentList.appendChild(commentDiv);
    });
}

displayComments();

// Navigate to Activity Page
function navigateToActivity(activityId) {
    alert(`Navigating to details for ${activityId}!`);
    // Later: Implement actual activity pages
}
