import React from 'react';

import { CTA, Brand, Navbar} from './components'
import { Blog, Footer, Possibility, Feature, WhatGPT3, Header} from './containers'
import './App.css';


const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    
    </div>
    <Brand />
    <WhatGPT3 />
    <Feature />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
)

export default App