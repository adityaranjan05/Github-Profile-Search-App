"use strict";

const api = "https://api.github.com/users/";
const input = document.querySelector("#idSearch");
const button = document.querySelector("#search_btn");
const card = document.querySelector("#card");

const searchID = async () => {
  const username = input.value;
  if (username.trim() === "") {
    card.innerHTML = `<div class="error">
        Enter username
    </div>`;

    return;
  }
  try {
    card.innerHTML = `<h3 class = "loading">Loading...</h3>`;
    const response = await fetch(api + username);
    input.value="";
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    console.log(data);
    card.innerHTML = `
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin pop"/>
            </div>
            <div class="user_info">
                <h2>Name : ${data.name || "Not Availaible"}</h2>
                <p>Bio : ${data.bio || "Not Availaible"}</p>
                <ul>
                <li>Followers : ${data.followers || "Not Availaible"}</li>
                <li>Following : ${data.following || "Not Availaible"}</li>
                <li>Repos : ${data.public_repos || "Not Availaible"}</li>
                </ul>
            </div>
        `;
  } catch (error) {
    console.log(error);
    card.innerHTML = `<div class="error">Error loading data....</div>`;
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchID();
  }
});

button.addEventListener("click", searchID);
