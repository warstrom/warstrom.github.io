import React from "react"
import { Link, Route, Routes } from "react-router-dom"

import SinglePage from "./SinglePage"

const About = () => {
  return (
    <div className="about_content">
      <ul className="about_list">
        <li>
          <Link to={"/about/about-app"}>About App</Link>
        </li>
        <li>
          <Link to={"/about/about-author"}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={":slug"} element={<SinglePage />} />
      </Routes>
    </div>
  )
}
export default About