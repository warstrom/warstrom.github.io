import React from "react";
import { Route, Routes } from "react-router-dom"
// component files
import TodoContainer from "./components/TodoContainer"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="/about/*" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App