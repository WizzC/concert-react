import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Accueil from './Page/Accueil/Accueil.jsx';
import PageDetail from './Page/PageDetail/PageDetail.jsx';

function App() {
  const [redirection, setRedirection] = useState(null);

  const handleRedirection = (nouvelleURL) => {
    setRedirection(nouvelleURL);
  };

  return (
    <Router>
      {redirection && <Navigate to={redirection} />}

      <Routes>
        <Route path="/" element={<Accueil onRedirection={handleRedirection} />} />
        <Route path="/page-detail/:id" element={<PageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
