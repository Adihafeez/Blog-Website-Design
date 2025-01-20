const comments = document.querySelectorAll(".comment-section");
comments.forEach((section) => {
    section.querySelector(".submit-btn").addEventListener("click", (e) => {
        e.preventDefault();
        const name = section.querySelector(".name-input"),
            message = section.querySelector(".message-input"),
            commentBox = section.querySelector(".comments-display");

        if (name.value && message.value) {
            const newComment = document.createElement("div");
            newComment.classList.add("comment");
            newComment.innerHTML = `<strong>${name.value}</strong>: <p>${message.value}</p>`;
            commentBox.appendChild(newComment);
            name.value = "";
            message.value = "";
        }
    });
});
