import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Tracks if the menu is visible
  const [isAnimating, setIsAnimating] = useState(false); // Tracks animation state

  // UseEffect to trigger animation after the menu is open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsAnimating(true);
      }, 10); // Small delay to ensure smooth transition
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const toggleDrawer = () => {
    setIsOpen(true); // Open the drawer
  };

  const closeDrawer = () => {
    setIsAnimating(false); // Start closing animation
    setTimeout(() => {
      setIsOpen(false); // Fully close the drawer after animation ends
    }, 300); // Match the duration of the animation
  };

  return (
    <nav className="border-b-[2px]">
      <div className="px-8 lg:px-28 py-4 flex items-center justify-between">
        <div className="text-lg font-bold md:flex-grow-0">
          <Link to="/">
            <h1 className="text-3xl font-bold italic ms-1 tracking-wide transition-all duration-300 ease-in-out hover:scale-105">
              Taskify
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block ml-auto">
            <div className="flex items-center justify-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold"
                    : "text-xl text-[#737373] font-normal"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/task-form"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold"
                    : "text-xl text-[#737373] font-normal"
                }
              >
                TaskForm
              </NavLink>
              <NavLink
                to="/task-lists"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold"
                    : "text-xl text-[#737373] font-normal"
                }
              >
                TaskList
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <FaBars onClick={toggleDrawer} className="h-8 w-8 cursor-pointer" />
          </div>
        </div>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden"
              onClick={closeDrawer}
            ></div>
            <div
              className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                isAnimating ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-5">
                <div className="flex justify-end mb-6">
                  <FaXmark
                    onClick={closeDrawer}
                    className="text-black h-6 w-6 cursor-pointer"
                  />
                </div>
                <NavLink
                  to="/"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-bold mb-5 block"
                      : "text-xl text-[#737373] font-normal mb-5 block"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/task-form"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-bold mb-5 block"
                      : "text-xl text-[#737373] font-normal mb-5 block"
                  }
                >
                  TaskForm
                </NavLink>
                <NavLink
                  to="/task-lists"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-bold"
                      : "text-xl text-[#737373] font-normal"
                  }
                >
                  TaskList
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
