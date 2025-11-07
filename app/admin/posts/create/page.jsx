"use client";
import React, { useState } from "react";
import axios from "axios";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    date: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/posts", formData);

      if (response.status === 200) {
        alert(response.data.message || "Post created successfully");
        setFormData({
          title: "",
          category: "",
          author: "",
          date: "",
          content: "",
        });
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while submitting the form.";
      alert(errorMessage);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Header />
        <div className="p-4">
          <section>
            <div className="container w-full flex flex-col content-center rounded p-10 bg-black">
              <h1 className="text-3xl text-white mb-3">Create Post</h1>
              <form onSubmit={handleSubmit}>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-red-800 rounded-lg text-sm text-black"
                      placeholder="Title Name"
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-red-800 rounded-lg text-sm text-black"
                      placeholder="Category"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 mt-5">
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-red-800 rounded-lg text-sm text-black"
                      placeholder="Author Name"
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-red-800 rounded-lg text-sm text-black"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 mt-5">
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm text-black"
                    rows="3"
                    placeholder="This is a textarea placeholder"
                  ></textarea>
                </div>

                <div className="flex space-x-4 mt-5">
                  <button
                    type="submit"
                    className="bg-white rounded p-2 w-sm text-black"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
