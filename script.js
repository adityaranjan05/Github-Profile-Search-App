"use strict";

const api = "https://api.github.com/users/";
const input = document.querySelector("#idSearch");
const card = document.querySelector("#card");

const searchId = async () => {
    const username = input.value;
    try {
        
    }
    catch (error) {
        console.log(error)
        card.innerHTML = "<div>Error loading data....</div>"    ;
    }
}

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        searchID();
    }
});