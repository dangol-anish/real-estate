import React from "react";

const CreateLising = () => {
  return (
    <>
      <main className="p-3 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">
          Create a Listing
        </h1>
        <form className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              name=""
              placeholder="Name"
              id="name"
              className="border p-3 rounded-lg"
              maxLength="62"
              minLength="10"
              required
            />
            <textarea
              type="text"
              name=""
              placeholder="Description"
              id="description"
              className="border p-3 rounded-lg"
              required
            />
            <input
              type="text"
              name=""
              placeholder="Address"
              id="address"
              className="border p-3 rounded-lg"
              required
            />
            <div className=" flex gap-6 flex-wrap">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="sale" className="w-5" />
                <span>Sale</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="rent" className="w-5" />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="parking" className="w-5" />
                <span>Parking Spot</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="furnished" className="w-5" />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="offer" className="w-5" />
                <span>Offer</span>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap  gap-6 ">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name=""
                    id="bedrooms"
                    min="1"
                    max="10"
                    required
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <p>Bedrooms</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name=""
                    id="bathrooms"
                    min="1"
                    max="10"
                    required
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <p>Bathrooms</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name=""
                    id="regularPrice"
                    min="1"
                    max="10"
                    required
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <div className="flex flex-col items-center">
                    <p>Regular Price</p>
                    <span className="text-xs">($ / months)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name=""
                    id="discountPrice"
                    min="1"
                    max="10"
                    required
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <div className="flex flex-col items-center">
                    <p>Discount Price</p>
                    <span className="text-xs">($ / months)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <p className="font-semibold">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                The first image will be the cover (max 6)
              </span>
            </p>
            <div className="flex gap-4">
              <input
                className="p-3 border border-gray-300 rounded w-full"
                type="file"
                name=""
                id="images"
                accept="image/*"
                multiple
              />
              <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                Upload
              </button>
            </div>
            <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Create Listing
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CreateLising;
