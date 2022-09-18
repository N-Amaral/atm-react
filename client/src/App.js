import { React } from "react";
import "./Styles/app.css";
// import Header from "./Components/Header";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Operations from "./Components/Operations";

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <div className="App">
      {/* <Login /> */}
      <Menu />
    </div>
  );
};

export default App;
