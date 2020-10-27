import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
          <h1>Welcome to Shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
