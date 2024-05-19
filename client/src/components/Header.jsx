import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);
  return (
    <header className="bg-[#D5CEA3] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-[#3C2A21]">Estate</span>
            <span className="text-[#1A120B]">Gateway</span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-[#E5E5CB] p-3 rounded-lg flex items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            name=""
            placeholder="Search..."
            id=""
            className="bg-transparent bg-[#E5E5CB] focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-400" />
          </button>
        </form>
        <ul className="flex gap-4 ">
          <Link to="/">
            {" "}
            <li className="hidden sm:inline text-#3C2A21 hover:underline cursor-pointer font-semibold">
              Home
            </li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="hidden sm:inline text-#3C2A21 hover:underline cursor-pointer font-semibold">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="user-image"
              />
            ) : (
              <li className=" text-#3C2A21 hover:underline cursor-pointer font-semibold">
                {" "}
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
