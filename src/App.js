import Header from "./components/Header";
import "../src/App.css"
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Reasons from "./components/Reasons";
import Explore from "./components/Explore";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
     <Header/>
     <Details/>
     <Reasons/>
     <Explore/>
     <Footer/>
    </div>
  );
}

export default App;
