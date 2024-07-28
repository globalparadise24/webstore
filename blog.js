document.addEventListener("DOMContentLoaded", function() {
    const postList = document.getElementById("post-list");
    const posts = ["post1.md", "post2.md"];

    posts.forEach(post => {
        fetch(`posts/${post}`)
            .then(response => response.text())
            .then(text => {
                const postDiv = document.createElement("div");
                postDiv.className = "post mb-4";
                postDiv.innerHTML = marked.parse(text);
                postList.appendChild(postDiv);
            })
            .catch(error => console.error("Error fetching post:", error));
    });
});
