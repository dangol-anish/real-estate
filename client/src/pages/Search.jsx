import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8" action="">
          <div className="flex items-center gap-2 ">
            <label className="whitespace-nowrap font-semibold" htmlFor="">
              Search Term:
            </label>
            <input
              type="text"
              name=""
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="whitespace-nowrap font-semibold" htmlFor="">
              Type:
            </label>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="all" className="w-5" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="sale" className="w-5" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="whitespace-nowrap font-semibold" htmlFor="">
              Amenities:
            </label>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="furnised" className="w-5" />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold" htmlFor="">
              Sort:
            </label>
            <select name="" id="sort_order" className="border rounded-lg p-3">
              <option value="">Price High to Low</option>
              <option value="">Price Low to High</option>
              <option value="">Latest</option>
              <option value="">Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 ">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing Results
        </h1>
      </div>
    </div>
  );
};

export default Search;
