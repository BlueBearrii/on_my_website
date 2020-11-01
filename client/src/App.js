import "./App.css";
import NotSupport from "./components/NotSupport";
import Run from "./components/Run";

function App() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  if (screenWidth > screenHeight) return <Run />;
  else return <NotSupport />;
}

export default App;
