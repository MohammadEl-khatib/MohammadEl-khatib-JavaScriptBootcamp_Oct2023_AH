document.addEventListener("DOMContentLoaded", function () {
  const subredditForm = document.getElementById("subredditForm");
  const subredditInput = document.getElementById("subredditInput");
  const postsContainer = document.getElementById("posts");

  subredditForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const subreddit = "aww";
    fetch(`https://www.reddit.com/r/${subreddit}.json?limit=10`)
      .then((response) => response.json())
      .then((data) => displayPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  });

  function displayPosts(data) {
    postsContainer.innerHTML = "";
    data.data.children.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const title = post.data.title;
      const thumbnail = post.data.thumbnail;
      const postLink = `https://www.reddit.com${post.data.permalink}`;

      const postContent = `
          <h2>${title}</h2>
          <a href="${postLink}" target="_blank">
            <img src="${thumbnail}" alt="${title}">
          </a>
          <a href="${postLink}" target="_blank" class="reddit-link">View on Reddit</a>
        `;

      postElement.innerHTML = postContent;
      postsContainer.appendChild(postElement);
    });
  }
});
