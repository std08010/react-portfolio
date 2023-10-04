import React, { useEffect, useState } from "react";
import { loadJSON, saveJSON } from "../utils/lib";

export default function GitHubUserSaveData({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));

  useEffect(() => {
    if (!data) return;

    let savedData = loadJSON(`user:${login}`);
    if (savedData) return;

    const { name, avatar_url, location } = data;

    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <p>No GitHub user provided.</p>;
}
