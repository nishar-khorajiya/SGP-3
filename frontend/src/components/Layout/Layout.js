import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <>
    <div>
    <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
        <Header/>
        <main style={{minHeight:"80vh"}}>
        {children}
        </main>
        <Footer/>
    </div>
    </>
  );
};

Layout.defaultProps={
  title:'Ashutosh Enterprise',
  description: 'Mern Stack Project',
  keywords :'mern,react,node,mongodb',
  author:'Ashish Gandha',  
}


export default Layout;
// now we have to basically make a single page application so for that routing plays a vital role.
// see first before making header we have to first make routing functionality. because with that we can switch from one page to another on single page. New page will not created when we move from one page to another.. 
// for that install library  React-Router-Dom
// read all from "npm" documentation and also find various packages on that.