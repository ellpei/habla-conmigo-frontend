import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import GamePlay from './components/GamePlay';
import Layout from './components/Layout';
import JoinSessionForm from './components/JoinSessionForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gameplay" element={<GamePlay />} />
            <Route path="joinsession" element={<JoinSessionForm/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
