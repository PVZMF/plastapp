import React from 'react';

import { Routes, Route } from "react-router-dom";

// componenets
import Layout from "./componets/layout";

// style 
import './App.css';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h2>home</h2>} />
      </Routes>
    </Layout>
  );
}

export default App;
