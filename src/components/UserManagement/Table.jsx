import React, { useState, useEffect } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaEllipsisH } from "react-icons/fa";

const FetchData = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",

    lastName: "",
    username: "",
    email: "",
    gender: "",
  });
  const [editUserId, setEditUserId] = useState(null);
  const [setIsEditMode] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDropdownToggle = (userId) => {
    setShowDropdown(!showDropdown);
    setSelectedUserId(userId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const newData = await response.json();
      console.log(newData);

      setData((prevData) => [...prevData, newData]);

      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        gender: "",
      });

      setShowModal(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = data.find((user) => user.id === userId);
    setEditUserId(userId);
    setFormData({
      firstName: userToEdit.firstName,
      lastName: userToEdit.lastName,
      username: userToEdit.username,
      email: userToEdit.email,
      gender: userToEdit.gender,
    });
    setIsEditMode(true);
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://dummyjson.com/users/${editUserId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, id: editUserId }), // include the "id" property
        }
      );

      if (!response.ok) {
        throw new Error("Failed to edit user");
      }

      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        gender: "",
      });
      setIsEditMode(false);

      setShowEditModal(false);

      fetchUsers(currentPage);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteUser = (userId) => {
    setDeleteUserId(userId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/${deleteUserId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setData((prevData) =>
        prevData.filter((user) => user.id !== deleteUserId)
      );
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/users?limit=5&skip=${
          (page - 1) * 5
        }&select=firstName,lastName,email,username,gender,image`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      setData(result.users);
      setTotalPages(Math.ceil(result.total / 5));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [search, currentPage]);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [search, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const filteredUsers = data.filter(
    (user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderPageButtons = () => {
    const pagesToShow = 4;
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    return Array.from({ length: pagesToShow }, (_, i) => startPage + i).map(
      (page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={` gap-2 px-3 py-1 bg-white ${
            currentPage === page ? "bg-gray-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div>
      <div className="w-full flex justify-between">
        <div class="relative flex items-center w-[290px] h-12 rounded-[5px] focus-within:shadow-lg bg-white overflow-hidden mb-5">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <FiSearch size={25} />
          </div>

          <input
            class="peer h-full w-full outline-none font-Rubik text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search User Management"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <button
            className="bg-primary border-2 border-primary text-white font-semibold font-Rubik hover:bg-transparent hover:text-primary hover:border-primary px-6 py-3 rounded-[5px]"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="container overflow-x-auto">
        <table className="min-w-full bg-white rounded-[5px] overflow-hidden">
          <thead className="bg-white text-gray-600 rounded-md shadow-sm">
            <tr className="">
              <th className=" px-4 py-2">ID</th>
              <th className=" px-4 py-2">Image</th>
              <th className=" px-4 py-2">Name</th>
              <th className=" px-4 py-2">Gender</th>
              <th className=" px-4 py-2">Email</th>
              <th className=" px-4 py-2">Username</th>
              <th className=" px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#4F5665]">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="mb-30">
                <td className=" px-4 py-2">{user.id}</td>
                <td className=" px-4 py-2">
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-16 h-16 rounded-full border border-[#4F5665]"
                  />
                </td>
                <td className="my-10 px-4 py-2 ">{`${user.firstName} ${user.lastName}`}</td>
                <td className=" px-4 py-2">{user.gender}</td>
                <td className=" px-4 py-2">{user.email}</td>
                <td className=" px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">
                  <div className="relative w-full flex justify-center">
                    <button onClick={() => handleDropdownToggle(user.id)}>
                      <FaEllipsisH />
                    </button>
                    {showDropdown && selectedUserId === user.id && (
                      <div className="absolute right-0 mr-16 bg-white border border-gray-200 shadow-md rounded-md">
                        <button
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                          onClick={() => {
                            handleDeleteUser(user.id);
                            setShowDropdown(false);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                          onClick={() => {
                            handleEditUser(user.id);
                            setShowDropdown(false);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center text-center mt-5">
        <h1 className="font-Rubik text-sm text-[#4F5665]">
          Showing 5 of 100 User
        </h1>
        <div>
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className=""
            >
              <FiChevronLeft />
            </button>
          )}

          {renderPageButtons()}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className=""
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      </div>

      {/* Modal Add New User */}

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="bg-white my-6 mx-auto w-[650px] h-auto border-2">
              <div className=" rounded-[5px] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className=" ml-5 mt-5 items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold font-Poppins text-[#44566C] mb-5">
                    User Management
                  </h3>
                  <p className="font-Poppins text-[#44566C]">
                    If you need more info, please check Project Guidelines.
                  </p>
                </div>
                <form className="px-8 pt-6 pb-8 w-full" onSubmit={handleSubmit}>
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Name
                    <span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <input
                    className=" appearance-none  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    placeholder="Input Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Username
                    <span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <input
                    className=" appearance-none  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    placeholder="Input Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Email
                    <span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <input
                    className=" appearance-none  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    placeholder="Input Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Gender<span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <select
                    className=" appearance-none flex justify-between  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-3"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-primary font-bold font-Poppins uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-3"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showEditModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="bg-white my-6 mx-auto w-[650px] h-auto border-2">
              <div className=" rounded-[5px] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className=" ml-5 mt-5 items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold font-Poppins text-[#44566C] mb-5">
                    User Management
                  </h3>
                  <p className="font-Poppins text-[#44566C]">
                    If you need more info, please check Project Guidelines.
                  </p>
                </div>
                <form
                  className="px-8 pt-6 pb-8 w-full"
                  onSubmit={handleEditSubmit}
                >
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Name
                    <span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <input
                    className=" appearance-none  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    placeholder="Input Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Username
                    <span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <input
                    className=" appearance-none  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    placeholder="Input Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Email
                    <span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <input
                    className=" appearance-none  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    placeholder="Input Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label className="block text-[#44566C] text-sm font-Poppins mb-3">
                    Gender<span className="font-Poppins text-[#FD524E]">*</span>
                  </label>
                  <select
                    className=" appearance-none flex justify-between  rounded w-full py-2 px-3 bg-[#F5F8FA] text-black mb-5"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-3"
                  type="button"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-primary font-bold font-Poppins uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-3"
                  type="submit"
                  onClick={handleEditSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showDeleteModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0"></div>
            <div className="z-10 border-8 bg-white p-5 rounded">
              <p className="font-bold">
                Are you sure you want to delete this user?
              </p>
              <div className="flex text-center items-center justify-end gap-5 mt-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="font-Poppins"
                >
                  Cancel
                </button>
                <button onClick={handleConfirmDelete} className="text-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FetchData;
