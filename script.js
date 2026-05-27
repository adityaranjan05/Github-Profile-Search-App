"use strict";

const api = "https://api.github.com/users/";
const input = document.querySelector("#idSearch");
const card = document.querySelector("#card");

const searchID = async () => {
    const username = input.value;
    try {
        const response = await fetch(api + username);
        const data = await response.json();
        console.log(data);
        card.innerHTML = 
        `
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin pop"/>
            </div>
            <div class="user_info">
                <h2>Name : ${data.name}</h2>
                <p>Bio : ${data.bio}</p>
                <ul>
                <li>Followers : ${data.followers}</li>
                <li>Following : ${data.following}</li>
                <li>Repos : ${data.public_repos}</li>
                </ul>
            </div>
        `
    }
    catch (error) {
        console.log(error)
        card.innerHTML = "<div>Error loading data....</div>"    ;
    }
}

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        searchID();
    }
});