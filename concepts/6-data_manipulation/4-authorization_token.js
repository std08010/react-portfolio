/**
 * GitHub allows you to generate a Personal User token.
 * You can generate one by logging in to GitHub and navigating to:
 * Settings > Developer Settings > Personal Access Tokens.
 */

const login = "std08010";
const token = "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";

fetch(`https://api.github.com/users/${login}`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);
