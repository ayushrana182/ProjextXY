import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import { Container } from '@material-ui/core';
import Footer from './components/Footer';
function App() {
  return <div className='App'>
     <Container fixed maxWidth={'xl'} >
    <Header/>
    <Content/>
    <Footer />
    </Container>
  </div>
}

export default App;
