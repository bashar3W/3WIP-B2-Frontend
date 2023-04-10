import React from "react";

import "./styles/_global.scss";
import BecomeAMember from "./containers/becomeAMember";
import OurBlog from "./containers/ourBlog";
import DownloadSection from "./containers/downloadSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./containers/footer";
import NewsLetter from "./containers/newsletter";

function App() {
  return (
    <>
      <Navbar />
      <BecomeAMember />
      <DownloadSection />
      <OurBlog />
      <NewsLetter heading="Subscribe to our newsletter" />
      <Footer bgColor="#eaeeef" />
    </>
  );
}

export default App;
