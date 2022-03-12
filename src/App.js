// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Layout>
      <Header/>
      <Body />
      <Footer />

    </Layout>
  );
}

export default App;
