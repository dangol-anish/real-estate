import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutStart,
  signOutFailure,
  signOutSuccess,
} from "../redux/user/userSlice";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);

  console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(currentUser);
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // Extract JSON data from the response
      console.log(data);

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      console.log(res);
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data.message));
      localStorage.clear();
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess(data.message));
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }
      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "Delete",
      });

      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            name=""
            id=""
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <img
            onClick={() => fileRef.current.click()}
            src={formData.avatar || currentUser.avatar}
            alt="user-image"
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          />

          <p className="text-sm self-center">
            {fileUploadError ? (
              <span className="text-red-900">
                Error while uploading the image (Image must be less than 2 MB.)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="text-slate-900">{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-900">
                Image Uploaded Successfully!
              </span>
            ) : (
              <span></span>
            )}
          </p>

          <input
            type="text"
            placeholder="Username"
            id="username"
            className="border p-3 rounded-lg"
            defaultValue={currentUser.username}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="border p-3 rounded-lg"
            defaultValue={currentUser.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-[#1A120B]  text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading" : "Update"}
          </button>
          <Link
            className="bg-green-900 text-white p-3 rounded-lg uppercase text-center hover:opacity-95 marker:"
            to="/create-listing"
          >
            Create Listing
          </Link>
        </form>
        <div className="flex justify-between mt-5">
          <span
            onClick={handleDeleteUser}
            className="text-red-900 cursor-pointer"
          >
            Delete Account
          </span>
          <span onClick={handleSignOut} className="text-red-900 cursor-pointer">
            Sign Out
          </span>
        </div>
        <p className="text-red-900 mt-5">{error ? error : ""}</p>
        <p className="text-green-900 mt-5">
          {updateSuccess ? "User updated Successfully" : ""}
        </p>
        <button onClick={handleShowListings} className="text-green-900 w-full">
          Show Listings
        </button>
        <p className="text-red-900 mt-5">
          {showListingsError ? "Error showing lists" : ""}
        </p>
        {userListings && userListings.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-2xl font-semibold">
              Your Listings
            </h1>
            {userListings.map((listing) => (
              <div
                key={listing._id}
                className="border rounded-lg p-3 flex justify-between items-center gap-4"
              >
                <Link to={`/listing/${listing._id}`}>
                  <img
                    src={listing.imageUrls}
                    alt="listing cover"
                    className="h-16 w-16 object-contain"
                  />
                </Link>
                <Link
                  className="text-slate-900 font-semibold   hover:underline truncate flex-1"
                  to={`/listing/${listing._id}`}
                >
                  <p>{listing.name}</p>
                </Link>
                <div className="flex gap-4">
                  <Link to={`/update-listing/${listing._id}`}>
                    <button className="text-green-900">Edit</button>
                  </Link>

                  <button
                    onClick={() => handleListingDelete(listing._id)}
                    className="text-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
