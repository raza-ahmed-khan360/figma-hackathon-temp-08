"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import NavLinks from "../components/Navlinks";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 shadow-lg">
      <TopBar />
      <div className="flex items-center justify-between px-4 py-3 bg-gray-scales-off-white">
        <Header />
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className={`lg:block ${menuOpen ? "block" : "hidden"} transition-all ease-in-out`}>
        <NavLinks />
      </div>
    </div>
  );
}
