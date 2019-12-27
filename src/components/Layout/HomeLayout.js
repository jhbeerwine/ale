import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = ({ children, ...rest }) => {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }

export default HomeLayout;