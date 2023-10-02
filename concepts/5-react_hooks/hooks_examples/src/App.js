import "./App.css";
import Checkbox from "./components/useEffect/Checkbox";
import CheckboxBlocking from "./components/useEffect/CheckboxBlocking";
import KeyPresser from "./components/useEffect/KeyPresser";
import MousePosition from "./components/useLayoutEffect/MousePosition";
import Phrase from "./components/useEffect/Phrase";
import PhraseWithDependency from "./components/useEffect/PhraseWithDependency";
import UseLayoutEffect from "./components/useLayoutEffect/UseLayoutEffect";
import WindowSize from "./components/useLayoutEffect/WindowSize";
import WordArrayInstance from "./components/useEffect/WordArrayInstance";
import WordCount from "./components/useMemo/WordCount";
import WordCountUseCallback from "./components/useCallback/WordCountUseCallback";
import WordCountUseMemo from "./components/useMemo/WordCountUseMemo";
import WordCountWithFunction from "./components/useCallback/WordCountWithFunction";
import CatList from "./components/memo/CatList";
import MeowList from "./components/memo/MeowList";
import PureCatList from "./components/memo/PureCatList";
import PureMeowList from "./components/memo/PureMeowList";
import PureMeowPredicateList from "./components/memo/PureMeowPredicateList";
import CheckboxReducer from "./components/useReducer/CheckboxReducer";
import CheckboxSimple from "./components/useReducer/CheckboxSimple";
import CheckboxToggle from "./components/useReducer/CheckboxToggle";
import IncrementNumber from "./components/useReducer/IncrementNumber";
import UserDataReducer from "./components/useReducer/UserDataReducer";
import UserDataSimpleCorrect from "./components/useReducer/UserDataSimpleCorrect";
import UserDataSimpleWrong from "./components/useReducer/UserDataSimpleWrong";

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
      {/* <MousePosition /> */}
      {/* <CheckboxSimple /> */}
      {/* <CheckboxToggle /> */}
      {/* <CheckboxReducer /> */}
      {/* <IncrementNumber /> */}
      {/* <UserDataSimpleWrong /> */}
      {/* <UserDataSimpleCorrect /> */}
      {/* <UserDataReducer /> */}
      {/* <CatList /> */}
      {/* <PureCatList /> */}
      {/* <MeowList /> */}
      {/* <PureMeowList /> */}
      <PureMeowPredicateList />
    </>
  );
}

export default App;
