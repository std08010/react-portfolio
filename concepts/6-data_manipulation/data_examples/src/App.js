import "./App.css";
import GitHubUser from "./components/GithubUser";
import GitHubUserSaveData from "./components/GithubUserSaveData";
import GitHubUserStateHandling from "./components/GithubUserStateHandling";
import List from "./components/render_props/List";
import ListEmpty from "./components/render_props/ListEmpty";
import ListSimple from "./components/render_props/ListSimple";
import tahoe_peaks from "./data/tahoe_peaks.json";

function App() {
  return (
    <>
      {/* <GitHubUser login="std08010" /> */}
      {/* <GitHubUserSaveData login="std08010" /> */}
      <GitHubUserStateHandling login="std08010" />
      <ListSimple />
      <ListEmpty renderEmpty={<p>This list is empty</p>} />
      <ListEmpty data={tahoe_peaks} renderEmpty={<p>This list is empty</p>} />
      <List
        data={tahoe_peaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation.toLocaleString()}ft
          </>
        )}
      />
    </>
  );
}

export default App;
