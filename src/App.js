import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  // let [navstyle, setnavstyle] = useState({
  //   backgroundColor: "#fff",
  //   color: "black",
  // });
  let [alert, setalert] = useState(null);
  function showalert(message, type) {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  let [mystyle, setstyle] = useState({
    color: "black",
    backgroundColor: "#40638e",
  });
  let [myname, setname] = useState("Enable dark mode");

  const handleonclick = () => {
    if (mystyle.backgroundColor === "#40638e") {
      setstyle({ color: "white", backgroundColor: "black" });
      setname("Disable dark mode");
      document.body.style.backgroundColor = "black";
      
      showalert("Dark mode has been enabled", "Success");
      document.title = "TextUtils-Dark mode";
      // setnavstyle({
      //   backgroundColor: "#000",
      //   color: "white",
      // });
      // document.body.style.color = "white";
    } else {
      setstyle({
        color: "black",
        backgroundColor: "#40638e",
      });
      // setnavstyle({
      //   backgroundColor: "#fff",
      //   color: "black",
      // });

      setname("Enable dark mode");
      showalert("Light mode has been enabled", "Success");
      document.title = "TextUtils-Light Mode";
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = mystyle.backgroundColor;
    document.body.style.color = mystyle.color;
  }, [mystyle]);

  return (
   <>
    <Router>
      <Navbar
        style={mystyle}
        title="TextUtils"
        aboutText="About us"
        handleonclick={handleonclick}
        myname={myname}
      />
      <Alert alert={alert} />
      <div className="container my-3" style={mystyle}>
        {/* <TextForm showalert={showalert} style={mystyle} heading="Enter text to analyze" /> */}
        <Routes>
  <Route path="/about" element={<About style={mystyle}/>} />
  <Route path="/" element={<TextForm showalert={showalert} style={mystyle} heading="Enter text to analyze" />} />
</Routes>
       
      </div>
      </Router>
    </>
  );
}

export default App;
