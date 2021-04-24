import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const Sidebardata = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <FaIcons.FaSearch />,
    cName: "nav-text",
  },
  {
    title: "Movies",
    path: "/movies",
    icon: <FaIcons.FaFilm />,
    cName: "nav-text",
  },
  {
    title: "Series",
    path: "/series",
    icon: <MdIcons.MdLocalMovies />,
    cName: "nav-text",
  },
  {
    title: "Favorite",
    path: "/favorite",
    icon: <BsIcons.BsFillStarFill />,
    cName: "nav-text",
  },
];
