import { Button } from "@/components/ui/button";
import "./App.css";
import Header from "./Pages/Header/header.jsx";
import Title from "./Pages/Title/title";
import Hero from "./Pages/Hero/hero";
import Sec1 from "./Pages/Sec1/sec1";
import Sec2 from "./Pages/Sec2/sec2";
import Sec3 from "./Pages/Sec3/sec3";
function App() {
  return (
    <div>
      <Header></Header>
      <Title></Title>
      <Hero></Hero>
      <Sec1></Sec1>
      <Sec2></Sec2>
      <Sec3></Sec3>
    </div>
  );
}

export default App;
