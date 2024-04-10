import React, { useState } from "react";
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { CategoryProvider } from "../../context/CategoryContext";
import { useSideBar } from "../../context/SidebarContext";
import "./Home.css";

const Home = () => {
  const { sidebar } = useSideBar();
  const [category, setCategory] = useState(0);

  return (
    <>
      <CategoryProvider value={{ category, setCategory }}>
        <Sidebar />
        <div className={`container ${sidebar ? "" : "large-container"}`}>
          <Feed />
        </div>
      </CategoryProvider>
    </>
  );
};

export default Home;
