import React from 'react';
import './index.css';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MainPage from './pages/Main-page/Main-page'
import Registration from './pages/Registraion/Registration'
import Login from './pages/Login/Login'
import ConverterPage from './pages/Converter-page/Converter-page';

import Firebase, { FirebaseContext } from './components/Firebase';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Converter" element={<ConverterPage />} />
        </Routes>
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
