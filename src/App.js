import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WhatToEatProject from "./Component/Projects/WhatToEatProject";
import MainPage from "./Component/MainPage";
import ChatBotProject from "./Component/Projects/ChatBotProject";
import NewsAPIProject from "./Component/Projects/NewsAPIProject";
import SolitaireGameProject from "./Component/Projects/SolitaireGameProject";


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
        </Routes>
      </Router>
  );
}

export default App;
