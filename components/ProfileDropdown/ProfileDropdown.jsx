import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdLogOut } from "react-icons/io";
import { IoHeartHalf } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { useRouter } from 'next/router';

const ProfileDropdown = ({ users_phone }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
let phone=localStorage.getItem("phone");
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    alert('Та гарлаа');
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    setUserData(null);
    localStorage.setItem("Login","false")
    router.reload()
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = (usersData) => {
    setIsLoggedIn(true);
    setUserData(usersData);
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center">
   
      <MdOutlineAccountCircle className="text-4xl dark:text-gray-200 dark:hover:bg-gray-700" />
     
  <span>{phone} </span>
   
  
   
  


        {isDropdownOpen ? (
          <IoMdArrowDropup
            onClick={handleDropdownToggle}
            className="text-gray-700 dark:text-gray-200 cursor-pointer"
          />
        ) : (
          <IoMdArrowDropdown
            onClick={handleDropdownToggle}
            className="text-gray-700 dark:text-gray-200 cursor-pointer"
          />
        )}
      </div>

      {isDropdownOpen && (
        <ul className="absolute mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
          <li className="flex items-center">
            <MdOutlineAccountCircle className="text-4xl dark:text-gray-200 dark:hover:bg-gray-700" />
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Хувийн мэдээлэл
            </Link>
          </li>
          <li className="flex items-center">
            <IoHeartHalf className="text-4xl dark:text-gray-200 dark:hover:bg-gray-700" />
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Хадгалсан сургалт
            </Link>
          </li>
          <li className="flex items-center">
            <FaComment className="text-2xl dark:text-gray-200 dark:hover:bg-gray-700" />
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Сэтгэгдлүүд
            </Link>
          </li>
          <li className="flex items-center dark:text-gray-200 dark:hover:bg-gray-700 w-full text-left">
            <IoMdLogOut className="text-4xl dark:text-gray-200 dark:hover:bg-gray-700" />
            <button
              onClick={handleLogout}
              className="flex block px-4 py-2 text-gray-700 hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700 w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
