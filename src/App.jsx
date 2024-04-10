import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { SidebarProvider } from "./context/SidebarContext";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <SidebarProvider value={{ sidebar, setSidebar }}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </SidebarProvider>
  );
};

export default App;
