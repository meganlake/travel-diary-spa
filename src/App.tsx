import React from 'react'
import Main from './components/MainComponent'
import Footer from './components/FooterComponent'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello Fellow Travelers! Welcome!</h1>
      <Main />
      <Footer />
      <img src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='travel' />
    </div>
  );
}

export default App;
