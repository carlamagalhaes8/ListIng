import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//instalar npm install react-router-dom

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import List from "./components/pages/List";

function App() {
  return (
    
      <Router>

        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/list" element={<List/>}/>
        </Routes>

        <Footer/>

      </Router>

  );
}

export default App;
