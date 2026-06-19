
// Sahil - part 15 - main user API request
try {

        const userRes =
            await fetch(
                `https://api.github.com/users/${username}`
            );

        const user =
            await userRes.json();
