/* Part 13 -Script State & Event Listener */

const btn =
    document.getElementById("searchBtn");

let allRepos = [];

let chartInstance = null;

btn.addEventListener("click", getUser);



// Sahil - part 15 - main user API request
try {

        const userRes =
            await fetch(
                `https://api.github.com/users/${username}`
            );

        const user =
            await userRes.json();


// Sahil - part 19 - repo sorting 
function sortRepos() {

    let value =
        document.getElementById("sortOption").value;

    if (value === "stars") {

        allRepos.sort(
            (a, b) =>
                b.stargazers_count -
                a.stargazers_count
        );

    } else {

        allRepos.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );
    }

    showRepos(allRepos);
}
