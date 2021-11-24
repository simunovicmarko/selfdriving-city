import React from 'react';
import { Layout } from './Components/Layout';
import { LandingPage } from './Components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Map} from './Components/Map';


function App() {
  return (
    <div className="App h-full">
      <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<Map/>} />
        </Routes>
      </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
