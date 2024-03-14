import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdLogOut } from "react-icons/io";
import { IoHeartHalf } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { useRouter } from 'next/router';


const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const router = useRouter();

  const handleLogout = () => {
    // Add your logout logic here
    alert('ta bvrtgelees garlaa')
    router.push('/'); 
    console.log("Logout clicked");
    // Close the dropdown after logout if needed
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center">
        <Link href="/" className="flex text-gray-700 hover:bg-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700 pr-2">
          <MdOutlineAccountCircle className="text-4xl dark:text-gray-200 dark:hover:bg-gray-700" />
        </Link>
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
