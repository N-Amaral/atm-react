import { React } from "react";
import "./Styles/app.css";
// import Header from "./Components/Header";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Operation from "./Components/Operations";
import ErrorPage from "./Components/ErrorPage";
import Keyboard from "./Components/Keyboard";
import Screenkeys from "./Components/ScreenKeys";

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  let component = undefined;
  switch (window.location.pathname) {
    case "/" || "/login":
      component = <Login />;
      break;
    case "/menu":
      component = <Menu />;
      break;
    case "/operation":
      component = <Operation />;
      break;
    default:
      component = <ErrorPage />;
      break;
  }

  return (
    <div className="App">
      <Screenkeys />
      <div className="main-menu">{component}</div>
      <Keyboard />
    </div>
  );
};

export default App;
