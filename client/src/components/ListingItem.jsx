import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingItem = ({ listing }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg flex  w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          src={listing.imageUrls[0]}
          alt=""
        />
        <div className="p-3 flex flex-col gap-2 w-full ">
          <p className="truncate text-lg font-semibold text-[#1A120B]">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-500 line-clamp-1" />
            <p className="text-sm text-[#3C2A21] truncate ">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-[#3C2A21] line-clamp-2">
            {listing.description}
          </p>
          <p className="text-[#3C2A21] mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && "/ month"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
