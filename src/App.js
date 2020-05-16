import React from 'react';

import Main from "./screens/Main"
import AuthProvider from './components/auth/Auth-context';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Main/>
      </AuthProvider>
    </Router>
  );
}

export default App;
