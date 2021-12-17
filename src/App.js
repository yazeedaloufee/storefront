import React from 'react'
import './app.css'
import Categories from './components/categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/main';
function App() {
  return (
  <React.Fragment>
    <div className='container'>

 <Header/> 
 <Categories/>
 <Main/>
 <Footer/>
    </div>
   </React.Fragment> 
  );
}

export default App;
