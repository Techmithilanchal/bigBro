"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Assets/Asset 3.svg";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between gap-2 h-20 p-2">
      <div>
        <RxHamburgerMenu onClick={toggleMenu} className="h-14 w-7" />{" "}
        {/* Add onClick event to the RxHamburgerMenu */}
      </div>
      <div>
        <Image src={Logo} className="h-12 w-32" />
      </div>
      <button className="bg-red-400 rounded-3xl h-12 w-36 p-4">
        Post Property
      </button>
    </div>
  );
};

export default NavBar;
