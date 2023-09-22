import React , {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Gallery from './pages/gallery';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';


function App() {
  // const user=false; 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <>
      {/* <BrowserRouter */}
      <Routes> 
        {/* See here Routes will work as an container */}

        <Route path='/' element={<HomePage/>} />
        {/* <Route path='/Register' element={<Register/>}/>   */}
        <Route
          path='/Register'
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* <Route path='/Login' element={<Login/>}/>         */}
        <Route
          path='/Login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/policy' element={<Policy/>} />
        <Route path='/*' element={<Pagenotfound/>} />
      </Routes>
      {/* </BrowserRouter> */}
      </>
  );
}

export default App;
//We have created layout because as we make any no of pages then we will not always make header,footer from starting .
//so just we will wrap each page with "Layout" tag
 /* <Layout>
      <h1>Ashustosh Enterprise</h1>
      </Layout> no need of all this because here we will do routing for pages*/
