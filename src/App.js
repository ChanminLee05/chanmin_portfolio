import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WhatToEatProject from "./Component/Projects/WhatToEatProject";
import MainPage from "./Component/MainPage";
import ChatBotProject from "./Component/Projects/ChatBotProject";
import NewsAPIProject from "./Component/Projects/NewsAPIProject";
import SolitaireGameProject from "./Component/Projects/SolitaireGameProject";
import HairSalonProject from "./Component/Projects/HairSalonProject";
import ReactGuideProject from "./Component/Projects/ReactGuideProject";
import ConversionCalculator from "./Component/Projects/ConversionCalculatorProject";

function App() {
  return (
      <Router>
        <Routes>
            <Route index element={<MainPage/>} />
            <Route path="/main" element={<MainPage/>} />
            <Route path="/WhatToEat" element={<WhatToEatProject />} />
            <Route path="/ChatBot" element={<ChatBotProject />} />
            <Route path="/NewsAPI" element={<NewsAPIProject />} />
            <Route path="/Solitaire" element={<SolitaireGameProject />} />
            <Route path="/HairSalon" element={<HairSalonProject />} />
            <Route path="/ReactGuide" element={<ReactGuideProject />} />
            <Route path="/ConversionCalculator" element={<ConversionCalculator />} />
        </Routes>
      </Router>
  );
}

export default App;
