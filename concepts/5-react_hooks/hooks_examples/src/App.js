import "./App.css";
import Checkbox from "./components/Checkbox";
import CheckboxBlocking from "./components/CheckboxBlocking";
import KeyPresser from "./components/KeyPresser";
import MousePosition from "./components/MousePosition";
import Phrase from "./components/Phrase";
import PhraseWithDependency from "./components/PhraseWithDependency";
import UseLayoutEffect from "./components/UseLayoutEffect";
import WindowSize from "./components/WindowSize";
import WordArrayInstance from "./components/WordArrayInstance";
import WordCount from "./components/WordCount";
import WordCountUseCallback from "./components/WordCountUseCallback";
import WordCountUseMemo from "./components/WordCountUseMemo";
import WordCountWithFunction from "./components/WordCountWithFunction";

function App() {
  const wordsMsg = "You are not going to believe this but...";

  return (
    <>
      {/* <Checkbox /> */}
      {/* <CheckboxBlocking /> */}
      {/* <Phrase /> */}
      {/* <PhraseWithDependency /> */}
      {/* <KeyPresser /> */}
      {/* <WordArrayInstance /> */}
      {/* <WordCount>{wordsMsg}</WordCount> */}
      {/* <WordCountUseMemo>{wordsMsg}</WordCountUseMemo> */}
      {/* <WordCountWithFunction /> */}
      {/* <WordCountUseCallback /> */}
      {/* <UseLayoutEffect /> */}
      {/* <WindowSize /> */}
      <MousePosition />
    </>
  );
}

export default App;
