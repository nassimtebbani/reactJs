import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Profile from "./profile";

function App() {
  const [count, setCount] = useState(0);
  const handleName = (name) => {
    alert(`${name}`);
  };
  return (
    <Profile
      fullName="Nassim Tebbani"
      bio="i am a what i am"
      profession="fullstack dev and designer"
      handleName={handleName}
    >
      <img
        src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202301170247"
        alt="apple"
      />
    </Profile>
  );
}

export default App;
