/* Part 13 -Script State & Event Listener */

const btn =
    document.getElementById("searchBtn");

let allRepos = [];

let chartInstance = null;

btn.addEventListener("click", getUser);


/* p14 user Initial Fetch Handler*/
async function getUser() {

    const username =
        document.getElementById("username").value;

    if (!username) {
        alert("Enter Username");
        return;
    }

    document.getElementById("loading").innerText =
        "Loading...";

// Sahil - part 15 - main user API request
try {

        const userRes =
            await fetch(
                `https://api.github.com/users/${username}`
            );

        const user =
            await userRes.json();






/*Alok - part 18 - JS - Repo Fetch & Error Lifecycle*/
const repoRes =
            await fetch(
                `https://api.github.com/users/${username}/repos?per_page=100`
            );

        allRepos =
            await repoRes.json();

        document.getElementById("repoCount")
            .innerHTML =
            `<h3>Total Repositories: ${allRepos.length}</h3>`;

        showRepos(allRepos);

        showLanguages(allRepos);

    } catch (error) {

        alert("Something went wrong");
        console.log(error);

    }

    document.getElementById("loading").innerText =
        "";
}

// disha-Part 19 -Repository List Renderer//

    function showRepos(repos) {

    let output = "";

    repos.forEach(repo => {

        output += `
        <div class="repo">

            <h3>
                <a
                    href="${repo.html_url}"
                    target="_blank"
                >
                    ${repo.name}
                </a>
            </h3>

            <p>
                Language:
                ${repo.language || "N/A"}
            </p>

            <p>
                Stars:
                ${repo.stargazers_count}
            </p>

            <p>
                Forks:
                ${repo.forks_count}
            </p>

        </div>
        `;
    });

    document.getElementById("repos")
        .innerHTML = output;
}



/*part 20 Sorting Initialization Block*/
   
document
    .getElementById("sortOption")
    .addEventListener(
        "change",
        sortRepos
    );
// Sahil - part 21 - repo sorting 
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







/*Alok - part 24 - JS - Chart Data Processor & Renderer*/
function showLanguages(repos) {

    let languages = {};

    repos.forEach(repo => {

        if (repo.language) {

            languages[repo.language] =
                (languages[repo.language] || 0) + 1;
        }
    });

    const labels =
        Object.keys(languages);

    const values =
        Object.values(languages);

    const ctx =
        document
            .getElementById("languageChart");

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance =
        new Chart(ctx, {

            type: "pie",

            data: {

                labels,

                datasets: [{
                    data: values
                }]
            }
        });
}
